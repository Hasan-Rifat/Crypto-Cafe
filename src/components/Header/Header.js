import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <div className="bg-white flex static top-0 px-12 py-8 justify-center md:justify-between items-center">
      <div className="logo hidden md:block font-sans font-bold text-xl text-gray-600">
        <Link to="/">
          <span>Crypto Cafe</span>
        </Link>
      </div>
      <div className="menu">
        <nav className="text-xl md:flex gap-4">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="/coins">Coin</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
          <CustomLink to="/about">About</CustomLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
