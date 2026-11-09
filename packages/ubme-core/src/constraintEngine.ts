export interface ConstraintRule {
  name: string;
  predicate: (value: any) => boolean;
  message: string;
  severity?: 'error' | 'warning';
}

export interface ConstraintEngine {
  addRule(rule: ConstraintRule): void;
  removeRule(name: string): boolean;
  validate(field: string, value: any): { valid: boolean; errors: string[] };
  getRules(): ConstraintRule[];
}

export class ConstraintEngineImpl implements ConstraintEngine {
  private rules: Map<string, ConstraintRule> = new Map();

  addRule(rule: ConstraintRule): void {
    this.rules.set(rule.name, rule);
  }

  removeRule(name: string): boolean {
    return this.rules.delete(name);
  }

  validate(field: string, value: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    for (const rule of this.rules.values()) {
      if (!rule.predicate(value)) {
        errors.push(rule.message);
      }
    }
    return { valid: errors.length === 0, errors };
  }

  getRules(): ConstraintRule[] {
    return Array.from(this.rules.values());
  }
}