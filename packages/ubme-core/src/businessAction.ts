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

export interface ActionEngine {
  execute(actionName: string, context: ActionContext): Promise<ActionResult>;
  register(actionName: string, handler: (context: ActionContext) => Promise<ActionResult>): void;
  deregister(actionName: string): void;
  getRegisteredActions(): string[];
}