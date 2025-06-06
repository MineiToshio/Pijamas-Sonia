import { Product } from "@/utils/types";
import { FC } from "react";
import ProductCard from "./ProductCard";
import clsx from "clsx";

type Props = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToPage: (pageNumber: number) => void;
};

const ProductsList: FC<Props> = ({ products, totalPages, currentPage, goToNextPage, goToPrevPage, goToPage }) => {
  return (
    <section className="flat-spacing-2">
      <div className="container">
        <div className="tf-shop-control grid-3 align-items-center">
          <div className="tf-control-filter">
            <a href="#filterShop" data-bs-toggle="offcanvas" aria-controls="offcanvasLeft" className="tf-btn-filter">
              <span className="icon icon-filter"></span>
              <span className="text">Filter</span>
            </a>
          </div>
          <ul className="tf-control-layout d-flex justify-content-center">
            <li className="tf-view-layout-switch sw-layout-2" data-value-layout="tf-col-2">
              <div className="item">
                <span className="icon icon-grid-2"></span>
              </div>
            </li>
            <li className="tf-view-layout-switch sw-layout-3" data-value-layout="tf-col-3">
              <div className="item">
                <span className="icon icon-grid-3"></span>
              </div>
            </li>
            <li className="tf-view-layout-switch sw-layout-4 active" data-value-layout="tf-col-4">
              <div className="item">
                <span className="icon icon-grid-4"></span>
              </div>
            </li>
            <li className="tf-view-layout-switch sw-layout-5" data-value-layout="tf-col-5">
              <div className="item">
                <span className="icon icon-grid-5"></span>
              </div>
            </li>
            <li className="tf-view-layout-switch sw-layout-6" data-value-layout="tf-col-6">
              <div className="item">
                <span className="icon icon-grid-6"></span>
              </div>
            </li>
          </ul>
          <div className="tf-control-sorting d-flex justify-content-end">
            <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
              <div className="btn-select">
                <span className="text-sort-value">Featured</span>
                <span className="icon icon-arrow-down"></span>
              </div>
              <div className="dropdown-menu">
                <div className="select-item active">
                  <span className="text-value-item">Featured</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Best selling</span>
                </div>
                <div className="select-item" data-sort-value="a-z">
                  <span className="text-value-item">Alphabetically, A-Z</span>
                </div>
                <div className="select-item" data-sort-value="z-a">
                  <span className="text-value-item">Alphabetically, Z-A</span>
                </div>
                <div className="select-item" data-sort-value="price-low-high">
                  <span className="text-value-item">Price, low to high</span>
                </div>
                <div className="select-item" data-sort-value="price-high-low">
                  <span className="text-value-item">Price, high to low</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Date, old to new</span>
                </div>
                <div className="select-item">
                  <span className="text-value-item">Date, new to old</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-control-shop">
          <div className="meta-filter-shop">
            <div id="product-count-grid" className="count-text"></div>
            <div id="product-count-list" className="count-text"></div>
            <div id="applied-filters"></div>
            <button id="remove-all" className="remove-all-filters" style={{ display: "none" }}>
              Remove All <i className="icon icon-close"></i>
            </button>
          </div>

          <div className="tf-grid-layout wrapper-shop tf-col-4" id="gridLayout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} className="grid" />
            ))}

            <ul className="wg-pagination tf-pagination-list">
              {currentPage > 0 && (
                <li>
                  <a href="#" className="pagination-link animate-hover-btn" onClick={goToPrevPage}>
                    <span className="icon icon-arrow-left"></span>
                  </a>
                </li>
              )}
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index} className={clsx({ active: currentPage === index })}>
                  <a
                    href="#"
                    onClick={() => goToPage(index)}
                    className={clsx("pagination-link", { "animate-hover-btn": currentPage !== index })}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              {currentPage < totalPages - 1 && (
                <li>
                  <a href="#" className="pagination-link animate-hover-btn" onClick={goToNextPage}>
                    <span className="icon icon-arrow-right"></span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
