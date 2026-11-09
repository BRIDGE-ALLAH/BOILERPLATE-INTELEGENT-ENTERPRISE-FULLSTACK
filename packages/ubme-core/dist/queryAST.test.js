"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('QueryAST / Predicate', () => {
    test('simple field predicate', () => {
        const predicate = {
            field: { segments: ['name'] },
            operator: '=',
            value: 'test',
        };
        expect(predicate.field?.segments).toEqual(['name']);
        expect(predicate.operator).toBe('=');
        expect(predicate.value).toBe('test');
    });
    test('and predicate', () => {
        const predicate = {
            and: [
                { field: { segments: ['name'] }, operator: '=', value: 'test' },
                { field: { segments: ['age'] }, operator: '>', value: 18 },
            ],
        };
        expect(predicate.and?.length).toBe(2);
    });
    test('or predicate', () => {
        const predicate = {
            or: [
                { field: { segments: ['status'] }, operator: '=', value: 'active' },
                { field: { segments: ['status'] }, operator: '=', value: 'pending' },
            ],
        };
        expect(predicate.or?.length).toBe(2);
    });
    test('not predicate', () => {
        const predicate = {
            not: { field: { segments: ['deleted'] }, operator: '=', value: true },
        };
        expect(predicate.not?.field?.segments).toEqual(['deleted']);
    });
    test('exists predicate', () => {
        const predicate = {
            exists: {
                relation: { segments: ['orders'] },
                where: { field: { segments: ['total'] }, operator: '>', value: 100 },
            },
        };
        expect(predicate.exists?.relation.segments).toEqual(['orders']);
    });
});
