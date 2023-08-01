import type { NextPage } from "next";

const NavBar: NextPage = () => {
  return (
    <div className="absolute flex justify-around items-center h-11 w-[1483px] mx-auto text-center text-9xl text-white font-league-spartan z-50">
      <div className=" w-[60px] h-[25px] overflow-hidden">
        <div className=" w-[60px] h-[25px]">
          <b className=" flex items-center justify-center">gudz</b>
        </div>
      </div>
      <div className=" flex flex-row py-2.5 px-5 items-center justify-end gap-[60px] text-sm font-helvetica-neue font-bold">
        <div className="cursor-pointer leading-[24px]  text-right">
          Logistics
        </div>
        <div className="cursor-pointer leading-[24px] ">Services</div>
        <div className="cursor-pointer leading-[24px] ">About</div>
        <div className="cursor-pointer leading-[24px] ">Contact Us</div>
      </div>
      <button className="flex items-center justify-center gap-3 cursor-pointer [border:none] p-0 bg-gray-500 font-bold  rounded-base-5 w-[94.31px] h-[33px]">
        <div className="text-mini leading-[24px] font-bold font-helvetica-neue text-white text-left">
          Sign in
        </div>
        <img className="w-2.5 h-2.5 overflow-hidden" alt="" src="/svg.svg" />
      </button>
    </div>
  );
};

export default NavBar;
