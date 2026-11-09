import { MetadataCompiler } from './metadataCompiler';

describe('MetadataCompiler', () => {
  let compiler: MetadataCompiler;

  beforeEach(() => {
    compiler = new MetadataCompiler();
  });

  test('compile returns schemas for registered models', () => {
    const modelRegistry = {
      models: new Map([
        ['test.model', { name: 'test.model', version: '1.0.0', metadata: {}, isExtension: false }],
        ['other.model', { name: 'other.model', version: '1.0.0', metadata: {}, isExtension: false }],
      ]),
    };
    const result = compiler.compile(modelRegistry);
    expect(result['test.model']).toBeDefined();
    expect(result['other.model']).toBeDefined();
  });

  test('compileModel returns EntitySchema-like structure', () => {
    const model = { name: 'test.model', version: '1.0.0', metadata: {}, isExtension: false };
    const schema = (compiler as any).compileModel(model);
    expect(schema.tableName).toBe('test.model');
    expect(schema.properties).toEqual({});
    expect(schema.indexes).toEqual([]);
    expect(schema.relations).toEqual({});
  });
});