export interface FieldDescriptor {
  readonly name: string;
  readonly type: 'string' | 'number' | 'boolean' | 'datetime' | 'json';
  readonly required?: boolean;
  readonly nullable?: boolean;
  readonly default?: any;
  readonly enum?: readonly any[];
  readonly metadata?: Record<string, any>;
}

export interface FieldCatalog {
  fields: Map<string, FieldDescriptor>;
  register(field: FieldDescriptor): void;
  get(name: string): FieldDescriptor | undefined;
  getAll(): Map<string, FieldDescriptor>;
  unregister(name: string): void;
  validateFieldName(name: string): boolean;
}

export class FieldCatalogImpl {
  fields: Map<string, FieldDescriptor> = new Map();

  register(field: FieldDescriptor): void {
    this.fields.set(field.name, field);
  }

  get(name: string): FieldDescriptor | undefined {
    return this.fields.get(name);
  }

  getAll(): Map<string, FieldDescriptor> {
    return this.fields;
  }

  unregister(name: string): void {
    this.fields.delete(name);
  }

  validateFieldName(name: string): boolean {
    return this.fields.has(name);
  }
}