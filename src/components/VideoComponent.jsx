import React from "react";
import VideoPlayer from "./VideoPlayer";
import Tabs from "./Tabs";
import CheckItem from "./CheckItem";
import checkIcon from "../Assets/Icons/check.svg";

function VideoComponent() {
  return (
    <div
      className="lg:mt-[118px] mt-14 lg:mx-[98px] mx-5 lg:px-[72px] px-6 lg:h-[623px] lg:py-0 py-10 bg-[#072F57] 
    flex justify-between items-center rounded-[5px]"
    >
      <div className="relative flex lg:justify-between lg:flex-row max-lg:w-full max-lg:h-full flex-col lg:items-start items-center gap-x-16">
        {/* video player */}

        <VideoPlayer />

        {/* tabs */}
        <Tabs>
          <div label="Buyer">
            <CheckItem icon={checkIcon} text="Post your requirements." />
            <CheckItem
              icon={checkIcon}
              text="Sit back for multiple suppliers to contact you."
            />
            <CheckItem
              icon={checkIcon}
              text="Choose among the suppliers based on the ratings and reviews."
            />
          </div>
          <div label="Supplier">
            <CheckItem
              icon={checkIcon}
              text="Complete your profile and get verified."
            />
            <CheckItem
              icon={checkIcon}
              text="Select service tags for relevant opportunities."
            />
            <CheckItem
              icon={checkIcon}
              text="Reach out to buyers and expand your business."
            />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default VideoComponent;
