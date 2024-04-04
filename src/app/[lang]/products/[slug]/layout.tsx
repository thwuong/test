import { API_PREFIX, ASSET_PREFIX } from "@/utils/const";

import { Metadata } from "next";
import { ProductModel } from "@/hooks/useProduct";
import { PropsWithChildren } from "react";

export const revalidate = 300;

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const res = await fetch(`https://sonnguyen-gw.dev-tn.com/api/get-languages`);
  const langs = await res.json();
  const currentLocale =
    langs.find((l: any) => l.code.startsWith(lang))?.code || "vi-VN";
  const productsRes = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-products?locale=${currentLocale}`
  );
  const products = await productsRes.json();
  const currentProduct = products?.data?.find(
    (product: any) => product.slug == slug
  );
  return {
    title: currentProduct?.translations?.length
      ? currentProduct?.translations[0]?.title
      : currentProduct?.title,
    description: currentProduct?.translations?.length
      ? currentProduct?.translations[0]?.summary
      : currentProduct?.summary,
    keywords: currentProduct?.tags || [],
    category: currentProduct?.product_category.translations?.length
      ? currentProduct?.product_category.translations[0]?.name
      : currentProduct?.product_category.name,
    openGraph: {
      title: currentProduct?.translations?.length
        ? currentProduct?.translations[0]?.title
        : currentProduct?.title,
      description: currentProduct?.translations?.length
        ? currentProduct?.translations[0]?.summary
        : currentProduct?.summary,
      siteName: "Sơn Nguyên Farm",
      locale: currentLocale,
      images: currentProduct?.images?.map((img: any) => ({
        url: ASSET_PREFIX + "/" + img.directus_files_id,
        width: 1440,
        height: 600,
        alt: currentProduct?.translations?.length
          ? currentProduct?.translations[0]?.title
          : currentProduct?.title,
      })),
    },
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://sonnguyen-gw.dev-tn.com/api/get-products?locale=vi-VN"
  );
  const data = await res.json();
  const products: ProductModel[] = data?.data;
  const paths = products.map((p) => ({ slug: p.slug }));
  return paths;
}

export default function ProductLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
