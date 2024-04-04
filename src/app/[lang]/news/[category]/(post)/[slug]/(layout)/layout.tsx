"use client";

import { PropsWithChildren, useContext } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import { CurrentLanguage } from "@/app/context";
import Error from "next/error";
import Loader from "@/components/Loader/Loader";
import NewPosts from "@/components/NewPosts/NewPosts";
import NewPostsMobile from "@/components/NewPosts/NewPostsMobile";
import NewsBanner from "@/components/NewsBanner/NewsBanner";
import PageContent from "@/components/PageContent/PageContent";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { useAllNews } from "@/hooks/useNews";

type Props = {
  params: {
    lang: string;
    slug: string;
    category: string;
  };
};
const PostLayout = ({
  children,
  params: { lang, slug, category },
}: PropsWithChildren<Props>) => {
  const { news: allNews, isLoading, getNews } = useAllNews(category);
  const currentLocale = useContext(CurrentLanguage);
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
  const news = getNews(slug);
  if (!news) return <Error statusCode={404} />;
  else {
    return (
      <div className="">
        <NewsBanner image={ASSET_PREFIX + "/" + news.image} />
        <PageContent>
          <div className="md:px-[7.5rem]">{children}</div>
        </PageContent>
        <div className="pb-16 max-md:pb-12">
          <SectionHeading className="text-center mb-12 max-md:mb-6">
            {trans && trans("newestPost")}
          </SectionHeading>
          <PageContent className="max-md:hidden">
            <NewPosts />
          </PageContent>
          <PageContent className="max-md:block hidden">
            <NewPostsMobile />
          </PageContent>
        </div>
      </div>
    );
  }
};

export default PostLayout;
