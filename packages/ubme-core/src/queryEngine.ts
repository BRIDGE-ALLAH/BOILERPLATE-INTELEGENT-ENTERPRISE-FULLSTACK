import {
  Predicate,
  QueryOptions,
  Operator,
  FieldPath,
  DomainQuery,
  createPredicate,
  and,
  or,
  not,
  exists,
} from './queryAST';

export type MikroORMFilter = Record<string, any>;

export interface QueryEngine {
  find<T>(model: string, filter?: Predicate, options?: QueryOptions): Promise<T[]>;
  findById<T>(model: string, id: string | number): Promise<T | null>;
  count<T>(model: string, filter?: Predicate): Promise<number>;
  aggregate<T>(model: string, pipeline: any[]): Promise<T[]>;
  compilePredicate(predicate: Predicate): MikroORMFilter;
}

export class QueryEngineImpl implements QueryEngine {
  private entityManager: any;

  constructor(entityManager: any) {
    this.entityManager = entityManager;
  }

  async find<T>(model: string, filter?: Predicate, options?: QueryOptions): Promise<T[]> {
    if (!this.entityManager) {
      return [];
    }

    const mikroFilter = filter ? this.compilePredicate(filter) : {};
    const options_ = options || {};

    const findOptions: any = { where: mikroFilter };

    if (options_.limit) findOptions.limit = options_.limit;
    if (options_.offset) findOptions.offset = options_.offset;
    if (options_.orderBy) {
      findOptions.orderBy = options_.orderBy.reduce((acc: any, o: any) => {
        acc[o.field.segments.join('.')] = o.direction;
        return acc;
      }, {});
    }
    if (options_.populate) {
      findOptions.populate = options_.populate;
    }

    return this.entityManager.find(model, findOptions);
  }

  async findById<T>(model: string, id: string | number): Promise<T | null> {
    if (!this.entityManager) return null;
    return this.entityManager.findOne(model, { id });
  }

  async count<T>(model: string, filter?: Predicate): Promise<number> {
    if (!this.entityManager) return 0;
    const mikroFilter = filter ? this.compilePredicate(filter) : {};
    return this.entityManager.count(model, mikroFilter);
  }

  async aggregate<T>(model: string, pipeline: any[]): Promise<T[]> {
    // Not yet implemented
    return [];
  }

  compilePredicate(predicate: Predicate): MikroORMFilter {
    if (predicate.field && predicate.operator) {
      return this.compileFieldPredicate(predicate.field, predicate.operator, predicate.value);
    }
    if (predicate.and) {
      const conditions = predicate.and.map((p) => this.compilePredicate(p));
      return { $and: conditions };
    }
    if (predicate.or) {
      const conditions = predicate.or.map((p) => this.compilePredicate(p));
      return { $or: conditions };
    }
    if (predicate.not) {
      return { $not: this.compilePredicate(predicate.not) };
    }
    if (predicate.exists) {
      return this.compileExistsPredicate(predicate.exists);
    }
    return {};
  }

  private compileFieldPredicate(field: FieldPath, operator: Operator, value: any): MikroORMFilter {
    const fieldPath = field.segments.join('.');
    const operators: Record<Operator, string> = {
      eq: '$eq',
      neq: '$ne',
      gt: '$gt',
      gte: '$gte',
      lt: '$lt',
      lte: '$lte',
      in: '$in',
      nin: '$nin',
      contains: '$like',
      startsWith: '$like',
      endsWith: '$like',
      isNull: '$eq',
      isNotNull: '$ne',
      between: '$between',
    };

    const mikroOperator = operators[operator] || '$eq';
    let processedValue = value;

    switch (operator) {
      case 'contains':
        processedValue = `%${value}%`;
        break;
      case 'startsWith':
        processedValue = `${value}%`;
        break;
      case 'endsWith':
        processedValue = `%${value}`;
        break;
      case 'isNull':
        processedValue = null;
        break;
      case 'isNotNull':
        processedValue = null;
        break;
    }

    return { [fieldPath]: { [mikroOperator]: processedValue } };
  }

  private compileExistsPredicate(exists: { relation: FieldPath; where: Predicate }): MikroORMFilter {
    const relationPath = exists.relation.segments.join('.');
    const whereFilter = this.compilePredicate(exists.where);
    return { [relationPath]: whereFilter };
  }
}

export {
  Predicate,
  QueryOptions,
  Operator,
  FieldPath,
  DomainQuery,
  createPredicate,
  and,
  or,
  not,
  exists,
};