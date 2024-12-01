import React from "react";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-2">
          {/* Logo */}
       
        </div>

      
        <div className="mt-4 text-sm">
          &copy; 2024 Bike Service Pro. All Rights Reserved.
        </div>

        {/* Up Arrow Button */}
        <a href="#top" className="absolute bottom-4 right-4 rounded-full bg-orange-500 p-3 text-white hover:bg-orange-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 13.293a1 1 0 011.414 0L10 17.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
