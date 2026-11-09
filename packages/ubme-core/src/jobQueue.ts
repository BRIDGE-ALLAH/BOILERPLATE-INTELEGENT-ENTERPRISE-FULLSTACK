export interface Job {
  id: string;
  type: string;
  payload: any;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: Date;
  startedAt?: Date;
  completedAt?: Date;
  attempts: number;
  maxAttempts: number;
}

export interface JobQueue {
  enqueue(job: Job): Promise<string>;
  process(): Promise<void>;
  getStatus(jobId: string): Promise<{ status: string; attempts: number }>;
}

export class JobQueueImpl implements JobQueue {
  private jobs: Map<string, Job> = new Map();
  private processing = false;

  async enqueue(job: Job): Promise<string> {
    this.jobs.set(job.id, job);
    return job.id;
  }

  async process(): Promise<void> {
    if (this.processing) {
      return;
    }
    this.processing = true;

    try {
      for (const [id, job] of this.jobs) {
        if (job.status === 'pending') {
          job.status = 'processing';
          job.startedAt = new Date();
          try {
            await this.executeJob(job);
            job.status = 'completed';
            job.completedAt = new Date();
          } catch (error) {
            job.attempts++;
            if (job.attempts >= job.maxAttempts) {
              job.status = 'failed';
            } else {
              job.status = 'pending';
            }
          }
        }
      }
    } finally {
      this.processing = false;
    }
  }

  private async executeJob(job: Job): Promise<void> {
    // Implementation would execute the job
  }

  async getStatus(jobId: string): Promise<{ status: string; attempts: number }> {
    const job = this.jobs.get(jobId);
    if (!job) {
      return { status: 'not_found', attempts: 0 };
    }
    return { status: job.status, attempts: job.attempts };
  }
}