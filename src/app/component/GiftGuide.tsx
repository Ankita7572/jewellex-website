import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface GiftGuideProps {
  imageSrc: string;
  altText: string;
  specialOffer?: string;
  children?: React.ReactNode;
}

const GiftGuide: React.FC<GiftGuideProps> = ({
  imageSrc,
  altText,
  specialOffer,
  children
}) => (
  <Card className="bg-transparent border-none shadow-none">
    <CardContent className="px-4 relative">
      <Link href="/product/category/earring">
        <Image
          src={imageSrc}
          alt={altText}
          width={700}
          height={200}
          className="w-full h-[20rem] object-cover rounded-md"
        />
      </Link>
      {specialOffer && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
          {specialOffer}
        </span>
      )}
      {children}
    </CardContent>
  </Card>
);

interface GiftGuideItem {
  imageSrc: string;
  altText: string;
  specialOffer?: string;
}

export default function GiftGuideGrid() {
  const giftGuideItems: GiftGuideItem[] = [
    {
      imageSrc: "/img/essen1.jpg",
      altText: "Gold necklaces with lab diamonds"
    },
    {
      imageSrc: "/img/essen2.jpg",
      altText: "Silver jewelry pieces"
    },
    {
      imageSrc: "/img/essen3.jpg",
      altText: "Gold necklaces with lab diamonds"
    },
    {
      imageSrc: "/img/essen4.jpg",
      altText: "Silver jewelry pieces"
    }
  ];

  return (
    <div className="max-w-3xl mt-16 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Jewellex Essentials Gift Guide
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {giftGuideItems.map((item, index) => (
          <GiftGuide key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
