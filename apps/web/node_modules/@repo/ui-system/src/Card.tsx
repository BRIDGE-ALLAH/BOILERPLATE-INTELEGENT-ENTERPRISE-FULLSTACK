import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = "", 
  header, 
  footer, 
  variant = "default",
  padding = "md"
}) => {
  const variantClasses = {
    default: "bg-white border border-gray-200 shadow-sm",
    outlined: "bg-white border-2 border-gray-200",
    elevated: "bg-white border border-gray-200 shadow-lg",
  };
  
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };
  
  return (
    <div className={`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}>
      {header && (
        <div className="mb-4 pb-4 border-b border-gray-100">
          {header}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          {footer}
        </div>
      )}
    </div>
  );
};
