"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./validation");
describe('ValidatorImpl', () => {
    let validator;
    beforeEach(() => {
        validator = new validation_1.ValidatorImpl();
    });
    test('validate returns true for any input', async () => {
        expect(await validator.validate({}, {})).toBe(true);
        expect(await validator.validate({ fields: ['name'] }, { name: 'test' })).toBe(true);
        expect(await validator.validate(null, undefined)).toBe(true);
    });
});
