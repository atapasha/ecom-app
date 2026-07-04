import Carousel from "@/components/Home/Carousel";
import CategoryCarousel from "@/components/Home/CategoryCarousel";
import PopularBrands from "@/components/Home/PopularBrands";
import PromotionCards from "@/components/Home/PromotionCards";
import ProductCard from "@/components/ProductCard";
import { FaHeadset, FaHeadSideCough, FaLock } from "react-icons/fa";

export default function Home() {
  const products = [
    {
      title: "Product 1",
      image: "/1-cover.png",
      price: "$100",
      originalPrice: "$150",
    },

    {
      title: "Product 1",
      image: "/1-cover.png",
      price: "$100",
      originalPrice: "$150",
    },

    {
      title: "Product 1",
      image: "/1-cover.png",
      price: "$100",
      originalPrice: "$150",
    },

    {
      title: "Product 1",
      image: "/1-cover.png",
      price: "$100",
      originalPrice: "$150",
    },
  ];

  const services = [
    {
      icon: <FaHeadset size={30} className="text-gray-600" />,
      title: "Free Shipping",
      description: "Free shipping on all orders over $50",
    },
    {
      icon: <FaLock size={30} className="text-gray-600" />,
      title: "24/7 Support",
      description: "We are here to help you anytime",
    },
    {
      icon: <FaHeadset size={30} className="text-gray-600" />,
      title: "Money Back Guarantee",
      description: "30 days money back guarantee",
    },
    {
      icon: <FaHeadSideCough size={30} className="text-gray-600" />,
      title: "Secure Payment",
      description: "We ensure secure payment with SSL encryption",
    },
  ];
  return (
    <div className="mb-8">
      <Carousel />
      <CategoryCarousel />
      <PromotionCards />
      <div className="xl:container px-2 xl:px-4 mx-auto mt-10 my-16">
        <h2 className="text-md lg:text-4xl font-bold mb-5">
          {" "}
          Trendy Collections
        </h2>
        <ProductCard isWishlisted={false} data={products} />
      </div>
      <PopularBrands />
      <div className="mx-auto xl:container px-2 xl:px-4 mt-10">
        <div className="flex flex-wrap  md:flex-nowrap gap-4 justify-center  md:justify-between items-center p-8">
          {services?.map((item, index) => (
            <div key={index} className="text-center w-full xm:w-1/2  md:w-1/4 ">
              <div className="flex items-center justify-center mb-3">
                {item?.icon}
              </div>

              <h3 className="text-lg font-bold">{item?.title}</h3>
              <p className="text-sm text-gray-600">{item?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
