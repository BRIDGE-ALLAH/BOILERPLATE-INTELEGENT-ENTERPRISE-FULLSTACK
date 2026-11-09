import { PersistenceContext, Principal } from './types';

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

export { PersistenceContext };