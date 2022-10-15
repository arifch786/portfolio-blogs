import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <div className=" flex   xsm:pl-20 xsm:pr-20  h-24 bg-black xsm:justify-center text-white space-x-6 pl-20 pr-64 font-semibold justify-end items-center sm:h-20 sm:text-lg sm:space-x-4  sm:font-medium sm:justify-center sm:pl-10 sm:pr-10">
        {/* <div className=" flex p-64 sm:hidden">
        <Image
          src="/../public/assets/logo4.png"
          alt="/"
          width="60"
          height="60"
        />
      </div> */}
        <div className=" text-[#fe0000]">
          <Link href="/Home">
            <a>Home</a>
          </Link>
        </div>
        <div className="hover hover:text-[#fe0000] hover:font-normal">
          <Link href="/About">
            <a>About</a>
          </Link>
        </div>
        <div className="hover hover:text-[#fe0000] hover:font-normal">
          <Link href="/Portfolio">
            <a>Portfolio</a>
          </Link>
        </div>
        <div className="hover hover:text-[#fe0000] hover:font-normal">
          <Link href="/Blogs">
            <a>Blogs</a>
          </Link>
        </div>
        <div className="hover hover:text-red-600 hover:font-normal">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
