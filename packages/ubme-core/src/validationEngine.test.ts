import { ValidationEngineImpl } from './validationEngine';
import { ConstraintEngineImpl } from './constraintEngine';
import { RelationEngineImpl } from './relationEngine';

describe('ValidationEngine', () => {
  let engine: ValidationEngineImpl;
  let constraints: ConstraintEngineImpl;
  let relations: RelationEngineImpl;

  beforeEach(() => {
    constraints = new ConstraintEngineImpl();
    relations = new RelationEngineImpl();
    engine = new ValidationEngineImpl(constraints, relations);
  });

  test('validateField returns valid for field present', async () => {
    const result = await engine.validateField('user', 'name', 'Alice');
    expect(result.valid).toBe(true);
  });

  test('validateRecord returns valid when no constraints fail', async () => {
    const result = await engine.validateRecord('user', { name: 'Alice' });
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});