"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

// Import CSS for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Define the Product interface
interface Product {
  id: number;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  oldPrice: number;
  title: string;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    image: "/img/personalized/Necklace/vitage_flower/flower1.jpg",
    rating: 4.7,
    reviews: 10,
    price: 4699,
    oldPrice: 8399,
    title: "Dainty Name Necklace with Vintage Flower"
  },
  {
    id: 2,
    image: "/img/personalized/Necklace/cubid/cubid1.jpg",
    rating: 4.9,
    reviews: 278,
    price: 1199,
    oldPrice: 1999,
    title: "Customised Cuboid Bar Name Necklace"
  },
  {
    id: 3,
    image: "/img/personalized/Necklace/signature/sign1.jpg",
    rating: 4.9,
    reviews: 22,
    price: 1399,
    oldPrice: 2499,
    title: "Signature Style Name Necklace with Stud"
  },
  {
    id: 4,
    image: "/img/personalized/Necklace/Avon/avon1.jpg",
    rating: 4.9,
    reviews: 231,
    price: 1699,
    oldPrice: 2799,
    title: "Personalised Avon Name Necklace"
  },
  {
    id: 5,
    image: "/img/personalized/bracelet/chain/chain1.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: "Initial Link Chain Bracelet"
  },
  {
    id: 6,
    image: "/img/personalized/Necklace/cubid/cubid1.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: "Customised Laser Cut Name Cuff"
  },
  {
    id: 7,
    image: "/img/personalized/bracelet/personalized/laser1.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: " Laser Cut Heart Kada"
  },
  {
    id: 8,
    image: "/img/banner/personalizedring.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: "Personalized Engraved Rings"
  },
  {
    id: 9,
    image: "/img/banner/mennecklace.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: " Cuboid Bar Necklace Men"
  },
  {
    id: 10,
    image: "/img/banner/keychain.jpg",
    rating: 4.8,
    reviews: 132,
    price: 2399,
    oldPrice: 4799,
    title: " Cuboid bar name keychain"
  }
];

const ProductCarousel: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className="max-w-[1200px] mx-auto mt-16 px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Recommended for You
      </h2>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className="px-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-44 object-cover"
                  />
                  <button className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md">
                    <Heart className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-bold">{product.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-2 truncate">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-lg">
                        ₹{product.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 line-through ml-2">
                        ₹{product.oldPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link href="/product/category/bracelets/bracelets-details">
                    <Button className="w-full bg-red-300 hover:bg-red-400 text-white">
                      Add to cart
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
