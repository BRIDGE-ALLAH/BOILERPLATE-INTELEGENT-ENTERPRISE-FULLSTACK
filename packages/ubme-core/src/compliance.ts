// @repo/ubme-core - Data Governance & Compliance
import { RecordId } from './types.js';

export interface PIIFieldConfig {
  type: 'email' | 'phone' | 'ssn' | 'credit_card' | 'address' | 'name' | 'ip' | 'custom';
  encrypt: boolean;
  maskInLogs: boolean;
  retentionDays?: number;
  customDetector?: (value: any) => boolean;
}

export interface DataClassification {
  level: 'public' | 'internal' | 'confidential' | 'restricted';
  piiFields: string[];
  encryptionRequired: boolean;
}

export interface RetentionRule {
  resourceType: string;
  action: 'archive' | 'delete' | 'anonymize';
  afterDays: number;
  conditions?: Record<string, any>;
}

export interface ComplianceConfig {
  gdpr: {
    enabled: boolean;
    dataSubjectRights: boolean;
    rightToBeForgotten: boolean;
    dataPortability: boolean;
    privacyByDesign: boolean;
  };
  ccpa: {
    enabled: boolean;
    doNotSell: boolean;
    rightToKnow: boolean;
    rightToDelete: boolean;
    rightToOptOut: boolean;
  };
  hipaa: {
    enabled: boolean;
    phiFields: string[];
    auditLevel: 'minimal' | 'standard' | 'comprehensive';
  };
  soc2: {
    enabled: boolean;
    auditTrailRequired: boolean;
    encryptionAtRest: boolean;
    encryptionInTransit: boolean;
  };
}

export interface DataSubjectRequest {
  id: RecordId;
  type: 'access' | 'rectification' | 'erasure' | 'portability' | 'restriction' | 'objection';
  subjectId: string;
  tenantId: RecordId;
  status: 'pending' | 'processing' | 'completed' | 'rejected';
  requestedAt: Date;
  completedAt?: Date;
  metadata?: Record<string, any>;
}

export interface EncryptionConfig {
  algorithm: string;
  keyRotationDays: number;
  fields: string[];
}

export class DataGovernanceEngine {
  private piiFields: Map<string, PIIFieldConfig> = new Map();
  private retentionRules: RetentionRule[] = [];
  private complianceConfig: ComplianceConfig;
  private encryptionConfig: EncryptionConfig;

  constructor(config: Partial<ComplianceConfig> = {}, encryptionConfig: Partial<EncryptionConfig> = {}) {
    this.complianceConfig = {
      gdpr: { enabled: true, dataSubjectRights: true, rightToBeForgotten: true, dataPortability: true, privacyByDesign: true },
      ccpa: { enabled: true, doNotSell: true, rightToKnow: true, rightToDelete: true, rightToOptOut: true },
      hipaa: { enabled: false, phiFields: [], auditLevel: 'standard' },
      soc2: { enabled: true, auditTrailRequired: true, encryptionAtRest: true, encryptionInTransit: true },
      ...config,
    };

    this.encryptionConfig = {
      algorithm: 'aes-256-gcm',
      keyRotationDays: 90,
      fields: [],
      ...encryptionConfig,
    };
  }

  registerPIIField(fieldName: string, config: PIIFieldConfig): void {
    this.piiFields.set(fieldName, config);
  }

  getPIIFields(): Map<string, PIIFieldConfig> {
    return new Map(this.piiFields);
  }

  isPIIField(fieldName: string): boolean {
    return this.piiFields.has(fieldName);
  }

  getPIIConfig(fieldName: string): PIIFieldConfig | undefined {
    return this.piiFields.get(fieldName);
  }

  detectPII(value: any): string[] {
    const detected: string[] = [];

    for (const [fieldName, config] of this.piiFields) {
      if (config.customDetector) {
        if (config.customDetector(value)) {
          detected.push(fieldName);
        }
      } else {
        if (this.matchesPIIType(value, config.type)) {
          detected.push(fieldName);
        }
      }
    }

    return detected;
  }

  private matchesPIIType(value: any, type: PIIFieldConfig['type']): boolean {
    const str = String(value);
    switch (type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
      case 'phone':
        return /^\+?[\d\s\-\(\)]{10,}$/.test(str);
      case 'ssn':
        return /^\d{3}-\d{2}-\d{4}$/.test(str);
      case 'credit_card':
        return /^\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}$/.test(str);
      case 'ip':
        return /^(\d{1,3}\.){3}\d{1,3}$/.test(str) || /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(str);
      case 'name':
        return /^[A-Za-z\s\-']{2,}$/.test(str) && str.length <= 100;
      case 'address':
        return str.length > 10 && /\d/.test(str) && /[A-Za-z]/.test(str);
      default:
        return false;
    }
  }

  addRetentionRule(rule: RetentionRule): void {
    this.retentionRules.push(rule);
  }

  getRetentionRules(resourceType?: string): RetentionRule[] {
    if (resourceType) {
      return this.retentionRules.filter(r => r.resourceType === resourceType);
    }
    return [...this.retentionRules];
  }

  evaluateRetention(resourceType: string, data: Record<string, any>): RetentionRule | null {
    const rules = this.getRetentionRules(resourceType);
    const now = new Date();

    for (const rule of rules) {
      const createdAt = data.createdAt ? new Date(data.createdAt) : null;
      if (!createdAt) continue;

      const ageDays = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24);
      if (ageDays >= rule.afterDays) {
        if (rule.conditions) {
          const matches = Object.entries(rule.conditions).every(([key, value]) => data[key] === value);
          if (matches) return rule;
        } else {
          return rule;
        }
      }
    }

    return null;
  }

  classifyData(resourceType: string, data: Record<string, any>): DataClassification {
    const piiFields = Object.keys(data).filter(key => this.isPIIField(key) || this.detectPII(data[key]).length > 0);

    let level: DataClassification['level'] = 'public';
    if (piiFields.length > 0) level = 'confidential';
    if (this.isHighSensitivityData(data)) level = 'restricted';

    return {
      level,
      piiFields,
      encryptionRequired: this.complianceConfig.gdpr.enabled || this.complianceConfig.soc2.enabled,
    };
  }

  private isHighSensitivityData(data: Record<string, any>): boolean {
    const sensitiveFields = ['ssn', 'creditCard', 'medical_record', 'biometric', 'salary'];
    return sensitiveFields.some(field => data[field] !== undefined);
  }

  async handleDataSubjectRequest(request: DataSubjectRequest): Promise<DataSubjectRequest> {
    request.status = 'processing';

    switch (request.type) {
      case 'access':
        await this.exportSubjectData(request);
        break;
      case 'rectification':
        await this.rectifySubjectData(request);
        break;
      case 'erasure':
        await this.eraseSubjectData(request);
        break;
      case 'portability':
        await this.exportSubjectData(request);
        break;
      case 'restriction':
        await this.restrictSubjectProcessing(request);
        break;
      case 'objection':
        await this.objectToProcessing(request);
        break;
    }

    request.status = 'completed';
    request.completedAt = new Date();
    return request;
  }

  private async exportSubjectData(request: DataSubjectRequest): Promise<void> {
    // Implementation would export all data for the subject
  }

  private async rectifySubjectData(request: DataSubjectRequest): Promise<void> {
    // Implementation would rectify inaccurate data
  }

  private async eraseSubjectData(request: DataSubjectRequest): Promise<void> {
    // Implementation would erase subject data (right to be forgotten)
  }

  private async restrictSubjectProcessing(request: DataSubjectRequest): Promise<void> {
    // Implementation would restrict processing
  }

  private async objectToProcessing(request: DataSubjectRequest): Promise<void> {
    // Implementation would handle objection
  }

  maskForLogging(data: Record<string, any>): Record<string, any> {
    const masked: Record<string, any> = { ...data };

    for (const [fieldName, config] of this.piiFields) {
      if (config.maskInLogs && masked[fieldName]) {
        masked[fieldName] = this.maskValue(masked[fieldName], config.type);
      }
    }

    return masked;
  }

  private maskValue(value: any, type: PIIFieldConfig['type']): string {
    const str = String(value);
    switch (type) {
      case 'email': {
        const [local, domain] = str.split('@');
        return `${local[0]}***@${domain}`;
      }
      case 'phone':
        return str.replace(/\d(?=\d{4})/g, '*');
      case 'ssn':
        return '***-**-' + str.slice(-4);
      case 'credit_card':
        return '**** **** **** ' + str.slice(-4);
      case 'name':
        return str[0] + '*'.repeat(str.length - 1);
      default:
        return '***MASKED***';
    }
  }

  getComplianceConfig(): ComplianceConfig {
    return { ...this.complianceConfig };
  }

  getEncryptionConfig(): EncryptionConfig {
    return { ...this.encryptionConfig };
  }
}

export const dataGovernance = new DataGovernanceEngine();

dataGovernance.registerPIIField('email', { type: 'email', encrypt: true, maskInLogs: true, retentionDays: 2555 });
dataGovernance.registerPIIField('phone', { type: 'phone', encrypt: true, maskInLogs: true, retentionDays: 2555 });
dataGovernance.registerPIIField('ssn', { type: 'ssn', encrypt: true, maskInLogs: true, retentionDays: 2555 });
dataGovernance.registerPIIField('creditCard', { type: 'credit_card', encrypt: true, maskInLogs: true, retentionDays: 2555 });
dataGovernance.registerPIIField('address', { type: 'address', encrypt: true, maskInLogs: true });
dataGovernance.registerPIIField('fullName', { type: 'name', encrypt: false, maskInLogs: true });
dataGovernance.registerPIIField('ipAddress', { type: 'ip', encrypt: false, maskInLogs: true });

dataGovernance.addRetentionRule({
  resourceType: 'users',
  action: 'anonymize',
  afterDays: 2555, // 7 years
});

dataGovernance.addRetentionRule({
  resourceType: 'audit_logs',
  action: 'archive',
  afterDays: 2555, // 7 years
});

dataGovernance.addRetentionRule({
  resourceType: 'sessions',
  action: 'delete',
  afterDays: 30,
});