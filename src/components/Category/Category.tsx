import { MouseEventHandler, useState } from "react";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  active?: boolean;
};
export default function Category(props: PropsWithChildrenAndClassName<Props>) {
  const { children, className, active } = props;
  return (
    <div
      className={clsx(
        "flex lg:justify-between py-2 lg:py-5 px-6 rounded-xl text-sm lg:text-base font-medium leading-6 transition-all cursor-pointer hover:brightness-95 relative",
        active ? "bg-amulet text-white" : "bg-cream text-neutral-300",
        className
      )}
    >
      <div className="whitespace-nowrap">{children}</div>
    </div>
  );
}
