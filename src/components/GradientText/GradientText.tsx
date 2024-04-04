import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function GradientText(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        " font-serif text-lg lg:text-xl font-medium leading-[1.75rem] lg:leading-[2rem] lg:font-bold tracking-[0.4] uppercase bg-clip-text text-transparent bg-green-gradient",
        className
      )}
    >
      {children}
    </div>
  );
}
