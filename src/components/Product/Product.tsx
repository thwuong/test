import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import Button from "../Button/Button";
import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";
import { useContext } from "react";

type Props = {
  name?: string;
  photo?: string;
  width?: string;
  href?: string;
  lang: string;
};
export default function Product(props: PropsWithChildrenAndClassName<Props>) {
  const {
    children,
    className = "",
    name = "",
    photo = "",
    width = "",
    href = "",
    lang,
  } = props;
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <div className={clsx(className)} style={{ width: width }}>
        <Link href={href}>
          <Image
            src={photo}
            alt={name}
            width={268}
            height={300}
            className={clsx(
              "w-full h-[18.75rem] sm:h-[20rem] lg:max-h-[18.75rem] object-cover rounded-lg bg-neutral-800"
            )}
          />
        </Link>

        <div className={clsx("pt-2 pb-3 lg:py-4")}>
          <Link
            href={href}
            className={clsx(
              "font-medium text-base lg:text-lg leading-[1.6875rem] mb-2 lg:mb-3 line-clamp-1"
            )}
          >
            {name}
          </Link>
          <Button
            variant="link"
            icon={getIcon("arrow-right.svg")}
            iconPosition="right"
            href={`/${lang}/contact`}
          >
            {trans("contactNow")?.toUpperCase()}
          </Button>
        </div>
      </div>
    );
  }
}
