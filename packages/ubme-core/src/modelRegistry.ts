export interface ModelEntry {
  readonly name: string;
  readonly version: string;
  readonly metadata: any;
  readonly isExtension: boolean;
}

export interface FieldDescriptor {
  readonly name: string;
  readonly type: 'string' | 'number' | 'boolean' | 'datetime' | 'json';
  readonly required?: boolean;
  readonly nullable?: boolean;
  readonly default?: any;
  readonly enum?: readonly any[];
  readonly metadata?: Record<string, any>;
}

export interface ModelRegistry {
  state: 'BUILDING' | 'FROZEN';
  models: Map<string, ModelEntry>;
  addons: Map<string, any>;

  register(model: ModelEntry): void;
  get(name: string): ModelEntry | undefined;
  getAll(): Map<string, ModelEntry>;
  freeze(): void;
  getState(): 'BUILDING' | 'FROZEN';
}

export interface ConstraintEngine {
  addRule(rule: { name: string; predicate: (value: any) => boolean; message: string }): void;
  removeRule(name: string): boolean;
  validate(field: string, value: any): { valid: boolean; errors: string[] };
  getRules(): { name: string; predicate: (value: any) => boolean; message: string }[];
}

export interface RelationEngine {
  addRule(rule: { model: string; field: string; operator: string; message: string }): void;
  removeRule(model: string, field: string): boolean;
  validate(model: string, record: any, tenantId?: string): { valid: boolean; errors: string[] };
  getRules(): { model: string; field: string; operator: string; message: string }[];
}

export interface ValidationEngine {
  validateRecord(model: string, data: Record<string, any>, tenantId?: string): Promise<{
    valid: boolean;
    errors: { field: string; message: string; code: string }[];
  }>;
  validateField(model: string, field: string, value: any): Promise<{
    valid: boolean;
    error?: { field: string; message: string; code: string };
  }>;
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export class ModelRegistryImpl implements ModelRegistry {
  public state: 'BUILDING' | 'FROZEN' = 'BUILDING';
  public models: Map<string, ModelEntry> = new Map();
  public addons: Map<string, any> = new Map();

  register(model: ModelEntry): void {
    if (this.state === 'FROZEN') {
      throw new Error('Cannot register models after registry is frozen');
    }
    this.models.set(model.name, model);
  }

  get(name: string): ModelEntry | undefined {
    return this.models.get(name);
  }

  getAll(): Map<string, ModelEntry> {
    return this.models;
  }

  freeze(): void {
    this.state = 'FROZEN';
  }

  getState(): 'BUILDING' | 'FROZEN' {
    return this.state;
  }
}