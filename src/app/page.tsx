import BestSeller from "./component/BestSeller";
import JewelryCarousel from "./component/Category";
import GiftGuideGrid from "./component/GiftGuide";
import HomeCorousel from "./component/HomeCarousel";
import JewelleryCrad from "./component/JewelleryCard";
import ProductCarousel from "./component/Product";
import TestimonialCarousel from "./component/Testimonial";

export default function Home() {
  return (
    <>
      <HomeCorousel />
      <JewelryCarousel />
      <ProductCarousel />
      <JewelleryCrad />
      <BestSeller />
      <GiftGuideGrid />
      <TestimonialCarousel />
    </>
  );
}
