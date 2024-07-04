import React from "react";
import UserIcon from "../Assets/Icons/user-icon.svg";
import DocumentIcon from "../Assets/Icons/documnt-icon.svg";
import EditIcon from "../Assets/Icons/edit-icon.svg";
import QuoteIcon from "../Assets/Icons/quote-request.svg";
import ConnectIcon from "../Assets/Icons/connect-icon.svg";

function HowItWorks() {
  const BoxContents = [
    {
      id: 1,
      title: "Select Your Role and Sign Up",
      icon: UserIcon,
    },
    {
      id: 2,
      title: "Buyers Post Your Requirements",
      icon: DocumentIcon,
    },
    {
      id: 3,
      title: "Review, Select, and Contact the Best Suppliers",
      icon: DocumentIcon,
      width: "273px",
    },
    {
      id: 4,
      title:
        "Suppliers Complete your profile and get notified for opportunities",
      icon: EditIcon,
      width: "267px",
    },
    {
      id: 5,
      title: "Contact to Buyers and Share your Quote for the service",
      icon: QuoteIcon,
      width: "299px",
    },
    {
      id: 6,
      title: "Both the Parties can Connect and Make Business Leave a Feedback",
      icon: ConnectIcon,
      width: "306px",
    },
  ];

  return (
    <div className="lg:mt-[123px] mt-14 flex flex-col gap-[70px] justify-center items-center">
      {/* heading/para */}
      <div className="flex flex-col gap-5 items-center justify-center max-lg:px-5">
        <h3 className="text-[#222222] lg:text-[37.34px] text-4xl leading-[48px] font-bold">
          How it works?
        </h3>
        <p className="lg:max-w-[839px] w-full text-base lg:text-lg text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
      </div>
      {/* services */}
      <div className="grid lg:grid-cols-3 lg:mb-[70px] mb-8 grid-cols-1 max-lg:w-full">
        {/* box */}
        {BoxContents.map((content) => (
          <div
            key={content.id}
            className={`lg:w-[400px] w-[100%] h-[254px] flex flex-col items-center justify-center gap-10 ${
              content.id % 2 === 1 ? "bg-[#E8FBFF]" : "bg-white"
            }`}
          >
            <img src={content.icon} alt={content.title} />
            <div style={{ maxWidth: content.width || "206px" }}>
              <p className="lg:text-xl text-lg font-poppins font-medium text-center">
                {content.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
