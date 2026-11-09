"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
describe('RecordSet', () => {
    const modelRef = { name: 'test.model', version: '1.0.0' };
    const ids = ['1', '2', '3'];
    test('constructs with model and ids', () => {
        const rs = { model: modelRef, ids };
        expect(rs.model).toEqual(modelRef);
        expect(rs.ids).toEqual(ids);
    });
});
