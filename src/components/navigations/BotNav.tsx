import home1 from "./../../assets/icons/home1.png";
import home2 from "./../../assets/icons/home2.png";

import menu1 from "./../../assets/icons/menu1.png";
import menu2 from "./../../assets/icons/menu2.png";

import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SmallText from "../texts/SmallText";

const BotNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/") {
      setActivePage("home");
    } else if (location.pathname === "/menu") {
      setActivePage("menu");
    }
  }, [location]);

  const handleNavigation = (page: string) => {
    if (page === "home") {
      navigate("/");
    } else if (page === "menu") {
      navigate("/menu");
    }
  };

  return (
    <div className="fixed bottom-0 bg-white shadow-xl flex border-2 w-full py-2">
      <div
        className="w-1/2 flex items-center justify-center cursor-pointer flex-col"
        onClick={() => handleNavigation("home")}
      >
        <img
          src={activePage === "home" ? home1 : home2}
          alt="home-icon"
          className="w-[25px]"
        />

        <SmallText
          className={activePage === "home" ? "text-black" : "text-gray-500"}
          text={"Home"}
        />
      </div>
      <div
        className="w-1/2 flex items-center justify-center cursor-pointer flex-col"
        onClick={() => handleNavigation("menu")}
      >
        <img src={activePage === "menu" ? menu1 : menu2} className="w-[25px]" />
        <SmallText
          className={activePage === "home" ? "text-black" : "text-gray-500"}
          text={"Menu"}
        />
      </div>
    </div>
  );
};

export default BotNav;
