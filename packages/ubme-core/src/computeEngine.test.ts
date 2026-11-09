import { Engine as ComputeEngine, ComputeField } from './computeEngine';
import { RecordId } from './types';

describe('ComputeEngine', () => {
  let engine: ComputeEngine;

  beforeEach(() => {
    engine = new ComputeEngine();
  });

  test('addField registers field with dependencies', () => {
    const field: ComputeField = {
      name: 'total',
      depends: ['price', 'quantity'],
      store: false,
      compute: (record: any) => record.price * record.quantity,
    };
    engine.addField(field);
    const graph = engine.getGraph();
    expect(graph.fields.has('total')).toBe(true);
    expect(graph.dependencies.get('total')).toEqual(new Set(['price', 'quantity']));
  });

  test('compute executes field function', async () => {
    const field: ComputeField = {
      name: 'fullName',
      depends: ['firstName', 'lastName'],
      store: false,
      compute: (record: any) => `${record.firstName} ${record.lastName}`,
    };
    engine.addField(field);
    const record = { firstName: 'John', lastName: 'Doe' };
    const result = await engine.compute(record, field);
    expect(result).toBe('John Doe');
  });

  test('batchCompute returns Map of results by record id', async () => {
    const field: ComputeField = {
      name: 'doubled',
      depends: ['value'],
      store: false,
      compute: (record: any) => record.value * 2,
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