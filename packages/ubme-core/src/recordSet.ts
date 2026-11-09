import { ModelRef, RecordId } from './types';

export class RecordSet<T> {
  readonly model: ModelRef<T>;
  readonly ids: readonly RecordId[];

  constructor(model: ModelRef<T>, ids: readonly RecordId[]) {
    this.model = model;
    this.ids = ids;
  }

  async read<K extends keyof T>(fields: readonly K[]): Promise<Array<Pick<T, K>>> {
    throw new Error('read not implemented');
  }

  async write(values: Partial<T>): Promise<void> {
    throw new Error('write not implemented');
  }

  async unlink(): Promise<void> {
    throw new Error('unlink not implemented');
  }

  async count(): Promise<number> {
    throw new Error('count not implemented');
  }

  async exists(): Promise<boolean> {
    throw new Error('exists not implemented');
  }
}