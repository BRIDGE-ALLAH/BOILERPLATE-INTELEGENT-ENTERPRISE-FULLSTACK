"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionEngine = void 0;
class ActionEngine {
    constructor() {
        this.actions = new Map();
    }
    execute(actionName, context, input) {
        const action = this.actions.get(actionName);
        if (!action) {
            return Promise.resolve({ success: false, error: `Action '${actionName}' not found` });
        }
        return action.execute(context, input).catch((err) => ({
            success: false,
            error: err.message,
        }));
    }
    register(action) {
        if (this.actions.has(action.name)) {
            throw new Error(`Action '${action.name}' already registered`);
        }
        this.actions.set(action.name, action);
    }
    deregister(actionName) {
        this.actions.delete(actionName);
    }
    getRegisteredActions() {
        return Array.from(this.actions.keys());
    }
    get(actionName) {
        return this.actions.get(actionName);
    }
    async executeInTransaction(actionName, context, input) {
        return this.execute(actionName, context, input);
    }
}
exports.ActionEngine = ActionEngine;
