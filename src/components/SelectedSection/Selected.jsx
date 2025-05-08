import { RiDeleteBin6Line } from "react-icons/ri";
const Selected = ({ selectPlyer, handleRemovePlyer }) => {
  return (
    <div>
      {selectPlyer.map((plyer, idx) => (
        <div key={idx} className="flex justify-between items-center">
          <div className="flex gap-5 mb-5 items-center">
            <img
              className="w-20 h-20 rounded-2xl"
              src={plyer.image_url}
              alt=""
            />
            <div>
              <h1 className="font-semibold text-2xl">{plyer.name}</h1>
              <p className="text-[#959595]">{plyer.batting_style}</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleRemovePlyer(plyer.id)}
              className="text-[#F14749] text-2xl cursor-pointer"
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Selected;
