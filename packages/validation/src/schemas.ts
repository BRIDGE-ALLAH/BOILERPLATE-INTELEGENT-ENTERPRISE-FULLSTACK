// @repo/validation - Valibot schemas for form validation
import {
  object,
  string,
  email as emailValidator,
  minLength,
  maxLength,
  number,
  optional,
  array,
  boolean,
  pipe,
  transform,
  enum as enumValidator,
  check,
  maxValue,
  minValue,
  regex,
} from 'valibot';
import { isValidEmail, isValidUrl, isValidUuid, isPositiveNumber } from '@repo/utils';

// ===== User Authentication Schemas =====
export const emailSchema = pipe(string(), emailValidator(), minLength(1));
export type EmailSchema = typeof emailSchema;
export const passwordSchema = pipe(string(), minLength(8));
export type PasswordSchema = typeof passwordSchema;
export const nameSchema = pipe(string(), minLength(2), maxLength(100));
export type NameSchema = typeof nameSchema;
export const displayNameSchema = pipe(string(), minLength(2), maxLength(50));
export type DisplayNameSchema = typeof displayNameSchema;

// Register schema
export const registerSchema = pipe(
  object({
    name: nameSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  }),
  check(
    (data) => data.password === data.confirmPassword,
    'Passwords do not match'
  )
);
export type RegisterSchema = typeof registerSchema;

// Login schema
export const loginSchema = object({
  email: emailSchema,
  password: passwordSchema,
});
export type LoginSchema = typeof loginSchema;

// Login with social schema (optional)
export const socialLoginSchema = object({
  provider: pipe(string(), minLength(1)),
  token: pipe(string(), minLength(1)),
});

// ===== User Management Schemas =====
export const createUserSchema = object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});
export type CreateUserSchema = typeof createUserSchema;

// Update user schema (all fields optional)
export const updateUserSchema = object({
  name: optional(nameSchema),
  email: optional(emailSchema),
  password: optional(passwordSchema),
});
export type UpdateUserSchema = typeof updateUserSchema;

// Password change schema
export const changePasswordSchema = pipe(
  object({
    currentPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
  }),
  check(
    (data) => data.newPassword === data.confirmNewPassword,
    'Passwords do not match'
  )
);
export type ChangePasswordSchema = typeof changePasswordSchema;

// ===== ID & Reference Schemas =====
export const idSchema = pipe(string(), minLength(1), transform((val) => val.trim()));
export type IdSchema = typeof idSchema;

export const positiveIdSchema = pipe(idSchema, transform((val) => parseInt(val, 10)));
export type PositiveIdSchema = typeof positiveIdSchema;

export const uuidSchema = pipe(
  string(),
  check((val: string) => isValidUuid(val), 'Invalid UUID'),
  minLength(1)
);
export type UuidSchema = typeof uuidSchema;

// ===== Pagination Schemas =====
export const paginationSchema = pipe(
  object({
    page: optional(number(), 1),
    pageSize: optional(number(), 10),
  }),
  check(
    (data) => {
      const page = data.page || 1;
      const pageSize = data.pageSize || 10;
      return page >= 1 && pageSize >= 1 && pageSize <= 100;
    },
    'Invalid pagination parameters: page >= 1, pageSize 1-100'
  )
);
export type PaginationSchema = typeof paginationSchema;

// ===== Search Schemas =====
export const searchSchema = object({
  query: optional(pipe(string(), maxLength(100))),
  page: optional(number(), 1),
  pageSize: optional(number(), 10),
});
export type SearchSchema = typeof searchSchema;

// ===== File Upload Schemas =====
export const fileMetadataSchema = object({
  name: pipe(string(), maxLength(255)),
  size: pipe(number(), minValue(0)),
  type: pipe(string(), regex(/^image\/(jpeg|png|webp)$|^application\/pdf$/)),
});
export type FileMetadataSchema = typeof fileMetadataSchema;

// ===== Boolean & Status Schemas =====
export const booleanSchema = boolean();
export type BooleanSchema = typeof booleanSchema;

export const statusSchema = pipe(
  string(),
  enumValidator(['active', 'inactive', 'pending', 'archived'] as unknown as { active: 'active'; inactive: 'inactive'; pending: 'pending'; archived: 'archived' })
);
export type StatusSchema = typeof statusSchema;

// ===== Date Schemas =====
export const isoDateSchema = pipe(
  string(),
  check(
    (val: string) => {
      const date = new Date(val);
      return date instanceof Date && !isNaN(date.getTime());
    },
    'Invalid ISO date'
  )
);
export type IsoDateSchema = typeof isoDateSchema;

// ===== Numeric Schemas =====
export const positiveNumberSchema = pipe(
  number(),
  transform((val) => {
    const num = Number(val);
    return isPositiveNumber(num) ? num : new Error('Must be a positive number');
  })
);
export type PositiveNumberSchema = typeof positiveNumberSchema;

export const nonNegativeNumberSchema = pipe(number(), minValue(0));
export type NonNegativeNumberSchema = typeof nonNegativeNumberSchema;

