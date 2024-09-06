import { useState } from "react";
import { useGetAccountQuery } from "../redux/api/homeApi";
import { AccountResponse } from "../types";
import {
  Navbar,
  BotNav,
  HomeBox,
  Slick,
  MediumText,
  Popup,
  Loading,
} from "../components";
import motif from "./../assets/banner/motif.png";
import qr from "./../assets/icons/qr.png";

const Home = () => {
  // Inisialisasi user dengan nilai default yang sesuai dengan tipe AccountResponse
  const { data: user = {} as AccountResponse, isLoading } =
    useGetAccountQuery();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="relative min-h-[220px]">
            <img src={motif} alt="motif" className="w-full h-full" />
            <HomeBox onClick={handleOpenPopup} photo={qr} user={user} />
          </div>

          <div className="bg-white relative pb-12">
            <Slick user={user} />
            <div className="absolute bottom-4 right-4">
              <MediumText text={"View All"} className="text-green-400" />
            </div>
          </div>

          {isPopupOpen ? (
            <Popup onClick={handleClosePopup} photo={user.result.qrcode} />
          ) : null}
        </div>
      )}

      <BotNav />
    </div>
  );
};

export default Home;
