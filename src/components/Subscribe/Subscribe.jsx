import React from "react";

const Subscribe = () => {
  return (
    <section className="absolute -bottom-[580px] w-full">
      <section className="text-center border-2 rounded-3xl p-5 bg-transparent   ">
        <div className="py-[88px] px-[]237px overflow-hidden relative rounded-2xl bg-white">
          <div className="absolute  left-0 bottom-0  md:w-[258px] md:h-[180px] w-[120px] h-[50px]  bg-[#239ed7] filter blur-[100px] opacity-[100%] " />

          <div className="absolute  right-0 top-0 md:w-[258px] md:h-[180px] w-[120px] h-[10px]  bg-[#c47816] filter blur-[100px] opacity-[80%]" />

          <h1 className="text-[32px] font-bold">Subscribe to our Newsletter</h1>
          <p className="text-xl text-[#131313] mt-4 mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center gap-4">
            <input
              type="text"
              className="py-[18px] pl-[30px] w-[400px]  rounded-xl border-2 border-[#BEBEBE]"
              name=""
              placeholder="Enter your email"
              id=""
            />
            <button className="py-[18px] px-[30px] cursor-pointer font-bold text-base bg-linear-65 bg-gradient-to-r from-[#F29CBC] to-[#F6CA50] rounded-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Subscribe;
