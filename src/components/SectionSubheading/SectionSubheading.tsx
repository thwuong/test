import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  textTransform?: "uppercase" | "capitalize";
};
export default function SectionSubheading(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className, textTransform } = props;
  return (
    <div
      className={clsx(
        "font-serif text-neutral-100 text-lg lg:text-xl font-medium lg:font-semibold leading-[1.875rem]",
        textTransform == "uppercase" && "uppercase",
        textTransform == "capitalize" && "capitalize",
        className
      )}
    >
      {children}
    </div>
  );
}
