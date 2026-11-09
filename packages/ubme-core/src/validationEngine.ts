import { ModelEntry, FieldDescriptor, ConstraintEngine, RelationEngine } from './modelRegistry';

export interface ValidationEngine {
  validateRecord(model: string, data: Record<string, any>, tenantId?: string): Promise<{
    valid: boolean;
    errors: ValidationError[];
  }>;
  validateField(model: string, field: string, value: any): Promise<{
    valid: boolean;
    error?: ValidationError;
  }>;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export class ValidationEngineImpl implements ValidationEngine {
  private fieldCatalog: Map<string, FieldDescriptor> = new Map();
  private constraintEngine: ConstraintEngine;
  private relationEngine: RelationEngine;

  constructor(
    constraintEngine: ConstraintEngine,
    relationEngine: RelationEngine,
  ) {
    this.constraintEngine = constraintEngine;
    this.relationEngine = relationEngine;
  }

  setFieldCatalog(catalog: Map<string, FieldDescriptor>): void {
    this.fieldCatalog = catalog;
  }

  async validateRecord(
    model: string,
    data: Record<string, any>,
    tenantId?: string,
  ): Promise<{ valid: boolean; errors: ValidationError[] }> {
    const errors: ValidationError[] = [];

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

  async validateField(
    model: string,
    field: string,
    value: any,
  ): Promise<{ valid: boolean; error?: ValidationError }> {
    if (this.fieldCatalog.has(field)) {
      const fieldDescriptor = this.fieldCatalog.get(field)!;
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