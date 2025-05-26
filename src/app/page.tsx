import BestProducts from "@/components/BestProducts";
import ProductsCarousel from "@/components/ProductsCarousel";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <ProductsCarousel />
      <BestProducts />
    </>
  );
}
