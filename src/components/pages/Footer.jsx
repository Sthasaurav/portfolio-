import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left mb-4 md:mb-0">© 2024 Saurav Shrestha. All rights reserved.</p>
        <div className="flex space-x-6">
          <a
            href="mailto:sthasaurav57@gmail.com"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="https://github.com/Sthasaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saurav-shrestha-b631231a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
