"use client";

/* eslint-disable react/display-name */
import * as Accordion from "@radix-ui/react-accordion";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import React from "react";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionSubheading from "../SectionSubheading/SectionSubheading";
import clsx from "clsx";

type Props = {
  title?: string;
  description?: string;
};
export default function AccordionCoreValueItem({ title, description }: Props) {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger>
        <SectionSubheading textTransform="uppercase">{title}</SectionSubheading>
      </AccordionTrigger>
      <AccordionContent>
        <SectionDescription>{description}</SectionDescription>
      </AccordionContent>
    </AccordionItem>
  );
}

const AccordionItem = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={clsx(
        "mb-5 overflow-hidden focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={clsx(
          "group flex flex-1 cursor-default items-center justify-between bg-white text-[15px] leading-none outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef<any, any>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={clsx(
        "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="pt-2">{children}</div>
    </Accordion.Content>
  )
);
