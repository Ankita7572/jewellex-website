"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Anklets", image: "/img/anklets.jpg" },
  { name: "Earrings", image: "/img/earring.jpg" },
  { name: "Bracelets", image: "/img/bracelets.jpg" },
  { name: "Anklets", image: "/img/anklets.jpg" },
  { name: "Earrings", image: "/img/earring.jpg" },
  { name: "Bracelets", image: "/img/bracelets.jpg" },
  { name: "Anklets", image: "/img/anklets.jpg" },
  { name: "Earrings", image: "/img/earring.jpg" },
  { name: "Bracelets", image: "/img/bracelets.jpg" },
  { name: "Anklets", image: "/img/anklets.jpg" },
  { name: "Earrings", image: "/img/earring.jpg" },
  { name: "Bracelets", image: "/img/bracelets.jpg" },
  { name: "Anklets", image: "/img/anklets.jpg" },
  { name: "Earrings", image: "/img/earring.jpg" },
  { name: "Bracelets", image: "/img/bracelets.jpg" }
];

export default function JewelryCarousel() {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative w-full mt-10 max-w-[1240px] mx-auto px-4 py-8">
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="relative w-20 h-24 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-32 lg:h-36 rounded-lg overflow-hidden mb-2 mx-auto">
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
