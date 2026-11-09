"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computeEngine_1 = require("./computeEngine");
describe('ComputeEngine', () => {
    let engine;
    beforeEach(() => {
        engine = new computeEngine_1.Engine();
    });
    test('addField registers field with dependencies', () => {
        const field = {
            name: 'total',
            depends: ['price', 'quantity'],
            store: false,
            compute: (record) => record.price * record.quantity,
        };
        engine.addField(field);
        const graph = engine.getGraph();
        expect(graph.fields.has('total')).toBe(true);
        expect(graph.dependencies.get('total')).toEqual(new Set(['price', 'quantity']));
    });
    test('compute executes field function', async () => {
        const field = {
            name: 'fullName',
            depends: ['firstName', 'lastName'],
            store: false,
            compute: (record) => `${record.firstName} ${record.lastName}`,
        };
        engine.addField(field);
        const record = { firstName: 'John', lastName: 'Doe' };
        const result = await engine.compute(record, field);
        expect(result).toBe('John Doe');
    });
    test('batchCompute returns Map of results by record id', async () => {
        const field = {
            name: 'doubled',
            depends: ['value'],
            store: false,
            compute: (record) => record.value * 2,
        };
        engine.addField(field);
        const records = [
            { id: '1', value: 5 },
            { id: '2', value: 10 },
            { id: '3', value: 15 },
        ];
        const results = await engine.batchCompute(records, field);
        expect(results.get('1')).toBe(10);
        expect(results.get('2')).toBe(20);
        expect(results.get('3')).toBe(30);
    });
});
