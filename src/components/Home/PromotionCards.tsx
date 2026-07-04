"use client"

import React from "react";

const PromotionCards = () => {
  const [promotions, setPromotions] = React.useState([
    { image: "/p1.png", alt: "promotion1" },
      { image: "/p2.png", alt: "promotion2" },
      { image: "/p3.png", alt: "promotion3" },
  ]);
  return (
    <div className="xl:container px-2 xl:px-4 mx-auto my-16">
      <div className="flex flex-wrap lg:flex-nowrap    items-center">
        {promotions?.map((item, index) => (
          <div key={index} className="w-full lg:w-1/3">
            <img className="w-full rounded-xl"  src={item?.image} alt={item?.alt} />
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionCards;
