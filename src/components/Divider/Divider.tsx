import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  color?: string;
  height?: string;
};
export default function Divider(props: PropsWithChildrenAndClassName<Props>) {
  const { className, children, color = "black", height = "1px" } = props;
  const dividerStyles = {
    backgroundColor: color,
    height: height,
  };
  return (
    <div className={clsx("w-full", className)} style={dividerStyles}></div>
  );
}
