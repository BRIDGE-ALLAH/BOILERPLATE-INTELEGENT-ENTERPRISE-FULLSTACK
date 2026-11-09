"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataLoaderImpl = void 0;
class DataLoaderImpl {
    constructor() {
        this.cache = new Map();
        this.loading = new Map();
    }
    load(key) {
        const cached = this.cache.get(key);
        if (cached !== undefined) {
            return Promise.resolve(cached);
        }
        if (this.loading.has(key)) {
            return this.loading.get(key);
        }
        const promise = this.fetch(key).then((value) => {
            this.cache.set(key, value);
            this.loading.delete(key);
            return value;
        }).catch(() => {
            this.loading.delete(key);
            return null;
        });
        this.loading.set(key, promise);
        return promise;
    }
    prime(key, value) {
        this.cache.set(key, value);
    }
    clear() {
        this.cache.clear();
        this.loading.clear();
    }
    fetch(key) {
        throw new Error('Must implement fetch');
    }
}
exports.DataLoaderImpl = DataLoaderImpl;
