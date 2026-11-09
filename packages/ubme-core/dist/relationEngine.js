"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationEngineImpl = void 0;
class RelationEngineImpl {
    constructor() {
        this.rules = new Map();
    }
    addRule(rule) {
        if (!this.rules.has(rule.model)) {
            this.rules.set(rule.model, new Map());
        }
        this.rules.get(rule.model).set(rule.field, rule);
    }
    removeRule(model, field) {
        const modelRules = this.rules.get(model);
        if (!modelRules)
            return false;
        return modelRules.delete(field);
    }
    validate(model, record, tenantId) {
        const errors = [];
        const modelRules = this.rules.get(model);
        if (!modelRules)
            return { valid: true, errors };
        for (const [field, rule] of modelRules) {
            const value = record[field];
            if (value === undefined)
                continue;
            if (!rule.dependsOn?.length)
                continue;
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
    getRules() {
        const rules = [];
        for (const modelRules of this.rules.values()) {
            for (const rule of modelRules.values()) {
                rules.push(rule);
            }
        }
        return rules;
    }
}
exports.RelationEngineImpl = RelationEngineImpl;
