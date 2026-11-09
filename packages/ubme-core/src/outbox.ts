export interface OutboxMessage {
  id: string;
  type: string;
  payload: any;
  occurredAt: Date;
  processed: boolean;
  attempt: number;
}

export interface OutboxRepository {
  findUnprocessed(limit?: number): Promise<OutboxMessage[]>;
  markProcessed(id: string): Promise<void>;
  incrementAttempt(id: string): Promise<void>;
}