import Image from "next/image";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import styles from "./PictureFrame.module.css";

export enum PictureFrameVariant {
  full = "full",
  "bottom-left" = "bottom-left",
  "top-left" = "top-left",
  "top-right" = "top-right",
  "bottom-right" = "bottom-right",
  "cross" = "cross",
  "cross-reverse" = "cross-reverse",
  "full-corner" = "full-corner",
  "circle" = "circle",
  "none" = "none",
}

type Props = {
  borderColor?: string;
  radius?: number;
  variant?: `${PictureFrameVariant}`;
  borderThickness?: "thick" | "thin";
  /** In percent or pixel with unit. If you use percent, please select lower than 50%
   *
   *  Exp. `100px` or `30%`
   */
  borderSpanWidth?: string;
  /** Đường kính */
  diameter?: string;
  image?: string;
};
export default function PictureFrame(
  props: PropsWithChildrenAndClassName<Props>
) {
  const {
    children,
    className,
    borderColor,
    radius = 0,
    borderThickness = "thick",
    variant = "full",
    borderSpanWidth = "30%",
    diameter,
    image = "",
  } = props;
  const borderStyles = {
    none: { border: "none" },
    full: {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid ${borderColor}`,
      borderRadius: radius + "px",
    },
    circle: {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid ${borderColor}`,
      borderRadius: "100%",
      width: diameter,
      height: diameter,
    },
    "top-left": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from 90deg at top ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat`,
    },
    "top-right": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from 180deg at top ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat`,
    },
    "bottom-left": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from 0deg at bottom ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat`,
    },
    "bottom-right": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from -90deg at bottom ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat`,
    },
    cross: {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from 90deg at top ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat,
      conic-gradient(from -90deg at bottom ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat
      `,
    },
    "cross-reverse": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `conic-gradient(from 180deg at top ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat,
      conic-gradient(from 0deg at bottom ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat
      `,
    },
    "full-corner": {
      border: `${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      } solid #0000`,
      background: `
            conic-gradient(from 90deg at top ${
              borderThickness == "thick" ? "0.625rem" : "0.5rem"
            } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat,
          conic-gradient(from 180deg at top ${
            borderThickness == "thick" ? "0.625rem" : "0.5rem"
          } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 0 / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat,
          conic-gradient(from 0deg at bottom ${
            borderThickness == "thick" ? "0.625rem" : "0.5rem"
          } left ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 0 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat,
          conic-gradient(from -90deg at bottom ${
            borderThickness == "thick" ? "0.625rem" : "0.5rem"
          } right ${
        borderThickness == "thick" ? "0.625rem" : "0.5rem"
      }, #0000 90deg, ${borderColor} 0) 100% 100% / ${borderSpanWidth} ${borderSpanWidth} border-box no-repeat
          `,
    },
  };
  return (
    <div
      className={clsx(
        "relative w-full h-full",
        variant == "circle" && "overflow-clip",
        variant == "circle" && styles.circleFrame,
        className,
        styles.border
      )}
      style={borderStyles[variant]}
    >
      <Image src={image} fill alt="" className="object-cover" />
    </div>
  );
}
