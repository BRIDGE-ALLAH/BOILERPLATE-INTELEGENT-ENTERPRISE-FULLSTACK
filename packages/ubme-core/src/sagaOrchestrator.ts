export interface SagaStep {
  name: string;
  action: () => Promise<any>;
  compensate: () => Promise<any>;
}

export interface SagaOrchestrator {
  register(name: string, steps: SagaStep[]): void;
  execute(name: string): Promise<{ success: boolean; completed: string[]; compensated: string[] }>;
}

export class SagaOrchestratorImpl implements SagaOrchestrator {
  private sagas: Map<string, SagaStep[]> = new Map();

  register(name: string, steps: SagaStep[]): void {
    this.sagas.set(name, steps);
  }

  async execute(name: string): Promise<{ success: boolean; completed: string[]; compensated: string[] }> {
    const steps = this.sagas.get(name);
    if (!steps) {
      return { success: false, completed: [], compensated: [] };
    }

    const completed: string[] = [];
    const compensated: string[] = [];

    try {
      for (const step of steps) {
        await step.action();
        completed.push(step.name);
      }
      return { success: true, completed, compensated: [] };
    } catch (error) {
      // Execute compensation in reverse order
      for (let i = completed.length - 1; i >= 0; i--) {
        const stepName = completed[i];
        const step = steps.find((s) => s.name === stepName);
        if (step && step.compensate) {
          try {
            await step.compensate();
            compensated.push(stepName);
          } catch {
            // Continue compensation even if one fails
          }
        }
      }
      return { success: false, completed, compensated };
    }
  }
}