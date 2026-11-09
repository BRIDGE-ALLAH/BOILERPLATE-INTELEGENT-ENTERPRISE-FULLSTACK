export class SQLiteAdapter {
  private orm: any;

  constructor(dbName: string = 'ubme.sqlite') {
    this.orm = null;
  }

  async getEntityManager() {
    return this.orm.em;
  }
}