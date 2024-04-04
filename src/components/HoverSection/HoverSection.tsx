"use client";

import { getIcon, getImage } from "@/utils/getAssets";
import { useEffect, useId } from "react";

import Image from "next/image";
import PictureFrame from "../PictureFrame/PictureFrame";
import { PropsWithChildrenAndClassName } from "@/types";
import SectionDescription from "../SectionDescription/SectionDescription";
import SectionSubheading from "../SectionSubheading/SectionSubheading";
import clsx from "clsx";
import { debounce } from "@/utils/debounce";

type Props = {
  title?: string;
  description?: string;
  icon?: string;
  hoverImage?: string;
  href?: string;
};
export default function HoverSection({
  children,
  className,
  title,
  description,
  hoverImage = getImage("home-coffee.png"),
  icon = getIcon("arrow-up-right-dark.svg"),
  href = "#",
}: PropsWithChildrenAndClassName<Props>) {
  const id = useId();
  useEffect(() => {
    const cursor = document.getElementById("cursor")!;
    const hoverSection = document.getElementById(id)!;
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const handleMouseHover = (e: MouseEvent) => {
      cursor.style.backgroundImage = `url(${hoverImage})`;
    };
    document.addEventListener("mousemove", handleMouseMove);
    hoverSection.addEventListener("mouseover", handleMouseHover);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverSection.removeEventListener("mouseover", handleMouseHover);
    };
  }, []);
  return (
    <div className="relative max-lg:overflow-x-clip" id={id}>
      <div
        className={clsx(
          "flex py-4 gap-x-[4.5rem] items-center relative ease-linear",
          "hover:opacity-60"
        )}
      >
        <div className={clsx("flex-1")}>
          <SectionSubheading textTransform="uppercase">
            {title}
          </SectionSubheading>
          <SectionDescription>{description}</SectionDescription>
        </div>
        {/* <div>
          <Image src={icon} alt="" width={24} height={24} />
        </div> */}
      </div>
      {/* <div
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 hover-picture",
          className
        )}
      >
        <div className="w-[15.9375rem] h-[19.625rem] relative">
          <PictureFrame
            image={hoverImage}
            variant="full"
            borderColor="#5F7D40"
            radius={8}
          />
        </div>
      </div> */}
    </div>
  );
}
