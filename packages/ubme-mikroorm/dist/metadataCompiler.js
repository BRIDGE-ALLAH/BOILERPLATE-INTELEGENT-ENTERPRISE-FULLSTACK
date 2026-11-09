"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataCompiler = void 0;
class MetadataCompiler {
    compile(modelRegistry) {
        const schemas = {};
        for (const [name, model] of modelRegistry.models) {
            schemas[name] = this.compileModel(model);
        }
        return schemas;
    }
    compileModel(model) {
        const properties = {};
        const relations = {};
        if (model.fields) {
            for (const [fieldName, field] of model.fields) {
                properties[fieldName] = this.compileField(field);
            }
        }
        if (model.relations) {
            for (const [relationName, relation] of model.relations) {
                relations[relationName] = this.compileRelation(relation, model.name);
            }
        }
        return {
            tableName: model.name,
            properties,
            relations,
            indexes: [],
        };
    }
    compileField(field) {
        const result = { type: field.type };
        if (field.primary)
            result.primary = true;
        if (field.required)
            result.nullable = false;
        if (field.nullable)
            result.nullable = true;
        if (field.default !== undefined)
            result.default = field.default;
        return result;
    }
    compileRelation(relation, sourceModel) {
        const base = {
            type: relation.type,
            target: relation.target,
            field: relation.field,
        };
        switch (relation.type) {
            case 'ManyToOne':
                base.joinColumn = relation.joinColumn || `${relation.field}_id`;
                break;
            case 'OneToMany':
                base.inverseField = relation.inverseField || relation.field;
                break;
            case 'OneToOne':
                base.joinColumn = relation.joinColumn || `${relation.field}_id`;
                base.inverseField = relation.inverseField || relation.field;
                break;
            case 'ManyToMany':
                base.pivotTable = relation.pivotTable || `${sourceModel}_${relation.target}`;
                base.joinColumn = relation.joinColumn || `${sourceModel}_id`;
                base.inverseJoinColumn = relation.inverseJoinColumn || `${relation.target}_id`;
                break;
        }
        return base;
    }
}
exports.MetadataCompiler = MetadataCompiler;
