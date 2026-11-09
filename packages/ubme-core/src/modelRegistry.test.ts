import { ModelRegistry } from './modelRegistry';
import { ModelEntry } from './types';

describe('ModelRegistry', () => {
  let registry: ModelRegistry;
  const modelEntry: ModelEntry = {
    name: 'test.model',
    version: '1.0.0',
    metadata: { fields: ['id', 'name'] },
    isExtension: false,
  };

  beforeEach(() => {
    registry = new ModelRegistry();
  });

  test('starts in BUILDING state', () => {
    expect(registry.getState()).toBe('BUILDING');
  });

  test('registers a model in BUILDING state', () => {
    registry.register(modelEntry);
    const retrieved = registry.get('test.model');
    expect(retrieved).toEqual(modelEntry);
  });

  test('throws when registering after freeze', () => {
    registry.freeze();
    expect(() => registry.register(modelEntry)).toThrow(
      'Cannot register models after registry is frozen',
    );
  });

  test('get returns undefined for missing model', () => {
    expect(registry.get('missing')).toBeUndefined();
  });

  test('getAll returns all registered models', () => {
    registry.register(modelEntry);
    const all = registry.getAll();
    expect(all.size).toBe(1);
    expect(all.get('test.model')).toEqual(modelEntry);
  });

  test('freeze transitions state to FROZEN', () => {
    registry.freeze();
    expect(registry.getState()).toBe('FROZEN');
  });
});