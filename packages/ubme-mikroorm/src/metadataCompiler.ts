export type RelationType = 'ManyToOne' | 'OneToMany' | 'OneToOne' | 'ManyToMany';

export interface RelationDefinition {
  type: RelationType;
  target: string;
  field: string;
  inverseField?: string;
  pivotTable?: string;
  joinColumn?: string;
  inverseJoinColumn?: string;
}

export interface ModelDefinition {
  name: string;
  version: string;
  fields: Map<string, FieldDefinition>;
  relations: Map<string, RelationDefinition>;
}

export interface FieldDefinition {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'datetime' | 'json' | 'uuid';
  required: boolean;
  nullable: boolean;
  default?: any;
  primary?: boolean;
}

export class MetadataCompiler {
  compile(modelRegistry: any): Record<string, any> {
    const schemas: Record<string, any> = {};

    for (const [name, model] of modelRegistry.models) {
      schemas[name] = this.compileModel(model);
    }

    return schemas;
  }

  private compileModel(model: any): any {
    const properties: Record<string, any> = {};
    const relations: Record<string, any> = {};

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

  private compileField(field: FieldDefinition): any {
    const result: any = { type: field.type };

    if (field.primary) result.primary = true;
    if (field.required) result.nullable = false;
    if (field.nullable) result.nullable = true;
    if (field.default !== undefined) result.default = field.default;

    return result;
  }

  private compileRelation(relation: RelationDefinition, sourceModel: string): any {
    const base: any = {
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