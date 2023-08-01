import React from "react";
import { motion } from "framer-motion";
import NavBar from "./nav-bar";
import HeroImage from "./hero-image";
import HeroAnimation from "./heroAnimation";

const Hero: React.FC = () => {
  return (
    <div
      className=" text-white py-4 h-[763px]"
      style={{
        background: "url(/image-23@2x.png)",

        // flexShrink: "0",
      }}
    >
      <HeroAnimation />

      <NavBar />
      <div className="absolute top-[398px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] w-[100%] h-[365px]" />
      <div className="flex items-center justify-end gap-9  text-white mt-14">
        <div className="flex items-start   flex-col [-webkit-background-clip:text] -mt-28 z-20 gap-8">
          <div
            className="flex flex-col text-[91px] text-zinc-900 font-bold "
            style={{
              //   background:
              //     "linear-gradient(141deg, #000 0%, rgba(0, 0, 0, 0.40) 100%)",
              backgroundClip: "text ",
              color:
                "linear-gradient(101.98deg, #000000 0%, rgba(0, 0, 0, 0.4) 76.49%)",
              fontFamily: "Helvetica Neue",
              lineHeight: "93px",
            }}
          >
            <span>Logistics</span>
            <span>solution for</span>
            <span>your business</span>
          </div>
          <div className="w-[482px] text-[#425466]">
            Gudz is the perfect solution for businesses of all sizes that need
            to streamline their logistics operations. With a wide range of B2B
            and B2C services.
          </div>

          <div className=" leading-[24px] text-white rounded-41xl bg-black w-[135px] h-10 font-medium flex items-center justify-center gap-2">
            <div>Learn More</div>
            <img
              className="w-2.5 h-2.5 overflow-hidden"
              alt=""
              src="/svg.svg"
            />
          </div>
        </div>

        <div className="z-20">
          <img className=" " alt="" src="/Screens.png" />
          {/* <HeroImage /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
