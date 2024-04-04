import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";

type Props = {
  textTransform?: "capitalize" | "uppercase";
};
export default function SectionTitle(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { className, children, textTransform } = props;
  const processedString = (txt: string) =>
    txt.replace(/__(.*?)__/g, "<span class='brush-underline'>$1</span>") || "";

  return (
    <div
      className={clsx(
        " font-serif leading-[2.0625rem] lg:leading-10 text-[1.375rem] lg:text-[2rem] font-medium text-neutral-100",
        textTransform && textTransform
      )}
    >
      {children
        ?.toString()
        ?.split("<>")
        ?.map((line, index) => (
          <div
            key={index}
            dangerouslySetInnerHTML={{ __html: processedString(line) }}
            className={clsx("", className)}
          ></div>
        ))}
    </div>
  );
}
