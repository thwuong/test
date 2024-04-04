import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {};
export default function Chip(props: PropsWithChildrenAndClassName<Props>) {
  const { children, className } = props;
  return (
    <div
      className={clsx(
        "text-sm text-amulet -tracking-[0.0219rem] py-[0.375rem] px-3 rounded-lg bg-mint w-fit"
      )}
    >
      {children}
    </div>
  );
}
