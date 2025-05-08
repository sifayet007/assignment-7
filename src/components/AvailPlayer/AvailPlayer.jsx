import { FaUserLarge } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const AvailPlayer = ({ player, handlerAddSelectPlyer }) => {
  //   console.log(player);

  const { id, name, image_url, country, role, rating, batting_style, price } =
    player;

  return (
    <div className="border-2 p-6 rounded-2xl ">
      <img
        className="md:w-[350px] md:h-[300px] rounded-2xl"
        src={image_url}
        alt=""
      />
      <h1 className="flex gap-3 text-xl font-semibold mt-6">
        <FaUserLarge />
        {name}
      </h1>
      <div className="flex justify-between mt-4">
        <p className="flex gap-2 text-[#C4C4C4] items-center">
          <FaFlag />
          {country}
        </p>
        <p>{role}</p>
      </div>
      <hr className="my-4" />
      <p className="flex gap-2 items-center font-bold text-base">
        <FcRating />
        {rating}
      </p>
      <p className="font-semibold text-base mt-4 mb-3">{batting_style}</p>
      <div className="flex justify-between items-center">
        <p className="font-semibold text-base">Price: {price}</p>
        {/* Choose player button */}
        <button
          onClick={() => handlerAddSelectPlyer(player, price, id)}
          className="py-2 px-4 cursor-pointer font-bold bg-[#E7FE29] hover:bg-yellow-100 transition-colors   ease-in-out rounded-xl"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default AvailPlayer;
