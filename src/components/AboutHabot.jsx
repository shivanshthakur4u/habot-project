import React from "react";
import Arrow from "../Assets/Icons/Arrow.svg";

function AboutHabot() {
  const states = [
    { id: 1, name: "Abu Dhabi" },
    { id: 2, name: "Dubai" },
    { id: 3, name: "Sharjah & Ajman" },
    { id: 4, name: "Fujairah" },
    { id: 5, name: "Ras Al Khaimah" },
    { id: 6, name: "Umm Al Quwain" },
  ];

  return (
    <div className="lg:mt-24 mt-12 flex xl:flex-row flex-col max-lg:gap-6 gap-8 justify-between lg:px-[98px] px-5 items-center">
      {/* Left side text/para */}
      <div className="flex flex-col lg:gap-9 gap-6">
        <h2 className="text-[37.34px] leading-10 font-bold font-poppins">
          Ready to dive into <span className="text-[#271555]">HABOT?</span>
        </h2>
        <p className="lg:max-w-[620px] w-full font-light text-[17.16px] leading-7">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button
          className="rounded-[5px] lg:w-[317px] w-full max-lg:px-5 h-14 bg-[#00732F] text-white
         text-lg font-bold flex items-center justify-center transition 
         duration-300 ease-out hover:bg-opacity-75 hover:text-opacity-75 pl-7"
        >
          <p>Sign up Today!</p>
          <img src={Arrow} alt="arrow" className="pl-9" />
        </button>
      </div>

      {/* States layout */}
      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-6 grid-cols-1 max-lg:w-full">
        {states.map((state) => (
          <button
            key={state.id}
            className="relative lg:w-[260px] w-full h-16 border border-[#E7760D] rounded-[5px] 
            flex items-center justify-center hover:bg-[#E7760D] text-[#3E3E3E] font-inter text-lg leading-8 
            font-medium hover:text-white group"
          >
            <p>{state.name}</p>
            <span
              className="absolute right-8 top-1/2 transform
             -translate-y-1/2 opacity-0 group-hover:opacity-100 
             transition-opacity duration-300"
            >
              <img src={Arrow} alt="arrow" className="w-full h-full" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AboutHabot;
