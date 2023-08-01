import type { NextPage } from "next";

const Clients: NextPage = () => {
  const clients = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="max-w-[1200px] flex items-center gap-6 flex-wrap mx-auto my-10 px-28">
      {clients.map((item) => {
        return (
          <img
            key={item}
            className=" top-[837.5px] left-[217px] w-[200px] h-[40px] my-5"
            alt=""
            src="/svg.png"
          />
        );
      })}
    </div>
  );
};

export default Clients;
