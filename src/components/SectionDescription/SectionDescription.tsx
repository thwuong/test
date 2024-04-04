import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function SectionDescription(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "text-neutral-100 text-sm lg:text-base leading-[1.4rem] lg:leading-[1.8rem] opacity-[0.64]",
        className
      )}
    >
      {children}
    </div>
  );
}
