import { Product } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ribbed Tank Top",
    price: "$16.95",
    mainImage: "images/products/orange-1.jpg",
    hoverImage: "images/products/white-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Orange",
        value: "bg_orange-3",
        image: "images/products/orange-1.jpg",
      },
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-1.jpg",
      },
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-1.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Ribbed modal T-shirt",
    price: "From $18.95",
    mainImage: "images/products/brown.jpg",
    hoverImage: "images/products/purple.jpg",
    sizes: ["M", "L", "XL"],
    colors: [
      {
        name: "Brown",
        value: "bg_brown",
        image: "images/products/brown.jpg",
      },
      {
        name: "Light Purple",
        value: "bg_purple",
        image: "images/products/purple.jpg",
      },
      {
        name: "Light Green",
        value: "bg_light-green",
        image: "images/products/green.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Oversized Printed T-shirt",
    price: "$10.00",
    mainImage: "images/products/white-3.jpg",
    hoverImage: "images/products/white-4.jpg",
    sizes: [],
    colors: [],
  },
  {
    id: 4,
    name: "Oversized Printed T-shirt",
    price: "$16.95",
    mainImage: "images/products/white-2.jpg",
    hoverImage: "images/products/pink-1.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-2.jpg",
      },
      {
        name: "Pink",
        value: "bg_purple",
        image: "images/products/pink-1.jpg",
      },
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-2.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "V-neck linen T-shirt",
    price: "$114.95",
    mainImage: "images/products/brown-2.jpg",
    hoverImage: "images/products/brown-3.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "Brown",
        value: "bg_brown",
        image: "images/products/brown-2.jpg",
      },
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-5.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Loose Fit Sweatshirt",
    price: "$10.00",
    mainImage: "images/products/light-green-1.jpg",
    hoverImage: "images/products/light-green-2.jpg",
    sizes: [],
    colors: [
      {
        name: "Light Green",
        value: "bg_light-green",
        image: "images/products/light-green-1.jpg",
      },
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-3.jpg",
      },
      {
        name: "Blue",
        value: "bg_blue-2",
        image: "images/products/blue.jpg",
      },
      {
        name: "Dark Blue",
        value: "bg_dark-blue",
        image: "images/products/dark-blue.jpg",
      },
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-6.jpg",
      },
      {
        name: "Light Grey",
        value: "bg_light-grey",
        image: "images/products/light-grey.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Regular Fit Oxford Shirt",
    price: "$10.00",
    mainImage: "images/products/black-4.jpg",
    hoverImage: "images/products/black-5.jpg",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-4.jpg",
      },
      {
        name: "Dark Blue",
        value: "bg_dark-blue",
        image: "images/products/dark-blue-2.jpg",
      },
      {
        name: "Beige",
        value: "bg_beige",
        image: "images/products/beige.jpg",
      },
      {
        name: "Light Blue",
        value: "bg_light-blue",
        image: "images/products/light-blue.jpg",
      },
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-7.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "Loose Fit Hoodie",
    price: "$9.95",
    mainImage: "images/products/white-8.jpg",
    hoverImage: "images/products/black-6.jpg",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-8.jpg",
      },
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-7.jpg",
      },
      {
        name: "Blue",
        value: "bg_blue-2",
        image: "images/products/blue-2.jpg",
      },
    ],
  },
  {
    id: 9,
    name: "Patterned scarf",
    price: "$14.95",
    mainImage: "images/products/brown-4.jpg",
    hoverImage: "images/products/black-8.jpg",
    sizes: ["M", "L", "XL"],
    colors: [
      {
        name: "Brown",
        value: "bg_brown",
        image: "images/products/brown-4.jpg",
      },
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-8.jpg",
      },
    ],
  },
  {
    id: 10,
    name: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "$18.95",
    mainImage: "images/products/black-9.jpg",
    hoverImage: "images/products/black-10.jpg",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Black",
        value: "bg_dark",
        image: "images/products/black-9.jpg",
      },
      {
        name: "White",
        value: "bg_white",
        image: "images/products/white-9.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "$18.95",
    mainImage: "images/products/grey-2.jpg",
    hoverImage: "images/products/grey.jpg",
    sizes: ["S", "M", "L"],
    colors: [
      {
        name: "Grey",
        value: "bg_grey",
        image: "images/products/grey-2.jpg",
      },
      {
        name: "Pink",
        value: "bg_pink",
        image: "images/products/pink-2.jpg",
      },
      {
        name: "Light Pink",
        value: "bg_light-pink",
        image: "images/products/light-pink.jpg",
      },
    ],
  },
  {
    id: 12,
    name: "Slim Fit Fine-knit Turtleneck Sweater",
    price: "$18.95",
    mainImage: "images/products/black-11.jpg",
    hoverImage: "images/products/black-12.jpg",
    sizes: ["S", "M", "L"],
    colors: [],
  },
];

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
          {PRODUCTS.map((product) => (
            <div key={product.id} className="card-product fl-item">
              <div className="card-product-wrapper">
                <Link href="/product/1" className="product-img">
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
                <Link href="/product/1" className="title link">
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
