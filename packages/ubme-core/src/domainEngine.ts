import { Predicate } from './types';

export interface DomainCompiler {
  compile(predicate: Predicate): any;
  validate(predicate: Predicate): void;
  translate(predicate: Predicate): any;
}

export interface DomainQuery {
  readonly predicate: Predicate;
  readonly limit?: number;
  readonly offset?: number;
  readonly projection?: readonly string[];
}

export class Engine implements DomainCompiler {
  compile(predicate: Predicate): any {
    return predicate;
  }

  validate(predicate: Predicate): void {
    if (!predicate.field && !predicate.and && !predicate.or && !predicate.not) {
      throw new Error('Invalid predicate: missing field or logical operator');
    }
  }

  translate(predicate: Predicate): any {
    return predicate;
  }
}