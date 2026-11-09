"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLiteAdapter = void 0;
class SQLiteAdapter {
    constructor(dbName = 'ubme.sqlite') {
        this.orm = null;
    }
    async getEntityManager() {
        return this.orm.em;
    }
}
exports.SQLiteAdapter = SQLiteAdapter;
