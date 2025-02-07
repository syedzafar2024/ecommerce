import Link from "next/link";
import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-mybatch w-[1440px] h-[105px] gap-80 px-6 py-5 flex items-center justify-center">
      {/* Logo */}
      <div className="flex items-center">
        <div className=""></div> {/* image logo*/}
      </div>

      {/* Navigation Links */}

      <ul className="hover:text-gray-500 flex space-x-14 text-sm font-medium text-gray-800">
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/shop">Shop</Link>
        </li>
        {/* <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/singleproduct">singleproduct</Link>
        </li> */}
        {/* <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/cartsidebar">cartsidebar</Link>
        </li> */}
        {/* <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/myaccount">myaccount</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/Checkout">Checkout</Link>
        </li> */}
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/Cart">Cart</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/Contact">Contact</Link>
        </li>
        <li className="hover:text-gray-500 cursor-pointer">
          <Link href="/Blog">Blog</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex items-center space-x-10 text-lg text-gray-800">
        <FaUser className="hover:text-gray-500 cursor-pointer" />
        <FaSearch className="hover:text-gray-500 cursor-pointer" />
        <FaHeart className="hover:text-gray-500 cursor-pointer" />
        <FaShoppingCart className="hover:text-gray-500 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
