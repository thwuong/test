"use client";

import { useAllNews, useNews } from "@/hooks/useNews";
import { useContext, useEffect, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import Button from "@/components/Button/Button";
import Chip from "@/components/Chip/Chip";
import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import NewsCard from "@/components/NewsCard/NewsCard";
import NewsCardDescription from "@/components/NewsCard/NewsCardDescription";
import NewsCardTitle from "@/components/NewsCard/NewsCardTitle";
import PageContent from "@/components/PageContent/PageContent";
import Pagination from "@/components/Pagination/Pagination";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";
import useResize from "@/hooks/useResize";

export const dynamicParams = false;
export const revalidate = 300;
// export async function generateStaticParams() {
//     const availCategories = await getAvailCategories();
//     return availCategories.map((category) => ({ category: category.href }));
// }

type Props = {
  params: {
    lang: string;
    category: string;
  };
};
export default function Category({ params: { lang, category } }: Props) {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
  });
  const currentLocale = useContext(CurrentLanguage);
  const { news, isLoading, error } = useNews(
    category,
    currentLocale,
    pagination.page,
    pagination.limit
  );
  const { news: allNews } = useAllNews(category);
  const [width] = useResize();
  const handlePageChange = ({ selected }: { selected: number }) =>
    setPagination((pagination) => ({
      page: selected + 1,
      limit: pagination.limit,
    }));
  useEffect(() => {
    if (width < 768) {
      setPagination((pagination) => ({ page: pagination.page, limit: 3 }));
    } else {
      setPagination((pagination) => ({
        page: Math.ceil((pagination.page * 3) / 10),
        limit: 10,
      }));
    }
  }, [width]);
  useEffect(() => {
    if (width < 768) {
      setPagination({ page: 1, limit: 3 });
    } else {
      setPagination({
        page: 1,
        limit: 10,
      });
    }
  }, [category, width]);
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
  if (news.length == 0) {
    return <p>{trans ? trans("notFound") : "Không tìm thấy bài viết"}</p>;
  } else {
    const computedPost = width < 1024 ? news : news.slice(1);
    const totalPages = Math.ceil(allNews.length / pagination.limit);
    return (
      <div>
        <PageContent>
          {news[0] != null && (
            <div
              className={clsx(
                "gap-x-12 flex items-center w-full mb-12 max-lg:hidden"
              )}
            >
              <Link
                href={`/${lang}/news/${news[0].news_category?.slug}/${news[0]?.slug}`}
                className={clsx("relative w-[34.375rem] h-[21.4375rem]")}
              >
                <Image
                  src={ASSET_PREFIX + "/" + news[0].image}
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </Link>
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <Link href={`/${lang}/news/${news[0]?.news_category?.slug}`}>
                    <Chip>
                      {news[0].news_category?.translations
                        ? news[0].news_category?.translations[0]?.name
                        : news[0].news_category?.name}
                    </Chip>
                  </Link>
                  <Link
                    href={`/${lang}/news/${news[0].news_category?.slug}/${news[0].slug}`}
                    className="flex flex-col gap-1"
                  >
                    <NewsCardTitle className=" mb-2">
                      {news[0].translations?.length
                        ? news[0].translations[0]?.title
                        : news[0].title}
                    </NewsCardTitle>
                    <NewsCardDescription className="line-clamp-4">
                      {news[0].translations?.length
                        ? news[0].translations[0]?.summary
                        : news[0].summary}
                    </NewsCardDescription>
                  </Link>
                </div>
                <Button
                  variant="link"
                  href={`${news[0]?.news_category?.slug}/${news[0]?.slug}`}
                  icon={getIcon("arrow-right.svg")}
                  iconPosition="right"
                >
                  {trans && trans("viewDetail")?.toUpperCase()}
                </Button>
              </div>
            </div>
          )}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-6 gap-y-9 transition-all duration-300">
            {computedPost.map((post, index) => (
              <NewsCard
                photo={ASSET_PREFIX + "/" + post.image}
                tag={
                  post.news_category?.translations
                    ? post.news_category?.translations[0]?.name
                    : post.news_category?.name
                }
                title={
                  post.translations?.length
                    ? post.translations[0]?.title
                    : post.title
                }
                description={
                  post.translations?.length
                    ? post.translations[0]?.summary
                    : post.summary
                }
                key={index}
                href={`${post.news_category?.slug}/${post?.slug}`}
                className="max-md:max-w-full animate-fade animate-once animate-ease-in-out"
              />
            ))}
          </div>
          <div className="pt-9 pb-16 w-full flex justify-center max-md:pt-6 max-md:pb-12 max-md:justify-center items-center">
            <Pagination
              totalPages={totalPages}
              handlePageChange={handlePageChange}
              activePage={pagination.page}
              className="max-md:w-full"
            />
          </div>
        </PageContent>
      </div>
    );
  }
}
