import banner from "../../assets/image/banner-main.png";

const BannerSection = ({ coinHandler, alertHandle }) => {
  return (
    <section>
      <div className="text-center relative bg-[#131313] overflow-hidden py-16 px-[175px] rounded-3xl mt-6">
        <div className="absolute md:bottom-[-50px] md:left-0 -bottom-10  md:w-[200px] md:h-[280px] w-[120px] h-[85px]  bg-[#8AABEC] filter blur-[140px] opacity-[100%] "></div>

        <div className="absolute md:right-[-50px] right-0 top-0 md:w-[258px] md:h-[280px] w-[120px] h-[85px]  bg-[#EAACAD56] filter blur-[70px] opacity-[100%]"></div>

        <img className="mx-auto" src={banner} alt="" />
        <h2 className="font-bold text-[40px] text-white mt-6">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="font-medium text-2xl text-[#B8B8B8] mt-4">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border-2 w-fit p-2 transparent ease-in-out divide-y-reverse border-[#E7FE29] rounded-xl mx-auto mt-6">
          {/* Claim free coin */}
          <button
            className="bg-[#E7FE29] hover:bg-yellow-100 transition-colors   ease-in-out py-[14px] px-5 rounded-xl font-bold cursor-pointer "
            onClick={() => coinHandler(1000000)}
            onClickCapture={alertHandle}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
