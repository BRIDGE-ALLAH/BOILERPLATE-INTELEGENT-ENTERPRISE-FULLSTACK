export interface Validator {
  validate(model: any, data: any): Promise<boolean>;
}

export interface ValidationResult {
  readonly valid: boolean;
  readonly errors: readonly ValidationError[];
}

export interface ValidationError {
  readonly field: string;
  readonly message: string;
  readonly code: string;
}

export class ValidatorImpl implements Validator {
  async validate(model: any, data: any): Promise<boolean> {
    return true;
  }
}