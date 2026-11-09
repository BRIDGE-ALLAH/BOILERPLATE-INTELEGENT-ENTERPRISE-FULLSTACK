"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutboxWorkerImpl = void 0;
class OutboxWorkerImpl {
    constructor() {
        this.active = false;
        this.processQueue = [];
    }
    async start() {
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
    async stop() {
        this.active = false;
    }
    enqueue(message) {
        this.processQueue.push(message);
    }
    async processMessage(message) {
        // Implementation would process the message
        // and mark it as processed in the outbox
    }
}
exports.OutboxWorkerImpl = OutboxWorkerImpl;
