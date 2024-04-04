import { Cross1Icon, CrossCircledIcon } from "@radix-ui/react-icons";

import Button from "../Button/Button";
import { PropsWithChildrenAndClassName } from "@/types";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  open?: boolean;
  onClose?: any;
  bodyClassName?: string;
  headerElement?: ReactNode;
};
export default function Drawer(props: PropsWithChildrenAndClassName<Props>) {
  const { children, className, onClose, open, bodyClassName, headerElement } =
    props;
  return (
    <div
      className={clsx(
        "fixed top-0 left-0 w-full h-full bg-white/[0.72] backdrop-blur-[18px] z-[100] transition-all duration-1000",
        open ? "block animate-slideRight" : "hidden",
        className
      )}
    >
      <div className={clsx("p-4 pt-8 flex justify-between items-center")}>
        {headerElement}
        <Cross1Icon
          onClick={onClose}
          className="ml-auto cursor-pointer p-2 rounded-full text-black"
          width={30}
          height={30}
        />
      </div>
      <section className={clsx("px-4", bodyClassName)}>{children}</section>
    </div>
  );
}
