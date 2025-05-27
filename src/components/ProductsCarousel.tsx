import Link from "next/link";
import { FC } from "react";

interface CategoryItem {
  image: string;
  title: string;
  link: string;
}

const categories: CategoryItem[] = [
  {
    image: "images/collections/hombre.png",
    title: "Hombres",
    link: "/productos",
  },
  {
    image: "images/collections/mujer.png",
    title: "Mujeres",
    link: "/productos",
  },
  {
    image: "images/collections/nino.png",
    title: "Niños",
    link: "/productos",
  },
  {
    image: "images/collections/bata.png",
    title: "Batas",
    link: "/productos",
  },
  {
    image: "images/collections/maternidad.png",
    title: "Maternidad",
    link: "/productos",
  },
];

const ProductsCarousel: FC = ({}) => {
  return (
    <section className="flat-spacing-4 flat-categorie">
      <div className="container-full">
        <div className="flat-title-v2">
          <div className="box-sw-navigation">
            <div className="nav-sw nav-next-slider nav-next-collection">
              <span className="icon icon-arrow-left"></span>
            </div>
            <div className="nav-sw nav-prev-slider nav-prev-collection">
              <span className="icon icon-arrow-right"></span>
            </div>
          </div>
          <span className="text-3 fw-7 text-uppercase title wow fadeInUp" data-wow-delay="0s">
            PRODUCTOS POR CATEGORÍA
          </span>
        </div>
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-8">
            <div
              dir="ltr"
              className="swiper tf-sw-collection"
              data-preview="3"
              data-tablet="2"
              data-mobile="2"
              data-space-lg="30"
              data-space-md="30"
              data-space="15"
              data-loop="false"
              data-auto-play="false"
            >
              <div className="swiper-wrapper">
                {categories.map((category, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="collection-item style-left hover-img">
                      <div className="collection-inner">
                        <a href={category.link} className="collection-image img-style">
                          <img
                            className="lazyload"
                            data-src={category.image}
                            src={category.image}
                            alt={`collection-${category.title}`}
                          />
                        </a>
                        <div className="collection-content">
                          <a href={category.link} className="tf-btn collection-title hover-icon fs-15">
                            <span>{category.title}</span>
                            <i className="icon icon-arrow1-top-left"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-4">
            <div className="discovery-new-item">
              <h5>Revisa nuestro catálogo completo</h5>
              <Link href="/productos">
                <i className="icon-arrow1-top-left"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
