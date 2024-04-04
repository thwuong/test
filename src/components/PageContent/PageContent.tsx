import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = {
  background?: string;
  className?: string;
  shouldPadding?: boolean;
};
export default function PageContent({
  children,
  background,
  className,
  shouldPadding = true,
}: PropsWithChildren<Props>) {
  const style = background
    ? {
        background: `linear-gradient(180deg, #2D251B 0%, rgba(0, 0, 0, 0.78) 52.08%, #2E3829 100%), url(${background}), lightgray 50% / cover no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }
    : {};
  return (
    <div
      className={clsx("flex justify-center w-full relative", className)}
      style={style}
    >
      <div
        className={clsx(
          "w-full max-w-full 2xl:max-w-[1440px] max-xl:px-4",
          shouldPadding && "px-[7.5rem]"
        )}
      >
        <div>{children}</div>
      </div>
    </div>
  );
}
