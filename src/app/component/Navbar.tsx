"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

interface SubItem {
  name: string;
  link: string;
}

interface MenuItem {
  title: string;
  link?: string;
  items?: (MenuItem | { title: string; subItems: SubItem[] })[];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    {
      title: "Shop by Category",
      items: [
        {
          title: "Earrings",
          subItems: [
            {
              name: "All Earrings",
              link: "/product/category/earring"
            },
            {
              name: "Shop By Metal",
              link: "/product/category/earring/shop-by-metal"
            },
            {
              name: "Shop by Colour",
              link: "/product/category/earring"
            },
            {
              name: "Shop by Style",
              link: "/product/category/earring/shop-by-metal"
            }
          ]
        },

        {
          title: "Necklaces",
          subItems: [
            {
              name: "All Nacklaces",
              link: "/product/category/necklaces"
            },
            {
              name: "Shop By Metal",
              link: "/product/category/necklaces"
            },
            {
              name: "Shop by Colour",
              link: "/product/category/necklaces"
            },
            {
              name: "Shop by Style",
              link: "/product/category/necklaces"
            }
          ]
        },
        {
          title: "Other Categories",
          subItems: [
            {
              name: "All ",
              link: "/product/category/bracelets"
            },
            {
              name: "Jewellery Sets",
              link: "/product/category/necklaces"
            },
            {
              name: "Personalised",
              link: "/product/category/bracelets"
            },
            {
              name: "Watch Charms",
              link: "/product/category/bracelets"
            },
            {
              name: "Mangalsutras",
              link: "/product/category/necklaces"
            },
            {
              name: "Chains",
              link: "/product/category/bracelets"
            },
            {
              name: "Toe Rings",
              link: "/product/category/bracelets"
            },
            {
              name: "Nose Pins & Rings",
              link: "/product/category/bracelets"
            },
            {
              name: "Kids",
              link: "/product/category/bracelets"
            }
          ]
        },
        {
          title: "Rings",
          subItems: [
            {
              name: "All Rings",
              link: "/product/category/rings"
            },
            {
              name: "Shop By Metal",
              link: "/product/category/necklaces"
            },
            {
              name: "Shop by Colour",
              link: "/product/category/rings"
            },
            {
              name: "Shop by Style",
              link: "/product/category/rings"
            }
          ]
        },
        {
          title: "Bracelets",
          subItems: [
            {
              name: "All Bracelets",
              link: "/product/category/bracelets"
            },
            {
              name: "Shop By Metal",
              link: "/product/category/bracelets"
            },
            {
              name: "Shop by Colour",
              link: "/product/category/bracelets"
            },
            {
              name: "Shop by Style",
              link: "/product/category/bracelets"
            }
          ]
        },

        { title: "Anklets", link: "/product/category/bracelets" }
      ]
    },
    {
      title: "Gold with Lab Diamonds",
      link: "/product/category/earring/shop-by-metal"
    },
    {
      title: "Latest Collections",
      items: [
        {
          title: "Magic of Tradition",
          link: "/product/category/bracelets"
        },
        {
          title: "The Bhumi Collection",
          link: "/product/category/bracelets"
        },
        {
          title: "Wings of Wonder",
          link: "/product/category/bracelets"
        },
        {
          title: "Cherry Pop Collection",
          link: "/product/category/bracelets"
        },
        {
          title: "Love in Paris",
          link: "/product/category/bracelets"
        },
        {
          title: "Convertible Collection",
          link: "/product/category/bracelets"
        },
        {
          title: "Just Arrived",
          link: "/product/category/bracelets"
        }
      ]
    },
    {
      title: "Men's Jewellery",
      items: [
        { title: "All", link: "/product/category/bracelets" },
        { title: "Rings", link: "/product/category/bracelets" },
        {
          title: "Pendants",
          link: "/product/category/bracelets"
        },
        {
          title: "Bracetets",
          link: "/product/category/bracelets"
        },
        { title: "Chains", link: "/product/category/earring" }
      ]
    },
    {
      title: "Gift Store",
      items: [
        {
          title: "Jewellex Gift Store",
          link: "/product/product-shop/clearance-sale"
        },
        {
          title: "Shop By Occassion",
          subItems: [
            {
              name: "Wedding",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Birthday",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Anniversary",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Just Beacause",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Say Thanks",
              link: "/product/product-shop/gift-for-men/men-rings"
            }
          ]
        },
        {
          title: "Shop By Theme",
          subItems: [
            {
              name: "Evil Eye",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Nature Inspired",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Butterfly",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Romantic",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Zodiac",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Personalised",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Spiritual",
              link: "/product/product-shop/gift-for-men/men-necklace"
            }
          ]
        },
        {
          title: "Shop by Recipient",
          subItems: [
            {
              name: "For her",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "For him",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Couple",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Mother",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Sister",
              link: "/product/product-shop/gift-for-men/men-rings"
            },
            {
              name: "Friend",
              link: "/product/product-shop/gift-for-men/men-necklace"
            },
            {
              name: "Kids",
              link: "/product/product-shop/gift-for-men/men-rings"
            }
          ]
        },
        {
          title: "Grand Festive Sale",
          link: "/product/product-shop/gift-for-men/men-rings"
        }
      ]
    }
  ];

  const renderMobileSubItems = (
    items: (MenuItem | { title: string; subItems: SubItem[] })[]
  ) => {
    return items.map((item, index) => {
      if ("link" in item && !item.items) {
        return (
          <Link key={index} href={item.link || "#"} passHref>
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-2 text-base"
            >
              {item.title}
            </Button>
          </Link>
        );
      } else {
        const subItems =
          "subItems" in item
            ? item.subItems
            : "items" in item
            ? item.items
            : undefined;
        return (
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value={item.title}>
              <AccordionTrigger className="px-2 py-2 text-base">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                {subItems &&
                  subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={"link" in subItem ? subItem.link || "#" : "#"}
                      passHref
                    >
                      <Button
                        variant="ghost"
                        className="w-full justify-start px-6 py-2 text-base"
                      >
                        {"name" in subItem ? subItem.name : subItem.title}
                      </Button>
                    </Link>
                  ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      }
    });
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="bg-red-100 text-center py-2 text-sm">
        Ahmedabad based. Delivery time 2 to 6 days. Buy 2 Products and get 10%
        off.
      </div>
      <header className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2 lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-4"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
                <nav className="flex flex-col space-y-4 mt-8">
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search 'Pure Gold Jewellery'"
                      className="pl-8 pr-4 py-2 w-full"
                    />
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {menuItems.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {item.items && renderMobileSubItems(item.items)}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/">
              <div className="text-3xl max-sm:text-xl font-bold">Jewellx</div>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search 'Pure Gold Jewellery'"
                className="pl-10 pr-4 py-2 w-64 lg:w-96"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <User className="h-7 w-7" />
                <span className="sr-only">Account</span>
              </Button>
            </Link>
            <Link href="/wishlist">
              <Button variant="ghost" size="icon">
                <Heart className="h-7 w-7" />
                <span className="sr-only">Wishlist</span>
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-7 w-7" />
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
          </div>
        </div>
        <nav className="mt-4 hidden lg:block">
          <ul className="flex justify-center space-x-1 text-base">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link href={item.link || "#"} passHref>
                  <Button
                    variant="ghost"
                    className="flex text-base items-center hover:border-b-2 hover:border-b-red-600"
                  >
                    {item.title}
                    {item.items && item.items.length > 0 && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Button>
                </Link>
                {item.items && item.items.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                    {item.items.map((subItem, subIndex) => (
                      <div key={subIndex} className="relative group/subitem">
                        <Link
                          href={"link" in subItem ? subItem.link || "#" : "#"}
                          passHref
                        >
                          <Button
                            variant="ghost"
                            className="w-full justify-between px-3 py-2 text-base"
                          >
                            {subItem.title}
                            {"subItems" in subItem && (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </Button>
                        </Link>
                        {"subItems" in subItem && (
                          <div className="absolute left-full top-0 w-40 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible transition-all duration-300 ease-in-out z-50">
                            {subItem.subItems.map((nestedItem, nestedIndex) => (
                              <Link
                                key={nestedIndex}
                                href={nestedItem.link}
                                passHref
                              >
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start px-3 py-2 text-base"
                                >
                                  {nestedItem.name}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
