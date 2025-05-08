import { useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import BannerSection from "./components/BannerSection/BannerSection";
import Header from "./components/Header/Header";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [addCoin, setAddCoin] = useState(0);

  const coinHandler = async (coin) => {
    setAddCoin(addCoin + coin);
  };
  const alertHandle = () => {
    toast.success("Credit Added to your Account");
  };

  return (
    <header>
      <Toaster position="top-center" />
      <div className="container mx-auto sora relative">
        <Header addCoin={addCoin}></Header>
        <BannerSection
          coinHandler={coinHandler}
          alertHandle={alertHandle}
        ></BannerSection>
        <AvailablePlayers
          addCoin={addCoin}
          setAddCoin={setAddCoin}
        ></AvailablePlayers>
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </header>
  );
}

export default App;
