"use client";

import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  PropsWithChildren,
  useId,
  useState,
} from "react";

import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";

type Props = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  iconUrl?: string;
  iconPosition?: "left" | "right";
  borderColor?: string;
  label?: string;
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler;
  value?: any;
  multiple?: boolean;
  row?: number;
  errorMessage?: string;
  extraAttribute?: InputHTMLAttributes<any>;
};
export default function Input(props: PropsWithChildrenAndClassName<Props>) {
  const {
    type,
    placeholder,
    className,
    iconUrl,
    iconPosition = "left",
    borderColor = "rgba(0,0,0,0.14)",
    label,
    id,
    name,
    onChange,
    value,
    multiple = false,
    row,
    errorMessage,
    extraAttribute,
  } = props;
  const internalId = useId();
  return (
    <>
      <label
        htmlFor={id ?? internalId}
        className="text-base font-medium leading-[1.8rem]"
      >
        {label}
      </label>
      <div className={clsx("relative", label && "mt-2")}>
        {multiple ? (
          <>
            <textarea
              id={id ?? internalId}
              rows={row}
              className={clsx(
                "border rounded-xl w-full text-base py-3 bg-transparent focus:outline-primary/50",
                Boolean(iconUrl && iconPosition == "left") && "pl-14",
                Boolean(iconUrl && iconPosition == "right") && "pr-14",
                "px-5",
                errorMessage && "text-red-600",
                className
              )}
              placeholder={placeholder}
              name={name}
              onChange={onChange}
              value={value}
              style={{
                borderColor: borderColor,
              }}
              {...extraAttribute}
            />
            <div className="text-neutral-600 text-[12px] lg:text-sm absolute right-4 bottom-4">
              {value?.length}/1000
            </div>
          </>
        ) : (
          <input
            type={type}
            id={id ?? internalId}
            className={clsx(
              "border rounded-full w-full text-base py-3 bg-transparent focus:outline-primary/50",
              Boolean(iconUrl && iconPosition == "left") && "pl-14",
              Boolean(iconUrl && iconPosition == "right") && "pr-14",
              "px-5",
              errorMessage &&
                "text-red-700 border border-red-700 focus:outline-red-700/50",
              className
            )}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            style={{
              borderColor: errorMessage ? "rgba(185, 28, 28, 1)" : borderColor,
            }}
            {...extraAttribute}
          />
        )}

        {iconUrl && (
          <Image
            src={iconUrl}
            width={24}
            height={24}
            alt=""
            className={clsx(
              "absolute top-1/2 -translate-y-1/2",
              iconPosition == "left" && "left-0 ml-5",
              iconPosition == "right" && "right-0 mr-5"
            )}
          />
        )}
      </div>
      {errorMessage && (
        <div className={clsx("text-red-700 text-sm mt-1")}>{errorMessage}</div>
      )}
    </>
  );
}
