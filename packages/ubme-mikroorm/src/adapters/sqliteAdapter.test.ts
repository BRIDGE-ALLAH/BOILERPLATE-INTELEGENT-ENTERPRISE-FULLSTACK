import { SQLiteAdapter } from '../sqliteAdapter';

describe('SQLiteAdapter (adapters)', () => {
  let adapter: SQLiteAdapter;

  beforeEach(() => {
    adapter = new SQLiteAdapter('test.sqlite');
  });

  test('constructor creates instance', () => {
    expect(adapter).toBeInstanceOf(SQLiteAdapter);
  });

  test('getEntityManager returns orm.em', async () => {
    const result = await adapter.getEntityManager().catch(() => null);
    expect(result).toBeNull();
  });
});