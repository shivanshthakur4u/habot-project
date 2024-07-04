import React from "react";
import BackgroundImage from "../Assets/Images/Banner.png";
import { BsBriefcaseFill } from "react-icons/bs";
import InputBox from "./InputBox";
import { FaMapMarkerAlt } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="relative w-full h-[523px] overflow-hidden group">
      <img
        src={BackgroundImage}
        alt="Banner"
        className="w-full lg:max-h-[523px] h-full"
        style={{ objectPosition: "center top" }}
      />
      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center text-white text-center">
        <div className="lg:max-w-[937.94px] w-full flex flex-col gap-12">
          {/* heading */}
          <div className="lg:max-w-[935px] w-full">
            <h1 className="lg:text-[55px] lg:leading-[66px] text-3xl font-bold font-poppins">
              Are You a Supplier?
            </h1>
            <span className="lg:text-[55px] lg:leading-[66px] text-2xl font-poppins">
              Explore Matching Opportunities.
            </span>
          </div>
          {/* search */}
          <div className="flex lg:flex-row flex-col gap-2.5 rouded-[5px] w-full px-4">
            <InputBox
              icon={<BsBriefcaseFill size={20} />}
              placeholder="Search your required service here"
            />
            <InputBox
              icon={<FaMapMarkerAlt size={20} />}
              placeholder="Search your desired location here"
            />

            <button
              className="text-white bg-[#00732F]  border border-[#00732F] h-[50px] 
            rounded-[5px] px-7  text-center max-w-[117.94px] font-inter max-sm:self-center"
            >
              Search
            </button>
          </div>

          {/* post requirements */}
          <p className="text-lg font-poppins font-bold  -mt-[12px] max-sm:px-4 ">
            Are you a buyer?{" "}
            <a href="#home" className="font-light pl-1 underline"> Click here if you are looking to post a requirements</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
