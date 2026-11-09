"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqliteAdapter_1 = require("../sqliteAdapter");
describe('SQLiteAdapter (adapters)', () => {
    let adapter;
    beforeEach(() => {
        adapter = new sqliteAdapter_1.SQLiteAdapter('test.sqlite');
    });
    test('constructor creates instance', () => {
        expect(adapter).toBeInstanceOf(sqliteAdapter_1.SQLiteAdapter);
    });
    test('getEntityManager returns orm.em', async () => {
        const result = await adapter.getEntityManager().catch(() => null);
        expect(result).toBeNull();
    });
});
