
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  activePage?: string;
}

const Layout = ({ children, title, activePage }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop - always visible */}
      <div className="hidden md:block">
        <Sidebar activePage={activePage} />
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar for mobile - conditionally visible */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar activePage={activePage} />
      </div>

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header pageTitle={title} onOpenSidebar={toggleSidebar} />
        <main className="flex-1 overflow-y-auto bg-gps-lightgray">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
