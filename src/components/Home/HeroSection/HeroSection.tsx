import Button, { ButtonVariant } from "../../Button/Button";
import { getIcon, getImage } from "@/utils/getAssets";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { CurrentLanguage } from "@/app/context";
import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { sectionData } from "@/data";
import styles from "../../Button/Button.module.scss";
import { useContext } from "react";

type Props = {};
export default function HeroSection(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { className } = props;
  const heroSectionData = sectionData;
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "home");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("home");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <div className={clsx("w-full relative")}>
        <Image
          src={getImage("hero.svg?format=webp")}
          width={2560}
          height={1333}
          alt=""
          className="hidden md:block animate-fade-down"
          priority
        />
        <Image
          src={getImage("hero-sm.svg?format=webp")}
          width={2000}
          height={1333}
          alt=""
          className="md:hidden animate-fade-down"
          priority
        />
        {heroSectionData && (
          <div
            className={clsx(
              "absolute max-sm:w-full flex flex-col gap-y-6 left-1/2 -translate-x-1/2 bottom-[5.125rem]"
            )}
          >
            <h2
              className={clsx(
                "font-serif text-center text-[1.5rem] sm:text-[2.5rem] lg:text-[3.5rem] uppercase w-full leading-[140%] text-white animate-fade-up animate-delay-[250] animate-ease-in",
                "sm:hidden whitespace-pre-line"
              )}
            >
              {trans("heroTitle")}
            </h2>
            <h2
              className={clsx(
                "font-serif text-center text-[1.5rem] sm:text-[2.5rem] lg:text-[3.5rem] uppercase leading-[140%] text-white animate-fade-up animate-delay-[250] animate-ease-in",
                "max-sm:hidden whitespace-nowrap"
              )}
            >
              {trans("heroTitle")}
            </h2>
            {/* description */}
            <div
              className={clsx(
                "leading-[2rem] text-sm sm:text-base lg:text-lg text-center text-white opacity-[0.86] hidden lg:block animate-fade-up animate-delay-300 animate-ease-in"
              )}
            >
              {trans("heroDescription")
                ?.split("<>")
                .map((desc: string, index: number) => (
                  <div key={index}>{desc}</div>
                ))}
            </div>
            <div
              className={clsx(
                "leading-[2rem] max-lg:w-4/5 max-lg:mx-auto text-sm sm:text-base lg:text-lg text-center text-white opacity-[0.86] lg:hidden animate-fade-up animate-delay-300 animate-ease-in"
              )}
            >
              {trans("heroDescription").replaceAll("<>", "")}
            </div>
            <div
              className={clsx(
                "flex justify-center items-center gap-x-6 animate-fade-up animate-delay-500 animate-ease-in",
                styles.clearStyle
              )}
            >
              {heroSectionData?.buttons?.map((button, index) => (
                <Button
                  key={index}
                  variant={Object.values(ButtonVariant).find(
                    (variant) => variant == button?.type
                  )}
                  icon={button.icon && getIcon(button.icon)}
                  href={`/${currentLocale.slice(0, 2)}${button.href}`}
                  className=" hover:brightness-75"
                  shapeColor="light"
                >
                  <span className="capitalize">
                    {trans(`callToAction${index + 1}`)}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
