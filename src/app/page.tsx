import BestProducts from "@/components/BestProducts";
import ProductsCarousel from "@/components/ProductsCarousel";
import Slider from "@/components/Slider";
import Stores from "@/components/Stores";

export default function Home() {
  return (
    <>
      <Slider />
      <ProductsCarousel />
      <BestProducts />
      <Stores />
    </>
  );
}
