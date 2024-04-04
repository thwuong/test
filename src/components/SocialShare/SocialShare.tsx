"use client";

import { ButtonHTMLAttributes, useState } from "react";

import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props<P> = {
  icon: string;
  shouldPopup?: boolean;
  trans?: any;
} & P;

export default function SocialShare(
  props: PropsWithChildrenAndClassName<Props<ButtonHTMLAttributes<any>>>
) {
  const {
    children,
    className,
    icon,
    shouldPopup = false,
    trans,
    ...rest
  } = props;
  const [show, setShow] = useState(false);
  const CopyText = () => (
    <p
      className={clsx(
        show ? "block" : "hidden",
        "absolute w-fit whitespace-nowrap -top-2 left-1/2 -translate-y-full -translate-x-1/2 text-xs bg-mint p-1 rounded-md"
      )}
    >
      {trans ? trans("copied") : "Copied"}!
    </p>
  );
  const toggleShow = () => {
    setShow(true);
    setTimeout(() => setShow(false), 500);
  };
  return (
    <button className={clsx("relative", className)} {...rest}>
      <Image
        src={icon}
        alt=""
        width={24}
        height={24}
        className={clsx("w-6 h-6")}
        onClick={() => shouldPopup && toggleShow()}
      />
      {shouldPopup && <CopyText />}
    </button>
  );
}
