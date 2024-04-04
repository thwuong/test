"use client";

import { PropsWithChildren, useContext, useEffect, useRef } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import CategoryTab from "@/components/CategoryTab/CategoryTab";
import { CurrentLanguage } from "@/app/context";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import PageContent from "@/components/PageContent/PageContent";
import SectionBanner from "@/components/SectionBanner/SectionBanner";
import SectionBannerBreadcrumb from "@/components/SectionBanner/SectionBannerBreadcrumb";
import clsx from "clsx";
import { useNewsCategory } from "@/hooks/useNewsCategory";

type Props = {
  params: {
    lang: string;
    category: string;
  };
};

export default function CategoryLayout({
  children,
  params: { lang, category },
}: PropsWithChildren<Props>) {
  const currentLocale = useContext(CurrentLanguage);
  const { newsCategories, error, isLoading } = useNewsCategory(currentLocale);
  const { t, isLoading: isLangLoading } = useLocaleTranslation(
    currentLocale,
    "news"
  );
  const ref = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (ref.current?.href.includes(category)) {
      ref.current.scrollIntoView(false);
    }
  }, [category]);
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("news");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  if (isLoading) return <Loader />;
  if (newsCategories)
    return (
      <div>
        <SectionBanner title={trans && trans("news")}>
          <SectionBannerBreadcrumb
            label={trans && trans("news")}
            href={`/${lang}/news`}
          />
        </SectionBanner>
        <PageContent className="py-6 md:pt-12 md:pb-16">
          <div
            className={clsx(
              "text-xl leading-6 tracking-[-0.5px] text-[#3d3d3d] lg:text-[1.75rem] mb-8 text-center"
            )}
          >
            {trans ? trans("allNews") : "Tất cả tin tức"}
          </div>
          <div
            className={clsx(
              "flex gap-x-2 lg:gap-x-6 sm:justify-center sm:items-center overflow-x-auto hide-scrollbar transition-all duration-300"
            )}
          >
            <Link href={`/${lang}/news/all`}>
              <CategoryTab active={category == "all" || category == ""}>
                {trans ? trans("all") : "Tất cả"}
              </CategoryTab>
            </Link>
            {newsCategories.map((cat, index) => (
              <Link href={`/${lang}/news/${cat.slug}`} key={index} ref={ref}>
                <CategoryTab active={cat.slug == category}>
                  {cat.translations?.length
                    ? cat.translations[0]?.name
                    : cat.name}
                </CategoryTab>
              </Link>
            ))}
          </div>
        </PageContent>
        <div>{children}</div>
      </div>
    );
}
