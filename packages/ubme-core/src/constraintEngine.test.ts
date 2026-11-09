import { ConstraintEngineImpl } from './constraintEngine';

describe('ConstraintEngine', () => {
  let engine: ConstraintEngineImpl;

  beforeEach(() => {
    engine = new ConstraintEngineImpl();
  });

  test('adds and removes rules', () => {
    engine.addRule({
      name: 'positive',
      predicate: (value: any) => typeof value === 'number' && value > 0,
      message: 'Value must be positive',
    });
    expect(engine.getRules()).toHaveLength(1);
    expect(engine.removeRule('positive')).toBe(true);
    expect(engine.getRules()).toHaveLength(0);
  });

  test('validate passes when all predicates pass', () => {
    engine.addRule({
      name: 'positive',
      predicate: (value: any) => typeof value === 'number' && value > 0,
      message: 'Value must be positive',
    });
    const result = engine.validate('field', 10);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('validate fails when predicate fails', () => {
    engine.addRule({
      name: 'positive',
      predicate: (value: any) => typeof value === 'number' && value > 0,
      message: 'Value must be positive',
    });
    const result = engine.validate('field', -5);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Value must be positive');
  });

  test('validate returns true with no rules', () => {
    const result = engine.validate('field', anything);
    expect(result.valid).toBe(true);
  });
});

const anything: unknown = {};