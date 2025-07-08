"use client";

import { FC, useState, useMemo } from "react";
import ProductsList from "./ProductsList";
import Portal from "./Portal";
import Filter, { Filters } from "./Filter";
import { INVENTORY } from "@/utils/inventory";
import { Product } from "@/utils/types";

const ITEMS_TO_SHOW = 12;

const Products: FC = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<Filters>({});

  const applyFilter = (condition: boolean, filterFn: () => boolean): boolean => {
    return !condition || filterFn();
  };

  const filterBySimpleArray = <T,>(filterArray: T[] | undefined, productValue: T): boolean => {
    return applyFilter(!!filterArray && filterArray.length > 0, () => filterArray!.includes(productValue));
  };

  const filterByPartialArray = <T,>(
    filterArray: T[] | undefined,
    productArray: T[],
    compareFn: (filterItem: T, productItem: T) => boolean = (a, b) => a === b,
  ): boolean => {
    return applyFilter(!!filterArray && filterArray.length > 0, () =>
      productArray.some((productItem) => filterArray!.some((filterItem) => compareFn(filterItem, productItem))),
    );
  };

  const filterByRange = (filterRange: { min: number; max: number } | undefined, productValue: number): boolean => {
    return applyFilter(!!filterRange, () => productValue >= filterRange!.min && productValue <= filterRange!.max);
  };

  const filteredProducts = useMemo(() => {
    return INVENTORY.filter((product: Product) => {
      const filterChecks = [
        () => filterBySimpleArray(filters.genders, product.gender),
        () => filterBySimpleArray(filters.materials, product.material),
        () => filterByRange(filters.price, product.price),
        () =>
          filterByPartialArray(
            filters.colors,
            product.colors,
            (filterColor, productColor) => filterColor.name === productColor.name,
          ),
        () => filterByPartialArray(filters.sizes, product.sizes),
      ];

      return filterChecks.every((check) => check());
    });
  }, [filters]);

  const startIndex = currentPage * ITEMS_TO_SHOW;
  const endIndex = startIndex + ITEMS_TO_SHOW;
  const products = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_TO_SHOW);

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(0);
  };

  return (
    <>
      <ProductsList
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
      />
      <Portal>
        <Filter filters={filters} onChange={handleFilterChange} />
      </Portal>
    </>
  );
};

export default Products;
