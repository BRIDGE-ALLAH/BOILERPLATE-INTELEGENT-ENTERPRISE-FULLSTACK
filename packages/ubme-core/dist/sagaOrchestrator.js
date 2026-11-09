"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SagaOrchestratorImpl = void 0;
class SagaOrchestratorImpl {
    constructor() {
        this.sagas = new Map();
    }
    register(name, steps) {
        this.sagas.set(name, steps);
    }
    async execute(name) {
        const steps = this.sagas.get(name);
        if (!steps) {
            return { success: false, completed: [], compensated: [] };
        }
        const completed = [];
        const compensated = [];
        try {
            for (const step of steps) {
                await step.action();
                completed.push(step.name);
            }
            return { success: true, completed, compensated: [] };
        }
        catch (error) {
            // Execute compensation in reverse order
            for (let i = completed.length - 1; i >= 0; i--) {
                const stepName = completed[i];
                const step = steps.find((s) => s.name === stepName);
                if (step && step.compensate) {
                    try {
                        await step.compensate();
                        compensated.push(stepName);
                    }
                    catch {
                        // Continue compensation even if one fails
                    }
                }
            }
            return { success: false, completed, compensated };
        }
    }
}
exports.SagaOrchestratorImpl = SagaOrchestratorImpl;
