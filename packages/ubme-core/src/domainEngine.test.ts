import { Engine as DomainEngine } from './domainEngine';
import { Predicate, createPredicate } from './queryAST';

describe('DomainEngine', () => {
  let engine: DomainEngine;

  beforeEach(() => {
    engine = new DomainEngine();
  });

  test('compile returns predicate unchanged', () => {
    const predicate: Predicate = { field: { segments: ['name'] }, operator: 'eq', value: 'test' };
    expect(engine.compile(predicate)).toEqual(predicate);
  });

  test('validate passes for valid predicate with field', () => {
    const predicate: Predicate = { field: { segments: ['name'] }, operator: 'eq', value: 'test' };
    expect(() => engine.validate(predicate)).not.toThrow();
  });

  test('validate passes for AND predicate', () => {
    const predicate: Predicate = { and: [{ field: { segments: ['a'] }, operator: 'eq', value: 1 }] };
    expect(() => engine.validate(predicate)).not.toThrow();
  });

  test('validate passes for OR predicate', () => {
    const predicate: Predicate = { or: [{ field: { segments: ['a'] }, operator: 'eq', value: 1 }] };
    expect(() => engine.validate(predicate)).not.toThrow();
  });

  test('validate passes for NOT predicate', () => {
    const predicate: Predicate = { not: { field: { segments: ['a'] }, operator: 'eq', value: 1 } };
    expect(() => engine.validate(predicate)).not.toThrow();
  });

  test('validate throws for empty predicate', () => {
    const predicate: Predicate = {};
    expect(() => engine.validate(predicate)).toThrow('Invalid predicate');
  });

  test('translate returns predicate unchanged', () => {
    const predicate: Predicate = { field: { segments: ['name'] }, operator: 'eq', value: 'test' };
    expect(engine.translate(predicate)).toEqual(predicate);
  });
});