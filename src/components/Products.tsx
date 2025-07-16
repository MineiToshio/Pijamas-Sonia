"use client";

import { FC, useState, useMemo } from "react";
import ProductsList from "./ProductsList";
import Portal from "./Portal";
import Filter from "./Filter";
import { INVENTORY } from "@/utils/inventory";
import { Product, Filters, SortType } from "@/utils/types";

const ITEMS_TO_SHOW = 12;

const Products: FC = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<Filters>({});
  const [sortType, setSortType] = useState<SortType>("a-z");

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
            product.colors.map((color) => color.name),
            (filterColor, productColor) => filterColor === productColor,
          ),
        () => filterByPartialArray(filters.sizes, product.sizes),
      ];

      return filterChecks.every((check) => check());
    });
  }, [filters]);

  const sortedAndFilteredProducts = useMemo(() => {
    const sorted = [...filteredProducts];

    switch (sortType) {
      case "z-a":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "price-low-high":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return sorted.sort((a, b) => b.price - a.price);
      case "a-z":
      default:
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [filteredProducts, sortType]);

  const startIndex = currentPage * ITEMS_TO_SHOW;
  const endIndex = startIndex + ITEMS_TO_SHOW;
  const products = sortedAndFilteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedAndFilteredProducts.length / ITEMS_TO_SHOW);

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

  const handleRemoveFilter = (filterType: keyof Filters, value?: string) => {
    const newFilters = { ...filters };

    const removeArrayFilterValue = (key: keyof Filters, valueToRemove: string) => {
      const currentArray = newFilters[key] as string[] | undefined;
      if (currentArray) {
        const filteredArray = currentArray.filter((item) => item !== valueToRemove);
        if (filteredArray.length === 0) {
          delete newFilters[key];
        } else {
          (newFilters[key] as string[]) = filteredArray;
        }
      }
    };

    switch (filterType) {
      case "genders":
      case "materials":
      case "colors":
      case "sizes":
        if (value) {
          removeArrayFilterValue(filterType, value);
        }
        break;
      case "price":
        delete newFilters.price;
        break;
      default:
        break;
    }

    setFilters(newFilters);
    setCurrentPage(0);
  };

  const handleClearAllFilters = () => {
    setFilters({});
    setCurrentPage(0);
  };

  const handleSortChange = (newSortType: SortType) => {
    setSortType(newSortType);
    setCurrentPage(0);
  };

  return (
    <>
      <ProductsList
        products={products}
        currentPage={currentPage}
        totalPages={totalPages}
        filters={filters}
        sortType={sortType}
        productsCount={sortedAndFilteredProducts.length}
        goToNextPage={goToNextPage}
        goToPrevPage={goToPrevPage}
        goToPage={goToPage}
        onRemoveFilter={handleRemoveFilter}
        onClearAllFilters={handleClearAllFilters}
        onSortChange={handleSortChange}
      />
      <Portal>
        <Filter filters={filters} onChange={handleFilterChange} />
      </Portal>
    </>
  );
};

export default Products;
