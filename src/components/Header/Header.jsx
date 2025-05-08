import { Profiler } from "react";
import logo from "../../assets/image/logo.png";
import { FaBitcoin } from "react-icons/fa";

const Header = ({ addCoin }) => {
  return (
    <header className="flex justify-between items-center mt-12">
      <img src={logo} alt="" />
      <div className="">
        <div className="flex gap-12 items-center">
          <a className="hover:text-[#FDD835]" href="">
            Home
          </a>
          <a className="hover:text-[#FDD835]" href="">
            Fixture
          </a>
          <a className="hover:text-[#FDD835]" href="">
            Teams
          </a>
          <a className="hover:text-[#FDD835]" href="">
            Schedules
          </a>
          <div className="flex items-center gap-2 py-4 px-5 border-2 border-[#D2D2D2] rounded-xl">
            <p id="addFreeCoin">{addCoin}</p>
            <span>Coin</span>
            <span className="text-orange-400">
              <FaBitcoin />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
