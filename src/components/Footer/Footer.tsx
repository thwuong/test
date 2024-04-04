/* eslint-disable @next/next/no-img-element */
"use client";

import { FormEvent, useContext, useRef, useState } from "react";
import { getIcon, getImage } from "@/utils/getAssets";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Button from "../Button/Button";
import { CurrentLanguage } from "@/app/context";
import Divider from "../Divider/Divider";
import EmailInput from "../Input/EmailInput";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildrenAndClassName } from "@/types";
import axios from "axios";
import clsx from "clsx";

type Props = {
  backgroundColor?: string;
  lang?: string;
};
function Footer(props: PropsWithChildrenAndClassName<Props>) {
  const { className, lang } = props;
  const currentLocale = useContext(CurrentLanguage);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLFormElement>(null);
  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ref.current && ref.current.reportValidity() && value != "") {
      axios
        .post(
          "https://dblog.dev-tn.com/flows/trigger/cf15f487-2501-4e3f-b1d6-3d7bb7f19cc3",
          { email: value }
        )
        .then((rs) => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
            setValue("");
          }, 2000);
        });
    }
  };
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <div
        className={clsx(
          "px-4 xl:px-[7.5rem] bg-mint pt-9 pb-6 gap-y-6 flex flex-col"
        )}
      >
        <div className={clsx("flex justify-between items-center")}>
          <Link href={`/${lang}/`}>
            <Image src={getImage("logo.png")} width={172} height={56} alt="" />
          </Link>
          <Button
            variant="shaped"
            icon={getIcon("arrow-up-right-dark.svg")}
            shapeColor="dark"
            href={`/${lang}/contact`}
            className="max-sm:hidden"
          >
            <span className="text-black capitalize">
              {trans("buttonContactFooter")}
            </span>
          </Button>
          <Button
            variant="shaped"
            icon={getIcon("arrow-up-right-hovered.svg")}
            shapeColor="green"
            href={`/${lang}/contact`}
            className="sm:hidden"
          >
            <span className="text-primary capitalize">
              {trans("buttonContactFooter")}
            </span>
          </Button>
        </div>
        <Divider color="rgba(147,147,147,0.1)" />
        <div className="flex flex-col lg:flex-row lg:gap-12 justify-between text-center lg:text-left">
          <div className="2xl:basis-1/3">
            {/* Title */}
            <div className=" font-serif text-lg leading-[1.875rem] mb-2 lg:hidden capitalize">
              {/* {footerData.title.replaceAll("<>", "")} */}
              {trans("companyName")}
            </div>
            <div className=" font-serif text-xl leading-[1.875rem] mb-2 hidden lg:block capitalize">
              {trans("companyName")
                ?.split("<>")
                ?.map((text: any, index: number) => (
                  <div key={index}>{text}</div>
                ))}
            </div>
            {/* Slogan */}
            <div
              className={clsx(
                "text-sm lg:text-base italic leading-6 font-normal text-neutral-100/[0.42] mb-6"
              )}
            >
              {trans("slogan")
                ?.split("<>")
                ?.map((text: any, index: number) => (
                  <div key={index}>{text}</div>
                ))}
            </div>
            <form
              className={clsx(
                "flex items-end mx-auto lg:mx-0 gap-[1.875rem] max-w-[18.75rem] relative"
              )}
              onSubmit={handleEmailSubmit}
              ref={ref}
            >
              <EmailInput
                value={value}
                onChange={(e: any) => setValue(e.target.value)}
                trans={trans}
                placeholder="Email"
                className="flex-1"
              />
              <button
                type="submit"
                style={{ width: "50px", height: "50px" }}
                className="relative"
              >
                <img
                  src={getIcon("submit.svg")}
                  width={"50px"}
                  height={"50px"}
                  alt=""
                  className="aspect-square"
                />
              </button>
              <div
                className={clsx(
                  show ? "block" : "hidden",
                  "mt-4 text-sm text-neutral-400 absolute -bottom-2/3 left-0"
                )}
              >
                {trans("weReceivedEmail")}
              </div>
            </form>
          </div>
          <div className="lg:flex justify-around lg:gap-5 flex-1">
            <div className={clsx("mt-12 lg:mt-0")}>
              <div
                className={clsx(
                  "uppercase font-medium text-base lg:text-lg leading-[1.8rem] mb-3"
                )}
              >
                {trans("contact")}
              </div>
              <Link
                href={`/${lang}/contact`}
                className={clsx(
                  "text-sm text-neutral-100/[0.64] leading-[1.4rem] mb-2 cursor-pointer block lg:w-[200px] lg:mr-2 hover:text-black transition-colors"
                )}
              >
                <span className={clsx("font-semibold ")}>
                  {trans("address")}
                </span>
                <br className="lg:hidden" />
                <span className={clsx("font-light max-md:hidden")}>
                  {/* {footerData.contact.address} */}{" "}
                  {trans("addressValue")?.replaceAll("<>", "")}.
                </span>
                <span className={clsx("font-light md:hidden")}>
                  {/* {footerData.contact.address} */}{" "}
                  {trans("addressValue")
                    ?.split("<>")
                    .map((txt: any) => (
                      <p key={txt}>{txt}</p>
                    ))}
                  .
                </span>
              </Link>
              <div
                className={clsx(
                  "text-sm text-neutral-100/[0.64] leading-[1.4rem] mb-2 cursor-pointer hover:text-black transition-colors"
                )}
                onClick={() =>
                  window.open(`tel:${trans("phoneNumberValue")}`, "_blank")
                }
              >
                <span className={clsx("font-semibold ")}>
                  {trans("phoneNumber")}{" "}
                </span>
                <br className="lg:hidden" />
                <span className={clsx("font-light")}>
                  {/* {footerData.contact.phone} */}
                  {trans("phoneNumberValue")}
                </span>
              </div>
              <div
                className={clsx(
                  "text-sm text-neutral-100/[0.64] leading-[1.4rem] mb-2 cursor-pointer hover:text-black transition-colors"
                )}
                onClick={() =>
                  window.open(`mailto:${trans("emailAddress")}`, "_blank")
                }
              >
                <span className={clsx("font-semibold ")}>Email </span>
                <br className="lg:hidden" />
                <span className={clsx("font-light")}>
                  {/* {footerData.contact.email} */}
                  {trans("emailAddress")}
                </span>
              </div>
            </div>
            <div className={clsx("mt-6 lg:mt-0")}>
              <div
                className={clsx(
                  "uppercase font-medium text-base lg:text-lg leading-[1.8rem] mb-3"
                )}
              >
                {trans("services")}
              </div>
              <div
                className={clsx(
                  "text-sm text-neutral-100/[0.64] leading-[1.4rem] mb-2"
                )}
              >
                <span className={clsx("font-light")}>
                  {/* {footerData?.service?.map((s, index) => (
                    <Link
                      href={`/${lang}#`}
                      key={index}
                      className="block mb-2 capitalize"
                    >
                      {s}
                    </Link>
                  ))} */}
                  <Link
                    href={`/${lang}/about-us`}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    {trans("aboutUs")}
                  </Link>
                  <Link
                    href={`/${lang}/products`}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    {trans("products")}
                  </Link>
                  <Link
                    href={`/${lang}/news/all`}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    {trans("news")}
                  </Link>
                  {/* <Link
                    href={`/${lang}/privacy-policy`}
                    className="block mb-2 capitalize"
                  >
                    {trans("privacyPolicy")}
                  </Link>
                  <Link
                    href={`/${lang}/terms-of-use`}
                    className="block mb-2 capitalize"
                  >
                    {trans("termsOfUse")}
                  </Link> */}
                </span>
              </div>
            </div>
            <div className={clsx("mt-6 lg:mt-0")}>
              <div
                className={clsx(
                  "uppercase font-medium text-base lg:text-lg leading-[1.8rem] mb-3"
                )}
              >
                {trans("connect")}
              </div>
              <div
                className={clsx(
                  "text-sm text-neutral-100/[0.64] leading-[1.4rem] mb-2"
                )}
              >
                <span className={clsx("font-light")}>
                  {/* {footerData?.service?.map((s, index) => (
                    <Link
                      href={`/${lang}#`}
                      key={index}
                      className="block mb-2 capitalize"
                    >
                      {s}
                    </Link>
                  ))} */}
                  <a
                    href={
                      trans("facebook") ? `https://${trans("facebook")}` : "#"
                    }
                    target={trans("facebook") ? "_blank" : "_self"}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    facebook
                  </a>
                  <a
                    href={trans("zalo") ? `https://${trans("zalo")}` : "#"}
                    target={trans("zalo") ? "_blank" : "_self"}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    zalo
                  </a>
                  <a
                    href={
                      trans("instagram") ? `https://${trans("instagram")}` : "#"
                    }
                    target={trans("instagram") ? "_blank" : "_self"}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    instagram
                  </a>
                  <a
                    href={
                      trans("telegram") ? `https://${trans("telegram")}` : "#"
                    }
                    target={trans("telegram") ? "_blank" : "_self"}
                    className="block mb-2 capitalize hover:text-black transition-colors"
                  >
                    telegram
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Divider color="rgba(147,147,147,0.1)" />
        <div
          className={clsx(
            "text-sm text-neutral-100 leading-[1.4rem] text-center lg:text-left"
          )}
        >
          {trans("copyright")}. <br className="md:hidden" />
          {trans("allRightsReserve")}.
        </div>
      </div>
    );
  }
}
export default Footer;
