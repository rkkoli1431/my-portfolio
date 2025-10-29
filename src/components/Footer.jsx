import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
        <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;