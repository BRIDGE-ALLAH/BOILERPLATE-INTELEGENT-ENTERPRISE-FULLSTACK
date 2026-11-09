export type Operator =
  | 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte'
  | 'in' | 'nin' | 'contains' | 'startsWith' | 'endsWith'
  | 'isNull' | 'isNotNull' | 'between';

export interface FieldPath {
  readonly segments: string[];
}

export function parseFieldPath(path: string): FieldPath {
  return { segments: path.split('.') };
}

export interface Predicate {
  readonly field?: FieldPath;
  readonly operator?: Operator;
  readonly value?: any;
  readonly and?: Predicate[];
  readonly or?: Predicate[];
  readonly not?: Predicate;
  readonly exists?: {
    relation: FieldPath;
    where: Predicate;
  };
}

export interface QueryOptions {
  readonly limit?: number;
  readonly offset?: number;
  readonly orderBy?: readonly { field: FieldPath; direction: 'asc' | 'desc' }[];
  readonly projection?: readonly string[];
  readonly populate?: readonly string[];
}

export interface DomainQuery {
  readonly predicate?: Predicate;
  readonly options?: QueryOptions;
}

export function createPredicate(field: string, operator: Operator, value: any): Predicate {
  return { field: parseFieldPath(field), operator, value };
}

export function and(...predicates: Predicate[]): Predicate {
  return { and: predicates };
}

export function or(...predicates: Predicate[]): Predicate {
  return { or: predicates };
}

export function not(predicate: Predicate): Predicate {
  return { not: predicate };
}

export function exists(relation: string, where: Predicate): Predicate {
  return { exists: { relation: parseFieldPath(relation), where } };
}