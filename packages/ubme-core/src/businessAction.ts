export interface BusinessAction {
  name: string;
  description: string;
  metadata?: Record<string, any>;
}

export interface ActionContext {
  principalId: string;
  tenantId?: string;
  correlationId?: string;
}

export interface ActionResult {
  success: boolean;
  data?: Record<string, any>;
  error?: string;
  metadata?: Record<string, any>;
}

export interface BusinessAction {
  name: string;
  description: string;
  metadata?: Record<string, any>;
  parameters?: Record<string, any>;
  returns?: Record<string, any>;
  execute(context: ActionContext, input?: any): Promise<ActionResult>;
}

export interface ActionEngine {
  execute(actionName: string, context: ActionContext, input?: any): Promise<ActionResult>;
  register(action: BusinessAction): void;
  deregister(actionName: string): void;
  getRegisteredActions(): string[];
  get(actionName: string): BusinessAction | undefined;
  executeInTransaction(actionName: string, context: ActionContext, input?: any): Promise<ActionResult>;
}

export class ActionEngine implements ActionEngine {
  private actions: Map<string, BusinessAction> = new Map();

  execute(actionName: string, context: ActionContext, input?: any): Promise<ActionResult> {
    const action = this.actions.get(actionName);
    if (!action) {
      return Promise.resolve({ success: false, error: `Action '${actionName}' not found` });
    }
    return action.execute(context, input).catch((err: Error) => ({
      success: false,
      error: err.message,
    }));
  }

  register(action: BusinessAction): void {
    if (this.actions.has(action.name)) {
      throw new Error(`Action '${action.name}' already registered`);
    }
    this.actions.set(action.name, action);
  }

  deregister(actionName: string): void {
    this.actions.delete(actionName);
  }

  getRegisteredActions(): string[] {
    return Array.from(this.actions.keys());
  }

  get(actionName: string): BusinessAction | undefined {
    return this.actions.get(actionName);
  }

  async executeInTransaction(actionName: string, context: ActionContext, input?: any): Promise<ActionResult> {
    return this.execute(actionName, context, input);
  }
}