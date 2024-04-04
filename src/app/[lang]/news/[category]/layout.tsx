import { NewsCategoryModel } from "@/hooks/useNewsCategory";
import { PropsWithChildren } from "react";

export const revalidate = 300;

export async function generateStaticParams() {
  const res = await fetch(
    "https://sonnguyen-gw.dev-tn.com/api/get-news-category?locale=vi-VN"
  );
  const data = await res.json();
  const categories: NewsCategoryModel[] = data?.data;
  const paths = categories.map((c) => ({ category: c.slug }));
  return paths;
}

type Props = {};
export default function CategoryLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
