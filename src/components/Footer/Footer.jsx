import React from "react";
import logo from "../../assets/image/logo.png";

const Footer = () => {
  return (
    <footer>
      <section className=" bg-black  pt-[240px] px-[140px] mt-[378px]">
        <div className="flex justify-center ">
          <img className="w-[142px] h-[140px]" src={logo} alt="" />
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">About Us</h3>
            <span className="text-[#91949A]">
              <p>We are a passionate team</p>
              <p>dedicated to providing the best</p>
              <p>services to our customers.</p>
            </span>
          </div>
          <div className="text-white">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <span className="grid grid-rows-4  text-[#91949A]">
              <a className="hover:text-[#FDD835]" href="#">
                Home
              </a>
              <a className="hover:text-[#FDD835]" href="#">
                Services
              </a>
              <a className="hover:text-[#FDD835]" href="#">
                About
              </a>
              <a className="hover:text-[#FDD835]" href="#">
                Contact
              </a>
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <span className="text-base mt-4 text-[#91949A]">
              <p>Subscribe to newsletter for the</p>
              <p>latest updates</p>
            </span>
            <div className="flex items-center mt-5">
              <input
                className=" py-[14px] pl-[30px] rounded-l-xl  bg-white "
                type="email"
                name=""
                placeholder="Enter your Email"
                id=""
              />
              <button className="py-[14px] px-[30px] cursor-pointer font-bold text-base bg-linear-65 bg-gradient-to-r from-[#F29CBC] to-[#F6CA50] rounded-r-xl   ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[72px] text-center">
          <p className="text-base text-[#91949A] mt-[72px] border-t-2 border-[#91949A] py-8">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
