import React from "react";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  onDelete?: () => void;
  deletable?: boolean;
  avatar?: React.ReactNode;
  icon?: React.ReactNode;
  clickable?: boolean;
  selected?: boolean;
}

const variantClasses = {
  default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  primary: "bg-blue-100 text-blue-800 hover:bg-blue-200",
  secondary: "bg-purple-100 text-purple-800 hover:bg-purple-200",
  success: "bg-green-100 text-green-800 hover:bg-green-200",
  warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
  danger: "bg-red-100 text-red-800 hover:bg-red-200",
  info: "bg-cyan-100 text-cyan-800 hover:bg-cyan-200",
};

const sizeClasses = {
  sm: "px-2 py-1 text-xs gap-1",
  md: "px-3 py-1.5 text-sm gap-1.5",
  lg: "px-4 py-2 text-base gap-2",
};

export const Chip: React.FC<ChipProps> = ({
  label,
  variant = "default",
  size = "md",
  onDelete,
  deletable = false,
  avatar,
  icon,
  clickable = false,
  selected = false,
  className = "",
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent) => {
    if (clickable && onClick) onClick(e);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) onDelete();
  };

  const Component = clickable || onClick ? "button" : "div";

  return (
    <Component
      className={`
        inline-flex items-center gap-1.5 font-medium rounded-full transition-colors
        ${variantClasses[variant]} ${sizeClasses[size]}
        ${clickable || onClick ? "cursor-pointer focus:outline-none focus:ring-2" : ""}
        ${selected ? "ring-2 ring-offset-2" : ""}
        ${className}
      `}
      onClick={handleClick}
      {...props}
    >
      {avatar && <span className="flex-shrink-0">{avatar}</span>}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
      {deletable && (
        <button
          onClick={handleDelete}
          className="flex-shrink-0 p-0.5 rounded-full hover:bg-black/10 transition-colors"
          aria-label="Remove"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </Component>
  );
};
