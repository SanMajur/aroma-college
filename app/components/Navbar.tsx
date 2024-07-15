"use client";
import Hamburger from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-red-900 text-white">
      <nav className="md:container mx-auto flex justify-between items-center relative px-4 pb-2">
        <div className="flex ml-auto gap-4 md:hidden text-white focus:outline-none flex-row-reverse items-center">
          <button className="flex flex-col items-center justify-center ">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            <span className="text-sm">{isOpen ? "CLOSE" : "MENU"}</span>
          </button>
          <button className=" mt-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <div className="flex flex-col items-center justify-center gap-2 mr-44 transition-all ease-in-out duration-500">
                <IoMdHome className="h-7 w-7 " />
                <span className="text-sm">HOME</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 transition ease-in-out duration-500">
                <GoSearch className="h-7 w-7 " />
                <span className="text-sm">SEARCH</span>
              </div>
            )}
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={`bg-black/30 ${
            isOpen
              ? "absolute top-[4.7rem] w-full right-0 left-0 h-screen md:hidden transition-all duration-500 ease-in-out"
              : " absolute top-[4.7rem] w-full right-0 left-[100%] h-screen md:hidden transition-all duration-500 ease-in-out"
          }`}
        >
          <ul
            className="block absolute right-0 bg-[#0b244d] w-80 h-screen shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/">
                Home
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/about">
                About
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/services">
                Services
              </Link>
            </li>
            <li className="px-4 hover:bg-gray-400 py-4 cursor-pointer border-b-2 border-gray-500 ">
              <Link className="" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
