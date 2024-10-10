"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Virda",
    content:
      "A big shout out to you guys for improving my hubby's gifting tastes. Completely in love with my Necklace!",
    image:
      "/img/personalized/Necklace/vitage_flower/flower1.jpg?height=60&width=60",
    rating: 5
  },
  {
    name: "Harshika",
    content:
      "Never thought buying jewellery would be this easy, thanks for helping make my mom's birthday special.",
    image: "/img/jewelCarousel/jew1.jpg?height=60&width=60",
    rating: 4
  },
  {
    name: "Priya",
    content:
      "Gifted these necklace to my sister on her wedding and she loved them! I am obsessed with buying gifts from I BLAME BEADS.",
    image:
      "/img/personalized/Necklace/vitage_flower/flower2.jpg?height=60&width=60",
    rating: 5
  },
  {
    name: "Anita",
    content:
      "The quality of the jewelry is outstanding. I've received so many compliments on my new earings!",
    image: "/img/jewelCarousel/jew2.jpg?height=60&width=60",
    rating: 5
  },
  {
    name: "Rahul",
    content:
      "Great customer service and fast delivery. Will definitely be a returning customer.",
    image: "/img/personalized/Necklace/cubid/cubid1.jpg?height=60&width=60",
    rating: 4
  }
];

export default function RatedTestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 }
      }
    },
    [AutoPlay({ delay: 6000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Let customers speak for us
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4"
              >
                <Card className="h-full border-none shadow-sm bg-red-100">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                    </Avatar>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full mx-1 transition-all duration-300 ease-in-out ${
                index === selectedIndex
                  ? "w-8 bg-red-500"
                  : "w-2 bg-red-300 hover:bg-red-400"
              }`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
