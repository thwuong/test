"use client";

import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { CurrentLanguage } from "@/app/context";
import Error from "next/error";
import Loader from "@/components/Loader/Loader";
import NewsSummary from "@/components/NewsSummary/NewsSummary";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import SocialShare from "@/components/SocialShare/SocialShare";
import { formatDate } from "@/utils/formatDate";
import { getIcon } from "@/utils/getAssets";
import { handleSocialShare } from "@/utils/handleSocialShare";
import styles from "./post-content.module.scss";
import { useAllNews } from "@/hooks/useNews";
import { useContext } from "react";

export const revalidate = 300;

type Props = {
  params: {
    slug: string;
  };
};
export default function Post({ params: { slug } }: Props) {
  const currentLocale = useContext(CurrentLanguage);
  const { isLoading, getNews } = useAllNews("all", currentLocale);
  const news = getNews(slug);
  const { t, isLoading: isLangLoading } = useLocaleTranslation(
    currentLocale,
    "news"
  );
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("news");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  if (isLoading) return <Loader />;
  if (!news) return <Error statusCode={404} />;
  else {
    return (
      <main className="w-full pt-9 pb-16 flex flex-col gap-6 max-md:py-12">
        <section className="flex flex-col gap-3 max-md:gap-4">
          <SectionTitle>
            {news.translations?.length
              ? news.translations[0]?.title
              : news.title}
          </SectionTitle>
          <div className="flex items-center justify-between max-md:flex-col max-md:justify-start max-md:gap-4 max-md:items-start">
            <span className="font-sans text-sm leading-6 text-neutral-400 max-md:text-xs max-md:leading-5">
              {formatDate(news.date_created, currentLocale)}
            </span>
            <div className="flex gap-6 items-center">
              <SocialShare
                icon={getIcon("facebook.svg")}
                onClick={() => handleSocialShare("facebook")}
              />
              {/* <SocialShare
                icon={getIcon("instagram.svg")}
                onClick={() => handleSocialShare("instagram")}
                shouldPopup={true}
                trans={trans}
              /> */}
              <SocialShare
                icon={getIcon("telegram.svg")}
                onClick={() => handleSocialShare("telegram")}
              />
              <SocialShare
                icon={getIcon("embed.svg")}
                onClick={() => handleSocialShare("copy")}
                shouldPopup={true}
                trans={trans}
              />
            </div>
          </div>
        </section>
        <NewsSummary>
          {news.translations?.length
            ? news.translations[0]?.summary
            : news.summary}
        </NewsSummary>
        <section
          dangerouslySetInnerHTML={{
            __html: news.translations?.length
              ? news.translations[0]?.description
              : news.description,
          }}
          className={styles.description}
        ></section>
      </main>
    );
  }
}
