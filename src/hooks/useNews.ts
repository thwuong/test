import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export type NewsModel = {
  id: number;
  slug: string;
  summary: string;
  description: string;
  title: string;
  image: string;
  date_created: string;
  news_category: {
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
  translations?: NewsModel[];
};

export function useNews(
  category: string = "all",
  locale: string = "vi-VN",
  page: number = 1,
  limit: number = 10
) {
  const { data, isLoading, error } = useSWR(
    () =>
      category == "all"
        ? `https://sonnguyen-gw.dev-tn.com/api/get-news/?locale=${locale}&page=${page}&limit=${limit}`
        : `https://sonnguyen-gw.dev-tn.com/api/get-news-by-category/?slug=${category}&locale=${locale}&page=${page}&limit=${limit}`,
    fetcher
  );
  const news: NewsModel[] = data?.data || [];
  return {
    news,
    isLoading,
    error,
  };
}

export function useAllNews(category: string = "all", locale: string = "vi-VN") {
  const { data, isLoading, error } = useSWR(
    () =>
      category == "all"
        ? `https://sonnguyen-gw.dev-tn.com/api/get-news/?locale=${locale}`
        : `https://sonnguyen-gw.dev-tn.com/api/get-news-by-category/?slug=${category}&locale=${locale}`,
    fetcher
  );
  const news: NewsModel[] = data?.data || [];
  const getNews = (newsSlug: string) => news.find((n) => n.slug == newsSlug);
  return { news, isLoading, error, getNews };
}
