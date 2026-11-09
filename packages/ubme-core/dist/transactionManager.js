"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionManagerImpl = void 0;
class TransactionManagerImpl {
    constructor() {
        this.active = false;
    }
    async begin() {
        if (this.active) {
            throw new Error('Transaction already active');
        }
        this.active = true;
    }
    async commit() {
        if (!this.active) {
            throw new Error('No active transaction');
        }
        this.active = false;
    }
    async rollback() {
        if (!this.active) {
            throw new Error('No active transaction');
        }
        this.active = false;
    }
    async execute(operation) {
        await this.begin();
        try {
            const result = await operation();
            await this.commit();
            return result;
        }
        catch (error) {
            await this.rollback();
            throw error;
        }
    }
}
exports.TransactionManagerImpl = TransactionManagerImpl;
