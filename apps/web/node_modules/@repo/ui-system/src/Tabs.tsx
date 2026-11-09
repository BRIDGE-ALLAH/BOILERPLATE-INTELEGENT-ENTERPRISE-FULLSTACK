import React from "react";

interface TabsProps {
  tabs: Array<{ id: string; label: string; icon?: React.ReactNode; disabled?: boolean }>;
  activeTab: string;
  onChange: (id: string) => void;
  variant?: "line" | "enclosed" | "soft";
  fullWidth?: boolean;
  className?: string;
}

const variantClasses = {
  line: "border-b border-gray-200",
  enclosed: "bg-gray-100 rounded-lg p-1",
  soft: "",
};

const tabVariantClasses = {
  line: "border-b-2 border-transparent hover:border-gray-300 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600",
  enclosed: "rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900",
  soft: "rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600",
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = "line",
  fullWidth = false,
  className = "",
}) => {
  return (
    <div className={className} role="tablist" aria-orientation="horizontal">
      <div className={`flex ${fullWidth ? "w-full" : ""} ${variantClasses[variant]}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => !tab.disabled && onChange(tab.id)}
            disabled={tab.disabled}
            className={`
              flex items-center justify-center gap-1.5 font-medium text-sm transition-all
              ${fullWidth ? "flex-1" : "px-4"}
              py-3 ${tabVariantClasses[variant]}
              ${tab.disabled ? "opacity-50 cursor-not-allowed" : "hover:text-gray-700"}
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            `}
            data-state={activeTab === tab.id ? "active" : "inactive"}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={`panel-${tab.id}`}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeTab !== tab.id}
          className="mt-4"
        >
          {/* Tab content rendered by parent */}
        </div>
      ))}
    </div>
  );
};
