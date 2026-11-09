"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor() {
        this.addons = new Map();
        this.frozen = false;
    }
    register(addon) {
        if (this.frozen) {
            throw new Error('Cannot register addons after registry is frozen');
        }
        this.addons.set(addon.name, addon);
    }
    resolve() {
        const resolved = [];
        const visited = new Set();
        const visit = (name) => {
            if (visited.has(name))
                return;
            const addon = this.addons.get(name);
            if (!addon)
                throw new Error(`Addon ${name} not found`);
            visited.add(name);
            for (const dep of addon.dependencies) {
                visit(dep);
            }
            resolved.push(addon);
        };
        for (const [name] of this.addons) {
            visit(name);
        }
        return resolved;
    }
    freeze() {
        this.frozen = true;
    }
}
exports.Engine = Engine;
