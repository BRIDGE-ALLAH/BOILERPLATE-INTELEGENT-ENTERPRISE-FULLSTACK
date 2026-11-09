export interface RelationRule {
  model: string;
  field: string;
  dependsOn: readonly string[];
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith';
  message: string;
  severity?: 'error' | 'warning';
}

export interface RelationEngine {
  addRule(rule: RelationRule): void;
  removeRule(model: string, field: string): boolean;
  validate(model: string, record: any, tenantId?: string): { valid: boolean; errors: string[] };
  getRules(): RelationRule[];
}

export class RelationEngineImpl implements RelationEngine {
  private rules: Map<string, Map<string, RelationRule>> = new Map();

  addRule(rule: RelationRule): void {
    if (!this.rules.has(rule.model)) {
      this.rules.set(rule.model, new Map());
    }
    this.rules.get(rule.model)!.set(rule.field, rule);
  }

  removeRule(model: string, field: string): boolean {
    const modelRules = this.rules.get(model);
    if (!modelRules) return false;
    return modelRules.delete(field);
  }

  validate(model: string, record: any, tenantId?: string): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const modelRules = this.rules.get(model);
    if (!modelRules) return { valid: true, errors };

    for (const [field, rule] of modelRules) {
      const value = record[field];
      if (value === undefined) continue;

      if (!rule.dependsOn?.length) continue;

      const target = record[rule.dependsOn[0]];
      let passes = false;
      switch (rule.operator) {
        case 'eq':
          passes = value === target;
          break;
        case 'neq':
          passes = value !== target;
          break;
        case 'gt':
          passes = value > target;
          break;
        case 'gte':
          passes = value >= target;
          break;
        case 'lt':
          passes = value < target;
          break;
        case 'lte':
          passes = value <= target;
          break;
        case 'contains':
          passes = String(value).includes(String(target));
          break;
        case 'startsWith':
          passes = String(value).startsWith(String(target));
          break;
        case 'endsWith':
          passes = String(value).endsWith(String(target));
          break;
      }

      if (!passes) {
        errors.push(rule.message);
      }
    }

    return { valid: errors.length === 0, errors };
  }

  getRules(): RelationRule[] {
    const rules: RelationRule[] = [];
    for (const modelRules of this.rules.values()) {
      for (const rule of modelRules.values()) {
        rules.push(rule);
      }
    }
    return rules;
  }
}