import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
    image: string;
};
export default function NewsBanner(props: PropsWithChildrenAndClassName<Props>) {
    const { children, className, image } = props;
    return (
        <div className={clsx("relative w-full h-[40.625rem] max-md:h-[560px]")}>
            <Image
                src={image}
                // width={2560}
                // height={1156}
                fill
                alt=""
                quality={100}
                className={clsx("object-cover object-center ")}
            />
        </div>
    );
}
