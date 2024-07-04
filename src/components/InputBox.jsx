import React from "react";
function InputBox({icon, placeholder}) {
  return (
    <label className="flex items-center gap-2 py-3 px-4 bg-white
     text-[#E7760D] rounded-[5px] lg:w-[400px] w-full h-[50px]">
       {icon}
      <input
        type="text"
        className="grow outline-none font-poppins
     text-black placeholder:text-[#6B7280] placeholder:text-[15.13px] placeholder:font-poppins
      placeholder:leading-[22.69px]"
        placeholder={placeholder}
      />
    </label>
  );
}

export default InputBox;
