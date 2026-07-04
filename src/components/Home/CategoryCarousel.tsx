"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const CategoryCarousel = () => {
  const sliderRef = useRef()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const categories = [
    { name: "Men", image: "/men_thumb.png" },
    { name: "Hoodies", image: "/hoodies_&_sweatshirts-thumb.png" },
    { name: "Clothing", image: "/clothing-thumb.png" },
    { name: "Shorts", image: "/shorts-thumb.png" },
    { name: "Jackets & Vests", image: "/jackets_&_vests-thumb.png" },
    { name: "Pans & Tights", image: "/pants_&_tights-thumb.png" },
    { name: "Top & Tshirs", image: "/tops_&_t-shirts-thumb.png" },
    { name: "Basket Ball", image: "/basket_ball-thumb.png" },
  ];
  return (
    <div className="xl:container category-crousel mx-auto overflow-hidden px-2 xl:px-4 my-4 mt-10 ">
      <div className="flex  justify-between items-center">
        <h3 className="text-md lg:text-4xl font-bold"> Browse By Categories</h3>
        <div className="flex items-center gap-3">
          <button  onClick={()=>sliderRef.current.slickPrev()} className="bg-gray-200 w-8 lg:w-10 h-8  lg:h-10 rounded-full px-1 lg:px-1 py-1">
            <MdKeyboardDoubleArrowLeft size={25} />
          </button>
          <button  onClick={()=>sliderRef.current.slickNext()}  className="bg-gray-200 w-8 lg:w-10  h-8  lg:h-10  rounded-full   px-1 lg:px-1  py-1">
            <MdKeyboardDoubleArrowRight size={25}  />
          </button>
        </div>
      </div>
      <div className="mt-5">
        
        <Slider ref={sliderRef}  {...settings}>
{
    categories?.map((item,index)=>(
<div  key={index} className="flex pe-3 justify-center items-center gap-3 rounded-t-md">

<img className="w-full   rounded-tr-md rounded-tl-md"   src={item.image} alt={item.name} />
<div className="text-center font-bold mt-3">{item?.name}</div>
 </div>   

    ))
}

        </Slider>
        </div>      
    </div>
  );
};

export default CategoryCarousel;
