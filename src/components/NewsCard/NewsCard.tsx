import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import Button from "../Button/Button";
import Chip from "../Chip/Chip";
import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import NewsCardDescription from "./NewsCardDescription";
import NewsCardTitle from "./NewsCardTitle";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";
import { useContext } from "react";

type Props = {
  photo?: string;
  tag?: string;
  title?: string;
  description?: string;
  href?: string;
};
export default function NewsCard(props: PropsWithChildrenAndClassName<Props>) {
  const {
    children,
    className,
    photo = "",
    tag,
    title,
    description,
    href,
  } = props;
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    const categoryList = href?.split("/") || [];
    return (
      <div className={clsx("max-w-full", className)}>
        <Link href={href || "#"}>
          <Image
            src={photo}
            width={384}
            height={250}
            alt=""
            className={clsx(
              "rounded-lg object-cover w-full h-[15.625rem] max-md:w-full sm:h-[20rem] md:h-[15.625rem]"
            )}
          />
        </Link>
        <div className={clsx("py-4 flex flex-col w-fit gap-y-3")}>
          <Link
            href={`/${currentLocale.slice(0, 2)}/news/${
              categoryList[0] || "all"
            }`}
          >
            <Chip>{tag}</Chip>
          </Link>
          <Link href={href || "#"}>
            <NewsCardTitle>{title}</NewsCardTitle>
            <NewsCardDescription className="line-clamp-2">
              {description}
            </NewsCardDescription>
          </Link>

          <Button
            variant="link"
            href={href}
            icon={getIcon("arrow-right.svg")}
            iconPosition="right"
          >
            {trans("viewDetail")?.toUpperCase()}
          </Button>
        </div>
      </div>
    );
  }
}
