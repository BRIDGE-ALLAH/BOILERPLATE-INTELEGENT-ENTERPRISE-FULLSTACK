import {
  parseFieldPath,
  createPredicate,
  and,
  or,
  not,
  exists,
  Predicate,
  QueryOptions,
  Operator,
  FieldPath,
  DomainQuery,
} from './queryAST';

describe('queryAST', () => {
  test('parseFieldPath splits on dots', () => {
    expect(parseFieldPath('user.name')).toEqual({ segments: ['user', 'name'] });
    expect(parseFieldPath('id')).toEqual({ segments: ['id'] });
  });

  test('createPredicate builds field predicate', () => {
    const p = createPredicate('age', 'gte', 18);
    expect(p.field).toEqual({ segments: ['age'] });
    expect(p.operator).toBe('gte');
    expect(p.value).toBe(18);
  });

  test('and combines predicates', () => {
    const p = and(
      createPredicate('age', 'gte', 18),
      createPredicate('active', 'eq', true)
    );
    expect(p.and).toHaveLength(2);
  });

  test('or combines predicates', () => {
    const p = or(
      createPredicate('status', 'eq', 'active'),
      createPredicate('status', 'eq', 'pending')
    );
    expect(p.or).toHaveLength(2);
  });

  test('not negates predicate', () => {
    const p = not(createPredicate('deleted', 'eq', true));
    expect(p.not).toBeDefined();
  });

  test('exists creates relation predicate', () => {
    const p = exists('orders', createPredicate('status', 'eq', 'confirmed'));
    expect(p.exists).toBeDefined();
    expect(p.exists?.relation).toEqual({ segments: ['orders'] });
    expect(p.exists?.where.operator).toBe('eq');
  });

  test('Operator type includes all operators', () => {
    const ops: Operator[] = [
      'eq', 'neq', 'gt', 'gte', 'lt', 'lte',
      'in', 'nin', 'contains', 'startsWith', 'endsWith',
      'isNull', 'isNotNull', 'between'
    ];
    expect(ops.length).toBe(14);
  });

  test('FieldPath has segments', () => {
    const fp: FieldPath = { segments: ['user', 'address', 'city'] };
    expect(fp.segments).toHaveLength(3);
  });

  test('QueryOptions supports all options', () => {
    const opts: QueryOptions = {
      limit: 10,
      offset: 20,
      orderBy: [{ field: { segments: ['createdAt'] }, direction: 'desc' }],
      projection: ['id', 'name'],
      populate: ['orders', 'profile'],
    };
    expect(opts.limit).toBe(10);
    expect(opts.populate).toHaveLength(2);
  });

  test('DomainQuery combines predicate and options', () => {
    const dq: DomainQuery = {
      predicate: createPredicate('active', 'eq', true),
      options: { limit: 50, populate: ['orders'] },
    };
    expect(dq.predicate).toBeDefined();
    expect(dq.options?.limit).toBe(50);
  });
});