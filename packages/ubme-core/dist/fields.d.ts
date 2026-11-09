export type FieldOptions = {
    required?: boolean;
    nullable?: boolean;
    default?: any;
};
export type UUIDField = FieldOptions & {
    type: "uuid";
    primary?: boolean;
};
export type CharField = FieldOptions & {
    type: "char";
    required?: boolean;
    maxLength?: number;
    index?: boolean;
};
export type TextField = FieldOptions & {
    type: "text";
    required?: boolean;
    maxLength?: number;
};
export interface BooleanField extends FieldOptions {
    type: "boolean";
    default?: boolean;
}
export interface EnumField extends FieldOptions {
    type: "enum";
    values: string[];
    default?: string;
}
export interface ManyToOneField extends FieldOptions {
    type: "many-to-one";
    target: any;
    required?: boolean;
    onDelete?: "CASCADE" | "SET NULL" | "RESTRICT";
}
export interface OneToManyField extends FieldOptions {
    type: "one-to-many";
    target: any;
    mappedBy?: string;
}
export type FieldType = UUIDField | CharField | TextField | BooleanField | EnumField | ManyToOneField | OneToManyField;
//# sourceMappingURL=fields.d.ts.map