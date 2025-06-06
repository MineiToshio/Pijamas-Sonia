import { BEST_PRODUCTS } from "@/utils/inventory";
import { FC } from "react";
import ProductCard from "./ProductCard";

const BestProducts: FC = () => {
  return (
    <section className="flat-spacing-5 pt_0 flat-seller">
      <div className="container">
        <div className="flat-title">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            Nuestros mejores productos
          </span>
          <p className="sub-title wow fadeInUp" data-wow-delay="0s">
            Descubre el confort supremo: Pijamas duraderas diseñadas para noches de descanso perfecto
          </p>
        </div>
        <div className="grid-layout loadmore-item wow fadeInUp" data-wow-delay="0s" data-grid="grid-4">
          {BEST_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} className="fl-item" />
          ))}
        </div>
        <div className="tf-pagination-wrap view-more-button text-center">
          <button className="tf-btn-loading tf-loading-default style-2 btn-loadmore ">
            <span className="text">Cargar más</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
