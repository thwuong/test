import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { useRef } from "react";

type Props = {
  placeholder?: string;
  width?: string;
  trans: any;
  value: string;
  onChange: any;
};
export default function EmailInput(
  props: PropsWithChildrenAndClassName<Props>
) {
  const {
    children,
    className,
    placeholder,
    width = "100%",
    trans,
    onChange,
    value,
  } = props;
  const ref = useRef<any>();
  return (
    <input
      type="email"
      placeholder={placeholder}
      className={clsx(
        "bg-transparent py-4 focus:outline-none border-b border-primary/[0.36] text-sm text-neutral-100",
        className
      )}
      ref={ref}
      onInvalid={() => ref.current.setCustomValidity(trans("invalidEmail"))}
      value={value}
      required
      onChange={onChange}
      onInput={() => ref.current.setCustomValidity("")}
      style={{
        width: width,
      }}
    />
  );
}
