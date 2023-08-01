import type { NextPage } from "next";

const WhyGudz: NextPage = () => {
  return (
    <div className="flex items-center flex-col gap-10 mx-auto  w-full py-32  h-[700px]  text-left text-sm text-white font-helvetica-neue bg-[#0A2540]">
      <div className=" w-[1028px] h-[410px]">
        <div className=" text-mid tracking-[0.2px] leading-[28px] font-bold text-deepskyblue flex items-center h-[27.99px]">
          Why Gudz
        </div>
        <div className=" text-19xl tracking-[-0.2px] leading-[48px] font-bold flex items-center w-[720.87px] h-[95.98px] mt-7 mb-28">
          Logistics solution that gives businesess peace of mind
        </div>
        <div className="flex items-start justify-around mt-28">
          <div className=" w-[280.25px] h-[127.5px]">
            <div className="flex items-center gap-5">
              <div className=" bg-white w-px h-[15px]" />
              <div className=" tracking-[0.2px] leading-[24px] font-bold flex items-center w-[240.94px] h-[23.99px]">
                Meet business needs of all sizes
              </div>
            </div>
            <div className="pl-5 text-mini tracking-[0.2px] leading-[24px] flex items-center w-[240.25px] h-[96.98px] text-lightgray">
              <span className="[line-break:anywhere] w-full">
                <span className="font-light">{`We have a `}</span>
                <span className="font-bold text-gray-400">
                  wide range of services
                </span>
                <span className="font-light">
                  , including to streamline their logistics operations and
                  improve their customer service.
                </span>
              </span>
            </div>
          </div>
          <div className=" w-[280.62px] h-[140.97px]">
            <div className="flex items-center gap-5">
              <div className=" bg-white w-px h-[15px]" />
              <div className=" tracking-[0.2px] leading-[24px] font-bold flex items-center w-[240.95px] h-[23.99px]">
                Fastest-improving platform
              </div>
            </div>
            <div className="pl-5 tracking-[0.2px] leading-[24px] flex items-center w-[240.62px] h-[96.98px] text-lightgray">
              <span className="[line-break:anywhere] w-full">
                <span className="font-light">{`We release `}</span>
                <span className="font-bold text-white">
                  hundreds of features
                </span>
                <span className="font-light">
                  {" "}
                  and improvements each year to help businesses manage their
                  logistics.
                </span>
              </span>
            </div>
          </div>
          <div className=" w-[280.22px] h-[139.5px]">
            <div className="flex items-center gap-5">
              <div className=" bg-white w-px h-[15px]" />
              <div className=" tracking-[0.2px] leading-[24px] font-bold flex items-center w-[240.95px] h-[23.99px]">
                Excellent customer service
              </div>
            </div>
            <div className="pl-5 text-mini tracking-[0.2px] leading-[24px] flex items-center w-[240.22px] h-[95.98px] text-lightgray">
              <span className="[line-break:anywhere] w-full">
                <span className="font-light">{`We provide an excellent team of experienced customer service professionals available `}</span>
                <span className="font-bold text-white">24/7 to help</span>
                <span className="font-light"> businesses.</span>
              </span>
            </div>
          </div>
          <div className="w-[280.22px] h-[139.5px]">
            <div className="flex items-center gap-5">
              <div className=" bg-white w-px h-[15px]" />
              <div className=" tracking-[0.2px] leading-[24px] font-bold flex items-center w-[240.96px] h-[23.99px]">
                Intelligent optimizations
              </div>
            </div>
            <div className="pl-5 text-mini tracking-[0.2px] leading-[24px] flex items-center w-[240.22px] h-[95.98px] text-lightgray">
              <span className="[line-break:anywhere] w-full">
                <span className="font-light">{`Our machine learning models train on `}</span>
                <span className="font-bold text-white">thousands</span>
                <span className="font-light">
                  {" "}
                  of data points and help improve efficiency of deliveries.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGudz;
