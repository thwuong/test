import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  active: boolean;
};
export default function CategoryTab({
  active,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={clsx(
        "text-sm lg:text-base rounded-full flex items-center justify-center leading-none select-none outline-none text-neutral-500 bg-neutral-800/[0.86] hover:brightness-95 lg:px-12 lg:py-4 py-3 px-6 cursor-pointer",
        active && "text-primary border border-primary",
        "whitespace-nowrap"
      )}
    >
      {children}
    </div>
  );
}
