import { ExecutionContext, PersistenceContext, Principal } from './types';
import { RecordSet } from './recordSet';

export interface BusinessAction<T = any> {
  readonly name: string;
  readonly parameters: Record<string, any>;
  readonly returns: Record<string, any>;
  execute(context: ExecutionContext, input: T): Promise<any>;
}

export interface ActionResult<T = any> {
  readonly success: boolean;
  readonly data?: T;
  readonly error?: string;
}

export interface ActionContext {
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

export class ActionEngine {
  private actions: Map<string, BusinessAction> = new Map();

  register(action: BusinessAction): void {
    if (this.actions.has(action.name)) {
      throw new Error(`Action ${action.name} is already registered`);
    }
    this.actions.set(action.name, action);
  }

  get(name: string): BusinessAction | undefined {
    return this.actions.get(name);
  }

  async execute<T = any>(
    name: string,
    context: ExecutionContext,
    input: T,
  ): Promise<ActionResult<T>> {
    const action = this.actions.get(name);
    if (!action) {
      return { success: false, error: `Action ${name} not found` };
    }
    try {
      const result = await action.execute(context, input);
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async executeInTransaction<T = any>(
    name: string,
    context: ExecutionContext,
    input: T,
  ): Promise<ActionResult<T>> {
    const action = this.actions.get(name);
    if (!action) {
      return { success: false, error: `Action ${name} not found` };
    }
    try {
      const result = await context.persistence.transaction(async () => {
        return await action.execute(context, input);
      });
      return { success: true, data: result };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}