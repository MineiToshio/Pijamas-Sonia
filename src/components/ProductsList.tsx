"use client";

import { Filters, Product, SortType } from "@/utils/types";
import { FC, useMemo } from "react";
import ProductCard from "./ProductCard";
import clsx from "clsx";
import FilterTag from "./FilterTag";
import { COLORS } from "@/utils/constants";

const SORT_OPTIONS = [
  { value: "a-z" as SortType, label: "Alfabéticamente, A-Z" },
  { value: "z-a" as SortType, label: "Alfabéticamente, Z-A" },
  { value: "price-low-high" as SortType, label: "Precio, menor a mayor" },
  { value: "price-high-low" as SortType, label: "Precio, mayor a menor" },
];

type Props = {
  products: Product[];
  totalPages: number;
  currentPage: number;
  filters: Filters;
  sortType: SortType;
  productsCount: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  goToPage: (pageNumber: number) => void;
  onRemoveFilter: (filterType: keyof Filters, value?: string) => void;
  onClearAllFilters: () => void;
  onSortChange: (sortType: SortType) => void;
};

const ProductsList: FC<Props> = ({
  products,
  totalPages,
  currentPage,
  filters,
  sortType,
  productsCount,
  goToNextPage,
  goToPrevPage,
  goToPage,
  onRemoveFilter,
  onClearAllFilters,
  onSortChange,
}) => {
  const hasFilters = useMemo(() => {
    return !!(
      (filters.genders && filters.genders.length > 0) ||
      (filters.materials && filters.materials.length > 0) ||
      filters.price ||
      (filters.colors && filters.colors.length > 0) ||
      (filters.sizes && filters.sizes.length > 0)
    );
  }, [filters]);

  const getSortDisplayText = (sort: SortType): string => {
    const option = SORT_OPTIONS.find((option) => option.value === sort);
    return option ? option.label : "Alfabéticamente, A-Z";
  };

  const handleSortChange = (newSortType: SortType) => {
    onSortChange(newSortType);
  };

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
                <span className="text-sort-value">{getSortDisplayText(sortType)}</span>
                <span className="icon icon-arrow-down"></span>
              </div>
              <div className="dropdown-menu">
                {SORT_OPTIONS.map((option) => (
                  <div
                    key={option.value}
                    className={clsx("select-item", {
                      active: sortType === option.value,
                    })}
                    data-sort-value={option.value}
                    onClick={() => handleSortChange(option.value)}
                  >
                    <span className="text-value-item">{option.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-control-shop">
          {hasFilters && (
            <div className="meta-filter-shop">
              <div className="count-text">{productsCount} Productos encontrados</div>
              <div id="applied-filters">
                {filters.genders?.map((gender) => (
                  <FilterTag key={gender} label={gender} onRemove={() => onRemoveFilter("genders", gender)} />
                ))}
                {filters.materials?.map((material) => (
                  <FilterTag key={material} label={material} onRemove={() => onRemoveFilter("materials", material)} />
                ))}
                {filters.price && (
                  <FilterTag
                    label={`$${filters.price.min}-${filters.price.max}`}
                    onRemove={() => onRemoveFilter("price")}
                  />
                )}
                {filters.colors?.map((color) => {
                  const colorClass = Object.values(COLORS).find((c) => c.name === color)?.value;
                  return (
                    <FilterTag
                      key={color}
                      color={colorClass}
                      label={color}
                      onRemove={() => onRemoveFilter("colors", color)}
                    />
                  );
                })}
                {filters.sizes?.map((size) => (
                  <FilterTag key={size} label={`Talla ${size}`} onRemove={() => onRemoveFilter("sizes", size)} />
                ))}
              </div>
              <button className="remove-all-filters" onClick={onClearAllFilters}>
                Remover filtros <i className="icon icon-close"></i>
              </button>
            </div>
          )}

          <div className="tf-grid-layout wrapper-shop tf-col-4" id="gridLayout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} className="grid" />
            ))}

            {totalPages > 1 && (
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
