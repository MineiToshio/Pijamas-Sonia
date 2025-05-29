import { BEST_PRODUCTS } from "@/utils/inventory";
import Link from "next/link";
import { FC } from "react";

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
            <div key={product.id} className="card-product fl-item">
              <div className="card-product-wrapper">
                <Link href={`/productos/${product.slug}`} className="product-img">
                  <img
                    className="lazyload img-product"
                    data-src={product.mainImage}
                    src={product.mainImage}
                    alt="image-product"
                  />
                  <img
                    className="lazyload img-hover"
                    data-src={product.hoverImage}
                    src={product.hoverImage}
                    alt="image-product"
                  />
                </Link>
                {product.sizes.length > 0 && (
                  <div className="size-list">
                    {product.sizes.map((size) => (
                      <span key={size}>{size}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="card-product-info">
                <Link href={`/productos/${product.slug}`} className="title link">
                  {product.name}
                </Link>
                <span className="price">{product.price}</span>
                {product.colors.length > 0 && (
                  <ul className="list-color-product">
                    {product.colors.map((color, index) => (
                      <li key={index} className={`list-color-item color-swatch ${index === 0 ? "active" : ""}`}>
                        <span className="tooltip">{color.name}</span>
                        <span className={`swatch-value ${color.value}`}></span>
                        <img className="lazyload" data-src={color.image} src={color.image} alt="image-product" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
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
