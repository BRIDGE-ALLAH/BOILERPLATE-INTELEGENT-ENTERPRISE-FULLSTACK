"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validationEngine_1 = require("./validationEngine");
const constraintEngine_1 = require("./constraintEngine");
const relationEngine_1 = require("./relationEngine");
describe('ValidationEngine', () => {
    let engine;
    let constraints;
    let relations;
    beforeEach(() => {
        constraints = new constraintEngine_1.ConstraintEngineImpl();
        relations = new relationEngine_1.RelationEngineImpl();
        engine = new validationEngine_1.ValidationEngineImpl(constraints, relations);
    });
    test('validateField returns valid for field present', async () => {
        const result = await engine.validateField('user', 'name', 'Alice');
        expect(result.valid).toBe(true);
    });
    test('validateRecord returns valid when no constraints fail', async () => {
        const result = await engine.validateRecord('user', { name: 'Alice' });
        expect(result.valid).toBe(true);
        expect(result.errors).toHaveLength(0);
    });
});
