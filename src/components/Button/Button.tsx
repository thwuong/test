import Link, { LinkProps } from "next/link";
import { getIcon, getImage } from "@/utils/getAssets";

import { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import styles from "./Button.module.scss";

export enum ButtonVariant {
  primary = "primary",
  // secondary = "secondary",
  link = "link",
  outline = "outline",
  shaped = "shaped",
  default = "default",
}

type Props = {
  href?: string;
  variant?: `${ButtonVariant}`;
  extraAttribute?: ButtonHTMLAttributes<any>;
  icon?: string;
  iconPosition?: "left" | "right";
  shapeColor?: "light" | "dark" | "green";
};
export default function Button(props: PropsWithChildrenAndClassName<Props>) {
  const {
    className,
    href = "",
    variant = "default",
    children,
    extraAttribute,
    icon,
    iconPosition = "left",
    shapeColor = "light",
  } = props;
  const buttonStyles = {
    primary: clsx(
      "rounded-full px-6 py-[0.625rem] lg:px-12 lg:py-4 bg-primary text-mint font-medium text-sm lg:text-base leading-6 w-fit whitespace-nowrap transition-all",
      styles.primary,
      className
    ),
    // secondary: "",
    link: "text-primary text-sm font-semibold leading-[1.5rem] hover:brightness-150 transition-all",
    outline: clsx(
      "border border-primary rounded-full px-12 py-4 bg-transparent text-primary text-base font-normal leading-6 w-fit whitespace-nowrap hover:bg-primary hover:text-mint transition-all",
      className
    ),
    shaped: clsx(
      "text-white text-sm lg:text-base font-medium w-fit ml-5 whitespace-nowrap hover:text-primary transition-all",
      className
    ),
    default: clsx(
      "rounded-full px-12 py-4 bg-neutral-800 text-neutral-500 text-base font-normal leading-6 w-fit whitespace-nowrap hover:brightness-75 transition-all",
      className
    ),
  };
  if (href)
    return (
      <Link
        href={href}
        {...extraAttribute}
        className={clsx(buttonStyles[variant])}
      >
        <div>
          {variant == "shaped" ? (
            <div
              className={clsx(
                "relative peer hover:text-primary",
                styles.shapeBtn
              )}
            >
              <Image
                src={
                  shapeColor == "light"
                    ? getIcon("subtract-sm.svg")
                    : shapeColor == "green"
                    ? getIcon("subtract-green.svg")
                    : getIcon("subtract-dark.svg")
                }
                width={38}
                height={40}
                alt=""
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 max-sm:-translate-x-1/3 -translate-x-[40%] lg:hidden",
                  shapeColor !== "light" && styles.hiddenWhenHover
                )}
              />
              <Image
                src={
                  shapeColor == "light"
                    ? getIcon("subtract.svg")
                    : shapeColor == "green"
                    ? getIcon("subtract-green.svg")
                    : getIcon("subtract-dark.svg")
                }
                width={53}
                height={56}
                alt=""
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[40%] hidden lg:block",
                  shapeColor !== "light" && styles.hiddenWhenHover
                )}
              />
              <Image
                src={getIcon("subtract-green.svg")}
                width={53}
                height={56}
                alt=""
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[40%] hidden lg:block",
                  shapeColor !== "light" && styles.showWhenHover
                )}
              />
              <div className=" flex items-center gap-x-2 max-sm:gap-x-1">
                {icon && (
                  <>
                    <Image
                      src={icon}
                      width={14}
                      height={14}
                      alt=""
                      className={clsx(
                        iconPosition == "right" && "order-2",
                        shapeColor !== "light" && styles.hiddenWhenHover
                      )}
                    />
                    <Image
                      src={getIcon("arrow-up-right-hovered.svg")}
                      width={14}
                      height={14}
                      alt=""
                      className={clsx(
                        iconPosition == "right" && "order-2",
                        shapeColor == "light" ? "hidden" : styles.showWhenHover
                      )}
                    />
                  </>
                )}
                <div className="">{children}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              {icon && (
                <Image
                  src={icon}
                  width={variant !== "link" ? 14 : 24}
                  height={variant !== "link" ? 14 : 24}
                  alt=""
                  className={clsx(iconPosition == "right" && "order-2")}
                />
              )}
              <div>{children}</div>
            </div>
          )}
        </div>
      </Link>
    );
  else
    return (
      <button {...extraAttribute} className={clsx(buttonStyles[variant])}>
        <div>
          {variant == "shaped" ? (
            <div className="relative">
              <Image
                src={
                  shapeColor == "light"
                    ? getIcon("subtract.svg")
                    : shapeColor == "green"
                    ? getIcon("subtract-green.svg")
                    : getIcon("subtract-dark.svg")
                }
                width={38}
                height={40}
                alt=""
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[40%] lg:hidden"
                )}
              />
              <Image
                src={
                  shapeColor == "light"
                    ? getIcon("subtract.svg")
                    : shapeColor == "green"
                    ? getIcon("subtract-green.svg")
                    : getIcon("subtract-dark.svg")
                }
                width={53}
                height={56}
                alt=""
                className={clsx(
                  "absolute top-1/2 -translate-y-1/2 left-0 -translate-x-[40%] hidden lg:block"
                )}
              />
              <div className=" flex items-center gap-x-2">
                {icon && (
                  <Image
                    src={icon}
                    width={14}
                    height={14}
                    alt=""
                    className={clsx(iconPosition == "right" && "order-2")}
                  />
                )}
                <div>{children}</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              {icon && (
                <Image
                  src={icon}
                  width={variant !== "link" ? 14 : 24}
                  height={variant !== "link" ? 14 : 24}
                  alt=""
                  className={clsx(iconPosition == "right" && "order-2")}
                />
              )}
              <div>{children}</div>
            </div>
          )}
        </div>
      </button>
    );
}
