// components/Layout.jsx
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an auth context
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <div className="h-screen bg-[#E5E7EB]">
      <div className="flex h-full">
        <Sidebar logout={logout} />
        
        {/* Mobile menu toggle button */}
        <div className="lg:hidden" x-data="{ isOpen: false }">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {/* Hamburger icon */}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-neutral-800/80 backdrop-blur-lg">
            {/* Mobile menu content */}
          </div>
        )}

        <main className="flex-1 overflow-y-auto">
          <Navbar />
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;