"use client";

import { ASSET_PREFIX } from "@/utils/const";
import Product from "@/components/Product/Product";
import { ProductModel } from "@/hooks/useProduct";
import ProductSkeleton from "@/components/Loader/ProductSkeleton";
import { getImage } from "@/utils/getAssets";
import { useParams } from "next/navigation";

type Props = {
  products: ProductModel[];
  isLoading: boolean;
  error: any;
  trans: any;
};
export default function Products({ products, isLoading, error, trans }: Props) {
  const params = useParams();
  const lang = params?.lang;

  if (isLoading)
    return Array(3)
      .fill(1)
      .map((item, index) => (
        <div key={index} className="h-[20rem] mx-auto">
          <ProductSkeleton />
        </div>
      ));
  if (products.length == 0) return <p>{trans("noResult")}</p>;
  if (products)
    return (
      <>
        {products.map((product, index) => (
          <Product
            name={
              product?.translations?.length
                ? product.translations[0]?.title
                : product.title
            }
            key={product.id}
            photo={
              product.images[0]
                ? ASSET_PREFIX + "/" + product.images[0].directus_files_id
                : getImage("arabica-honey.png")
            }
            href={`/${lang}/products/${product?.slug}`}
            className="animate-fade animate-once animate-ease-in-out"
            width="100%"
            lang={lang?.toString() || "vi"}
          />
        ))}
      </>
    );
}
