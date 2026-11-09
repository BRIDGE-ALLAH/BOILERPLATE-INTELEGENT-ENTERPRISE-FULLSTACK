import React from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-gray-900",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-gray-900",
  left: "left-full top-1/2 -translate-y-1/2 border-l-gray-900",
  right: "right-full top-1/2 -translate-y-1/2 border-r-gray-900",
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 200,
  className = "",
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const show = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const childWithEvents = React.cloneElement(children, {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
  });

  if (!isVisible) return childWithEvents;

  const tooltip = (
    <div
      className={`fixed z-50 ${positionClasses[position]} ${className}`}
      role="tooltip"
    >
      <div className="px-3 py-1.5 text-sm text-white bg-gray-900 rounded-lg shadow-lg whitespace-nowrap">
        {content}
      </div>
      <div
        className={`absolute w-0 h-0 border-4 border-transparent ${arrowClasses[position]}`}
      />
    </div>
  );

  return createPortal(<>{childWithEvents}{tooltip}</>, document.body);
};
