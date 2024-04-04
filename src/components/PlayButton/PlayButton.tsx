import Image from "next/image";
import { MouseEventHandler } from "react";
import Text from "../Text/Text";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";

type Props = {
  onClick?: MouseEventHandler;
  text?: string;
};
export default function PlayButton({ onClick, text }: Props) {
  return (
    <div className="flex items-center gap-x-2 lg:gap-x-3">
      <div className={clsx("cursor-pointer")} onClick={onClick}>
        <Image
          src={getIcon("play.svg")}
          width={64}
          height={64}
          alt=""
          className="lg:hidden"
        />
        <Image
          src={getIcon("play.svg")}
          width={48}
          height={48}
          alt=""
          className="hidden lg:block"
        />
      </div>
      <Text className="font-serif font-medium leading-6 text-base lg:text-xl">
        {text}
      </Text>
    </div>
  );
}
