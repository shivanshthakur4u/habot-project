import React, { useState } from "react";
import BrandLogo from "../Assets/Images/Logo.png";
import { IoChevronDown } from "react-icons/io5";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import LoginButton from "./LoginButton";

const CommonPart = () => {
  return (
    <div className="flex lg:gap-9 gap-5 flex-col lg:flex-row">
      <div className="self-center">
        <a
          href="#home"
          className="text-[#6D6E71] text-[15.25px] leading-[24px] font-normal font-poppins"
        >
          Find Suppliers
        </a>
      </div>
      <div className="flex gap-1 items-center max-sm:self-center">
        <a
          href="#home"
          className="text-[#6D6E71] text-[14.25px] leading-[24px] font-normal font-poppins"
        >
          Find Service Tags
        </a>
        <span className="cursor-pointer">
          <IoChevronDown className="text-[#6D6E71]" size={16} />
        </span>
      </div>
      <div className=" max-sm:self-center">
      <LoginButton />
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <nav className="max-w-screen-2xl py-2.5 container mx-auto lg:pl-[68px] lg:pr-10 pl-5 pr-5 bg-white">
      <div className="flex justify-between items-center">
        {/* logo */}
        <div>
          <img
            src={BrandLogo}
            alt="brand-logo"
            className="h-[43px] w-[181px]"
          />
        </div>

        {/* mobile menu */}
        <div className="relative lg:hidden">
          {show ? (
            <RxCross1
              onClick={handleClick}
              className="cursor-pointer duration-300 transition-all"
              size={24}
            />
          ) : (
            <RxHamburgerMenu
              onClick={handleClick}
              className="cursor-pointer duration-300 transition-all"
              size={24}
            />
          )}
         
        </div>
        {show && (
            <div className="absolute min-w-[250px] h-[200px] top-12
             left-0 lg:hidden bg-white w-full z-50 shadow-lg p-4 items-center justify-center flex">
              <CommonPart />
            </div>
          )}
        {/* desktop menu items */}
        <div className="hidden lg:flex gap-8 items-center">
           <CommonPart/>
        </div>
      </div>
    </nav>
  );
};
