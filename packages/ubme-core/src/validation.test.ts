import { ValidatorImpl } from './validation';

describe('ValidatorImpl', () => {
  let validator: ValidatorImpl;

  beforeEach(() => {
    validator = new ValidatorImpl();
  });

  test('validate returns true for any input', async () => {
    expect(await validator.validate({}, {})).toBe(true);
    expect(await validator.validate({ fields: ['name'] }, { name: 'test' })).toBe(true);
    expect(await validator.validate(null, undefined)).toBe(true);
  });
});