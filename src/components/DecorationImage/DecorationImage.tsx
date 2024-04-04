import Image from "next/image";
import clsx from "clsx";

type Props = {
  src: string;
  className?: string;
  width?: number;
  height?: number;
};
export default function DecorationImage({
  src,
  className,
  width,
  height,
}: Props) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt=""
      className={clsx("absolute", className)}
    />
  );
}
