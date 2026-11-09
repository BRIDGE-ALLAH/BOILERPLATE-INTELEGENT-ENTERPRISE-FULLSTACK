export interface TransactionManager {
  begin(): Promise<void>;
  commit(): Promise<void>;
  rollback(): Promise<void>;
  execute<T>(operation: () => Promise<T>): Promise<T>;
}

export class TransactionManagerImpl implements TransactionManager {
  private active = false;

  async begin(): Promise<void> {
    if (this.active) {
      throw new Error('Transaction already active');
    }
    this.active = true;
  }

  async commit(): Promise<void> {
    if (!this.active) {
      throw new Error('No active transaction');
    }
    this.active = false;
  }

  async rollback(): Promise<void> {
    if (!this.active) {
      throw new Error('No active transaction');
    }
    this.active = false;
  }

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    await this.begin();
    try {
      const result = await operation();
      await this.commit();
      return result;
    } catch (error) {
      await this.rollback();
      throw error;
    }
  }
}