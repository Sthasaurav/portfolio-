import React from 'react';
import { FaGithub, FaLinkedin,FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-center md:text-left mb-4 md:mb-0 text-sm">
          © 2024 Saurav Shrestha. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="mailto:sthasaurav57@gmail.com"
            className="flex items-center hover:text-gray-400 transition-colors duration-300"
          >
            <HiOutlineMail size={24} className="mr-2" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Sthasaurav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={24} className="mr-2" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/saurav-shrestha-b631231a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} className="mr-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href=""
            target=""
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-400 transition-colors duration-300"
          >
            <FaPhoneAlt size={24} className="mr-2" />
            <span>9813615835</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
