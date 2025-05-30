import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetails from "@/components/ProductDetails";
import { INVENTORY } from "@/utils/inventory";
import { notFound } from "next/navigation";

type pageProps = {
  params: {
    slug: string;
  };
};

const page = async ({ params }: pageProps) => {
  const { slug } = await params;
  const product = INVENTORY.find((i) => i.slug === slug);

  if (product == null) return notFound();

  return (
    <>
      <Breadcrumbs currentPage={product.name} />
      <ProductDetails product={product} />
    </>
  );
};

export default page;
