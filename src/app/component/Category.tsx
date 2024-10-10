"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Cuffs", image: "/img/jewelCarousel/jew1.jpg" },
  { name: "Earings", image: "/img/jewelCarousel/jew2.jpg" },
  { name: "Wrap Bracelets", image: "/img/jewelCarousel/jew3.jpg" },
  { name: "Charm Bracelets", image: "/img/jewelCarousel/jew4.jpg" },
  { name: "Cuffs", image: "/img/jewelCarousel/jew1.jpg" },
  { name: "Earings", image: "/img/jewelCarousel/jew2.jpg" },
  { name: "Wrap Bracelets", image: "/img/jewelCarousel/jew3.jpg" },
  { name: "Charm Bracelets", image: "/img/jewelCarousel/jew4.jpg" }
];

export default function JewelryCarousel() {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative w-full mt-10 max-w-[1200px] mx-auto px-4 py-8">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mb-2 mx-auto">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center text-sm sm:text-base">{category.name}</p>
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
  );
}
