export interface DataLoader<T, Key = string, Value = T> {
  load(key: Key): Promise<Value | null>;
  prime(key: Key, value: Value): void;
  clear(): void;
}

export class DataLoaderImpl<T, Key = string, Value = T> implements DataLoader<T, Key, Value> {
  private cache: Map<Key, Value> = new Map();
  private loading: Map<Key, Promise<Value>> = new Map();

  load(key: Key): Promise<Value | null> {
    const cached = this.cache.get(key);
    if (cached !== undefined) {
      return Promise.resolve(cached);
    }

    if (this.loading.has(key)) {
      return this.loading.get(key)!;
    }

    const promise = this.fetch(key).then((value: Value) => {
      this.cache.set(key, value);
      this.loading.delete(key);
      return value;
    }).catch(() => {
      this.loading.delete(key);
      return null as any;
    });

    this.loading.set(key, promise);
    return promise;
  }

  prime(key: Key, value: Value): void {
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
    this.loading.clear();
  }

  protected fetch(key: Key): Promise<Value> {
    throw new Error('Must implement fetch');
  }
}