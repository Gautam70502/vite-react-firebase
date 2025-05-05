
import React, { ReactNode } from 'react';

interface StatCardProps {
  icon?: ReactNode;
  iconBgColor?: string;
  value: string | number;
  label: string;
  subtitle?: string;
  actions?: ReactNode;
}

const StatCard = ({ icon, iconBgColor = "bg-blue-100", value, label, subtitle, actions }: StatCardProps) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          {icon && (
            <div className={`${iconBgColor} p-2 rounded-full`}>
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold">{value}</h3>
            <p className="text-sm text-gray-500">{subtitle || label}</p>
          </div>
        </div>
      </div>
      
      {actions && (
        <div className="mt-4">
          {actions}
        </div>
      )}
    </div>
  );
};

export default StatCard;
