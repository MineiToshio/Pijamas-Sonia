import Breadcrumbs from "@/components/Breadcrumbs";
import PopularProducts from "@/components/PopularProducts";
import ProductDetails from "@/components/ProductDetails";
import { INVENTORY } from "@/utils/inventory";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const product = INVENTORY.find((i) => i.slug === slug);

  if (product == null) return notFound();

  return (
    <>
      <Breadcrumbs currentPage={product.name} />
      <ProductDetails product={product} />
      <PopularProducts excludeProductId={product.id} />
    </>
  );
};

export default page;
