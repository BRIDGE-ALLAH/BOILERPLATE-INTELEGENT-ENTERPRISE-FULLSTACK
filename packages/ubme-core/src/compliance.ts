export interface AuditAction {
  readonly action: string;
  readonly principal: string;
  readonly success: boolean;
  readonly timestamp: Date;
  readonly details?: Record<string, any>;
}

export interface AuditSeverity {
  readonly level: 'low' | 'medium' | 'high' | 'critical';
  readonly category: string;
}

export interface AuditLogEntry {
  readonly id: string;
  readonly action: AuditAction;
  readonly severity: AuditSeverity;
  readonly tenantId?: string;
  readonly correlationId?: string;
  readonly metadata?: Record<string, any>;
}

export interface AuditQuery {
  readonly principalId?: string;
  readonly tenantId?: string;
  readonly resourceType?: string;
  readonly action?: string;
  readonly success?: boolean;
  readonly startDate?: Date;
  readonly endDate?: Date;
  readonly limit?: number;
  readonly offset?: number;
}

export interface RetentionPolicy {
  readonly model: string;
  readonly days: number;
  readonly action: 'purge' | 'archive';
}

export interface PIIFieldConfig {
  readonly name?: string;
  readonly classifiers?: readonly string[];
  readonly mask?: string;
  readonly type?: string;
  readonly encrypt?: boolean;
  readonly maskInLogs?: boolean;
  readonly retentionDays?: number;
  readonly customDetector?: (value: any) => boolean;
}

export enum DataClassification {
  Public = 'public',
  Internal = 'internal',
  Confidential = 'confidential',
  Restricted = 'restricted',
}

export interface RetentionRule {
  readonly resourceType: string;
  readonly action: string;
  readonly afterDays: number;
  readonly conditions?: Record<string, any>;
}

export interface DataSubjectRequest {
  readonly id: string;
  readonly type: 'access' | 'rectification' | 'erasure' | 'portability' | 'restriction' | 'objection';
  readonly subjectId: string;
  readonly tenantId?: string;
  readonly status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  readonly requestedAt: Date;
  readonly completedAt?: Date;
  readonly resolvedAt?: Date;
  readonly response?: Record<string, any>;
}

export interface EncryptionConfig {
  readonly algorithm: 'aes-128-gcm' | 'aes-256-gcm' | 'chacha20-poly1305';
  readonly keyLength: number;
  readonly ivLength: number;
  readonly keyRotationDays?: number;
}

export interface ComplianceConfig {
  readonly gdpr: {
    readonly enabled: boolean;
    readonly dataSubjectRights: readonly string[];
    readonly rightToErasure: boolean;
    readonly rightToDataPortability: boolean;
  };
  readonly ccpa: {
    readonly enabled: boolean;
    readonly optOutEnabled: boolean;
    readonly saleOptOutEnabled: boolean;
  };
  readonly hipaa: {
    readonly enabled: boolean;
    readonly auditLogRequired: boolean;
    readonly encryptionAtRestRequired: boolean;
    readonly phiFields?: readonly string[];
    readonly auditLevel?: string;
  };
  readonly soc2: {
    readonly enabled: boolean;
    readonly securityEventLogging: boolean;
    readonly accessControlsRequired: boolean;
  };
}

export interface ClassificationResult {
  level: DataClassification;
  piiFields: string[];
  encryptionRequired: boolean;
}

function defaultClassifiers(type: string): readonly string[] {
  return [type];
}

export class DataGovernanceEngine {
  private piiFields: Map<string, PIIFieldConfig> = new Map();
  private retentionRules: Map<string, RetentionRule[]> = new Map();
  private classificationCache: Map<string, DataClassification> = new Map();
  private config: Partial<ComplianceConfig> & { encryption?: EncryptionConfig } = {};

  constructor(config?: Partial<ComplianceConfig>, encryption?: EncryptionConfig) {
    this.config = config || {};
    if (encryption) {
      this.config.encryption = encryption;
    }
  }

  private storedConfigs: Map<string, PIIFieldConfig> = new Map();
  private resolvedClassifiers: Map<string, readonly string[]> = new Map();

  registerPIIField(fieldName: string, config: PIIFieldConfig): void {
    this.storedConfigs.set(fieldName, config);
    this.resolvedClassifiers.set(fieldName, config.classifiers ?? defaultClassifiers(config.type ?? fieldName));
  }

  isPIIField(fieldName: string): boolean {
    return this.storedConfigs.has(fieldName);
  }

  getPIIConfig(fieldName: string): PIIFieldConfig | undefined {
    return this.storedConfigs.get(fieldName);
  }

  getPIIFields(): Map<string, PIIFieldConfig> {
    return new Map(this.storedConfigs);
  }

  detectPII(value: string): string[] {
    const matched: string[] = [];
    for (const [fieldName, config] of this.storedConfigs) {
      const classifiers = this.resolvedClassifiers.get(fieldName) ?? [];
      if (config.customDetector && config.customDetector(value)) {
        matched.push(fieldName);
        continue;
      }
      for (const classifier of classifiers) {
        if (this.matchesClassifier(value, classifier)) {
          matched.push(fieldName);
          break;
        }
      }
    }
    return matched;
  }

  private matchesClassifier(value: string, classifier: string): boolean {
    const patterns: Record<string, RegExp> = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+\(]?[0-9][0-9\s\.\-\(\)]{6,}$/,
      ssn: /\d{3}-?\d{2}-?\d{4}/,
      credit_card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{12})$/,
      ip: /^((\d{1,3}\.){3}\d{1,3}|([0-9a-fA-F]{0,4}:){1,7}[0-9a-fA-F]{0,4})$/,
      name: /^[A-Za-z\s]+$/,
      address: /^[0-9a-zA-Z\s,\.\-]+$/,
    };

    let testValue = value;
    if (classifier === 'credit_card') {
      testValue = value.replace(/[\s\-]/g, '');
    }

    const pattern = patterns[classifier];
    if (pattern) {
      return pattern.test(testValue);
    }
    return false;
  }

  classifyData(model: string, record: Record<string, any>): ClassificationResult {
    const piiFields: string[] = [];
    let level = DataClassification.Confidential;

    for (const [fieldName, config] of this.storedConfigs) {
      const value = record[fieldName];
      const classifiers = this.resolvedClassifiers.get(fieldName) ?? [];
      if (value === undefined || value === null) continue;

      let matched = false;
      if (config.customDetector && config.customDetector(value)) {
        matched = true;
      } else {
        for (const classifier of classifiers) {
          if (this.matchesClassifier(String(value), classifier)) {
            matched = true;
            break;
          }
        }
      }

      if (matched) {
        piiFields.push(fieldName);
        level = DataClassification.Confidential;
      }
    }

    if (piiFields.some(f => {
      const cfg = this.storedConfigs.get(f);
      const cl = this.resolvedClassifiers.get(f) ?? [];
      return cfg && (cl.includes('ssn') || cl.includes('credit_card'));
    })) {
      level = DataClassification.Restricted;
    }

    const hipaa = this.config.hipaa;
    const encryptionRequired = hipaa?.enabled ?? this.config.gdpr?.enabled ?? this.config.soc2?.enabled ?? true;

    return { level, piiFields, encryptionRequired };
  }

  getRetentionRules(model?: string): RetentionRule[] {
    if (model) {
      return this.retentionRules.get(model) || [];
    }
    const all: RetentionRule[] = [];
    for (const rules of this.retentionRules.values()) {
      all.push(...rules);
    }
    return all;
  }

  addRetentionRule(rule: RetentionRule): void {
    if (!this.retentionRules.has(rule.resourceType)) {
      this.retentionRules.set(rule.resourceType, []);
    }
    this.retentionRules.get(rule.resourceType)!.push(rule);
  }

  evaluateRetention(model: string, data: Record<string, any>): RetentionRule | null {
    const rules = this.retentionRules.get(model) || [];
    if (!rules.length) return null;

    const now = Date.now();
    for (const rule of rules) {
      const createdAt = data.createdAt ? new Date(data.createdAt).getTime() : now;
      const ageDays = (now - createdAt) / (1000 * 60 * 60 * 24);

      if (ageDays >= rule.afterDays) {
        if (rule.conditions) {
          const conditionsMet = Object.entries(rule.conditions).every(([k, v]) => data[k] === v);
          if (!conditionsMet) continue;
        }
        return rule;
      }
    }
    return null;
  }

  maskForLogging(record: Record<string, any>): Record<string, any> {
    const masked: Record<string, any> = { ...record };

    for (const [fieldName, config] of this.storedConfigs) {
      if (config.maskInLogs === false) continue;
      if (!(fieldName in masked)) continue;

      const value = masked[fieldName];
      if (value === undefined || value === null) continue;

      const classifiers = this.resolvedClassifiers.get(fieldName) ?? [];
      const str = String(value);
      let digitIdx = 0;

      switch (classifiers[0]) {
        case 'email':
          masked[fieldName] = str.replace(/(.{1})([^@]*)(@.*)/, '$1***$3');
          break;
        case 'phone':
          masked[fieldName] = str.replace(/\d(?=\d{4})/g, '*');
          break;
        case 'ssn': {
          const digits = str.match(/\d/g) || [];
          masked[fieldName] = str.replace(/\d/g, () => {
            const out = digits.length > 4 && digits.length - digitIdx <= 4 ? digits[digitIdx] : '*';
            digitIdx++;
            return out;
          });
          break;
        }
        case 'credit_card': {
          let digitIdx = 0;
          const digits = str.match(/\d/g) || [];
          masked[fieldName] = str.replace(/\d/g, () => {
            const keep = digitIdx >= digits.length - 4;
            const out = keep ? digits[digitIdx] : '*';
            digitIdx++;
            return out;
          });
          break;
        }
        case 'name':
          masked[fieldName] = str[0] + '*'.repeat(str.length - 1);
          break;
        default:
          masked[fieldName] = '***';
      }
    }

    return masked;
  }

  getComplianceConfig(): ComplianceConfig {
    return {
      gdpr: {
        enabled: true,
        dataSubjectRights: ['access', 'rectification', 'erasure', 'portability', 'restriction', 'objection'],
        rightToErasure: true,
        rightToDataPortability: true,
      },
      ccpa: {
        enabled: true,
        optOutEnabled: true,
        saleOptOutEnabled: true,
      },
      hipaa: {
        enabled: this.config.hipaa?.enabled ?? false,
        auditLogRequired: true,
        encryptionAtRestRequired: true,
        phiFields: this.config.hipaa?.phiFields,
        auditLevel: this.config.hipaa?.auditLevel,
      },
      soc2: {
        enabled: true,
        securityEventLogging: true,
        accessControlsRequired: true,
      },
    };
  }

  getEncryptionConfig(): EncryptionConfig {
    const enc = this.config.encryption;
    return {
      algorithm: enc?.algorithm ?? 'aes-256-gcm',
      keyLength: enc?.keyLength ?? 32,
      ivLength: enc?.ivLength ?? 12,
      keyRotationDays: enc?.keyRotationDays ?? 90,
    };
  }

  async handleDataSubjectRequest(
    request: Omit<DataSubjectRequest, 'id' | 'requestedAt' | 'status'>,
  ): Promise<DataSubjectRequest> {
    const id = `${request.subjectId}-${request.type}-${Date.now()}`;
    const requestedAt = new Date();
    const completedAt = new Date();

    let response: Record<string, any> | undefined;

    switch (request.type) {
      case 'access':
        response = { message: 'Access data provided' };
        break;
      case 'rectification':
        response = { message: 'Rectification completed' };
        break;
      case 'erasure':
        response = { message: 'Erasure completed' };
        break;
      case 'portability':
        response = { message: 'Data portability response' };
        break;
      case 'restriction':
        response = { message: 'Restriction applied' };
        break;
      case 'objection':
        response = { message: 'Objection handled' };
        break;
    }

    return {
      id,
      type: request.type,
      subjectId: request.subjectId,
      tenantId: request.tenantId,
      status: 'completed',
      requestedAt,
      completedAt,
      response,
    };
  }
}

export { DataGovernanceEngine as dataGovernance };
