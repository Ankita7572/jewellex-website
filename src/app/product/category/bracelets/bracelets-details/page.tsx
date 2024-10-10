"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/img/product/bracelets/charm.jpg",
    "/img/product/bracelets/dainty.jpg",
    "/img/product/bracelets/elephant.jpg",
    "/img/product/bracelets/sparkling.jpg"
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
          <h1 className="text-2xl font-bold">Heart Crystal Ring</h1>
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">10 reviews</span>
          </div>
          <p className="text-2xl font-bold">Rs. 1,099</p>
          <div className="space-y-2">
            <p>
              <strong>Plating:</strong> 22K Gold plated (Best polish available
              in the market)
            </p>
            <p>
              <strong>Material:</strong> Highest grade of Birla brass
            </p>
            <p>
              <strong>Water Resistant:</strong> Can withstand normal splashes of
              water
            </p>
          </div>
          <p className="text-gray-700">
            This adjustable Heart Crystal Ring is crafted with nickel-free
            hypoallergenic brass and finished with 22K gold plating. The
            anti-tarnish coating ensures long-lasting shine and durability. Make
            a statement with this unique and eye-catching piece.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-primary-dark transition-colors">
              Add to Cart
            </button>
            <Link href="/cart/checkout">
              <button className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-secondary-dark transition-colors">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="space-y-4 mt-8">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Delivery Time: 9-12 business days</li>
              <li>
                Measurements: Length 18 inches with adjustable loops (kadis)
              </li>
              <li>
                Quality Guarantee: 90 days warranty (normal splashes of water
                will not affect shine)
              </li>
              <li>
                Production Time: 7-8 business days (excluding Sat-Sun) for
                careful handling and quality check
              </li>
            </ul>
          </div>
          <div className="space-y-4 mt-8">
            <h2 className="text-xl font-semibold">Care Guide</h2>
            <div className="space-y-2">
              <h3 className="font-semibold">KEEP AWAY FROM MOISTURE</h3>
              <p className="text-sm text-gray-700">
                Avoid exposure to moisture sources like hair sprays, perfumes,
                and moisturizers. Do not wear while bathing or exercising. Avoid
                cleaning with chemicals to prevent tarnishing.
              </p>
              <h3 className="font-semibold">STORE THEM CAREFULLY</h3>
              <p className="text-sm text-gray-700">
                Store jewelry in separate zip locks to prevent rubbing and
                discoloration. Avoid folding layered pendants, earrings,
                tassels, and pom pom jewelry. Gently wipe with a soft cloth
                after each use.
              </p>
              <h3 className="font-semibold">AVOID CONTINUOUS USAGE</h3>
              <p className="text-sm text-gray-700">
                Give your jewelry regular breaks to prevent premature wear and
                tear of metal or stones.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-sm text-gray-500">
              Tags: Best name necklace, high quality name necklace, personalised
              necklace, customised necklace, good quality personalised necklace,
              classic name necklace, my name necklace, waterproof name necklace,
              anti-tarnish name necklace, tarnish free name necklace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
