import React from "react";
import BrandLogo from "../Assets/Images/Logo-white.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  const FooterText = [
    {
      id: 1,
      title: "Company",
      texts: ["About", "FAQ"],
    },
    {
      id: 2,
      title: "Terms",
      texts: ["Data privacy", "Terms", "Accessibility"],
    },
    {
      id: 3,
      title: "Related",
      texts: ["Find Buyer", "Feedback"],
    },
  ];

  const SocialIcons = [
    {
      id: 1,
      icon: <FaLinkedinIn />,
      link: "#home",
    },
    {
      id: 2,
      icon: <FaTwitter />,
      link: "#home",
    },
    {
      id: 3,
      icon: <FaFacebookF />,
      link: "#home",
    },
    {
      id: 4,
      icon: <FaInstagram />,
      link: "#home",
    },
  ];

  return (
    <footer
      className="mt-[110px] bg-[#123557] max-w-screen-2xl lg:h-[232px] h-full  
    flex lg:flex-row flex-col lg:items-center lg:justify-center max-lg:pb-10 max-lg:pt-10"
    >
      <div
        className="relative flex border-t border-t-[#FFFFFF33] 
         border-b border-b-[#FFFFFF33] lg:items-center lg:flex-row flex-col 
          lg:justify-between lg:h-[155px] lg:w-[1200px] w-full h-full max-lg:pb-20"
      >
        {/* left */}
        <div className="flex lg:flex-row  flex-col gap-10 py-11 lg:pl-6">
          {/* icon */}
          <div className="flex flex-col self-center">
            <div className="flex self-end">
              <img
                src={BrandLogo}
                alt="brand-logo"
                className="max-w-[206px] max-h-[40px]"
              />
            </div>
            {/* text */}
            <p
              className="text-white font-extralight font-poppins text-base 
            leading-8 absolute bottom-8 lg:bottom-3 lg:left-8 left-1/2 transform 
            -translate-x-1/2 lg:translate-x-0"
            >
              © R Singhania
            </p>
          </div>

          {/* footer menu */}
          <div className="flex gap-8 lg:gap-10 justify-center">
            {FooterText.map((menu) => (
              <div className="flex flex-col gap-2" key={menu?.id}>
                <h4 className="font-arial text-sm font-semibold text-white leading-6">
                  {menu?.title}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {menu?.texts?.map((text, index) => (
                    <div key={index}>
                      <a
                        href="#home"
                        className="font-inter text-white font-light text-sm leading-6"
                      >
                        {text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* right */}
        <div className="flex gap-4 max-lg:self-center max-lg:-mt-5">
          {SocialIcons?.map((social) => (
            <a
              key={social?.id}
              href={social?.link}
              className="rounded-full h-10 w-10 flex items-center opacity-90
             justify-center text-white border border-[#FFFFFF33]"
            >
              {social?.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
