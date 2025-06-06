import { FC } from "react";

const Filter: FC = ({}) => {
  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="filter-icon">
            <span className="icon icon-filter"></span>
            <span>Filter</span>
          </div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
        </header>
        <div className="canvas-body">
          <div className="widget-facet wd-categories">
            <div
              className="facet-title"
              data-bs-target="#categories"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="categories"
            >
              <span>Product categories</span>
              <span className="icon icon-arrow-up"></span>
            </div>
            <div id="categories" className="collapse show">
              <ul className="list-categoris current-scrollbar mb_36">
                <li className="cate-item current">
                  <a href="shop-default.html">
                    <span>Fashion</span>
                  </a>
                </li>
                <li className="cate-item">
                  <a href="shop-default.html">
                    <span>Men</span>
                  </a>
                </li>
                <li className="cate-item">
                  <a href="shop-default.html">
                    <span>Women</span>
                  </a>
                </li>
                <li className="cate-item">
                  <a href="shop-default.html">
                    <span>Denim</span>
                  </a>
                </li>
                <li className="cate-item">
                  <a href="shop-default.html">
                    <span>Dress</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form action="#" id="facet-filter-form" className="facet-filter-form">
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#availability"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="availability"
              >
                <span>Availability</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="availability" className="collapse show">
                <ul className="tf-filter-group current-scrollbar mb_36">
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="availability" className="tf-check" id="inStock" />
                    <label htmlFor="inStock" className="label">
                      <span>In stock</span>&nbsp;<span>(14)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="availability" className="tf-check" id="outStock" />
                    <label htmlFor="outStock" className="label">
                      <span>Out of stock</span>&nbsp;<span>(2)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#price"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="price"
              >
                <span>Price</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="price" className="collapse show">
                <div className="widget-price filter-price">
                  <div className="price-val-range" id="price-value-range" data-min="0" data-max="500"></div>
                  <div className="box-title-price">
                    <span className="title-price">Price :</span>
                    <div className="caption-price">
                      <div className="price-val" id="price-min-value" data-currency="$"></div>
                      <span>-</span>
                      <div className="price-val" id="price-max-value" data-currency="$"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#brand"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="brand"
              >
                <span>Brand</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="brand" className="collapse show">
                <ul className="tf-filter-group current-scrollbar mb_36">
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="brand" className="tf-check" id="Ecomus" />
                    <label htmlFor="Ecomus" className="label">
                      <span>Ecomus</span>&nbsp;<span>(8)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="brand" className="tf-check" id="M&H" />
                    <label htmlFor="M&H" className="label">
                      <span>M&H</span>&nbsp;<span>(8)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#color"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="color"
              >
                <span>Color</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="color" className="collapse show">
                <ul className="tf-filter-group filter-color current-scrollbar mb_36">
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_beige" id="Beige" value="Beige" />
                    <label htmlFor="Beige" className="label">
                      <span>Beige</span>&nbsp;<span>(3)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_dark" id="Black" value="Black" />
                    <label htmlFor="Black" className="label">
                      <span>Black</span>&nbsp;<span>(18)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_blue-2" id="Blue" value="Blue" />
                    <label htmlFor="Blue" className="label">
                      <span>Blue</span>&nbsp;<span>(3)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_brown" id="Brown" value="Brown" />
                    <label htmlFor="Brown" className="label">
                      <span>Brown</span>&nbsp;<span>(3)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_cream" id="Cream" value="Cream" />
                    <label htmlFor="Cream" className="label">
                      <span>Cream</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_dark-beige"
                      id="Dark Beige"
                      value="Dark Beige"
                    />
                    <label htmlFor="Dark Beige" className="label">
                      <span>Dark Beige</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_dark-blue"
                      id="Dark Blue"
                      value="Dark Blue"
                    />
                    <label htmlFor="Dark Blue" className="label">
                      <span>Dark Blue</span>&nbsp;<span>(3)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_dark-green"
                      id="Dark Green"
                      value="Dark Green"
                    />
                    <label htmlFor="Dark Green" className="label">
                      <span>Dark Green</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_dark-grey"
                      id="Dark Grey"
                      value="Dark Grey"
                    />
                    <label htmlFor="Dark Grey" className="label">
                      <span>Dark Grey</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_grey" id="Grey" value="Grey" />
                    <label htmlFor="Grey" className="label">
                      <span>Grey</span>&nbsp;<span>(2)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_light-blue"
                      id="Light Blue"
                      value="Light Blue"
                    />
                    <label htmlFor="Light Blue" className="label">
                      <span>Light Blue</span>&nbsp;<span>(5)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_light-green"
                      id="Light Green"
                      value="Light Green"
                    />
                    <label htmlFor="Light Green" className="label">
                      <span>Light Green</span>&nbsp;<span>(3)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_light-grey"
                      id="Light Grey"
                      value="Light Grey"
                    />
                    <label htmlFor="Light Grey" className="label">
                      <span>Light Grey</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_light-pink"
                      id="Light Pink"
                      value="Light Pink"
                    />
                    <label htmlFor="Light Pink" className="label">
                      <span>Light Pink</span>&nbsp;<span>(2)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_purple"
                      id="Light Purple"
                      value="Light Purple"
                    />
                    <label htmlFor="Light Purple" className="label">
                      <span>Light Purple</span>&nbsp;<span>(2)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input
                      type="radio"
                      name="color"
                      className="tf-check-color bg_light-yellow"
                      id="Light Yellow"
                      value="Light Yellow"
                    />
                    <label htmlFor="Light Yellow" className="label">
                      <span>Light Yellow</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_orange" id="Orange" value="Orange" />
                    <label htmlFor="Orange" className="label">
                      <span>Orange</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_pink" id="Pink" value="Pink" />
                    <label htmlFor="Pink" className="label">
                      <span>Pink</span>&nbsp;<span>(2)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_taupe" id="Taupe" value="Taupe" />
                    <label htmlFor="Taupe" className="label">
                      <span>Taupe</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_white" id="White" value="White" />
                    <label htmlFor="White" className="label">
                      <span>White</span>&nbsp;<span>(14)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="color" className="tf-check-color bg_yellow" id="Yellow" value="Yellow" />
                    <label htmlFor="Yellow" className="label">
                      <span>Yellow</span>&nbsp;<span>(1)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="widget-facet">
              <div
                className="facet-title"
                data-bs-target="#size"
                data-bs-toggle="collapse"
                aria-expanded="true"
                aria-controls="size"
              >
                <span>Size</span>
                <span className="icon icon-arrow-up"></span>
              </div>
              <div id="size" className="collapse show">
                <ul className="tf-filter-group current-scrollbar">
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="size" className="tf-check tf-check-size" value="S" id="S" />
                    <label htmlFor="S" className="label">
                      <span>S</span>&nbsp;<span>(7)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="size" className="tf-check tf-check-size" value="M" id="M" />
                    <label htmlFor="M" className="label">
                      <span>M</span>&nbsp;<span>(8)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="size" className="tf-check tf-check-size" value="L" id="L" />
                    <label htmlFor="L" className="label">
                      <span>L</span>&nbsp;<span>(8)</span>
                    </label>
                  </li>
                  <li className="list-item d-flex gap-12 align-items-center">
                    <input type="radio" name="size" className="tf-check tf-check-size" value="XL" id="XL" />
                    <label htmlFor="XL" className="label">
                      <span>XL</span>&nbsp;<span>(6)</span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;
