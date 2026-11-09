import React from "react";

interface SpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "primary" | "white";
  className?: string;
  "aria-label"?: string;
}

const sizeClasses = {
  sm: "w-4 h-4 border-2",
  md: "w-6 h-6 border-2",
  lg: "w-8 h-8 border-3",
  xl: "w-12 h-12 border-4",
};

const variantClasses = {
  default: "border-gray-300 border-t-blue-600",
  primary: "border-gray-300 border-t-blue-600",
  white: "border-white/30 border-t-white",
};

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  variant = "default",
  className = "",
  "aria-label": ariaLabel = "Loading",
}) => {
  return (
    <svg
      className={`animate-spin ${sizeClasses[size]} ${variantClasses[variant]} rounded-full ${className}`}
      role="status"
      aria-label={ariaLabel}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};
