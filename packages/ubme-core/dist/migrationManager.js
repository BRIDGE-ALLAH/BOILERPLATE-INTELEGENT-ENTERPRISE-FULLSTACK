"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MigrationManagerImpl = void 0;
class MigrationManagerImpl {
    constructor() {
        this.steps = new Map();
    }
    register(id, step) {
        this.steps.set(id, step);
    }
    async run(id) {
        const step = this.steps.get(id);
        if (!step) {
            return { success: false, completed: [], failed: [id] };
        }
        step.status = 'running';
        try {
            await step.up();
            step.status = 'completed';
            return { success: true, completed: [id], failed: [] };
        }
        catch (error) {
            step.status = 'failed';
            return { success: false, completed: [], failed: [id] };
        }
    }
    status(id) {
        const step = this.steps.get(id);
        if (!step) {
            return [];
        }
        return [{ step, status: step.status }];
    }
}
exports.MigrationManagerImpl = MigrationManagerImpl;
