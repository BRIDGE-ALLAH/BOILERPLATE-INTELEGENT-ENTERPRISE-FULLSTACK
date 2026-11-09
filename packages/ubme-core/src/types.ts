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

export interface Predicate {
  readonly field?: FieldPath;
  readonly operator?: string;
  readonly value?: any;
  readonly and?: Predicate[];
  readonly or?: Predicate[];
  readonly not?: Predicate;
  readonly exists?: {
    relation: FieldPath;
    where: Predicate;
  };
}

export interface RecordData {
  readonly id: RecordId;
  readonly data: Record<string, any>;
}