import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  photo: string;
  title: string;
};
export default function EcosystemCard(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { title, photo } = props;
  return (
    <div
      className={clsx(
        "bg-white rounded-[0.625rem] p-3 w-full lg:w-[17.1875rem] h-fit lg:animate-spin lg:animate-reverse lg:animate-infinite lg:animate-duration-[100000ms]"
      )}
      style={{
        boxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.16)",
        WebkitBoxShadow: "0px 0px 80px 0px rgba(0, 0, 0, 0.16)",
      }}
    >
      <Image
        src={photo}
        width={250}
        height={200}
        alt=""
        className={clsx(
          "rounded-lg md:min-w-[15.625rem] md:min-h-[12.5rem] w-full h-auto aspect-[1.5] object-cover"
        )}
      />
      <div
        className={clsx(
          "text-lg lg:text-[1.375rem] leading-[1.75rem] lg:leading-[2rem] font-medium font-serif text-neutral-200 py-2 text-center lg:text-left"
        )}
      >
        {title}
      </div>
    </div>
  );
}
