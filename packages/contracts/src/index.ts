export type FieldOption = {
  label: string;
  value: string;
};

export type FieldBase = {
  id: string;
  label: string;
  description?: string;
  required?: boolean;
  defaultValue?: string | number | boolean | null;
};

export type TextField = FieldBase & {
  type: "text" | "password" | "textarea";
  placeholder?: string;
};

export type NumberField = FieldBase & {
  type: "number";
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
};

export type CheckboxField = FieldBase & {
  type: "checkbox";
};

export type SelectField = FieldBase & {
  type: "select";
  options: FieldOption[];
};

export type FieldDefinition =
  | TextField
  | NumberField
  | CheckboxField
  | SelectField;

export type ConnectionSchema = {
  title: string;
  description?: string;
  fields: FieldDefinition[];
};

export type ConnectionCapabilities = {
  summaryEndpoint?: string;
  schema: ConnectionSchema;
  openConnectionPath: string;
};

export type ViewDefinition = {
  id: string;
  title: string;
  route: string;
  icon?: string;
  type?: "iframe";
};

export type PluginManifest = {
  id: string;
  name: string;
  description?: string;
  mountPath?: string;
  connections: ConnectionCapabilities;
  views?: ViewDefinition[];
};
