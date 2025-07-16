"use client";

import { FC, useState, useMemo, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProductsList from "./ProductsList";
import Portal from "./Portal";
import Filter from "./Filter";
import { INVENTORY } from "@/utils/inventory";
import { Product, Filters, SortType } from "@/utils/types";
import { ValueOf } from "next/dist/shared/lib/constants";
import { GENDERS, MATERIALS, SIZES } from "@/utils/constants";

const ITEMS_TO_SHOW = 12;

const Products: FC = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [currentPage, setCurrentPage] = useState(0);
  const [filters, setFilters] = useState<Filters>({});
  const [sortType, setSortType] = useState<SortType>("a-z");
  const [isInitialized, setIsInitialized] = useState(false);

  const parseFiltersFromURL = useCallback((): { filters: Filters; sortType: SortType; page: number } => {
    const urlFilters: Filters = {};

    const genders = searchParams.get("genders");
    if (genders) {
      urlFilters.genders = genders.split(",") as ValueOf<typeof GENDERS>[];
    }

    const materials = searchParams.get("materials");
    if (materials) {
      urlFilters.materials = materials.split(",") as ValueOf<typeof MATERIALS>[];
    }

    const colors = searchParams.get("colors");
    if (colors) {
      urlFilters.colors = colors.split(",");
    }

    const sizes = searchParams.get("sizes");
    if (sizes) {
      urlFilters.sizes = sizes.split(",") as ValueOf<typeof SIZES>[];
    }

    const priceMin = searchParams.get("priceMin");
    const priceMax = searchParams.get("priceMax");
    if (priceMin && priceMax) {
      urlFilters.price = {
        min: parseFloat(priceMin),
        max: parseFloat(priceMax),
      };
    }

    const sort = searchParams.get("sort") as SortType;
    const validSortType = ["a-z", "z-a", "price-low-high", "price-high-low"].includes(sort) ? sort : "a-z";

    const page = parseInt(searchParams.get("page") || "1") - 1;

    return {
      filters: urlFilters,
      sortType: validSortType,
      page: Math.max(0, page),
    };
  }, [searchParams]);

  const updateURL = useCallback(
    (newFilters: Filters, newSortType: SortType, newPage: number) => {
      const params = new URLSearchParams();

      if (newFilters.genders && newFilters.genders.length > 0) {
        params.set("genders", newFilters.genders.join(","));
      }

      if (newFilters.materials && newFilters.materials.length > 0) {
        params.set("materials", newFilters.materials.join(","));
      }

      if (newFilters.colors && newFilters.colors.length > 0) {
        params.set("colors", newFilters.colors.join(","));
      }

      if (newFilters.sizes && newFilters.sizes.length > 0) {
        params.set("sizes", newFilters.sizes.join(","));
      }

      if (newFilters.price) {
        params.set("priceMin", newFilters.price.min.toString());
        params.set("priceMax", newFilters.price.max.toString());
      }

      if (newSortType !== "a-z") {
        params.set("sort", newSortType);
      }

      if (newPage > 0) {
        params.set("page", (newPage + 1).toString());
      }

      const queryString = params.toString();
      const newURL = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(newURL, { scroll: false });
    },
    [router, pathname],
  );

  useEffect(() => {
    if (!isInitialized) {
      const { filters: urlFilters, sortType: urlSortType, page: urlPage } = parseFiltersFromURL();
      setFilters(urlFilters);
      setSortType(urlSortType);
      setCurrentPage(urlPage);
      setIsInitialized(true);
    }
  }, [parseFiltersFromURL, isInitialized]);

  useEffect(() => {
    if (isInitialized) {
      updateURL(filters, sortType, currentPage);
    }
  }, [filters, sortType, currentPage, updateURL, isInitialized]);

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

  if (!isInitialized) {
    return null;
  }

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
