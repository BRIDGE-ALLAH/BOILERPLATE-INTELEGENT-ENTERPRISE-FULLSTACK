"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldCatalogImpl = void 0;
class FieldCatalogImpl {
    constructor() {
        this.fields = new Map();
    }
    register(field) {
        this.fields.set(field.name, field);
    }
    get(name) {
        return this.fields.get(name);
    }
    getAll() {
        return this.fields;
    }
    unregister(name) {
        this.fields.delete(name);
    }
    validateFieldName(name) {
        return this.fields.has(name);
    }
}
exports.FieldCatalogImpl = FieldCatalogImpl;
