import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className="max-w-md mx-auto mt-[10rem] p-4 sm:p-6 md:p-8">
      <Tabs defaultValue="wishlist" className="w-full ">
        <TabsList className="grid w-full h-[3rem] grid-cols-2">
          <TabsTrigger value="wishlist" className="text-base sm:text-lg">
            My Wishlist
          </TabsTrigger>
          <TabsTrigger value="recent" className="text-base sm:text-lg">
            Recently Viewed
          </TabsTrigger>
        </TabsList>
        <TabsContent value="wishlist" className="mt-6">
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
              <Button className="bg-red-300 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded">
                Start Shopping
              </Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="recent">
          <div className="text-center mt-6">
            <p className="text-gray-800 text-xl font-semibold">
              People are viewing our best collections!
            </p>
            <p className="text-gray-500 text-xl">Explore our collections</p>
            <Link href="/">
              <Button className="bg-red-300 mt-10 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded">
                Start Exploring
              </Button>
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
