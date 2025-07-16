import Products from "@/components/Products";
import Script from "next/script";
import { FC, Suspense } from "react";

// Loading component
const ProductsLoading = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p>Cargando productos...</p>
      </div>
    </div>
  );
};

const page: FC = ({}) => {
  return (
    <>
      <Suspense fallback={<ProductsLoading />}>
        <Products />
      </Suspense>
      <Script type="text/javascript" src="/js/shop.js" strategy="lazyOnload" />
    </>
  );
};

export default page;
