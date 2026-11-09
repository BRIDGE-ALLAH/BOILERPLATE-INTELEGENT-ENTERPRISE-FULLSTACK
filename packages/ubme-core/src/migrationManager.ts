export interface MigrationStep {
  id: string;
  name: string;
  up: () => Promise<void>;
  down: () => Promise<void>;
  status: 'pending' | 'running' | 'completed' | 'failed';
}

export interface MigrationManager {
  register(id: string, step: MigrationStep): void;
  run(id: string): Promise<{ success: boolean; completed: string[]; failed: string[] }>;
  status(id: string): { step: MigrationStep; status: string }[];
}

export class MigrationManagerImpl implements MigrationManager {
  private steps: Map<string, MigrationStep> = new Map();

  register(id: string, step: MigrationStep): void {
    this.steps.set(id, step);
  }

  async run(id: string): Promise<{ success: boolean; completed: string[]; failed: string[] }> {
    const step = this.steps.get(id);
    if (!step) {
      return { success: false, completed: [], failed: [id] };
    }

    step.status = 'running';
    try {
      await step.up();
      step.status = 'completed';
      return { success: true, completed: [id], failed: [] };
    } catch (error) {
      step.status = 'failed';
      return { success: false, completed: [], failed: [id] };
    }
  }

  status(id: string): { step: MigrationStep; status: string }[] {
    const step = this.steps.get(id);
    if (!step) {
      return [];
    }
    return [{ step, status: step.status }];
  }
}