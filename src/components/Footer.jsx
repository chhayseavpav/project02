import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-lg mr-10">
              KH Store
            </Link>
          </div>
          <div className="flex-grow md:flex md:items-center">
            <div className="md:flex-grow">
              <Link
                to="/"
                className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white mr-10"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white mr-10"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block mt-4 md:inline-block md:mt-0 text-gray-500 hover:text-white mr-10"
              >
                Contact
              </Link>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500">
                Phone: <a href="#!">010 777 999</a>
              </p>
              <p className="text-gray-500">
                Email: <a href="#!">khstore@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
