"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domainEngine_1 = require("./domainEngine");
describe('DomainEngine', () => {
    let engine;
    beforeEach(() => {
        engine = new domainEngine_1.Engine();
    });
    test('compile returns predicate unchanged', () => {
        const predicate = { field: { segments: ['name'] }, operator: '=', value: 'test' };
        expect(engine.compile(predicate)).toEqual(predicate);
    });
    test('validate passes for valid predicate with field', () => {
        const predicate = { field: { segments: ['name'] }, operator: '=', value: 'test' };
        expect(() => engine.validate(predicate)).not.toThrow();
    });
    test('validate passes for AND predicate', () => {
        const predicate = { and: [{ field: { segments: ['a'] }, operator: '=', value: 1 }] };
        expect(() => engine.validate(predicate)).not.toThrow();
    });
    test('validate passes for OR predicate', () => {
        const predicate = { or: [{ field: { segments: ['a'] }, operator: '=', value: 1 }] };
        expect(() => engine.validate(predicate)).not.toThrow();
    });
    test('validate passes for NOT predicate', () => {
        const predicate = { not: { field: { segments: ['a'] }, operator: '=', value: 1 } };
        expect(() => engine.validate(predicate)).not.toThrow();
    });
    test('validate throws for empty predicate', () => {
        const predicate = {};
        expect(() => engine.validate(predicate)).toThrow('Invalid predicate');
    });
    test('translate returns predicate unchanged', () => {
        const predicate = { field: { segments: ['name'] }, operator: '=', value: 'test' };
        expect(engine.translate(predicate)).toEqual(predicate);
    });
});
