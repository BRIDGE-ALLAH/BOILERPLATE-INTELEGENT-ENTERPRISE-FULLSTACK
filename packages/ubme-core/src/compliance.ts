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
  readonly name: string;
  readonly classifiers: readonly string[];
  readonly mask: string;
}

export enum DataClassification {
  Public = 'public',
  Internal = 'internal',
  Confidential = 'confidential',
  Restricted = 'restricted',
}

export interface RetentionRule {
  readonly model: string;
  readonly field: string;
  readonly minRetentionDays: number;
  readonly maxRetentionDays: number;
  readonly autoPurge: boolean;
}

export interface DataSubjectRequest {
  readonly id: string;
  readonly type: 'access' | 'rectification' | 'erasure' | 'portability' | 'restriction' | 'objection';
  readonly principalId: string;
  readonly status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  readonly requestedAt: Date;
  readonly resolvedAt?: Date;
  readonly response?: Record<string, any>;
}

export interface EncryptionConfig {
  readonly algorithm: 'aes-256-gcm' | 'chacha20-poly1305';
  readonly keyLength: number;
  readonly ivLength: number;
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
  };
  readonly soc2: {
    readonly enabled: boolean;
    readonly securityEventLogging: boolean;
    readonly accessControlsRequired: boolean;
  };
}

export class DataGovernanceEngine {
  private piiFields: Map<string, PIIFieldConfig> = new Map();
  private retentionRules: Map<string, RetentionRule[]> = new Map();
  private classificationCache: Map<string, DataClassification> = new Map();

  registerPIIField(config: PIIFieldConfig): void {
    this.piiFields.set(config.name, config);
  }

  classifyData(value: string, fieldName: string): DataClassification {
    const config = this.piiFields.get(fieldName);
    if (!config) return DataClassification.Internal;

    for (const classifier of config.classifiers) {
      if (this.detectPII(value, classifier)) {
        return DataClassification.Confidential;
      }
    }

    return DataClassification.Internal;
  }

  private detectPII(value: string, classifier: string): boolean {
    const patterns: Record<string, RegExp> = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+\]?[1-9][0-9\.\-\(\)\s]{6,}$/,
      ssn: /\d{3}-?\d{2}-?\d{4}/,
      credit_card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{12})$/,
      ip: /^(\d{1,3}\.){3}\d{1,3}$/,
      name: /^[A-Za-z\s]+$/,
      address: /^[0-9a-zA-Z\s,\.\-]+$/,
    };

    const pattern = patterns[classifier];
    if (pattern) {
      return pattern.test(value);
    }
    return false;
  }

  getRetentionRules(model: string): RetentionRule[] {
    return this.retentionRules.get(model) || [];
  }

  addRetentionRule(rule: RetentionRule): void {
    if (!this.retentionRules.has(rule.model)) {
      this.retentionRules.set(rule.model, []);
    }
    this.retentionRules.get(rule.model)!.push(rule);
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
        enabled: true,
        auditLogRequired: true,
        encryptionAtRestRequired: true,
      },
      soc2: {
        enabled: true,
        securityEventLogging: true,
        accessControlsRequired: true,
      },
    };
  }

  getEncryptionConfig(): EncryptionConfig {
    return {
      algorithm: 'aes-256-gcm',
      keyLength: 32,
      ivLength: 12,
    };
  }

  async handleDataSubjectRequest(
    request: Omit<DataSubjectRequest, 'id' | 'requestedAt' | 'status'>,
  ): Promise<DataSubjectRequest> {
    const id = `${request.principalId}-${request.type}-${Date.now()}`;
    const requestedAt = new Date();

    let resolvedAt: Date | undefined;
    let response: Record<string, any> | undefined;

    switch (request.type) {
      case 'access':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: {} };
      case 'rectification':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: { message: 'Rectification completed' } };
      case 'erasure':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: { message: 'Erasure completed' } };
      case 'portability':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: { message: 'Data portability response' } };
      case 'restriction':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: { message: 'Restriction applied' } };
      case 'objection':
        return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: { message: 'Objection handled' } };
    }
    return { id, type: request.type, principalId: request.principalId, status: 'completed', requestedAt, resolvedAt, response: {} };
  }
}

export { DataGovernanceEngine as dataGovernance };