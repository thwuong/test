import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  type?: "title" | "description";
};
export default function ProductDescription(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className, type } = props;
  return (
    <>
      {type == "title" ? (
        <span
          className={clsx(
            "text-[0.9375rem] lg:text-lg font-medium leading-[1.6875rem] text-neutral-100 max-w-xs"
          )}
        >
          {children}
        </span>
      ) : (
        <span
          className={clsx(
            "text-sm lg:text-base leading-[1.4rem] lg:leading-[1.8rem] text-neutral-100/[0.64] flex-1"
          )}
        >
          {children}
        </span>
      )}
    </>
  );
}
