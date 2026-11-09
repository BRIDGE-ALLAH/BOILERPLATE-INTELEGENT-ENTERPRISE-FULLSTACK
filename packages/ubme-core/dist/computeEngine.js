"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor() {
        this.fields = new Map();
        this.dependencies = new Map();
    }
    addField(field) {
        this.fields.set(field.name, field);
        this.dependencies.set(field.name, new Set(field.depends));
    }
    compute(record, field) {
        return Promise.resolve(field.compute(record));
    }
    batchCompute(records, field) {
        const results = new Map();
        for (const record of records) {
            const id = record.id;
            results.set(id, field.compute(record));
        }
        return Promise.resolve(results);
    }
    getGraph() {
        return { fields: this.fields, dependencies: this.dependencies };
    }
}
exports.Engine = Engine;
