import { API_PREFIX, ASSET_PREFIX } from "@/utils/const";

import { Metadata } from "next";
import { NewsModel } from "@/hooks/useNews";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params: { lang, slug },
}: {
  params: { lang: string; slug: string };
}): Promise<Metadata> {
  const res = await fetch(`https://sonnguyen-gw.dev-tn.com/api/get-languages`);
  const langs = await res.json();
  const currentLocale =
    langs.find((l: any) => l.code.startsWith(lang))?.code || "vi-VN";
  const newsRes = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-news?locale=${currentLocale}`
  );
  const allNews = await newsRes.json();
  const currentPost: NewsModel = allNews?.data?.find(
    (news: NewsModel) => news.slug == slug
  );
  return {
    title: currentPost?.translations?.length
      ? currentPost?.translations[0]?.title
      : currentPost?.title,
    description: currentPost?.translations?.length
      ? currentPost?.translations[0]?.summary
      : currentPost?.summary,
    keywords: currentPost?.news_category.translations?.length
      ? currentPost?.news_category.translations[0]?.name
      : currentPost?.news_category.name,
    category: currentPost?.news_category?.translations?.length
      ? currentPost?.news_category?.translations[0]?.name
      : currentPost?.news_category.name,
    openGraph: {
      title: currentPost?.translations?.length
        ? currentPost?.translations[0]?.title
        : currentPost?.title,
      description: currentPost?.translations?.length
        ? currentPost?.translations[0]?.summary
        : currentPost?.summary,
      siteName: "Sơn Nguyên Farm",
      locale: currentLocale,
      images: ASSET_PREFIX + "/" + currentPost?.image,
    },
  };
}

export const revalidate = 300;

export async function generateStaticParams() {
  const res = await fetch(
    "https://sonnguyen-gw.dev-tn.com/api/get-news/?locale=vi-VN"
  );
  const data = await res.json();
  const news: NewsModel[] = data?.data;
  const paths = news.map((c) => ({ slug: c.slug }));
  return paths;
}

export default function NewDetailLayout({ children }: PropsWithChildren) {
  return <>{children};</>;
}
