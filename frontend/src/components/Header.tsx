
import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  pageTitle: string;
  onOpenSidebar?: () => void;
}

const Header = ({ pageTitle, onOpenSidebar }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center">
        <button
          className="p-2 mr-2 md:hidden rounded-md hover:bg-gray-100"
          onClick={onOpenSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-semibold">{pageTitle}</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search for Results..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
        <div className="relative">
          <Bell className="text-gray-600 cursor-pointer" />
          <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">3</span>
        </div>
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
