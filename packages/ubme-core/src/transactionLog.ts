export interface TransactionLogEntry {
  id: string;
  transactionId: string;
  step: string;
  status: 'pending' | 'completed' | 'failed';
  occurredAt: Date;
  error?: string;
}

export interface TransactionLogRepository {
  logEntry(entry: TransactionLogEntry): Promise<void>;
  getHistory(transactionId: string): Promise<TransactionLogEntry[]>;
  getPending(): Promise<TransactionLogEntry[]>;
}