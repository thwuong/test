import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export type NewsCategoryModel = {
  id: number;
  slug: string;
  name: string;
  translations?: {
    id: number;
    news_category_id: number;
    languages_code: string;
    name: string;
  }[];
};

export function useNewsCategory(locale: string = "vi-VN") {
  const { data, error, isLoading } = useSWR(
    `https://sonnguyen-gw.dev-tn.com/api/get-news-category?locale=${locale}`,
    fetcher
  );
  const newsCategories: NewsCategoryModel[] = data?.data || [];
  return {
    newsCategories,
    error,
    isLoading,
  };
}
