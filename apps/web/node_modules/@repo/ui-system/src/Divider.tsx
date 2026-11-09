import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  label?: string;
  labelPosition?: "start" | "center" | "end";
}

export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  label,
  labelPosition = "center",
  className = "",
  children,
  ...props
}) => {
  if (label) {
    return (
      <div className={`flex items-center gap-4 ${className}`} role="separator" {...props}>
        <div className={`flex-1 border-t ${variant === "dashed" ? "border-dashed" : variant === "dotted" ? "border-dotted" : ""}`} />
        <span className="px-2 text-sm text-gray-500 whitespace-nowrap">{label}</span>
        <div className={`flex-1 border-t ${variant === "dashed" ? "border-dashed" : variant === "dotted" ? "border-dotted" : ""}`} />
      </div>
    );
  }

  const baseClass = orientation === "vertical" ? "h-6 w-px" : "w-full h-px";
  const variantClass = variant === "dashed" ? "bg-gray-300" : variant === "dotted" ? "bg-gray-300" : "bg-gray-200";

  return (
    <hr
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    />
  );
};
