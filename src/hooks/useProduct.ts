import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export type ProductModel = {
  id: number;
  slug: string;
  summary: string;
  description: string;
  product_details: string;
  tags: string[];
  title: string;
  product_category: {
    id: number;
    name: string;
    slug: string;
    translations?: {
      id: number;
      product_category_id: number;
      languages_code: string;
      name: string;
    }[];
  };
  translations?: ProductModel[];
  images: {
    directus_files_id: string;
  }[];
};

export function useProduct(
  category: string = "all",
  locale: string = "en-US",
  page: number = 1,
  limit: number = 9
) {
  const { data, isLoading, error } = useSWR(
    () =>
      category == "all"
        ? `https://sonnguyen-gw.dev-tn.com/api/get-products?locale=${locale}&page=${page}&limit=${limit}`
        : `https://sonnguyen-gw.dev-tn.com/api/get-products-by-category?locale=${locale}&page=${page}&limit=${limit}&slug=${category}`,
    fetcher
  );
  const products: ProductModel[] = data?.data || [];
  return {
    products,
    isLoading,
    error,
  };
}

export function useAllProduct(
  category: string = "all",
  locale: string = "en-US"
) {
  const { data, isLoading, error } = useSWR(
    () =>
      category == "all"
        ? `https://sonnguyen-gw.dev-tn.com/api/get-products?locale=${locale}`
        : `https://sonnguyen-gw.dev-tn.com/api/get-products-by-category?slug=${category}&locale=${locale}`,
    fetcher
  );
  const products: ProductModel[] = data?.data || [];
  const getProduct = (productSlug: string) =>
    products?.find((product: ProductModel) => product.slug == productSlug);

  return { products, isLoading, error, getProduct };
}
