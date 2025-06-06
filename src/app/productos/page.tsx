import Products from "@/components/Products";
import Script from "next/script";
import { FC } from "react";

const page: FC = ({}) => {
  return (
    <>
      <Products />
      <Script type="text/javascript" src="/js/nouislider.min.js" strategy="lazyOnload" />
      <Script type="text/javascript" src="/js/shop.js" strategy="lazyOnload" />
    </>
  );
};

export default page;
