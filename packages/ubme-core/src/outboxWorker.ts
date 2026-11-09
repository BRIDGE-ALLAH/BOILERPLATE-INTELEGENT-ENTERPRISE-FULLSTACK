export interface OutboxWorker {
  start(): Promise<void>;
  stop(): Promise<void>;
  processMessage(message: any): Promise<void>;
}

export class OutboxWorkerImpl implements OutboxWorker {
  private active = false;
  private processQueue: any[] = [];

  async start(): Promise<void> {
    if (this.active) {
      throw new Error('Outbox worker already running');
    }
    this.active = true;
    // Process queued messages
    while (this.processQueue.length > 0) {
      const message = this.processQueue.shift();
      if (message) {
        await this.processMessage(message);
      }
    }
  }

  async stop(): Promise<void> {
    this.active = false;
  }

  enqueue(message: any): void {
    this.processQueue.push(message);
  }

  async processMessage(message: any): Promise<void> {
    // Implementation would process the message
    // and mark it as processed in the outbox
  }
}