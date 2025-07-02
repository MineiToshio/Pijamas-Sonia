"use client";

import { FC, useState } from "react";
import ProductsList from "./ProductsList";
import Portal from "./Portal";
import Filter, { Filters } from "./Filter";
import { INVENTORY } from "@/utils/inventory";

const ITEMS_TO_SHOW = 12;

const Products: FC = ({}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<Filters>({});
  const startIndex = currentPage * ITEMS_TO_SHOW;
  const endIndex = startIndex + ITEMS_TO_SHOW;
  const products = INVENTORY.slice(startIndex, endIndex);

  const totalPages = Math.ceil(INVENTORY.length / ITEMS_TO_SHOW);

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

  const handleFilterChange = () => {
    setFilters({});
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
