import {
  Predicate,
  QueryOptions,
  Operator,
  FieldPath,
  createPredicate,
  and,
  or,
  not,
  exists,
} from './queryAST';

export interface DomainCompiler {
  compile(predicate: Predicate): any;
  validate(predicate: Predicate): void;
  translate(predicate: Predicate): any;
}

export interface DomainQuery {
  readonly predicate?: Predicate;
  readonly options?: QueryOptions;
}

export class Engine implements DomainCompiler {
  compile(predicate: Predicate): any {
    return predicate;
  }

  validate(predicate: Predicate): void {
    if (!predicate.field && !predicate.and && !predicate.or && !predicate.not && !predicate.exists) {
      throw new Error('Invalid predicate: missing field or logical operator');
    }
  }

  translate(predicate: Predicate): any {
    return predicate;
  }
}

export {
  Predicate,
  QueryOptions,
  Operator,
  FieldPath,
  createPredicate,
  and,
  or,
  not,
  exists,
};