import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { getImage } from "@/utils/getAssets";

type Props = {};
export default function AudioCard(props: PropsWithChildrenAndClassName<Props>) {
  const { children } = props;
  return (
    <div
      className={clsx(
        "w-full lg:w-[calc(100%-20px)] xl:w-full rounded-3xl bg-cream flex flex-col lg:flex-row relative lg:mt-24 mb-6 xl:mr-5"
      )}
    >
      <div className={clsx("flex-1 px-4 pt-6 lg:p-9 my-auto")}>{children}</div>
      <div
        className={clsx(
          "w-[16.75rem] min-h-[23rem] lg:w-[23.8125rem] lg:min-h-[32.9375rem] mt-6 lg:mt-auto mx-auto lg:mx-0 h-full bg-primary bg-[radial-gradient(50%_50%_at_50%_50%,#9FB899_0%,#809D79_100%)]",
          "rounded-tl-full rounded-tr-full relative"
        )}
      >
        <Image
          src={getImage("wave.svg")}
          alt=""
          width={99}
          height={39}
          className="absolute top-[6.8125rem] left-0 -translate-x-2/3"
        />
        <Image
          src={getImage("leaf1.png")}
          alt=""
          width={55}
          height={82}
          className="absolute lg:top-[8rem] lg:-left-20 lg:-translate-x-2/3"
        />
        <Image
          src={getImage("coffee-bowl.svg")}
          alt=""
          width={268}
          height={368}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 lg:hidden"
        />
      </div>
      <Image
        src={getImage("coffee-bowl.svg")}
        alt=""
        width={455}
        height={626}
        className="absolute -bottom-5 -right-9 hidden lg:block"
      />
    </div>
  );
}
