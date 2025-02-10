import React from 'react';

function FloatingButtons() {
  return (
    <>
      {/* Add Product Button */}
      <button className="fixed right-6 bottom-6 bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition-colors">
        <svg
          className="h-6 w-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 4v16m8-8H4" />
        </svg>
      </button>

      {/* Support Chat Button */}
      <button className="fixed left-6 bottom-6 bg-white text-purple-600 px-4 py-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span>Chat with Support</span>
      </button>
    </>
  );
}

export default FloatingButtons;