import { API_PREFIX } from "@/utils/const";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export function useLanguages() {
  const { data, isLoading, error } = useSWR(
    `https://sonnguyen-gw.dev-tn.com/api/get-languages`,
    fetcher
  );
  const languagesCode = data
    ?.filter((d: any) => d.hidden == false)
    ?.map((d: any) => d.code);
  const languagesShortCode = data
    ?.filter((d: any) => d.hidden == false)
    ?.map((d: any) => d.code.slice(0, 2));
  return {
    languages: data?.filter((d: any) => d.hidden == false),
    isLoading: false,
    error: null,
    languagesCode,
    languagesShortCode,
  };
}
