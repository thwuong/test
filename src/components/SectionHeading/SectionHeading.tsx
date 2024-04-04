import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function SectionHeading(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "font-serif uppercase text-neutral-100 text-[1.375rem] lg:text-[2rem] font-medium lg:font-semibold leading-[3rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
