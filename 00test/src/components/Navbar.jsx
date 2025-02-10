import React from 'react';

function Navbar({ isLoggedIn, onAuthClick }) {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-purple-600">CampusThrift</h1>
            
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <input 
                type="search" 
                placeholder="Search for items..." 
                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
              />
              <svg 
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          {/* Navigation Items */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <svg 
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <img 
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </>
            ) : (
              <button 
                onClick={onAuthClick}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;