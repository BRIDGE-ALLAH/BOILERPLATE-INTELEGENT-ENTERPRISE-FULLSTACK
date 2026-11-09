export interface Principal {
  readonly id: string;
  readonly roles: readonly string[];
}

export interface ExecutionContext {
  readonly principal: Principal;
  readonly tenantId: string | null;
  readonly organizationIds: readonly string[];
  readonly activeOrganizationId: string | null;
  readonly locale: string;
  readonly timeZone: string;
  readonly correlationId: string;
  readonly capabilities: ReadonlySet<string>;
  readonly persistence: PersistenceContext;
}

export interface PersistenceContext {
  readonly entityManager: any;
  readonly transaction: any;
}

export interface FieldMetadata {
  readonly name: string;
  readonly type: string;
  readonly required: boolean;
  readonly nullable: boolean;
  readonly default: any;
}

export interface RecordSet<T> {
  readonly model: ModelRef<T>;
  readonly ids: readonly RecordId[];
  read<K extends keyof T>(fields: readonly K[]): Promise<Array<Pick<T, K>>>;
  write(values: Partial<T>): Promise<void>;
  unlink(): Promise<void>;
  count(): Promise<number>;
  exists(): Promise<boolean>;
}

export interface ModelRef<T> {
  readonly name: string;
  readonly version: string;
}

export type RecordId = string | number;

export interface ModelEntry {
  readonly name: string;
  readonly version: string;
  readonly metadata: any;
  readonly isExtension: boolean;
}

export interface ModelRegistry {
  state: 'BUILDING' | 'FROZEN';
  models: Map<string, ModelEntry>;
  addons: Map<string, any>;

  register(model: ModelEntry): void;
  get(name: string): ModelEntry | undefined;
  getAll(): Map<string, ModelEntry>;
  freeze(): void;
  getState(): 'BUILDING' | 'FROZEN';
}

export interface FieldPath {
  readonly segments: string[];
}

export type Operator =
  | 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte'
  | 'in' | 'nin' | 'contains' | 'startsWith' | 'endsWith'
  | 'isNull' | 'isNotNull' | 'between';

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

export interface RecordData {
  readonly id: RecordId;
  readonly data: Record<string, any>;
}

export interface QueryEngine {
  find<T>(model: string, filter?: Predicate, options?: QueryOptions): Promise<T[]>;
  findById<T>(model: string, id: string | number): Promise<T | null>;
  count<T>(model: string, filter?: Predicate): Promise<number>;
  aggregate<T>(model: string, pipeline: any[]): Promise<T[]>;
  compilePredicate(predicate: Predicate): Record<string, any>;
}