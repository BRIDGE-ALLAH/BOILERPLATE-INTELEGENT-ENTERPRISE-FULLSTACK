"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const entityManagerBridge_1 = require("./entityManagerBridge");
describe('EntityManagerBridge', () => {
    let bridge;
    let mockEntityManager;
    beforeEach(() => {
        mockEntityManager = {
            begin: jest.fn().mockResolvedValue({
                commit: jest.fn(),
                rollback: jest.fn(),
            }),
            find: jest.fn().mockResolvedValue([]),
        };
        bridge = new entityManagerBridge_1.EntityManagerBridge(mockEntityManager);
    });
    test('startTransaction calls entityManager.begin', async () => {
        await bridge.startTransaction();
        expect(mockEntityManager.begin).toHaveBeenCalled();
    });
    test('commit calls transaction.commit', async () => {
        await bridge.startTransaction();
        const transaction = bridge.transaction;
        await bridge.commit();
        expect(transaction.commit).toHaveBeenCalled();
    });
    test('rollback calls transaction.rollback', async () => {
        await bridge.startTransaction();
        const transaction = bridge.transaction;
        await bridge.rollback();
        expect(transaction.rollback).toHaveBeenCalled();
    });
    test('read calls entityManager.find', async () => {
        mockEntityManager.find.mockResolvedValue([{ id: '1', name: 'test' }]);
        const results = await bridge.read('test.model', ['id', 'name'], ['1']);
        expect(mockEntityManager.find).toHaveBeenCalledWith('test.model', { id: { $in: ['1'] } });
        expect(results).toEqual([{ id: '1', name: 'test' }]);
    });
    test('write returns resolved promise', async () => {
        await expect(bridge.write('test.model', { name: 'test' })).resolves.toBeUndefined();
    });
    test('unlink returns resolved promise', async () => {
        await expect(bridge.unlink()).resolves.toBeUndefined();
    });
    test('count returns 0', async () => {
        expect(await bridge.count()).toBe(0);
    });
    test('exists returns false', async () => {
        expect(await bridge.exists()).toBe(false);
    });
});
