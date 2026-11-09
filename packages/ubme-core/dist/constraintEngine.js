"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintEngineImpl = void 0;
class ConstraintEngineImpl {
    constructor() {
        this.rules = new Map();
    }
    addRule(rule) {
        this.rules.set(rule.name, rule);
    }
    removeRule(name) {
        return this.rules.delete(name);
    }
    validate(field, value) {
        const errors = [];
        for (const rule of this.rules.values()) {
            if (!rule.predicate(value)) {
                errors.push(rule.message);
            }
        }
        return { valid: errors.length === 0, errors };
    }
    getRules() {
        return Array.from(this.rules.values());
    }
}
exports.ConstraintEngineImpl = ConstraintEngineImpl;
