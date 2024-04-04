import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  icon?: string;
  title?: string;
  bgColor?: string;
  titleClassName?: string;
};
export default function ContactCard(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className, icon, title, bgColor, titleClassName } = props;
  return (
    <div
      className={clsx("w-full rounded-3xl py-6 px-8 mb-4", className)}
      style={{ backgroundColor: bgColor }}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className={clsx("mt-3")}
        />
      )}
      <div
        className={clsx(
          " font-serif text-[1.375rem] font-medium leading-[2rem] text-neutral-100 mb-2",
          titleClassName
        )}
      >
        {title}
      </div>
      <div className="whitespace-pre-line">{children}</div>
    </div>
  );
}
