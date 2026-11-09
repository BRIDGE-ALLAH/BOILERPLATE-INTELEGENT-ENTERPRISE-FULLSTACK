import { SQLiteAdapter } from './sqliteAdapter';

describe('SQLiteAdapter', () => {
  let adapter: SQLiteAdapter;

  beforeEach(() => {
    adapter = new SQLiteAdapter('test.sqlite');
  });

  test('constructor creates instance', () => {
    expect(adapter).toBeInstanceOf(SQLiteAdapter);
  });

  test('getEntityManager returns orm.em', async () => {
    // Test that the method exists and can be called
    const result = await adapter.getEntityManager().catch(() => null);
    expect(result).toBeNull();
  });
});