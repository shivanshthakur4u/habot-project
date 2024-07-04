import React from "react";

function FindYou() {
  return (
    <div
      className="bg-[#E8FBFF] h-[254px]
     lg:mt-[145px] mt-16 w-full max-w-screen-2xl flex lg:justify-between justify-center
      lg:flex-row flex-col lg:pl-[168px] lg:pr-[260px] items-center gap-y-10"
    >
      {/* text */}
      <div>
        <h3 className="leading-10 lg:text-[37.34px] text-3xl font-poppins font-semibold">
          <span>Let Suppliers </span>
          <span className=" border-b-4 border-b-[#EB7150]">Find You</span>
        </h3>
      </div>
      {/* button */}
      <button
        className="bg-[#EB7150] h-[54px] max-w-[216px] text-center 
      text-[18px] text-white leading-6 font-poppins font-semibold rounded-[5px] px-[52px]"
      >
        Get Verified
      </button>
    </div>
  );
}

export default FindYou;
