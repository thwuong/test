import { ArrowRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import Button from "../Button/Button";
import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import Input from "../Input/Input";
import Link from "next/link";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";
import { useAllNews } from "@/hooks/useNews";
import { useAllProduct } from "@/hooks/useProduct";

type Props = {
  open?: boolean;
  lang: string;
  onClose: any;
};
export default function SearchDrawer({ open, lang, onClose }: Props) {
  const currentLanguage = useContext(CurrentLanguage);
  const [searchString, setSearchString] = useState("");
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
  if (products && news && !isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    const searchProducts = products.filter((product) => {
      if (product.translations?.length) {
        return (
          product.translations[0].title
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase()) ||
          product.translations[0].summary
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase()) ||
          product.translations[0].description
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase())
        );
      } else
        return (
          product.title.toLowerCase().includes(searchString.toLowerCase()) ||
          product.summary.toLowerCase().includes(searchString.toLowerCase()) ||
          product.description.toLowerCase().includes(searchString.toLowerCase())
        );
    });
    const searchNews = news.filter((n) => {
      if (n.translations?.length) {
        return (
          n.translations[0].title
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase()) ||
          n.translations[0].summary
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase()) ||
          n.translations[0].description
            ?.toLowerCase()
            ?.includes(searchString.toLowerCase())
        );
      } else
        return (
          n.title?.toLowerCase()?.includes(searchString.toLowerCase()) ||
          n.summary?.toLowerCase()?.includes(searchString.toLowerCase()) ||
          n.description?.toLowerCase()?.includes(searchString.toLowerCase())
        );
    });
    return (
      <div
        className={clsx(
          "fixed !overflow-auto lg:hidden top-[64px] left-0 w-full h-full bg-white/[0.72] backdrop-blur-[18px] z-[2] transition-all duration-1000 px-4 py-6",
          open ? "block animate-slideLeft" : "hidden"
        )}
      >
        <form
          autoComplete="off"
          onSubmit={(e) => e.preventDefault()}
          className="relative mb-2"
        >
          <Input
            name="search"
            type="search"
            placeholder={trans && trans("search")}
            iconUrl={searchString.length == 0 ? getIcon("search.svg") : ""}
            iconPosition="right"
            className="!rounded !py-2 bg-white text-neutral-100 !text-[12px] !outline-none"
            extraAttribute={{
              // onFocus: () => setSearchOpen(true),
              value: searchString,
              onChange: (e) => {
                setSearchString(e.target.value);
              },
              onBlur: (e) => {
                if (searchString.length == 0) {
                  onClose();
                }
              },
              autoComplete: "off",
              role: "presentation",
            }}
          />
        </form>
        {searchString.length >= 1 && searchProducts.length !== 0 && (
          <div className="text-neutral-100">
            <div
              className={clsx(
                "text-sm flex justify-between px-1 my-2 items-center cursor-pointer hover:text-neutral-100"
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
            <div className="divide-y rounded">
              {!productCollapse &&
                searchProducts.map((product) => (
                  <Link
                    href={`/${lang}/products/${product.slug}`}
                    key={product.id}
                    className="flex gap-x-2 items-center hover:bg-mint p-4 last:my-0 bg-white first:rounded-t last:rounded-b"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={
                          ASSET_PREFIX +
                          "/" +
                          product.images[0].directus_files_id
                        }
                        alt={product.title}
                        fill
                        className="object-cover object-center bg-neutral-700"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-sm">
                        {product.translations?.length
                          ? product.translations[0]?.title
                          : product.title}
                      </div>
                      <Button
                        variant="link"
                        href={`/${lang}/contact`}
                        className="block"
                      >
                        <div className="flex items-center gap-x-1">
                          <span className="capitalize text-[12px]">
                            {trans("contact")}
                          </span>
                          <ArrowRightIcon />
                        </div>
                      </Button>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
        {searchString.length >= 1 && searchNews.length !== 0 && (
          <div className="text-neutral-100 overflow-auto hide-scrollbar">
            <div
              className={clsx(
                "text-sm flex justify-between px-1 my-2 items-center cursor-pointer hover:text-neutral-100"
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
            <div className="divide-y rounded shadow">
              {!newsCollapse &&
                searchNews.map((n) => (
                  <Link
                    href={`/${lang}/news/${n.news_category.slug}/${n.slug}`}
                    key={n.id}
                    className="flex gap-x-2 items-center hover:bg-mint p-4 last:my-0 bg-white first:rounded-t last:rounded-b"
                  >
                    <div className="relative w-16 h-16">
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
          </div>
        )}
        {searchProducts.length == 0 && searchNews.length == 0 && (
          <p className="text-neutral-500 text-sm">{trans("noResult")}</p>
        )}
      </div>
    );
  }
}
