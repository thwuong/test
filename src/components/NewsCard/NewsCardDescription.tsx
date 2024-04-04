import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function NewsCardDescription(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "text-sm lg:text-base leading-[1.8rem] text-neutral-100/[0.64]",
        className
      )}
    >
      {children}
    </div>
  );
}
