import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-orange p-4 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold">BikeService</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-white transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/team" className="hover:text-white transition">
            Team
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
