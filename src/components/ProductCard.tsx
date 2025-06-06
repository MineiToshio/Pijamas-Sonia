import { Product } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";

type Props = {
  product: Product;
  className?: string;
};

const ProductCard: FC<Props> = ({ product, className }) => {
  return (
    <div key={product.id} className={clsx("card-product", className)}>
      <div className="card-product-wrapper">
        <a href={`/productos/${product.slug}`} className="product-img">
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
        </a>
        {product.sizes.length > 0 && (
          <div className="size-list">
            {product.sizes.map((size) => (
              <span key={size}>{size}</span>
            ))}
          </div>
        )}
      </div>
      <div className="card-product-info">
        <a href={`/productos/${product.slug}`} className="title link">
          {product.name}
        </a>
        <span className="price">S/{product.price.toFixed(2)}</span>
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
  );
};

export default ProductCard;
