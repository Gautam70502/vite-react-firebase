
import React, { ReactNode } from 'react';

interface QuickActionButtonProps {
  icon: ReactNode;
  label: string;
  iconBgColor?: string;
  onClick?: () => void;
}

const QuickActionButton = ({ icon, label, iconBgColor = "bg-blue-100", onClick }: QuickActionButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 w-full transition-colors"
    >
      <div className={`${iconBgColor} p-2 rounded-md mr-3`}>
        {icon}
      </div>
      <span className="text-sm text-gray-700">{label}</span>
    </button>
  );
};

export default QuickActionButton;
