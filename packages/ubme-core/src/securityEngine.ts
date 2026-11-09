import { Principal, RecordId, Predicate } from './types';

export interface Policy {
  readonly model: string;
  readonly action: string;
  readonly principal: string;
  readonly grant: boolean;
  readonly conditions?: Record<string, any>;
}

export interface SecurityEngine {
  checkModelPermission(
    principal: Principal,
    model: string,
    action: string,
  ): Promise<boolean>;

  checkRecordPermission(
    principal: Principal,
    model: string,
    recordId: RecordId,
    action: string,
  ): Promise<boolean>;

  checkFieldPermission(
    principal: Principal,
    model: string,
    field: string,
    action: string,
  ): Promise<boolean>;
}

export interface RecordRule {
  readonly model: string;
  readonly condition: Predicate;
  readonly grant: boolean;
}

export class PolicyEngine implements SecurityEngine {
  private policies: Policy[] = [];
  private recordRules: RecordRule[] = [];

  addPolicy(policy: Policy): void {
    this.policies.push(policy);
  }

  addRecordRule(rule: RecordRule): void {
    this.recordRules.push(rule);
  }

  async checkModelPermission(
    principal: Principal,
    model: string,
    action: string,
  ): Promise<boolean> {
    const applicable = this.policies.filter(
      (p) =>
        p.model === model &&
        p.action === action &&
        principal.roles.includes(p.principal),
    );
    return applicable.some((p) => p.grant);
  }

  async checkRecordPermission(
    principal: Principal,
    model: string,
    recordId: RecordId,
    action: string,
  ): Promise<boolean> {
    const applicable = this.recordRules.filter(
      (r) => r.model === model && r.grant,
    );
    return applicable.length > 0;
  }

  async checkFieldPermission(
    principal: Principal,
    model: string,
    field: string,
    action: string,
  ): Promise<boolean> {
    return true;
  }
}