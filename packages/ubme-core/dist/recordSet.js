"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordSet = void 0;
class RecordSet {
    constructor(model, ids) {
        this.model = model;
        this.ids = ids;
    }
    async read(fields) {
        throw new Error('read not implemented');
    }
    async write(values) {
        throw new Error('write not implemented');
    }
    async unlink() {
        throw new Error('unlink not implemented');
    }
    async count() {
        throw new Error('count not implemented');
    }
    async exists() {
        throw new Error('exists not implemented');
    }
}
exports.RecordSet = RecordSet;
