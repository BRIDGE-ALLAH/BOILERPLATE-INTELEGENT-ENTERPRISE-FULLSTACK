"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationEngineImpl = void 0;
class ValidationEngineImpl {
    constructor(constraintEngine, relationEngine) {
        this.fieldCatalog = new Map();
        this.constraintEngine = constraintEngine;
        this.relationEngine = relationEngine;
    }
    setFieldCatalog(catalog) {
        this.fieldCatalog = catalog;
    }
    async validateRecord(model, data, tenantId) {
        const errors = [];
        // Validate field catalog presence
        for (const [fieldName, fieldDescriptor] of this.fieldCatalog) {
            if (fieldDescriptor.required && data[fieldName] === undefined) {
                errors.push({
                    field: fieldName,
                    message: `Required field ${fieldName} is missing`,
                    code: 'MISSING_REQUIRED_FIELD',
                });
            }
            if (data[fieldName] !== undefined) {
                // Run constraint validation
                const constraintResult = this.constraintEngine.validate(fieldName, data[fieldName]);
                if (!constraintResult.valid) {
                    for (const error of constraintResult.errors) {
                        errors.push({
                            field: fieldName,
                            message: error,
                            code: 'CONSTRAINT_VIOLATION',
                        });
                    }
                }
                // Run relation validation
                const relationResult = this.relationEngine.validate(model, data, tenantId);
                if (!relationResult.valid) {
                    for (const error of relationResult.errors) {
                        errors.push({
                            field: fieldName,
                            message: error,
                            code: 'RELATION_VIOLATION',
                        });
                    }
                }
            }
        }
        return { valid: errors.length === 0, errors };
    }
    async validateField(model, field, value) {
        if (this.fieldCatalog.has(field)) {
            const fieldDescriptor = this.fieldCatalog.get(field);
            if (fieldDescriptor.required && value === undefined) {
                return { valid: false, error: { field, message: `Required field ${field} is missing`, code: 'MISSING_REQUIRED_FIELD' } };
            }
        }
        const constraintResult = this.constraintEngine.validate(field, value);
        if (!constraintResult.valid) {
            return { valid: false, error: { field, message: constraintResult.errors[0], code: 'CONSTRAINT_VIOLATION' } };
        }
        return { valid: true };
    }
}
exports.ValidationEngineImpl = ValidationEngineImpl;
