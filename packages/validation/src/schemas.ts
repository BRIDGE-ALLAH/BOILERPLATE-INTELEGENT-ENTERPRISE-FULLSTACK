// @repo/validation - Valibot schemas for form validation
import { object, string, email as emailValidator, minLength, maxLength, number, optional, array, boolean, date, pipe, transform } from 'valibot';
import { isValidEmail, isValidUrl, isValidUuid, isPositiveNumber } from '@repo/utils';

// ===== User Authentication Schemas =====
export const emailSchema = string([emailValidator(), minLength(1)]);
export const passwordSchema = string([minLength(8)]);
export const nameSchema = string([minLength(2), maxLength(100)]);
export const displayNameSchema = string([minLength(2), maxLength(50)]);

// Register schema
export const registerSchema = object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: string([minLength(8)]),
}).refine(
  (data) => data.password === data.confirmPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }
);

// Login schema
export const loginSchema = object({
  email: emailSchema,
  password: passwordSchema,
});

// Login with social schema (optional)
export const socialLoginSchema = object({
  provider: string([minLength(1)]),
  token: string([minLength(1)]),
});

// ===== User Management Schemas =====
export const createUserSchema = object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

// Update user schema (all fields optional)
export const updateUserSchema = object({
  name: optional(nameSchema),
  email: optional(emailSchema),
  password: optional(passwordSchema),
});

// Password change schema
export const changePasswordSchema = object({
  currentPassword: string([minLength(8)]),
  newPassword: string([minLength(8)]),
  confirmNewPassword: string([minLength(8)]),
}).refine(
  (data) => data.newPassword === data.confirmNewPassword,
  {
    message: 'Passwords do not match',
    path: ['confirmNewPassword'],
  }
);

// ===== ID & Reference Schemas =====
export const idSchema = string([minLength(1)]).transform((val) => val.trim());

export const positiveIdSchema = pipe(
  idSchema,
  transform((val) => parseInt(val, 10))
);

export const uuidSchema = string([
  isValidUuid,
  minLength(1),
]);

// ===== Pagination Schemas =====
export const paginationSchema = object({
  page: optional(number(), 1),
  pageSize: optional(number(), 10),
}).refine(
  (data) => {
    const page = data.page || 1;
    const pageSize = data.pageSize || 10;
    return page >= 1 && pageSize >= 1 && pageSize <= 100;
  },
  {
    message: 'Invalid pagination parameters: page >= 1, pageSize 1-100',
    path: ['page', 'pageSize'],
  }
);

// ===== Search Schemas =====
export const searchSchema = object({
  query: optional(string().max(100)),
  page: optional(number(), 1),
  pageSize: optional(number(), 10),
});

// ===== File Upload Schemas =====
export const fileMetadataSchema = object({
  name: string().max(255),
  size: number().positive(),
  type: string().regex(/^image\/(jpeg|png|webp)$|^application\/pdf$/),
});

// ===== Boolean & Status Schemas =====
export const booleanSchema = boolean();

export const statusSchema = string([
  enum(['active', 'inactive', 'pending', 'archived']),
]);

// ===== Date Schemas =====
export const isoDateSchema = string([
  (val: string) => {
    const date = new Date(val);
    return date instanceof Date && !isNaN(date.getTime())
      ? true
      : 'Invalid ISO date';
  }
]);

// ===== Numeric Schemas =====
export const positiveNumberSchema = number().transform((val) => {
  const num = Number(val);
  return isPositiveNumber(num) ? num : new Error('Must be a positive number');
});

export const nonNegativeNumberSchema = number().min(0);

// Export commonly used schemas
export type {
  RegisterSchema,
  LoginSchema,
  CreateUserSchema,
  UpdateUserSchema,
  ChangePasswordSchema,
  IdSchema,
  PositiveIdSchema,
  UuidSchema,
  PaginationSchema,
  SearchSchema,
  FileMetadataSchema,
  BooleanSchema,
  StatusSchema,
  IsoDateSchema,
  PositiveNumberSchema,
  NonNegativeNumberSchema,
};