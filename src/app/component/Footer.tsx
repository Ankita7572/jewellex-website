import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="bg-gray-100 text-gray-600  pb-3 px-2 sm:px-4 lg:px-6"
      style={{
        backgroundImage: `url("/img/footer_bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Verified Reviews Badge */}
        <div className="flex justify-center mb-5">
          <div className=" p-4 text-center">
            <Image
              src="/img/footer_logo.png"
              alt="Judge.me Verified Reviews"
              className="mx-auto mb-2"
              unoptimized={true}
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About the shop */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">
              About the shop
            </h2>
            <p className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-teal-500" /> Ahmedabad based
            </p>
            <p>Legal Name- Harsh Ashwin Gala</p>
            <p className="flex items-center">
              <Mail className="mr-2 h-5 w-5 text-teal-500" />
              jewellex@gmail.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 h-5 w-5 text-teal-500" />
              7977619831
            </p>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Address</h2>
            <p>743/4959 GHB</p>
            <p>Near shriji English school,</p>
            <p>patelwadi ,Bapunagar</p>
            <p>Ahmedabad.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Quick Links</h2>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Refund Policy",
                "Terms of Service",
                // "Shipping",
                // "Track your order",
                "About us"
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-teal-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Newsletter</h2>
            <p>Subscribe for exclusive deals and updates.</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="w-full"
              />
              <Button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <Link
              href="#"
              className="hover:text-gray-400 text-teal-600 transition-colors duration-200"
            >
              <span className="sr-only">Facebook</span>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              href="#"
              className="hover:text-gray-400 text-teal-600 transition-colors duration-200"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} iblamebeads.com. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
