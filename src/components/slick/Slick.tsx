import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HomeBoxProps } from "../../types";

const Slick = ({ user }: HomeBoxProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {user.result.banner.map((photo, index) => (
        <div key={index} className="bg-black">
          <img src={photo} alt={`Banner ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

export default Slick;
