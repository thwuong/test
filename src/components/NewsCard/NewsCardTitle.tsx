import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function NewsCardTitle(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "text-lg lg:text-xl font-medium leading-[1.875rem] text-neutral-100"
      )}
    >
      {children}
    </div>
  );
}
