import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function CategoryText(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "italic text-sm leading-[1.575rem] text-neutral-100/[0.64]",
        className
      )}
    >
      {children}
    </div>
  );
}
