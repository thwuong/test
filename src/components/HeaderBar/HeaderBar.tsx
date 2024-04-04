"use client";

import { getIcon, getImage } from "@/utils/getAssets";
import { useContext, useEffect, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { CurrentLanguage } from "@/app/context";
import Drawer from "./Drawer";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Input from "../Input/Input";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import LanguageSwitcherMobile from "../LanguageSwitcher/LanguageSwitcherMobile";
import Link from "next/link";
import Loader from "../Loader/Loader";
import { PropsWithChildrenAndClassName } from "@/types";
import SearchDrawer from "../SearchDrawer/SearchDrawer";
import SearchDropdown from "../SearchDropdown/SearchDropdown";
import clsx from "clsx";
import { headerLinks } from "@/data";
import { useDisclosure } from "@/hooks/useDisclosure";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

type HeaderBarProps = {
  links?: any[];
  lang: string;
};
export default function HeaderBar(
  props: PropsWithChildrenAndClassName<HeaderBarProps>
) {
  const { links = headerLinks, className, lang } = props;
  const pathName = usePathname();
  const [elevated, setElevated] = useState(false);
  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y < 0) setElevated(true);
    else setElevated(false);
  });
  const isActive = (href: string) => {
    if (pathName?.slice(3) == "" && href == "/") return true;
    if (href !== "/") return pathName?.slice(3).startsWith(href);
  };
  const { isClosed, isOpen, onClose, onOpen, open } = useDisclosure();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const [searchShow, setSearchShow] = useState(false);
  useEffect(() => {
    setSearchString("");
    setSearchShow(false);
    onClose();
  }, [pathName]);
  useEffect(() => {
    if (searchShow) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [searchShow]);
  useEffect(() => {
    if (navigator.userAgent.indexOf("iPhone") > -1) {
      document
        .querySelector("[name=viewport]")
        ?.setAttribute(
          "content",
          "width=device-width, initial-scale=1, maximum-scale=1"
        );
    }
  }, []);
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-10 bg-white/95 backdrop-blur-md",
          elevated && "shadow-lg"
        )}
      >
        <header className="relative">
          {/* Desktop nav */}
          <nav className="h-20 px-4 xl:px-[7.5rem] items-center justify-between hidden lg:flex transition-[padding] ease-in-out duration-300">
            <div className="flex gap-x-9">
              {/* {headerLinks?.map((link, index) => (
                  <Link
                    key={index}
                    href={`/${lang}/${link?.href}`}
                    className={clsx(
                      "text-neutral-500 leading-[140%] text-sm hover:text-primary uppercase",
                      isActive(link.href) && "font-semibold text-primary"
                    )}
                  >
                    {link?.label}
                  </Link>
                ))} */}
              <Link
                href={`/${lang}/`}
                className={clsx(
                  "text-neutral-500 leading-[140%] text-sm hover:text-primary uppercase",
                  isActive("/") && "font-semibold text-primary"
                )}
              >
                {trans && trans("home")}
              </Link>
              <Link
                href={`/${lang}/about-us`}
                className={clsx(
                  "text-neutral-500 leading-[140%] text-sm hover:text-primary uppercase",
                  isActive("/about-us") && "font-semibold text-primary"
                )}
              >
                {trans && trans("aboutUs")}
              </Link>
              <Link
                href={`/${lang}/products`}
                className={clsx(
                  "text-neutral-500 leading-[140%] text-sm hover:text-primary uppercase",
                  isActive("/products") && "font-semibold text-primary"
                )}
              >
                {trans && trans("products")}
              </Link>
              <Link
                href={`/${lang}/news/all`}
                className={clsx(
                  "text-neutral-500 leading-[140%] text-sm hover:text-primary uppercase",
                  isActive("/news") && "font-semibold text-primary"
                )}
              >
                {trans && trans("news")}
              </Link>
            </div>
            <div className="flex justify-end items-center">
              <form
                autoComplete="off"
                className="relative"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  name="search"
                  placeholder={trans && trans("search")}
                  iconUrl={getIcon("search.svg")}
                  borderColor="primary"
                  className="border-primary/25 w-[18.75rem]"
                  extraAttribute={{
                    onFocus: () => setSearchOpen(true),
                    onBlur: () => setSearchOpen(false),
                    value: searchString,
                    onChange: (e) => {
                      setSearchString(e.target.value);
                    },
                    autoComplete: "off",
                    role: "presentation",
                  }}
                />
                <SearchDropdown
                  open={searchOpen}
                  searchString={searchString.toLowerCase()}
                  lang={lang}
                />
              </form>

              <LanguageSwitcher lang={lang} />
            </div>
          </nav>
          <Link href={`/${lang}/`}>
            <Image
              src={getImage("logo.png")}
              width={172}
              height={56}
              alt="Logo"
              className={clsx(
                "absolute bottom-0 left-1/2 translate-y-5 -translate-x-1/2 z-[1] hidden lg:block"
              )}
            />
          </Link>

          {/* Mobile nav */}
          <nav className="h-16 px-4 py-1 flex justify-between lg:hidden relative">
            <button onClick={onOpen}>
              {/* <HamburgerMenuIcon width={24} height={24} /> */}
              <Image src={getIcon("menu.svg")} width={24} height={24} alt="" />
            </button>
            <Link
              href={`/${lang}/`}
              className={clsx(
                "absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/3"
              )}
            >
              <Image
                src={getImage("logo.png")}
                width={172}
                height={48}
                alt="Logo"
              />
            </Link>

            <button
              onClick={() => setSearchShow(true)}
              className={clsx(searchShow && "hidden")}
            >
              <Image
                src={getIcon("search.svg")}
                width={24}
                height={24}
                alt=""
              />
            </button>
          </nav>
        </header>
      </div>
      <SearchDrawer
        open={searchShow}
        lang={lang}
        onClose={() => setSearchShow(false)}
      />
      <Drawer
        open={open}
        onClose={onClose}
        headerElement={
          <Link href={`/${lang}/`}>
            <Image
              src={getImage("logo.png")}
              width={128}
              height={56}
              alt="Logo"
            />
          </Link>
        }
      >
        {/* {headerLinks?.map((link, index) => (
            <div key={index} className={clsx("my-4")}>
              <Link
                href={`/${lang}/${link?.href}`}
                onClick={onClose}
                className={clsx(
                  "text-neutral-600 leading-[140%] text-sm hover:text-primary uppercase",
                  isActive(link.href) && "font-semibold !text-primary"
                )}
              >
                {link?.label}
              </Link>
            </div>
          ))} */}
        <Link
          href={`/${lang}/`}
          className={clsx(
            "text-neutral-100 leading-[140%] text-sm hover:text-primary uppercase block my-4",
            isActive("/") && "font-semibold !text-primary"
          )}
        >
          {trans && trans("home")}
        </Link>
        <Link
          href={`/${lang}/about-us`}
          className={clsx(
            "text-neutral-100 leading-[140%] text-sm hover:text-primary uppercase block my-4",
            isActive("/about-us") && "font-semibold !text-primary"
          )}
        >
          {trans && trans("aboutUs")}
        </Link>
        <Link
          href={`/${lang}/products`}
          className={clsx(
            "text-neutral-100 leading-[140%] text-sm hover:text-primary uppercase block my-4",
            isActive("/products") && "font-semibold !text-primary"
          )}
        >
          {trans && trans("products")}
        </Link>
        <Link
          href={`/${lang}/news/all`}
          className={clsx(
            "text-neutral-100 leading-[140%] text-sm hover:text-primary uppercase block my-4",
            isActive("/news") && "font-semibold !text-primary"
          )}
        >
          {trans && trans("news")}
        </Link>
        <LanguageSwitcherMobile trans={trans} />
      </Drawer>
    </>
  );
}
