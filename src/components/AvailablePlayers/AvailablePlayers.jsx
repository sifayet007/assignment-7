import { useEffect, useState } from "react";
import AvailPlayer from "../AvailPlayer/AvailPlayer";

import React from "react";
import Selected from "../SelectedSection/Selected";
import toast from "react-hot-toast";

const AvailablePlayers = ({ addCoin, setAddCoin }) => {
  const [players, setPlayers] = useState([]);
  const [selectPlyer, setSelectPlyer] = useState([]);
  const [getToggle, steToggle] = useState(true);

  useEffect(() => {
    fetch("feckData.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  useEffect(() => {}, []);

  const toggleColor = (toggle) => {
    steToggle(toggle);
  };

  const handlerAddSelectPlyer = (sePlyer, price) => {
    if (addCoin >= price) {
      setSelectPlyer([...selectPlyer, sePlyer]);
      toast.success("Plyer add Successful");
    }

    if (addCoin < price || addCoin < 0) {
      toast.error("Not enough money to buy this player Claim some credit");
    }
    addCoin > price ? setAddCoin(addCoin - price) : "";
  };

  const handleRemovePlyer = (id) => {
    const removePlyer = selectPlyer.filter((player) => player.id !== id);

    setSelectPlyer(removePlyer);
  };
  //   console.log(selectPlyer);

  return (
    // Available Players section
    <div>
      <div className="flex justify-between mt-20">
        <h3 className="font-bold text-[28px]">Available Players</h3>
        <div>
          <button
            className={`px-7 py-3 font-bold items-center cursor-pointer rounded-l-2xl ${
              getToggle ? "bg-[#E7FE29]" : "bg-white"
            }`}
            onClick={() => toggleColor(true)}
          >
            Available
          </button>
          <button
            className={`px-7 py-3 font-bold items-center cursor-pointer rounded-r-2xl ${
              getToggle === true ? "bg-white" : "bg-[#E7FE29]"
            }`}
            onClick={() => toggleColor(false)}
          >
            Selected
          </button>
        </div>
      </div>
      {/* 12 player section */}
      {getToggle ? (
        <section>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mt-8 gap-6 ">
            {players.map((player, idx) => (
              <AvailPlayer
                key={idx}
                player={player}
                handlerAddSelectPlyer={handlerAddSelectPlyer}
              ></AvailPlayer>
            ))}
          </div>
        </section>
      ) : (
        <Selected
          selectPlyer={selectPlyer}
          handleRemovePlyer={handleRemovePlyer}
        ></Selected>
      )}
    </div>
  );
};

export default AvailablePlayers;
