"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobQueueImpl = void 0;
class JobQueueImpl {
    constructor() {
        this.jobs = new Map();
        this.processing = false;
    }
    async enqueue(job) {
        this.jobs.set(job.id, job);
        return job.id;
    }
    async process() {
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
                    }
                    catch (error) {
                        job.attempts++;
                        if (job.attempts >= job.maxAttempts) {
                            job.status = 'failed';
                        }
                        else {
                            job.status = 'pending';
                        }
                    }
                }
            }
        }
        finally {
            this.processing = false;
        }
    }
    async executeJob(job) {
        // Implementation would execute the job
    }
    async getStatus(jobId) {
        const job = this.jobs.get(jobId);
        if (!job) {
            return { status: 'not_found', attempts: 0 };
        }
        return { status: job.status, attempts: job.attempts };
    }
}
exports.JobQueueImpl = JobQueueImpl;
