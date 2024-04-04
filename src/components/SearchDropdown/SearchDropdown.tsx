import { ReactNode, useContext, useEffect, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useAllNews } from "@/hooks/useNews";
import { useAllProduct } from "@/hooks/useProduct";
import { useLanguages } from "@/hooks/useLanguages";

type Props = {
  open?: boolean;
  searchString?: string;
  lang: string;
};
export default function SearchDropdown({
  open,
  searchString = "",
  lang,
}: Props) {
  const currentLanguage = useContext(CurrentLanguage);
  const [productCollapse, setProductCollapse] = useState(false);
  const [newsCollapse, setNewsCollapse] = useState(false);
  const { products } = useAllProduct("all", currentLanguage);
  const { news } = useAllNews("all", currentLanguage);
  useEffect(() => {
    setNewsCollapse(false);
    setProductCollapse(false);
  }, [searchString]);
  const { t, isLoading } = useLocaleTranslation(currentLanguage, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  if (
    products &&
    news &&
    searchString.length >= 1 &&
    !isDefaultLoading &&
    !isLoading
  ) {
    const trans = t ? t : defaultT;
    const searchProducts = products.filter((product) => {
      if (product.translations?.length) {
        return (
          product.translations[0].title
            ?.toLowerCase()
            ?.includes(searchString) ||
          product.translations[0].summary
            ?.toLowerCase()
            ?.includes(searchString) ||
          product.translations[0].description
            ?.toLowerCase()
            ?.includes(searchString)
        );
      } else
        return (
          product.title.toLowerCase().includes(searchString) ||
          product.summary.toLowerCase().includes(searchString) ||
          product.description.toLowerCase().includes(searchString)
        );
    });
    const searchNews = news.filter((n) => {
      if (n.translations?.length) {
        return (
          n.translations[0].title?.toLowerCase()?.includes(searchString) ||
          n.translations[0].summary?.toLowerCase()?.includes(searchString) ||
          n.translations[0].description?.toLowerCase()?.includes(searchString)
        );
      } else
        return (
          n.title?.toLowerCase()?.includes(searchString) ||
          n.summary?.toLowerCase()?.includes(searchString) ||
          n.description?.toLowerCase()?.includes(searchString)
        );
    });
    return (
      <div
        className={clsx(
          "z-10 absolute -bottom-1 translate-y-full left-0 w-full rounded-lg shadow-lg bg-white p-2 max-h-96 overflow-auto hide-scrollbar select-none",
          open ? "block" : "hidden"
        )}
      >
        {searchProducts.length !== 0 && (
          <div className="text-neutral-500">
            <div
              className={clsx(
                "text-base flex justify-between px-1 items-center cursor-pointer hover:text-neutral-100"
              )}
              onClick={() => setProductCollapse(!productCollapse)}
            >
              <div className="capitalize">{trans("products")}</div>
              <ChevronDownIcon
                className={clsx(
                  productCollapse && "rotate-180",
                  "transition-all duration-300"
                )}
              />
            </div>
            {!productCollapse &&
              searchProducts.map((product) => (
                <Link
                  href={`/${lang}/products/${product.slug}`}
                  key={product.id}
                  className="flex gap-x-2 items-center hover:bg-mint p-1 rounded my-1 last:my-0"
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={
                        ASSET_PREFIX + "/" + product.images[0].directus_files_id
                      }
                      alt={product.title}
                      fill
                      className="object-cover object-center bg-neutral-700"
                    />
                  </div>
                  <div className="font-medium text-sm">
                    {product.translations?.length
                      ? product.translations[0]?.title
                      : product.title}
                  </div>
                </Link>
              ))}
          </div>
        )}
        {searchNews.length !== 0 && (
          <div className="text-neutral-500 max-h-60 overflow-auto hide-scrollbar">
            <div
              className={clsx(
                "text-base flex justify-between px-1 items-center cursor-pointer hover:text-neutral-100"
              )}
              onClick={() => setNewsCollapse(!newsCollapse)}
            >
              <div className="capitalize">{trans("post")}</div>
              <ChevronDownIcon
                className={clsx(
                  newsCollapse && "rotate-180",
                  "transition-all duration-300"
                )}
              />
            </div>
            {!newsCollapse &&
              searchNews.map((n) => (
                <Link
                  href={`/${lang}/news/${n.news_category.slug}/${n.slug}`}
                  key={n.id}
                  className="flex gap-x-2 items-center hover:bg-mint p-1 rounded my-1 last:my-0"
                >
                  <div className="relative w-12 h-12 aspect-square">
                    <Image
                      src={ASSET_PREFIX + "/" + n.image}
                      alt={n.title}
                      fill
                      className="object-cover bg-neutral-700"
                    />
                  </div>
                  <div className="font-medium text-sm line-clamp-2">
                    {n.translations?.length
                      ? n.translations[0]?.title
                      : n.title}
                  </div>
                </Link>
              ))}
          </div>
        )}
        {searchProducts.length == 0 && searchNews.length == 0 && (
          <p className="text-neutral-500 text-sm">{trans("noResult")}</p>
        )}
      </div>
    );
  }
}
