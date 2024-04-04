import { API_PREFIX } from "@/utils/const";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  return {
    title: lang == "vi" ? "Sản phẩm" : "Products",
  };
}

export default function ProductLayout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
