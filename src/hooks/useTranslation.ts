import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function useLocaleTranslation(locale: string = "vi-VN", page: string) {
  const { data, error, isLoading } = useSWR(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=${locale}&pages=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnMount: true,
    }
  );
  const translations: any = data?.dataTranslation[0];
  let t;
  if (translations) {
    t = (key: string) => translations[key];
  }
  return {
    translations,
    isLoading,
    error,
    t,
  };
}

export function useDefaultTranslation(page: string) {
  const { data, error, isLoading } = useSWR(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=vi-VN&pages=${page}`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateIfStale: false,
      revalidateOnMount: true,
    }
  );
  const translations: any = data?.dataTranslation[0];
  const t = (key: string) => translations[key];
  return {
    isLoading,
    error,
    t,
  };
}
