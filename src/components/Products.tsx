import { FC } from "react";
import ProductsList from "./ProductsList";
import Portal from "./Portal";
import Filter from "./Filter";

const Products: FC = ({}) => {
  return (
    <>
      <ProductsList />
      <Portal>
        <Filter />
      </Portal>
    </>
  );
};

export default Products;
