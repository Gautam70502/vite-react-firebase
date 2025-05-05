
import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  User,
  FileSpreadsheet,
  Settings,
  FormInput,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const SidebarItem = ({ 
  icon: Icon, 
  label, 
  to, 
  active = false,
  onClick
}: { 
  icon: React.ElementType; 
  label: string; 
  to?: string; 
  active?: boolean;
  onClick?: () => void;
}) => {
  if (onClick) {
    return (
      <li>
        <button 
          onClick={onClick}
          className={`flex w-full items-center gap-3 px-4 py-2.5 rounded-md text-gray-600 hover:bg-gray-100`}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      </li>
    );
  }

  return (
    <li>
      <Link 
        to={to || "#"}
        className={`flex items-center gap-3 px-4 py-2.5 rounded-md ${
          active 
            ? "bg-blue-50 text-gps-blue" 
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <Icon size={20} />
        <span>{label}</span>
      </Link>
    </li>
  );
};

interface SidebarProps {
  activePage?: string;
}

const Sidebar = ({ activePage = 'dashboard' }: SidebarProps) => {
  const { logout } = useAuth();

  return (
    <div className="w-64 border-r border-gray-200 min-h-screen bg-white">
      <div className="p-4 border-b border-gray-200">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">GPS</span>
        </Link>
      </div>
      
      <div className="p-4">
        <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4">Main Menu</h2>
        <nav>
          <ul className="space-y-1">
            <SidebarItem
              icon={LayoutDashboard}
              label="Dashboard"
              to="/"
              active={activePage === 'dashboard'}
            />
            <SidebarItem
              icon={Users}
              label="Referrals"
              to="/referrals"
              active={activePage === 'referrals'}
            />
            <SidebarItem
              icon={Calendar}
              label="Events"
              to="/events"
              active={activePage === 'events'}
            />
            <SidebarItem
              icon={FileText}
              label="Reports"
              to="/reports"
              active={activePage === 'reports'}
            />
            <SidebarItem
              icon={MessageSquare}
              label="Testimonials"
              to="/testimonials"
              active={activePage === 'testimonials'}
            />
            <SidebarItem
              icon={User}
              label="Profile"
              to="/profile"
              active={activePage === 'profile'}
            />
            <SidebarItem
              icon={FormInput}
              label="GBS Application"
              to="/gbs-application"
              active={activePage === 'gbs-application'}
            />
          </ul>
        </nav>

        <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 mt-8">Resources</h2>
        <nav>
          <ul className="space-y-1">
            <SidebarItem
              icon={FileSpreadsheet}
              label="Weekly Slips"
              to="/weekly-slips"
              active={activePage === 'weekly-slips'}
            />
            <SidebarItem
              icon={Settings}
              label="Settings"
              to="/settings"
              active={activePage === 'settings'}
            />
          </ul>
        </nav>
        
        <h2 className="text-xs uppercase font-semibold text-gray-500 mb-4 mt-8">Account</h2>
        <nav>
          <ul className="space-y-1">
            <SidebarItem
              icon={LogOut}
              label="Logout"
              onClick={logout}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
