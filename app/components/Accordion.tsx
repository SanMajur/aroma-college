import Link from "next/link";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Accordion({ title }: { title: any }) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="">
      <button
        className={`flex justify-between items-center w-full px-4 py-2 ${
          accordionOpen ? "bg-[#6f8eb2] px-4 py-2" : "hover:bg-[#6f8eb2]"
        }`}
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <span>{title}</span>
        {accordionOpen ? (
          <span
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          >
            <FaMinus />
          </span>
        ) : (
          <span
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-90"
            }`}
          >
            <FaPlus />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out 
        ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 bg-[#6f8eb2]"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden flex flex-col gap-1">
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">Home</Link>
          </li>
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">About</Link>
          </li>
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">Contact</Link>
          </li>
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">Services</Link>
          </li>
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">Courses</Link>
          </li>
          <li className="hover:bg-[#1e5288] px-8 block py-2">
            <Link href="">Downloads</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
