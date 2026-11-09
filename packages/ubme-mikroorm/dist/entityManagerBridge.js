"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManagerBridge = void 0;
class EntityManagerBridge {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async startTransaction() {
        this.transaction = await this.entityManager.begin();
    }
    async commit() {
        await this.transaction.commit();
    }
    async rollback() {
        await this.transaction.rollback();
    }
    async read(modelName, fields, ids) {
        const records = await this.entityManager.find(modelName, { id: { $in: ids } });
        return records.map((record) => ({ ...record }));
    }
    async write(modelName, values) {
        return Promise.resolve();
    }
    async unlink() {
        return Promise.resolve();
    }
    async count() {
        return 0;
    }
    async exists() {
        return false;
    }
}
exports.EntityManagerBridge = EntityManagerBridge;
