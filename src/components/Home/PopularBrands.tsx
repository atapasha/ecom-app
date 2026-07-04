"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const PopularBrands = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const brands=[{name:"Brand 1",image:"/camper-cover.png"},{name:"Brand 2",image:"/camper-cover.png"},{name:"Brand 3",image:"/camper-cover.png"},{name:"Brand 4",image:"/camper-cover.png"},{name:"Brand 5",image:"/camper-cover.png"},{name:"Brand 6",image:"/camper-cover.png"}  ]

  return (
    <div className="xl:container px-2 xl:px-4 mx-auto mt-10 ">
      <div className="flex  justify-between  items-center">
        <h3 className="text-4xl lg:text-4xl font-bold mb-5"> Popular Brands</h3>

        <div className="flex items-center gap-3">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="bg-gray-200 w-8 lg:w-10 h-8  lg:h-10 rounded-full px-1 lg:px-1 py-1"
          >
            <MdKeyboardDoubleArrowLeft size={25} />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="bg-gray-200 w-8 lg:w-10  h-8  lg:h-10  rounded-full   px-1 lg:px-1  py-1"
          >
            <MdKeyboardDoubleArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5 overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {brands?.map((item, index) => (
            <div
              key={index}
              className="w-1/5 me-2 p-4 flex flex-col items-center shadow-md mx-3 bg-white my-1"
            >
              <img
                className="w-full block mx-auto aspect-square h-[80px] p-4 mb-3"
                src={item.image}
                alt={item.name}
              />
              <h5 className="text-center font-bold mt-3">{item?.name}</h5>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PopularBrands;
