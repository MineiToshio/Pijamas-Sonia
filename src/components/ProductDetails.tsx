import { Product } from "@/utils/types";
import clsx from "clsx";
import { FC, Fragment } from "react";

type ProductDetailsProps = { product: Product };

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const colorPhotos = product.colors.map((color) => ({ color: color.name, url: color.image }));
  const photos = [{ url: product.mainImage, color: "" }, { url: product.hoverImage, color: "" }, ...colorPhotos];
  return (
    <section className="flat-spacing-4 pt_0">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <div dir="ltr" className="swiper tf-product-media-thumbs other-image-zoom" data-direction="vertical">
                    <div className="swiper-wrapper stagger-wrap">
                      {photos.map((photo) => (
                        <div key={photo.url} className="swiper-slide stagger-item" data-color={photo.color}>
                          <div className="item">
                            <img className="lazyload" data-src={photo.url} src={photo.url} alt="img-product" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div dir="ltr" className="swiper tf-product-media-main" id="gallery-swiper-started">
                    <div className="swiper-wrapper">
                      {photos.map((photo) => (
                        <div key={photo.url} className="swiper-slide" data-color={photo.color}>
                          <a
                            href={photo.url}
                            target="_blank"
                            className="item"
                            data-pswp-width="770px"
                            data-pswp-height="1075px"
                          >
                            <img
                              className="tf-image-zoom lazyload"
                              data-zoom={photo.url}
                              data-src={photo.url}
                              src={photo.url}
                              alt=""
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-button-next button-style-arrow thumbs-next"></div>
                    <div className="swiper-button-prev button-style-arrow thumbs-prev"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main"></div>
                <div className="tf-product-info-list other-image-zoom">
                  <div className="tf-product-info-title">
                    <h5>{product.name}</h5>
                  </div>
                  <div className="tf-product-info-price">
                    <div className="price-on-sale">S/. {product.price.toFixed(2)}</div>
                  </div>
                  <div className="tf-product-info-variant-picker">
                    <div className="variant-picker-item">
                      <div className="variant-picker-label">
                        Color: <span className={"fw-6 variant-picker-label-value value-currentColor"}>-</span>
                      </div>
                      <div className="variant-picker-values">
                        {product.colors.map((color, index) => (
                          <Fragment key={color.name}>
                            <input id={`value-${color.name}`} type="radio" name="color1" defaultChecked={index === 0} />
                            <label
                              className={clsx("hover-tooltip radius-60 color-btn", { active: index === 0 })}
                              data-price={product.price}
                              htmlFor={`value-${color.name}`}
                              data-color={color.name}
                              data-value={color.name}
                            >
                              <span className={clsx("btn-checkbox", color.value)} />
                              <span className="tooltip">{color.name}</span>
                            </label>
                          </Fragment>
                        ))}
                      </div>
                    </div>
                    <div className="variant-picker-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="variant-picker-label">
                          Talla: <span className="fw-6 variant-picker-label-value">S</span>
                        </div>
                        <a href="#find_size" data-bs-toggle="modal" className="find-size fw-6">
                          Encuentra tu talla
                        </a>
                      </div>
                      <div className="variant-picker-values">
                        {product.sizes.map((size, index) => (
                          <Fragment key={size}>
                            <input type="radio" name="size1" id={`values-${size}`} defaultChecked={index === 0} />
                            <label
                              className="style-text size-btn"
                              data-price={product.price}
                              htmlFor={`values-${size}`}
                              data-value={size}
                            >
                              <p>{size}</p>
                            </label>
                          </Fragment>
                        ))}
                        {/* <input type="radio" name="size1" id="values-m" />
                        <label className="style-text size-btn" data-price="55" htmlFor="values-m" data-value="M">
                          <p>M</p>
                        </label>
                        <input type="radio" name="size1" id="values-l" />
                        <label className="style-text size-btn" data-price="56" htmlFor="values-l" data-value="L">
                          <p>L</p>
                        </label>
                        <input type="radio" name="size1" id="values-xl" />
                        <label className="style-text size-btn" data-price="60" htmlFor="values-xl" data-value="XL">
                          <p>XL</p>
                        </label> */}
                      </div>
                    </div>
                  </div>
                  <div className="tf-product-info-item">
                    <div className="row">
                      <div className="col-12">
                        <div className="d-flex flex-column gap-20">
                          <div>
                            <div className="lg_fs_18 fw-6 line py_15">Descripción</div>
                            <div className="py_20 lg_py_30">
                              <p className="mb_30">{product.description}</p>
                              <div className="tf-product-des-demo">
                                <div className="right">
                                  <h3 className="fs-16 fw-5">Características</h3>
                                  <ul>
                                    <li>Front button placket</li>
                                    <li> Adjustable sleeve tabs</li>
                                    <li>Babaton embroidered crest at placket and hem</li>
                                  </ul>
                                  <h3 className="fs-16 fw-5">Materiales</h3>
                                  <ul className="mb-0">
                                    <li>Contiene: 100% algodon jersey</li>
                                    <li>No se destiñe al lavar</li>
                                    <li>Importado</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="lg_fs_18 fw-6 line py_15">Información adicional</div>
                            <div className="py_20 lg_py_30">
                              <table className="tf-pr-attrs">
                                <tbody>
                                  <tr className="tf-attr-pa-color">
                                    <th className="tf-attr-label">Color</th>
                                    <td className="tf-attr-value">
                                      <p>White, Pink, Black</p>
                                    </td>
                                  </tr>
                                  <tr className="tf-attr-pa-size">
                                    <th className="tf-attr-label">Size</th>
                                    <td className="tf-attr-value">
                                      <p>S, M, L, XL</p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
