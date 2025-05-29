import Link from "next/link";
import { FC } from "react";

type BreadcrumbsProps = {
  currentPage: string;
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ currentPage }) => {
  return (
    <div className="tf-breadcrumb">
      <div className="container">
        <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
          <div className="tf-breadcrumb-list">
            <Link href="/" className="text">
              Inicio
            </Link>
            <i className="icon icon-arrow-right"></i>
            <Link href="/productos" className="text">
              Productos
            </Link>
            <i className="icon icon-arrow-right"></i>
            <span className="text">{currentPage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
