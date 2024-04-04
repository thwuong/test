"use client";

import * as Tabs from "@radix-ui/react-tabs";

import styles from "./description.module.scss";

type Props = {
  descriptions?: string;
  details?: string;
  trans?: any;
};
export default function ProductDetailTab({
  descriptions = "",
  details = "",
  trans,
}: Props) {
  return (
    <Tabs.Root className="flex flex-col" defaultValue={"description"}>
      <Tabs.List
        className="shrink-0 flex gap-2 lg:gap-6"
        aria-label="Product details"
      >
        <Tabs.Trigger
          className="text-sm lg:text-base rounded-full flex items-center justify-center leading-none select-none data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-primary outline-none data-[state=inactive]:text-neutral-500 data-[state=inactive]:bg-neutral-800/[0.86] hover:brightness-95 lg:px-12 lg:py-4 py-3 px-6 cursor-pointer"
          value="description"
        >
          {trans && trans("productDescription")}
        </Tabs.Trigger>
        <Tabs.Trigger
          className="text-sm lg:text-base rounded-full flex items-center justify-center leading-none select-none data-[state=active]:text-primary data-[state=active]:border data-[state=active]:border-primary outline-none data-[state=inactive]:text-neutral-500 data-[state=inactive]:bg-neutral-800/[0.86] hover:brightness-95 lg:px-12 lg:py-4 py-3 px-6 cursor-pointer"
          value="detail"
        >
          {trans && trans("detailInfomation")}
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="grow pt-6 outline-none" value="description">
        <div
          dangerouslySetInnerHTML={{ __html: descriptions }}
          className={styles.description}
        ></div>
        {/* {descriptions} */}
      </Tabs.Content>
      <Tabs.Content className="grow pt-6 outline-none" value="detail">
        {/* {details} */}
        <div
          className={styles.details}
          dangerouslySetInnerHTML={{ __html: details }}
        ></div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
