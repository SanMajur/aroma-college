import React from "react";
import Image from "next/image";
import LogoImg from "../../public/assets/images/transparentLogo.png";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex flex-col mt-20 px-4">
      <Link href="/" className="flex items-center gap-2 mt-8">
        <Image src={LogoImg} alt="logo" width={110} height={80} />
        <div className="flex gap-2 flex-col items-center">
          <h2 className="text-4xl font-bold text-center text-red-900">
            Aroma College
          </h2>
          <h2 className="text-xl text-left"> of Hospitality and Tourism</h2>
        </div>
      </Link>
      <div className="flex flex-col gap-4 my-8">
        <button className="border-2 border-red-900 py-1.5 text-red-900 hover:bg-red-800 hover:text-white">
          Visit
        </button>
        <button className="bg-red-800 py-1.5 text-white hover:bg-red-700">
          Apply
        </button>
      </div>
    </div>
  );
}
