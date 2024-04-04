"use client";

/* eslint-disable react/display-name */
import * as Accordion from "@radix-ui/react-accordion";

import React, { PropsWithChildren } from "react";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionSubheading from "../SectionSubheading/SectionSubheading";
import clsx from "clsx";

type Props = {};
export default function AccordionCoreValue({ children }: PropsWithChildren) {
  return (
    <div>
      <Accordion.Root
        className=""
        type="multiple"
        // defaultValue="item-1"
        // collapsible
      >
        {children}
      </Accordion.Root>
    </div>
  );
}
