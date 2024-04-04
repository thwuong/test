import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function NewsSummary(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "border border-primary py-4 px-6 text-primary/[0.64] italic text-base leading-[1.8rem] rounded-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
