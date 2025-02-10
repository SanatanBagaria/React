import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import FloatingButtons from './components/FloatingButtons';
import AuthModal from './components/AuthModal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        isLoggedIn={isLoggedIn} 
        onAuthClick={() => setIsAuthModalOpen(true)} 
      />
      <main className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <ProductGrid />
      </main>
      <FloatingButtons />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={() => setIsLoggedIn(true)}
      />
    </div>
  );
}

export default App;