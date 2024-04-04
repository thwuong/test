"use client";

import { NewsModel, useAllNews } from "@/hooks/useNews";
import React, { useContext, useMemo, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import Button from "../Button/Button";
import { CurrentLanguage } from "@/app/context";
import NewsCard from "../NewsCard/NewsCard";
import { useParams } from "next/navigation";

const NewPostsMobile = () => {
  const [postSize, setPostSize] = useState(3); // default 3
  const { news: allNews, isLoading, getNews } = useAllNews("all");
  const params = useParams();
  const lang = params?.lang || "vi";
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading: isLangLoading } = useLocaleTranslation(
    currentLocale,
    "common"
  );
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  if (allNews.length !== 0) {
    const computedAllNews = allNews.toSorted((a, b) => b.id - a.id);
    const data = computedAllNews.slice(0, postSize);
    return (
      <section className="flex flex-col items-center gap-6">
        <div className="flex flex-col gap-6 w-full">
          {data.map((item, index) => (
            <NewsCard
              tag={
                item.news_category?.translations?.length
                  ? item.news_category?.translations[0]?.name
                  : item.news_category?.name
              }
              title={
                item.translations?.length
                  ? item.translations[0]?.title
                  : item.title
              }
              photo={ASSET_PREFIX + "/" + item.image}
              description={
                item.translations?.length
                  ? item.translations[0]?.summary
                  : item.summary
              }
              key={index}
              className="w-full mx-auto"
              href={`/${lang}/news/${item.news_category?.slug}/${item?.slug}`}
            />
          ))}
        </div>
        {postSize < computedAllNews.length && (
          <Button
            variant="primary"
            className="px-6 py-[9px]"
            extraAttribute={{
              onClick: () => {
                setPostSize((prev) => prev + 3);
              },
            }}
          >
            {trans && trans("loadMore")}
          </Button>
        )}
      </section>
    );
  }
};

export default NewPostsMobile;
