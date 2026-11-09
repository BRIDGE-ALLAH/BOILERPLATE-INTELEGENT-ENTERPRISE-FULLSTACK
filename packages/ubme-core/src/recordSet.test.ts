import { ModelRef, RecordId } from './types';

describe('RecordSet', () => {
  const modelRef: ModelRef<any> = { name: 'test.model', version: '1.0.0' };
  const ids: readonly RecordId[] = ['1', '2', '3'];

  test('constructs with model and ids', () => {
    const rs = { model: modelRef, ids };
    expect(rs.model).toEqual(modelRef);
    expect(rs.ids).toEqual(ids);
  });
});