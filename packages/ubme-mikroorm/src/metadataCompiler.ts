export class MetadataCompiler {
  compile(modelRegistry: any): Record<string, any> {
    const schemas: Record<string, any> = {};

    for (const [name, model] of modelRegistry.models) {
      schemas[name] = this.compileModel(model);
    }

    return schemas;
  }

  private compileModel(model: any): any {
    return {
      tableName: model.name,
      properties: {},
      indexes: [],
      relations: [],
    };
  }
}