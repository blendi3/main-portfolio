import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#10152e] text-white py-8 mt-20 flex flex-col items-center gap-4 rounded-t-xl">
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com/in/blendi-ivanja"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:blendiivanja2@gmail.com"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/blendi3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>

      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Blendi Ivanja. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
