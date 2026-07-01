"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Profile from "./Layout/Profile";
import { FaShoppingCart, FaSearch, FaHeart, FaUser } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import MenuTabs from "./MenuTabs";

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulating user login state

  return (
    <div className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-8 w-full">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 py-4">
            <FaShoppingCart className="text-[#f76411] text-3xl" />
            <div className="font-bold">
              <span className="text-3xl font-bold text-[#f23e14]">S</span>
              <span className="text-2xl font-bold text-orange-600">hop</span>
              <span className="text-3xl font-bold text-gray-800">K</span>
              <span className="text-3xl font-bold text-gray-800">ing</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`font-bold text-md ${
                pathname === "/" ? "text-[#f23e14]" : "text-black"
              }`}
            >
              Home
            </Link>

            {/* Categories */}
            <div className="relative group py-4">
              <button className="text-black flex items-center gap-2 font-bold">
                Categories
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              </button>

              <div className="absolute top-14 left-[-100px] w-[800px] bg-white rounded shadow-md hidden group-hover:block z-50">
                <MenuTabs />
              </div>
            </div>

            <Link
              href="/offers"
              className={`font-bold text-md ${
                pathname === "/offers" ? "text-[#f23e14]" : "text-black"
              }`}
            >
              Offers
            </Link>
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Right Menu */}
          <div className="flex items-center gap-6">

            {/* Language */}
            <div className="relative group py-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <img src="/english.png" alt="English" className="h-5 w-auto" />
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </div>

              <div className="absolute top-14 right-0 w-40 bg-white rounded shadow-md hidden group-hover:block z-50">
                <button className="flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-100">
                  <img src="/english.png" alt="English" className="h-5 w-auto" />
                  <span>English</span>
                </button>
              </div>
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="flex items-center gap-2 py-4">
              <FaHeart className="text-black" />
              <span className="text-gray-600 font-bold">Wishlist</span>
            </Link>

            {/* User */}
            <div className="relative group py-4">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaUser className="text-black text-xl" />
                <MdOutlineKeyboardArrowDown className="text-xl" />
              </div>

              <div className="absolute top-14 right-[-10px] w-52 p-3 bg-white rounded-md shadow-md hidden group-hover:block z-50">
                {!isLoggedIn ? (
                  <div className="flex flex-col py-3 items-center justify-center">
                    <Link
                      href="/register"
                      className="block py-2 px-3 bg-[#ff4f00cc] rounded-full text-white text-center"
                    >
                      Register your account
                    </Link>

                    <p className="py-2 text-center text-sm">or</p>

                    <Link
                      href={"/login"}
                      className="px-3 py-2 text-block text-center hover:text-[#f23e14] transition-colors rounded-full "
                    >
                      Login to your Account
                    </Link>
                  </div>
                ) : (
                  <Profile user={{ name: "Ata Pasha", phone: "123-456-7890",avatarUrl:"/profile.png" }} />
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;