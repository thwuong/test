/* eslint-disable react/display-name */
"use client";

import * as Accordion from "@radix-ui/react-accordion";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@radix-ui/react-icons";
import { forwardRef, useState } from "react";
import { useParams, usePathname } from "next/navigation";

import { ASSET_PREFIX } from "@/utils/const";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useLanguages } from "@/hooks/useLanguages";

type Props = { trans?: any };
export default function LanguageSwitcherMobile({ trans }: Props) {
  const params = useParams();
  const currentLang = params?.lang;
  const pathName = usePathname();
  const { languages, languagesCode, languagesShortCode, isLoading } =
    useLanguages();
  return (
    <Accordion.Root
      className="text-neutral-100 text-sm"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{trans && trans("language")}</AccordionTrigger>
        <AccordionContent>
          {languages && (
            <div className={clsx("flex flex-col gap-y-2 cursor-pointer ")}>
              {languages.map((lang: any, index: number) => (
                <div
                  className="flex gap-x-2 hover:text-primary"
                  key={lang.name}
                >
                  <div className="relative w-6 h-4">
                    <Image
                      src={ASSET_PREFIX + "/" + lang.cover}
                      alt={lang}
                      fill
                      className="border-[0.2px] border-neutral-600 object-cover"
                    />
                  </div>

                  <Link
                    href={`/${languagesShortCode[index]}/${pathName?.slice(3)}`}
                    className={clsx(
                      languagesShortCode[index] == currentLang && "text-primary"
                    )}
                  >
                    {lang.name}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion.Root>
  );
}

const AccordionItem = forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={clsx(
        " overflow-hidden first:mt-0 focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={clsx(
          "group flex flex-1 cursor-pointer items-center justify-between outline-none uppercase",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <TriangleDownIcon
          className=" ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180 "
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={clsx(
        "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden capitalize",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);
