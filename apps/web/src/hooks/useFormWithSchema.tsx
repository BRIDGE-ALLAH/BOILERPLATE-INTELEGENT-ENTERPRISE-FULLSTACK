// @app - Reusable form hook with centralized valibot schemas
import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@app/components/ui/use-toast';
import type { UseFormReturn } from 'react-hook-form';

import { validateSchema } from '@repo/validation';

// Types for the hook
export type FormFieldState = {
  value: any;
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.FocusEvent) => void;
  onFocus: (e: React.FocusEvent) => void;
};

export type FormErrors = {
  [key: string]: string;
};

export type UseFormWithSchemaOptions<T extends object> = {
  schema: any; // valibot schema
  defaultValues: T;
  onSubmit: (data: T) => Promise<void> | void;
  onError?: (errors: FormErrors) => void;
  onSuccess?: (data: T) => void;
  showToast?: {
    success?: boolean;
    title?: string;
    description?: string;
  };
};

export type UseFormWithSchemaReturn<T extends object> = {
  values: T;
  errors: FormErrors;
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  handleSubmit: (e: React.SubmitEvent) => void;
  reset: (values?: Partial<T>) => void;
  register: UseFormReturn<T>['register'];
  validate: (value: any, name: string) => boolean;
};

export const useFormWithSchema = <T extends object>({
  schema,
  defaultValues,
  onSubmit,
  onError,
  onSuccess,
  showToast = {
    success: true,
    title: 'Success',
    description: 'Form submitted successfully',
  },
}: UseFormWithSchemaOptions<T>) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    setValue,
    reset,
  } = useForm<T>({
    defaultValues: defaultValues as any,
    mode: 'onBlur',
  });

  // Handle submit with valibot validation
  const onSubmitHandler = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormErrors({});

    try {
      // Validate using valibot schema
      const validatedData = validateSchema(schema, register as any);

      // Submit the form
      await onSubmit(validatedData as T);

      // Success handling
      if (onSuccess) {
        onSuccess(validatedData as T);
      }

      if (showToast.success) {
        toast({
          title: showToast.title,
          description: showToast.description,
        });
      }

      if (onSuccess) {
        navigate('/');
      }
    } catch (error: any) {
      setIsSubmitting(false);

      if (error && (error as any).details) {
        // Format validation errors from valibot
        const formattedErrors: FormErrors = {};

        Object.keys(error.details).forEach((key) => {
          formattedErrors[key] = error.details[key] as string;
        });
        setFormErrors(formattedErrors);

        if (onError) {
          onError(formattedErrors);
        }
      } else {
        // Generic error
        const errorMsg = error.message || 'Something went wrong';

        setFormErrors({ _form: errorMsg });

        if (onError) {
          onError({ _form: errorMsg });
        }

        toast({
          title: 'Error',
          description: errorMsg,
          variant: 'destructive',
        });
      }
    }
  };

  return {
    values: register as T,
    errors: formErrors,
    isSubmitting,
    handleChange: (e: React.ChangeEvent) => {
      const { name, value } = e.target as HTMLInputElement;

      setValue(name as any, value as any);
    },
    handleBlur: (e: React.FocusEvent) => {
      const { name, value } = e.target as HTMLInputElement;

      setValue(name as any, value as any);
    },

    handleSubmit: onSubmitHandler,
    reset,
    register,
    validate: () => {
      // Quick validation for onBlur events
      return true; // Validation handled on submit
    },
  };
};

// Helper component for form input
export const FormInput = ({
  name,
  label,
  type = 'text',
  placeholder,
  ...rest
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  rest?: any;
}) => {
  const { handleChange } = useFormWithSchema({ schema: {}, defaultValues: {} as any, onSubmit: async () => {} });
  const handleBlur = handleChange;
  const errors: Record<string, string> = {};

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>

      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`
          w-full rounded-md border border-gray-300 dark:border-gray-600
          px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400
          ${errors[name] && 'border-red-500 dark:border-red-500'}
        `}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />

      {errors[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );
};

// Helper component for form select
export const FormSelect = ({
  name,
  label,
  options,
  placeholder = 'Select...',
  onChange,
  ...rest
}: {
  name: string;
  label: string;
  options: Array<{ value: any; label: string }>;
  placeholder?: string;
  onChange?: (value: any) => void;
  rest?: any;
}) => {
  const { handleChange: handleFormChange } = useFormWithSchema({ schema: {}, defaultValues: {} as any, onSubmit: async () => {} });
  const errors: Record<string, string> = {};

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">{label}</label>

      <select
        name={name}
        className={`
          w-full rounded-md border border-gray-300 dark:border-gray-600
          px-3 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400
          ${errors[name] && 'border-red-500 dark:border-red-500'}
        `}
        onChange={(e) => {
          const selected = e.target.options[e.target.selectedIndex].value;

          onChange?.(selected);
          handleFormChange(e);
        }}
        {...rest}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <p className="text-sm text-red-600 dark:text-red-400">{errors[name]}</p>
      )}
    </div>
  );
};