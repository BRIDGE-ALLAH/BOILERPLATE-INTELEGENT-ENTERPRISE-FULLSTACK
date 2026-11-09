import { ModelEntry } from './types';

export type RegistryState = 'BUILDING' | 'FROZEN';

export class ModelRegistry {
  private state: RegistryState = 'BUILDING';
  private models: Map<string, ModelEntry> = new Map();
  private addons: Map<string, any> = new Map();

  register(model: ModelEntry): void {
    if (this.state === 'FROZEN') {
      throw new Error('Cannot register models after registry is frozen');
    }
    this.models.set(model.name, model);
  }

  get(name: string): ModelEntry | undefined {
    return this.models.get(name);
  }

  getAll(): Map<string, ModelEntry> {
    return new Map(this.models);
  }

  freeze(): void {
    this.state = 'FROZEN';
  }

  getState(): RegistryState {
    return this.state;
  }
}