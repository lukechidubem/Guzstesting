import type { NextPage } from "next";

const GudzProcess: NextPage = () => {
  return (
    <div className="flex items-start flex-col gap-10 mx-auto py-28  w-[1070px] h-[958px] text-left text-lg text-darkslategray font-helvetica-neue">
      <div className=" flex flex-col py-0 pr-16 pl-4 items-start justify-start gap-[24px] text-mid text-mediumslateblue">
        <div className="relative tracking-[0.2px] leading-[28px] font-bold">
          Gudz Process
        </div>
        <div className="flex flex-row pt-0 pb-px pr-[39.94061279296875px] pl-0 items-start justify-start text-19xl text-gray-300">
          <div className="relative tracking-[-0.2px] leading-[48px] font-bold flex items-center w-[690.06px] shrink-0">
            The way we work with our transport and logistics
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className=" rounded-3xl w-[1102px] h-[417px] object-cover"
          alt=""
          src="/rectangle-62@2x.png"
        />
        <div className="absolute bottom-14 left-[45%] flex items-center justify-start gap-[12px] z-50">
          <div className="relative rounded-[50%] bg-white w-2 h-2" />
          <div className="relative rounded-[50%] bg-gray-600 w-2 h-2" />
          <div className="relative rounded-[50%] bg-gray-600 w-2 h-2" />
          <div className="relative rounded-[50%] bg-gray-600 w-2 h-2" />
          <div className="relative rounded-[50%] bg-gray-600 w-2 h-2" />
        </div>
      </div>
      <div className="flex items-start gap-10">
        <div className="tracking-[0.2px] leading-[28px] font-light whitespace-pre-wrap flex items-center w-[490.95px]">
          <span className="[line-break:anywhere] w-full">
            <p className=" mb-5">
              Gudz fleet management feature allows you to track the location of
              your vehicles in real time, set up alerts for low fuel levels or
              unauthorized activity, and generate reports on your fleet's
              performance. This information can help you to optimize your
              routes, improve fuel efficiency, and reduce costs.
            </p>

            <p className="">{`Gudz fleet management feature allows you to track the location of your vehicles in real time, set up alerts for low  levels or unauthorized activity, and generate reports on your fleet's performance. `}</p>
          </span>
        </div>
        <div className=" tracking-[0.2px] leading-[28px] font-light flex items-center w-[490.95px]">
          Gudz fleet management feature allows you to track the location of your
          vehicles in real time, set up alerts for low fuel levels or
          unauthorized activity, and generate reports on your fleet's
          performance. This information can help you to optimize your routes,
          improve fuel efficiency, and reduce costs.
        </div>
      </div>
    </div>
  );
};

export default GudzProcess;
