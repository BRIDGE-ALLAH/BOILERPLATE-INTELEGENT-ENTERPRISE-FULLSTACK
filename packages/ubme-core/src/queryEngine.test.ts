import { QueryEngineImpl } from './queryEngine';
import { Predicate, createPredicate, and, or, not } from './queryAST';

describe('QueryEngineImpl', () => {
  let engine: QueryEngineImpl;

  beforeEach(() => {
    // Mock entityManager
    const mockEntityManager = {
      find: jest.fn().mockResolvedValue([]),
      findOne: jest.fn().mockResolvedValue(null),
      count: jest.fn().mockResolvedValue(0),
    };
    engine = new QueryEngineImpl(mockEntityManager);
  });

  test('compilePredicate handles field predicate', () => {
    const p = createPredicate('age', 'gte', 18);
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ age: { $gte: 18 } });
  });

  test('compilePredicate handles eq operator', () => {
    const p = createPredicate('status', 'eq', 'active');
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ status: { $eq: 'active' } });
  });

  test('compilePredicate handles in operator', () => {
    const p = createPredicate('id', 'in', [1, 2, 3]);
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ id: { $in: [1, 2, 3] } });
  });

  test('compilePredicate handles contains operator', () => {
    const p = createPredicate('name', 'contains', 'john');
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ name: { $like: '%john%' } });
  });

  test('compilePredicate handles startsWith operator', () => {
    const p = createPredicate('name', 'startsWith', 'john');
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ name: { $like: 'john%' } });
  });

  test('compilePredicate handles endsWith operator', () => {
    const p = createPredicate('name', 'endsWith', 'son');
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ name: { $like: '%son' } });
  });

  test('compilePredicate handles isNull operator', () => {
    const p = createPredicate('deletedAt', 'isNull', null);
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ deletedAt: { $eq: null } });
  });

  test('compilePredicate handles isNotNull operator', () => {
    const p = createPredicate('deletedAt', 'isNotNull', null);
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ deletedAt: { $ne: null } });
  });

  test('compilePredicate handles and', () => {
    const p = and(
      createPredicate('age', 'gte', 18),
      createPredicate('active', 'eq', true)
    );
    const result = engine.compilePredicate(p);
    expect(result).toEqual({
      $and: [
        { age: { $gte: 18 } },
        { active: { $eq: true } },
      ],
    });
  });

  test('compilePredicate handles or', () => {
    const p = or(
      createPredicate('status', 'eq', 'active'),
      createPredicate('status', 'eq', 'pending')
    );
    const result = engine.compilePredicate(p);
    expect(result).toEqual({
      $or: [
        { status: { $eq: 'active' } },
        { status: { $eq: 'pending' } },
      ],
    });
  });

  test('compilePredicate handles not', () => {
    const p = not(createPredicate('deleted', 'eq', true));
    const result = engine.compilePredicate(p);
    expect(result).toEqual({
      $not: { deleted: { $eq: true } },
    });
  });

  test('compilePredicate handles exists', () => {
    const p = { exists: { relation: { segments: ['orders'] }, where: createPredicate('status', 'eq', 'confirmed') } };
    const result = engine.compilePredicate(p);
    expect(result).toEqual({
      orders: { status: { $eq: 'confirmed' } },
    });
  });

  test('compilePredicate handles nested path', () => {
    const p = createPredicate('user.profile.name', 'eq', 'John');
    const result = engine.compilePredicate(p);
    expect(result).toEqual({ 'user.profile.name': { $eq: 'John' } });
  });

  test('compilePredicate returns empty for unknown structure', () => {
    const result = engine.compilePredicate({});
    expect(result).toEqual({});
  });
});