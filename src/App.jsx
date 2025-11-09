import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import News from './components/News';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Features />
      <News />
      <CTA />
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} MintQuest. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#news" className="hover:text-gray-900">News</a>
            <a href="#download" className="hover:text-gray-900">Download</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
