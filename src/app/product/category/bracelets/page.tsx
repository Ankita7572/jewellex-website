import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  isBestseller?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Rose Gold Supple Bracelet",
    image: "/img/supple_bracelet.jpg",
    rating: 4.9,
    reviews: 19,
    price: 2499,
    originalPrice: 4999,
    isBestseller: true
  },
  {
    id: 2,
    name: "Rose Gold Layered Queen's Anklet",
    image: "/img/gold_anklet.jpg",
    rating: 4.8,
    reviews: 37,
    price: 2499,
    originalPrice: 4999
  },
  {
    id: 3,
    name: "Rose Gold Drop Wreath Pendant Set",
    image: "/img/rose_gold_pendant.jpg",
    rating: 4.9,
    reviews: 16,
    price: 2399,
    originalPrice: 4799
  },
  {
    id: 4,
    name: "Silver Fibonacci Ring For Him",
    image: "/img/fibonacci_ring.jpg",
    rating: 4.7,
    reviews: 42,
    price: 2399,
    originalPrice: 4799
  }
];

export default function Component() {
  return (
    <>
      <div className=" mt-20">
        <Image
          width={1280}
          height={400}
          src="/img/banner1.jpg"
          alt="Personalised Jewelry Banner"
          className="w-full h-[28rem] max-md:h-96    shadow-md"
          style={{
            aspectRatio: "6/1"
            // objectFit: "cover"
          }}
        />
      </div>
      <div className="container mt-12 mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <Image
                  alt={product.name}
                  className="w-full h-[12rem] object-cover"
                  height="300"
                  src={product.image}
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover"
                  }}
                  width="300"
                />
                <button className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white">
                  <Heart className="w-5 h-5 text-red-500" />
                </button>
                {product.isBestseller && (
                  <div className="absolute top-2 left-0  bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-r-lg">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm font-medium">
                    {product.rating}
                  </span>
                  <span className="ml-1 text-sm text-gray-500">
                    | {product.reviews}
                  </span>
                </div>
                <h3 className="text-base font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold">₹{product.price}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
                <Link href="/product/category/bracelets/bracelets-details">
                  <Button className="w-full bg-red-300 hover:bg-red-400 text-white">
                    Add to cart
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
