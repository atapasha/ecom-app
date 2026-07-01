import Link from "next/link";
import React, { useState } from "react";

type TabName = "Men" | "Women" | "Juniors";

type TabData = {
  [key in TabName]: {
    clothing: string[];
    shoes: string[];
    accessories: string[];
    image: string;
  };
};

const tabData: TabData = {
  Men: {
    clothing: ["Hoodies & Sweatshirts"],
    shoes: ["Running"],
    accessories: ["Bags & Backpacks"],
    image: "/men-cover.png",
  },
  Women: {
    clothing: ["Tops", "Jeans"],
    shoes: ["Heels", "Flats"],
    accessories: ["Handbags"],
    image: "/women-cover.png",
  },
  Juniors: {
    clothing: ["T-shirts"],
    shoes: ["Sneakers"],
    accessories: ["Hats"],
    image: "/juniors-cover.png",
  },
};

const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Men");

  const renderContent = () => {
    const data = tabData[activeTab];

    return (
      <div className="flex justify-between py-3 w-full">
        <div className="flex justify-between space-x-8 p-4">
          <div className="w-1/2">
            <img
              src={data.image}
              alt="category"
              className="rounded-lg w-full object-fill h-[300px]"
            />
          </div>
          <div className="w-1/3">
            <h2 className="font-bold mb-4">Shoes</h2>
            <ul className="space-y-2">
              {data?.shoes?.map((item,index) => (
                <li key={index}>
                  <Link className="text-md "  href={`/products?category=${item?.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="w-1/3">
            <h2 className="font-bold mb-4">Clothing</h2>
            <ul className="space-y-2">
              {data?.clothing?.map((item,index) => (
                <li key={index}>
                  <Link href={`/products?category=${item?.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>




          <div className="w-1/3">
            <h2 className="font-bold mb-4">Accessories</h2>
            <ul className="space-y-2">
              {data?.accessories?.map((item,index) => (
                <li key={index}>
                  <Link href={`/products?category=${item?.toLowerCase()}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        
      </div>
    );
  };

  return (
    <div className="w-full">
      <nav className="flex justify-center space-x-4 py-4 border-b">
        {(["Men", "Women", "Juniors"] as TabName[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-black px-4 py-2 ${
              activeTab === tab
                ? "text-orange-500 text-md font-bold border-b-2 border-orange-500"
                : ""
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
      {renderContent()}
    </div>
  );
};

export default MenuTabs;
