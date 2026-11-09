import { RelationEngineImpl } from './relationEngine';

describe('RelationEngine', () => {
  let engine: RelationEngineImpl;

  beforeEach(() => {
    engine = new RelationEngineImpl();
  });

  test('adds and removes rules', () => {
    engine.addRule({
      model: 'user',
      field: 'age',
      dependsOn: ['minAge'],
      operator: 'gte',
      message: 'Age must be >= 18',
    });
    expect(engine.getRules()).toHaveLength(1);
    expect(engine.removeRule('user', 'age')).toBe(true);
    expect(engine.getRules()).toHaveLength(0);
  });

  test('validate passes when operator passes', () => {
    engine.addRule({
      model: 'user',
      field: 'age',
      dependsOn: ['minAge'],
      operator: 'gte',
      message: 'Age must be >= 18',
    });
    const result = engine.validate('user', { age: 21, minAge: 18 });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('validate fails when operator fails', () => {
    engine.addRule({
      model: 'user',
      field: 'age',
      dependsOn: ['minAge'],
      operator: 'gte',
      message: 'Age must be >= 18',
    });
    const result = engine.validate('user', { age: 16, minAge: 18 });
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Age must be >= 18');
  });

  test('returns valid for unknown model', () => {
    const result = engine.validate('unknown', { age: 21 });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});