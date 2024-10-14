"use client";

import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Trash2 } from "lucide-react";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
}

export default function Component() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Silver Rugged Ring For Him",
      price: 1699,
      originalPrice: 2799,
      rating: 4.8,
      image: "/img/nosering.jpg"
    },
    {
      id: 2,
      name: "Silver Rugged Ring For Him",
      price: 1699,
      originalPrice: 2799,
      rating: 4.8,
      image: "/img/gold_anklet.jpg"
    },
    {
      id: 3,
      name: "Silver Rugged Ring For Him",
      price: 1699,
      originalPrice: 2799,
      rating: 4.8,
      image: "/img/queen_set.jpg"
    },
    {
      id: 4,
      name: "Silver Rugged Ring For Him",
      price: 1699,
      originalPrice: 2799,
      rating: 4.8,
      image: "/img/rose_gold_pendant.jpg"
    }
    // Add more items as needed
  ]);

  const moveToCart = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    // Add logic to move item to cart
  };

  const deleteItem = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className=" mx-auto mt-40 p-4 sm:p-6 md:p-8">
      <Tabs defaultValue="wishlist" className="w-full">
        <TabsList className="flex max-w-xl mx-auto mb-8 border-b bg-transparent border-gray-200">
          <TabsTrigger
            value="wishlist"
            className="flex-1 text-base sm:text-lg py-2 px-4 text-pink-500 border-b-2 border-pink-500 data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500"
          >
            My Wishlist
          </TabsTrigger>
          <TabsTrigger
            value="recent"
            className="flex-1 text-base sm:text-lg py-2 px-4 text-gray-500 border-b-2 border-transparent data-[state=active]:border-pink-500 data-[state=active]:text-pink-500 data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500"
          >
            Recently Viewed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="wishlist">
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className=" p-4">
                    <h3 className="text-base font-semibold mb-2">
                      {item.name}
                    </h3>
                    <div className="flex justify-between">
                      <div className="flex items-center mb-2">
                        <span className="text-yellow-400 mr-1">★</span>
                        <span>{item.rating}</span>
                      </div>
                      <div className="flex items-left  mb-4">
                        <span className="text-xl font-bold mr-2">
                          ₹{item.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through mt-1 ">
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={() => moveToCart(item.id)}
                        className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        Move to cart
                      </Button>
                      <Button
                        onClick={() => deleteItem(item.id)}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-700"
                        aria-label="Delete item"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                It feels so empty in here
              </h2>
              <p className="text-gray-600 mb-6">Make a wish!</p>
              <div className="mb-6 relative w-32 h-32 mx-auto">
                <Image
                  src="/img/cart/nervous.png"
                  alt="Sad heart face"
                  layout="fill"
                  objectFit="contain"
                  className="text-gray-400"
                />
              </div>
              <Link href="/">
                <Button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
                  Start Shopping
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>
        <TabsContent value="recent">
          <div className="text-center mt-6">
            <p className="text-gray-800 text-xl font-semibold">
              People are viewing our best collections!
            </p>
            <p className="text-gray-500 text-xl">Explore our collections</p>
            <Link href="/">
              <Button className="bg-pink-500 mt-10 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded">
                Start Exploring
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
