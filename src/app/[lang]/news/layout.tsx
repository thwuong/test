import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const revalidate = 300;

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: lang == "vi" ? "Tin tức" : "News",
  };
}

export default function NewsLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
