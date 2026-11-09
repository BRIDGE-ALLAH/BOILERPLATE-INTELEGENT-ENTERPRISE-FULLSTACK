import { RecordId } from './types';

export interface ComputeField {
  readonly name: string;
  readonly depends: readonly string[];
  readonly store: boolean;
  compute: (record: any) => any;
}

export interface ComputeGraph {
  readonly fields: Map<string, ComputeField>;
  readonly dependencies: Map<string, Set<string>>;
}

export interface ComputeEngine {
  addField(field: ComputeField): void;
  compute(record: any, field: ComputeField): Promise<any>;
  batchCompute(
    records: any[],
    field: ComputeField,
  ): Promise<Map<string, any>>;
}

export class Engine implements ComputeEngine {
  private fields: Map<string, ComputeField> = new Map();
  private dependencies: Map<string, Set<string>> = new Map();

  addField(field: ComputeField): void {
    this.fields.set(field.name, field);
    this.dependencies.set(field.name, new Set(field.depends));
  }

  compute(record: any, field: ComputeField): Promise<any> {
    return Promise.resolve(field.compute(record));
  }

  batchCompute(
    records: any[],
    field: ComputeField,
  ): Promise<Map<string, any>> {
    const results = new Map<string, any>();
    for (const record of records) {
      const id = record.id as RecordId;
      results.set(id as unknown as string, field.compute(record));
    }
    return Promise.resolve(results);
  }

  getGraph(): ComputeGraph {
    return { fields: this.fields, dependencies: this.dependencies };
  }
}