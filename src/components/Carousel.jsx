import "../index.css";
import { useState } from "react";
import Image2 from "../assets/wallpapersden.com_aladdin-2019-movie-banner-8k_7680x3934.jpg";
import { Link } from "react-router-dom";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState("slide1");

  const handleSlideChange = (slide) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="carousel w-full h-90vh relative overflow-hidden">
      <div className="carousel-item absolute w-full h-full">
        <img
          src="https://images6.fanpop.com/image/photos/42900000/IT-Chapter-Two-2019-Poster-Banner-horror-movies-42981473-1500-585.jpg"
          className={`w-full h-full ${currentSlide === "slide1" ? "block" : "hidden"}`}
          alt="slide1"
        />
        <img
          src={Image2}
          className={`w-full h-full ${currentSlide === "slide2" ? "block" : "hidden"}`}
          alt="slide2"
        />
      </div>
      <div className="absolute top-60 left-0 right-0 flex justify-between p-5">
        <Link
          to="#slide1"
          className="btn btn-circle"
          onClick={() => handleSlideChange("slide1")}
        >
          ❮
        </Link>
        <Link
          to="#slide2"
          className="btn btn-circle"
          onClick={() => handleSlideChange("slide2")}
        >
          ❯
        </Link>
      </div>
    </div>
  );
}

export default Carousel;
