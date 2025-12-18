import { products } from "@/components/ProductsCard/ProductsData";
import SingleProductLayout from "@/components/SingleProduct/SingleProductLayout";

export default async function SingleProductPage({ params }) {
  // Await params in Next.js 15+
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams?.id, 10);

  if (isNaN(productId)) {
    return <div className="min-h-screen flex items-center justify-center">Invalid product</div>;
  }

  const product = products.find((item) => item.id === productId);

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen mx-auto">
      <SingleProductLayout product={product} />
    </div>
  );
}