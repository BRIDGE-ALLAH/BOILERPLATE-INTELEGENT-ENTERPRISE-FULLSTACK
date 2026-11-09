import React from "react";
import { createPortal } from "react-dom";

interface DropdownProps {
  trigger: React.ReactElement;
  items: Array<{
    label: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
    danger?: boolean;
    divider?: boolean;
  }>;
  position?: "bottom" | "top" | "left" | "right";
  align?: "start" | "center" | "end";
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  position = "bottom",
  align = "start",
  className = "",
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const triggerRef = React.useRef<HTMLElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (triggerRef.current?.contains(e.target as Node) || dropdownRef.current?.contains(e.target as Node)) return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownContent = (
    <div
      ref={dropdownRef}
      className={`
        fixed z-50 min-w-[160px] bg-white rounded-lg shadow-lg border border-gray-200 py-1
        ${className}
      `}
      role="menu"
    >
      {items.map((item, index) => (
        item.divider ? (
          <hr key={`divider-${index}`} className="my-1 border-gray-100" role="separator" />
        ) : (
          <button
            key={item.label}
            onClick={() => { if (item.onClick) item.onClick(); setIsOpen(false); }}
            disabled={item.disabled}
            className={`
              w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors
              ${item.danger ? "text-red-600 hover:bg-red-50" : "text-gray-700 hover:bg-gray-50"}
              ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
            role="menuitem"
          >
            {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
            {item.label}
          </button>
        )
      ))}
    </div>
  );

  const triggerWithEvents = React.cloneElement(trigger, {
    ref: triggerRef,
    onClick: (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsOpen(!isOpen);
      trigger.props.onClick?.(e);
    },
    "aria-haspopup": "true",
    "aria-expanded": isOpen,
  });

  if (!isOpen) return triggerWithEvents;

  return createPortal(<>{triggerWithEvents}{dropdownContent}</>, document.body);
};
