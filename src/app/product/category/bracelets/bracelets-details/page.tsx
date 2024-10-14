"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const images = [
    "/img/rose_gold_pendant.jpg",
    "/img/rose_gold_pendant1.jpg",
    "/img/rose_gold_pendant2.jpg",
    "/img/rose_gold_pendant3.jpg"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const toggleDescription = () => setIsDescriptionOpen((prev) => !prev);
  const toggleShipping = () => setIsShippingOpen((prev) => !prev);

  return (
    <div className="container mt-36 mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative ">
            <Image
              height={400}
              src={images[currentImage]}
              alt="Ring"
              width={1200}
              objectFit="cover"
              className="rounded-lg h-[25rem]"
            />
          </div>
          <div className="relative">
            <div className="flex space-x-2 ml-4 overflow-x-auto py-2">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 cursor-pointer ${
                    currentImage === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <Image
                    src={src}
                    alt={`Ring thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid  gap-8">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Silver Rugged Ring For Him</h1>
              <div className="flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(4.8 | 55)</span>
              </div>
              <div className="text-2xl font-bold">
                ₹1,699{" "}
                <span className="text-lg font-normal line-through text-gray-500">
                  ₹2,799
                </span>
              </div>
              <p className="text-sm">Made with 925 Silver</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <Button
                    onClick={decreaseQuantity}
                    variant="ghost"
                    size="icon"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-1">{quantity}</span>
                  <Button
                    onClick={increaseQuantity}
                    variant="ghost"
                    size="icon"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className=" flex">
                <Link href="/cart/checkout" className="w-full mr-4">
                  <Button className="w-full mr-4">Buy Now</Button>
                </Link>
                <Button variant="outline" className="w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="border-t flex pt-4">
                <Input placeholder="Enter 6 digit pincode" />
                <Button className="w-full ml-5">CHECK</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {["FLAT300", "COMBO50", "LOVE"].map((offer) => (
                  <div key={offer} className="border rounded p-2 text-xs">
                    {offer}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h2
                  className="text-lg font-semibold flex justify-between items-center "
                  onClick={toggleDescription}
                >
                  DESCRIPTION{" "}
                  {isDescriptionOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </h2>
                {isDescriptionOpen && (
                  <div className="mt-2 space-y-2">
                    <p className="text-sm">
                      This silver ring has a rhombus patterned band with a
                      zircon set in the centre of the ring.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>925 Silver</li>
                      <li>Perfect for sensitive skin</li>
                      <li>Adjustable size to ensure no fitting issues</li>
                      <li>Ring Diameter: 1.97 cm + Adjustable</li>
                      <li>
                        Comes with the GIVA Jewellery kit and authenticity
                        certificate
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="border-b pb-4">
                <h2
                  className="text-lg font-semibold flex justify-between items-center"
                  onClick={toggleShipping}
                >
                  SHIPPING{" "}
                  {isShippingOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </h2>
                {isShippingOpen && (
                  <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
                    <li>Free express shipping</li>
                    <li>No questions asked 30 days return policy</li>
                    <li>6 month warranty</li>
                    <li>Shipping internationally to 20+ countries</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
