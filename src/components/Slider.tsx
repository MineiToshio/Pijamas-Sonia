import Link from "next/link";
import { FC } from "react";

const SLIDES = [{
  title: "Confort que perdura",
  text: "Pijamas artesanales con materiales premium que mantienen su suavidad y forma por años",
  image: "images/slider/slide1.jpeg",
  cta: {
    text: "Ver Colección",
    url: "/productos",
  }
}, {
  title: "Diseñados para disfrutar",
  text: "Telas de alta calidad que te brindan el máximo confort en cada momento de descanso",
  image: "images/slider/slide2.jpeg",
  cta: {
    text: "Explorar Productos",
    url: "/productos",
  }
}, {
  title: "Calidad que se siente",
  text: "Pijamas duraderos que se adaptan a ti, manteniendo su suavidad y confort con el tiempo",
  image: "images/slider/slide3.jpeg",
  cta: {
    text: "Descubrir Más",
    url: "/productos",
  }
}]

const Slider: FC = ({}) => {
  return (
    <section className="tf-slideshow slideshow-effect slider-effect-fade position-relative">
      <div dir="ltr" className="swiper tf-sw-effect">
        <div className="swiper-wrapper">
          {SLIDES.map((slide, index) => (
            <div className="swiper-slide" key={index}>
              <div className="slider-effect wrap-slider">
                <div className="content-left">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-12">
                        <div className="box-content">
                          <h1 className="heading fade-item fade-item-1">
                            {slide.title}
                          </h1>
                          <p className="desc fade-item fade-item-2">
                            {slide.text}
                          </p>
                          <Link
                            href={slide.cta.url}
                            className="fade-item fade-item-3 tf-btn btn-light-icon animate-hover-btn btn-xl radius-3"
                          >
                            <span>{slide.cta.text}</span>
                            <i className="icon icon-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-slider">
                  <img
                    className="lazyload"
                    data-src={slide.image}
                    src={slide.image}
                    alt={slide.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="wrap-pagination">
        <div className="container">
          <div className="sw-dots line-pagination sw-pagination-slider"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
