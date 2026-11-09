"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolicyEngine = void 0;
class PolicyEngine {
    constructor() {
        this.policies = [];
        this.recordRules = [];
    }
    addPolicy(policy) {
        this.policies.push(policy);
    }
    addRecordRule(rule) {
        this.recordRules.push(rule);
    }
    async checkModelPermission(principal, model, action) {
        const applicable = this.policies.filter((p) => p.model === model &&
            p.action === action &&
            principal.roles.includes(p.principal));
        return applicable.some((p) => p.grant);
    }
    async checkRecordPermission(principal, model, recordId, action) {
        const applicable = this.recordRules.filter((r) => r.model === model && r.grant);
        return applicable.length > 0;
    }
    async checkFieldPermission(principal, model, field, action) {
        return true;
    }
}
exports.PolicyEngine = PolicyEngine;
