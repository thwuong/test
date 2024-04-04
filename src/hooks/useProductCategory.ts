import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export type CategoryModel = {
  id: number;
  slug: string;
  name: string;
  translations?: {
    id: number;
    languages_code: string;
    name: string;
  }[];
};

export function useProductCategory(locale: string = "en-US") {
  const { data, isLoading, error } = useSWR(
    `https://sonnguyen-gw.dev-tn.com/api/get-product-category?locale=${locale}`,
    fetcher
  );
  const categories: CategoryModel[] = data?.data;
  return {
    categories: categories,
    isLoading,
    error,
  };
}
