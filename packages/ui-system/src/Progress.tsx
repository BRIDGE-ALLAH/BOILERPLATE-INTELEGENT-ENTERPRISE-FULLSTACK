import React from "react";

interface ProgressProps {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "primary" | "success" | "warning" | "danger";
  showLabel?: boolean;
  label?: string;
  striped?: boolean;
  animated?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-1.5",
  md: "h-2.5",
  lg: "h-4",
};

const variantClasses = {
  default: "bg-blue-600",
  primary: "bg-blue-600",
  success: "bg-green-600",
  warning: "bg-yellow-500",
  danger: "bg-red-600",
};

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = "md",
  variant = "default",
  showLabel = false,
  label,
  striped = false,
  animated = false,
  className = "",
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={className} role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={max}>
      {label && <div className="mb-1.5 text-sm font-medium text-gray-700">{label}</div>}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div
          className={`
            h-full rounded-full transition-all duration-300 ease-out
            ${variantClasses[variant]}
            ${striped ? "bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:20px_20px]" : ""}
            ${animated ? "animate-pulse" : ""}
          `}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && <div className="mt-1.5 text-sm text-gray-500 text-right">{Math.round(percentage)}%</div>}
    </div>
  );
};
