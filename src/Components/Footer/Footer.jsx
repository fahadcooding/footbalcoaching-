// import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";
import prelogo from "../../assets/png/prelogo.png";
import { Link } from "react-router-dom";
import fb from "../../assets/png/fb.png";
import instagram from "../../assets/png/instagram.png";
import x from "../../assets/png/x.png";

const useLink = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "About Us",
    link: "#",
  },
  {
    name: "Privacy Policy",
    link: "#",
  },
  {
    name: "How It Works",
    link: "#",
  },
];

// const contact = [
//   { name: "info@website.com" },
//   {
//     name: "1-100-100-300",
//   },
//   {
//     name: "3500 Root Main Rd  Street Root, CA ",
//   },
// ];
const icons = [
  { image: fb, link: "#" },
  { image: instagram, link: "#" },
  { image: x, link: "#" },
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#D9D9D9]">
        <div className="flex gap-[290px] pt-[60px] mx-auto w-[85%] ">
          <div className="">
            <img src={prelogo} alt="logo" />
            <p className="pt-[30px]">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry.
            </p>
          </div>
          <div>
            <h1 className="text-[#49BBBD] text-[25px] pb-[30px] ">
              Useful Links
            </h1>
            <div className="flex flex-col text-[18px] gap-[15px] font-regular items-center">
              {useLink.map((link, index) => (
                <Link key={index} to={link.link}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex flex-col  gap-[15px]">
            <h1 className="text-[#49BBBD] text-[25px] text-center pb-[17px] ">
              Contact Us
            </h1>
            <h4 className="text-[18px] font-regular text-center">
              info@website.com
            </h4>
            <h4 className="text-[18px] font-regular text-center">
              1-100-100-300
            </h4>
            <h4 className="text-[18px] font-regular text-center">
              3500 Root Main Rd <br /> Street Root, CA
            </h4>
            <div className="flex justify-between">
              {icons.map((icon, index) => (
                <Link key={index}>
                  <img src={icon.image} alt="icons" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#d9d9d9]">© Copyright websiteurl.com</div>
    </>
  );
};

export default Footer;
