"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelRegistryImpl = void 0;
class ModelRegistryImpl {
    constructor() {
        this.state = 'BUILDING';
        this.models = new Map();
        this.addons = new Map();
    }
    register(model) {
        if (this.state === 'FROZEN') {
            throw new Error('Cannot register models after registry is frozen');
        }
        this.models.set(model.name, model);
    }
    get(name) {
        return this.models.get(name);
    }
    getAll() {
        return this.models;
    }
    freeze() {
        this.state = 'FROZEN';
    }
    getState() {
        return this.state;
    }
}
exports.ModelRegistryImpl = ModelRegistryImpl;
