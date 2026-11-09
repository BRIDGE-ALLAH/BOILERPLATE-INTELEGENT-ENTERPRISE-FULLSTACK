"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fieldCatalog_1 = require("./fieldCatalog");
describe('FieldCatalog', () => {
    let catalog;
    const field = {
        name: 'email',
        type: 'string',
        required: true,
        nullable: false,
        default: '',
    };
    beforeEach(() => {
        catalog = new fieldCatalog_1.FieldCatalogImpl();
    });
    test('starts empty', () => {
        expect(catalog.getAll().size).toBe(0);
    });
    test('registers a field', () => {
        catalog.register(field);
        expect(catalog.get('email')).toEqual(field);
    });
    test('get returns undefined for missing field', () => {
        expect(catalog.get('missing')).toBeUndefined();
    });
    test('getAll returns all registered fields', () => {
        catalog.register(field);
        const all = catalog.getAll();
        expect(all.size).toBe(1);
        expect(all.get('email')).toEqual(field);
    });
    test('unregister removes field', () => {
        catalog.register(field);
        catalog.unregister('email');
        expect(catalog.get('email')).toBeUndefined();
    });
    test('validateFieldName returns true for registered field', () => {
        catalog.register(field);
        expect(catalog.validateFieldName('email')).toBe(true);
    });
    test('validateFieldName returns false for unregistered field', () => {
        expect(catalog.validateFieldName('missing')).toBe(false);
    });
});
