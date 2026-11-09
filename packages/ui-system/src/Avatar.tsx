import React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
  status?: "online" | "offline" | "busy" | "away";
  statusPosition?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

const sizeClasses = {
  xs: "w-6 h-6 text-xs",
  sm: "w-8 h-8 text-sm",
  md: "w-10 h-10 text-base",
  lg: "w-12 h-12 text-lg",
  xl: "w-16 h-16 text-xl",
};

const shapeClasses = {
  circle: "rounded-full",
  square: "rounded-xl",
};

const statusClasses = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
};

const statusPositionClasses = {
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  name,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom-right",
  className = "",
  children,
  ...props
}) => {
  const hasImage = !!src;
  const initials = name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`relative inline-flex shrink-0 ${sizeClasses[size]} ${shapeClasses[shape]} overflow-hidden bg-gray-100 ${className}`}
      {...props}
    >
      {hasImage ? (
        <img src={src} alt={alt || name || "Avatar"} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white font-medium">
          {children || initials}
        </div>
      )}
      {status && (
        <span
          className={`absolute w-2.5 h-2.5 border-2 border-white rounded-full ${statusClasses[status]} ${statusPositionClasses[statusPosition]}`}
          aria-label={status}
        />
      )}
    </div>
  );
};
