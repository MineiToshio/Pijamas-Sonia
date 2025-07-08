import { COLORS, GENDERS, MATERIALS, SIZES } from "@/utils/constants";
import { INVENTORY } from "@/utils/inventory";
import { Filters } from "@/utils/types";
import clsx from "clsx";
import { FC } from "react";
import PriceSlider from "./PriceSlider";

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

const Filter: FC<Props> = ({ filters, onChange }) => {
  const maxPrice = Math.max(...INVENTORY.map((product) => product.price));

  const toggleArrayFilter = <T,>(
    filterKey: keyof Filters,
    value: T,
    currentArray: T[] | undefined,
    compareFn: (a: T, b: T) => boolean = (a, b) => a === b,
  ) => {
    const current = currentArray || [];
    const exists = current.some((item) => compareFn(item, value));
    const newArray = exists ? current.filter((item) => !compareFn(item, value)) : [...current, value];

    onChange({
      ...filters,
      [filterKey]: newArray.length > 0 ? newArray : undefined,
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    onChange({
      ...filters,
      price: { min, max },
    });
  };

  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <header className="canvas-header">
          <div className="filter-icon">
            <span className="icon icon-filter"></span>
            <span>Filtros</span>
          </div>
          <span className="icon-close icon-close-popup" data-bs-dismiss="offcanvas" aria-label="Close"></span>
        </header>
        <div className="canvas-body">
          <div className="widget-facet">
            <div
              className="facet-title"
              data-bs-target="#gender"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="gender"
            >
              <span>Género</span>
              <span className="icon icon-arrow-up"></span>
            </div>
            <div id="gender" className="collapse show">
              <ul className="tf-filter-group current-scrollbar mb_36">
                {Object.values(GENDERS).map((gender) => {
                  const count = INVENTORY.filter((i) => i.gender === gender).length;
                  if (count === 0) return null;
                  return (
                    <li key={gender} className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="gender"
                        className="tf-check"
                        id={`gender-${gender}`}
                        checked={filters.genders?.includes(gender) || false}
                        onChange={() => toggleArrayFilter("genders", gender, filters.genders)}
                      />
                      <label htmlFor={`gender-${gender}`} className="label">
                        <span>{gender}</span>&nbsp;<span>({count})</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="widget-facet">
            <div
              className="facet-title"
              data-bs-target="#material"
              data-bs-toggle="collapse"
              aria-expanded="true"
              aria-controls="material"
            >
              <span>Material</span>
              <span className="icon icon-arrow-up"></span>
            </div>
            <div id="material" className="collapse show">
              <ul className="tf-filter-group current-scrollbar mb_36">
                {Object.values(MATERIALS).map((material) => {
                  const count = INVENTORY.filter((i) => i.material === material).length;
                  if (count === 0) return null;
                  return (
                    <li key={material} className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="material"
                        className="tf-check"
                        id={`material-${material}`}
                        checked={filters.materials?.includes(material) || false}
                        onChange={() => toggleArrayFilter("materials", material, filters.materials)}
                      />
                      <label htmlFor={`material-${material}`} className="label">
                        <span>{material}</span>&nbsp;<span>({count})</span>
                      </label>
                    </li>
                  );
                })}
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
              <span>Precio</span>
              <span className="icon icon-arrow-up"></span>
            </div>
            <div id="price" className="collapse show">
              <div className="widget-price filter-price">
                <PriceSlider
                  min={0}
                  max={maxPrice}
                  currentMin={filters.price?.min || 0}
                  currentMax={filters.price?.max || maxPrice}
                  onChange={handlePriceChange}
                />

                <div className="box-title-price">
                  <span className="title-price">Precio :</span>
                  <div className="caption-price">
                    <span className="price-val">${filters.price?.min || 0}</span>
                    <span>-</span>
                    <span className="price-val">${filters.price?.max || maxPrice}</span>
                  </div>
                </div>
              </div>
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
                {Object.values(COLORS).map((color) => {
                  const count = INVENTORY.filter((i) =>
                    i.colors.some((productColor) => productColor.name === color.name),
                  ).length;
                  if (count === 0) return null;
                  return (
                    <li key={color.value} className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="color"
                        className={clsx("tf-check-color", color.value)}
                        id={`color-${color.name}`}
                        value={color.name}
                        checked={filters.colors?.includes(color.name) || false}
                        onChange={() => toggleArrayFilter("colors", color.name, filters.colors)}
                      />
                      <label htmlFor={`color-${color.name}`} className="label">
                        <span>{color.name}</span>&nbsp;<span>({count})</span>
                      </label>
                    </li>
                  );
                })}
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
              <span>Talla</span>
              <span className="icon icon-arrow-up"></span>
            </div>
            <div id="size" className="collapse show">
              <ul className="tf-filter-group current-scrollbar">
                {Object.values(SIZES).map((size) => {
                  const count = INVENTORY.filter((i) => i.sizes.some((productSize) => productSize === size)).length;
                  if (count === 0) return null;
                  return (
                    <li key={size} className="list-item d-flex gap-12 align-items-center">
                      <input
                        type="checkbox"
                        name="size"
                        className="tf-check tf-check-size"
                        value={size}
                        id={`size-${size}`}
                        checked={filters.sizes?.includes(size) || false}
                        onChange={() => toggleArrayFilter("sizes", size, filters.sizes)}
                      />
                      <label htmlFor={`size-${size}`} className="label">
                        <span>{size}</span>&nbsp;<span>({count})</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
