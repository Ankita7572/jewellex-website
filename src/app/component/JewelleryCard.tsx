import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";

interface JewelleryCardProps {
  imageSrc: string;
  altText: string;

  specialOffer?: string;
}

const JewelleryCard: React.FC<JewelleryCardProps> = ({
  imageSrc,
  altText,
  specialOffer
}) => (
  <Card className={`bg-transparent border-none shadow-none`}>
    <CardContent className=" px-4">
      <Image
        src={imageSrc}
        alt={altText}
        width={400}
        height={200}
        className="w-full h-[15rem] object-cover rounded-md"
      />
      {specialOffer && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
          {specialOffer}
        </span>
      )}
    </CardContent>
  </Card>
);

interface JewelleryItem {
  imageSrc: string;
  altText: string;

  specialOffer?: string;
}

export default function JewelleryGrid() {
  const jewelleryItems: JewelleryItem[] = [
    {
      imageSrc: "/img/essential/essential1.jpg",
      altText: "Gold necklaces with lab diamonds",
      specialOffer: "20% OFF"
    },
    {
      imageSrc: "/img/essential/essential2.jpg",
      altText: "Silver jewelry pieces"
    },
    {
      imageSrc: "/img/essential/essential3.jpg",
      altText: "Rose gold jewelry",
      specialOffer: "20% OFF"
    },
    {
      imageSrc: "/img/essential/essential4.jpg",
      altText: "Platinum jewelry"
    }
  ];

  return (
    <div className="max-w-3xl mt-16 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        I Blame Beads Essentials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {jewelleryItems.map((item, index) => (
          <JewelleryCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
