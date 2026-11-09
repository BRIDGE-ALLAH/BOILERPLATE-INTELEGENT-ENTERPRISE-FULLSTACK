"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addonEngine_1 = require("./addonEngine");
describe('AddonEngine', () => {
    let engine;
    beforeEach(() => {
        engine = new addonEngine_1.Engine();
    });
    test('registers an addon', () => {
        const addon = {
            name: 'base',
            version: '1.0.0',
            dependencies: [],
            models: [],
            actions: [],
            policies: [],
        };
        engine.register(addon);
        expect(() => engine.register(addon)).not.toThrow();
    });
    test('throws when registering after freeze', () => {
        engine.freeze();
        const addon = {
            name: 'base',
            version: '1.0.0',
            dependencies: [],
            models: [],
            actions: [],
            policies: [],
        };
        expect(() => engine.register(addon)).toThrow('frozen');
    });
    test('resolve returns addons in dependency order', () => {
        const base = {
            name: 'base',
            version: '1.0.0',
            dependencies: [],
            models: [],
            actions: [],
            policies: [],
        };
        const identity = {
            name: 'identity',
            version: '1.0.0',
            dependencies: ['base'],
            models: [],
            actions: [],
            policies: [],
        };
        const organization = {
            name: 'organization',
            version: '1.0.0',
            dependencies: ['base', 'identity'],
            models: [],
            actions: [],
            policies: [],
        };
        engine.register(organization);
        engine.register(base);
        engine.register(identity);
        const resolved = engine.resolve();
        expect(resolved.map((a) => a.name)).toEqual(['base', 'identity', 'organization']);
    });
    test('throws on missing dependency', () => {
        const addon = {
            name: 'broken',
            version: '1.0.0',
            dependencies: ['missing'],
            models: [],
            actions: [],
            policies: [],
        };
        engine.register(addon);
        expect(() => engine.resolve()).toThrow('Addon missing not found');
    });
    test('freeze prevents further registration', () => {
        engine.freeze();
        expect(() => engine.register({
            name: 'late',
            version: '1.0.0',
            dependencies: [],
            models: [],
            actions: [],
            policies: [],
        })).toThrow();
    });
});
