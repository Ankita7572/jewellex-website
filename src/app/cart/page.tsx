import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className=" w-full  text-center">
        <h1 className="text-2xl text-start sm:text-3xl font-bold mb-8 text-gray-800">
          Shopping Cart
        </h1>
        <div className="mb-6 max-w-md relative w-32 h-32 mx-auto">
          <Image
            src="/img/cart/empty-cart.png"
            alt="Empty shopping cart"
            layout="fill"
            objectFit="contain"
            className="text-gray-400"
          />
        </div>
        <p className="text-xl text-gray-600 mb-2">Your cart is empty.</p>
        <p className="text-lg text-red-500 mb-6">
          Let&apos;s fill it up with some amazing jewellery!
        </p>
        <Button className="bg-red-300 hover:bg-red-500 text-white font-semibold py-2 px-6 rounded-lg text-lg">
          Explore Now{" "}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Button>
      </div>
    </div>
  );
}
