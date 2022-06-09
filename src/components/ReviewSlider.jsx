import React from "react";
import review1 from "../assets/review-1.jpg";
import review2 from "../assets/review-2.jpg";
import review3 from "../assets/review-3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };
  return (
    <Slider {...settings}>
      <div className="flex">
        <img src={review1} alt="" width="340" />
      </div>
      <div>
        <img src={review2} alt="" width="340" />
      </div>
      <div>
        <img src={review3} alt="" width="340" />
      </div>
    </Slider>
  );
};

export default ReviewSlider;
