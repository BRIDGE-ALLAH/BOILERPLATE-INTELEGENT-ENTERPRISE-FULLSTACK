"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modelRegistry_1 = require("./modelRegistry");
describe('ModelRegistry', () => {
    let registry;
    const modelEntry = {
        name: 'test.model',
        version: '1.0.0',
        metadata: { fields: ['id', 'name'] },
        isExtension: false,
    };
    beforeEach(() => {
        registry = new modelRegistry_1.ModelRegistryImpl();
    });
    test('starts in BUILDING state', () => {
        expect(registry.getState()).toBe('BUILDING');
    });
    test('registers a model in BUILDING state', () => {
        registry.register(modelEntry);
        const retrieved = registry.get('test.model');
        expect(retrieved).toEqual(modelEntry);
    });
    test('throws when registering after freeze', () => {
        registry.freeze();
        expect(() => registry.register(modelEntry)).toThrow('Cannot register models after registry is frozen');
    });
    test('get returns undefined for missing model', () => {
        expect(registry.get('missing')).toBeUndefined();
    });
    test('getAll returns all registered models', () => {
        registry.register(modelEntry);
        const all = registry.getAll();
        expect(all.size).toBe(1);
        expect(all.get('test.model')).toEqual(modelEntry);
    });
    test('freeze transitions state to FROZEN', () => {
        registry.freeze();
        expect(registry.getState()).toBe('FROZEN');
    });
});
