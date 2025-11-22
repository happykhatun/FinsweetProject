import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import maskgroup from "../assets/maskgroup.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-6 right-10 bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-[#5239FA] "
    onClick={onClick}
  >
    <IoIosArrowForward className="text-gray-700 hover:text-white text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute -bottom-6 right-24 bg-white w-10 h-10 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-[#5239FA] "
    onClick={onClick}>
    <IoIosArrowBack className="text-gray-700 text-2xl hover:text-white" />
  </div>
);

function Testimonial() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="py-32 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 px-6 relative">
        {/* Left side */}
        <div className="md:w-1/3 w-full">
          <h2 className="text-[38px] font-semibold leading-[46px] mb-4">
            What our clients <br /> say about us
          </h2>
          <p className="text-gray-500"> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed. </p>
        </div>

        {/* Right side slider */}
        <div className="md:w-2/3 w-full relative">
          <Slider {...settings}>
            {[1, 2, 3].map((item) => (
              <div key={item}>
                <p className="font-medium lg:text-[32px] md:text-[28px] leading-[38px] mb-12">
                  "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                </p>
                <div className="flex gap-4 items-center">
                  <img src={maskgroup} alt="maskgroup" className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h3 className="font-normal text-[18px] text-[#1C1E53]">
                      Jenny Wilson
                    </h3>
                    <p className="text-gray-500 text-[12px] font-medium">Vice President</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
