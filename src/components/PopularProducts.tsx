import { BEST_PRODUCTS } from "@/utils/inventory";
import { FC } from "react";
import ProductCard from "./ProductCard";

type Props = {
  excludeProductId?: number;
};

const getRandomProducts = (products: typeof BEST_PRODUCTS, count: number = 5) => {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const PopularProducts: FC<Props> = ({ excludeProductId = 0 }) => {
  const filteredProducts = BEST_PRODUCTS.filter((p) => p.id !== excludeProductId);
  const popularProducts = getRandomProducts(filteredProducts);

  return (
    <section className="flat-spacing-1 pt_0">
      <div className="container">
        <div className="flat-title">
          <span className="title">Mas populares</span>
        </div>
        <div className="hover-sw-nav hover-sw-2">
          <div
            dir="ltr"
            className="swiper tf-sw-product-sell wrap-sw-over"
            data-preview="4"
            data-tablet="3"
            data-mobile="2"
            data-space-lg="30"
            data-space-md="15"
            data-pagination="2"
            data-pagination-md="3"
            data-pagination-lg="3"
          >
            <div className="swiper-wrapper">
              {popularProducts.map((product) => (
                <div className="swiper-slide" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="nav-sw nav-next-slider nav-next-product box-icon w_46 round">
            <span className="icon icon-arrow-left"></span>
          </div>
          <div className="nav-sw nav-prev-slider nav-prev-product box-icon w_46 round">
            <span className="icon icon-arrow-right"></span>
          </div>
          <div className="sw-dots style-2 sw-pagination-product justify-content-center"></div>
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
