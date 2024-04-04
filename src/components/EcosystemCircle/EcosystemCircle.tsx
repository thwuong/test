import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import SectionTitle from "../SectionTitle/SectionTitle";
import clsx from "clsx";
import { getImage } from "@/utils/getAssets";

type Props = {
  title?: string;
};
export default function EcosystemCircle({
  title,
  className,
  children,
}: PropsWithChildrenAndClassName<Props>) {
  return (
    <div className="relative mx-auto">
      <div
        className={clsx(
          "w-[37.5rem] h-[37.5rem] relative mx-auto flex justify-center items-center animate-spin animate-infinite animate-duration-[100000ms]"
        )}
      >
        <Image src={getImage("dash-circle.png")} fill alt="" />
        {children}
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SectionTitle
          textTransform="uppercase"
          className="text-center flex justify-center"
        >
          {title}
        </SectionTitle>
      </div>
    </div>
  );
}
