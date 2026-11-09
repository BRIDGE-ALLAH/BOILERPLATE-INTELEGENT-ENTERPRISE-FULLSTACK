import React from "react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    href?: string;
    icon?: React.ReactNode;
  }>;
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>,
  className = "",
}) => {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">{separator}</span>}
            {item.href ? (
              <a href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5">
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-medium flex items-center gap-1.5" aria-current={index === items.length - 1 ? "page" : undefined}>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
