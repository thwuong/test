"use client";

import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { CurrentLanguage } from "@/app/context";
import Divider from "../Divider/Divider";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { getImage } from "@/utils/getAssets";
import { useContext } from "react";

type Props = {
  bannerImage?: string;
  title?: string;
};
export default function SectionBanner(
  props: PropsWithChildrenAndClassName<Props>
) {
  const {
    children,
    className,
    bannerImage = getImage("banner.svg"),
    title,
  } = props;
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <div className={clsx("relative h-[11.25rem] lg:h-[17.8125rem]")}>
        <Image
          src={bannerImage}
          fill
          className="object-contain object-center"
          alt=""
        />
        <div
          className={clsx(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
          )}
        >
          <h1
            className={clsx(
              "uppercase font-serif text-[2rem] font-medium leading-[3.2rem] mb-6"
            )}
          >
            {title}
          </h1>
          <div className="flex w-full">
            <Link
              href={`/`}
              className={clsx("text-neutral-500 capitalize hover:text-primary")}
            >
              {trans("home")}
            </Link>
            {children}
          </div>
        </div>
        <Divider
          className="xl:w-[calc(100%-7.5rem)] absolute left-1/2 -translate-x-1/2 bottom-0"
          color="#ececec"
        />
      </div>
    );
  }
}
