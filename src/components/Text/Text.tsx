import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function Text(props: PropsWithChildrenAndClassName<Props>) {
  const { children, className } = props;
  return (
    <div
      className={clsx("text-neutral-100/[0.64] leading-[1.8rem]", className)}
    >
      {children}
    </div>
  );
}
