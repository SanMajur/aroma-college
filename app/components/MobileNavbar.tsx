"use client";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import Accordion from "./Accordion";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-red-900 text-white fixed top-0 right-0 left-0">
      <nav className="md:container mx-auto flex justify-between items-center relative px-4 pb-2">
        <div className="flex ml-auto gap-4 md:hidden text-white focus:outline-none flex-row-reverse items-center">
          <button className="flex flex-col items-center justify-center">
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
            <span className="text-sm">{isOpen ? "CLOSE" : "MENU"}</span>
          </button>
          <button className=" mt-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <Link
                href="/"
                className="flex flex-col items-center justify-center gap-2 mr-44 transition-all ease-in-out duration-500"
              >
                <IoMdHome className="h-7 w-7 " />
                <span className="text-sm">HOME</span>
              </Link>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 transition ease-in-out duration-500">
                <GoSearch className="h-7 w-7" />
                <span className="text-sm">SEARCH</span>
              </div>
            )}
          </button>
        </div>
        {/* Mobile Nav */}
        <div
          className={`bg-black/30 flex flex-col ${
            isOpen
              ? "absolute top-[4.7rem] w-full right-0 left-0 h-screen md:hidden transition-all duration-500 ease-in-out"
              : " absolute top-[4.7rem] w-full right-0 left-[100%] h-screen md:hidden transition-all duration-500 ease-in-out"
          }`}
        >
          <div className="flex flex-col absolute right-0 bg-[#0b244d] w-80 h-screen shadow-sm">
            <div className="bg-white px-4">
              <form className="flex justify-between items-center">
                <input
                  type="text"
                  placeholder="Search this site"
                  className="flex-1 py-3 px-1 outline-none text-gray-800"
                />
                <button className="">
                  <MdSearch className="h-8 w-8 bg-white text-gray-800" />
                </button>
              </form>
            </div>
            <ul className="block ">
              <li>
                <Accordion title="Admission" />
              </li>
              <li>
                <Accordion title="Academics" />
              </li>
              <li>
                <Accordion title="Student Life" />
              </li>
              <li>
                <Accordion title="About" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
