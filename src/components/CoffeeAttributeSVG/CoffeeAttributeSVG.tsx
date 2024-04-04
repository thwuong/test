import GradientText from "../GradientText/GradientText";
import { PropsWithChildrenAndClassName } from "@/types";
import { SVGProps } from "react";
import clsx from "clsx";

type Props = {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
  title4: string;
  description4: string;
  title5: string;
  description5: string;
  title6: string;
  description6: string;
};

const exampleData = [
  {
    title: "hoàn toàn tự nhiên",
    description:
      "Không thuốc trừ sâu, phân bón hóa học <> hay bất kỳ chất bổ sung tổng hợp nào",
  },
  {
    title: "tinh khiết tuyệt đối",
    description:
      "Không hóa chất, không tạp chất, tuân thủ <> nghiêm ngặt các tiêu chuẩn hữu cơ",
  },
  {
    title: "không biến đổi gen",
    description: "100% không chứa thành phần biến đổi gen",
  },
  {
    title: "đậm đà tinh tế",
    description:
      "Mùi vị sâu lắng, tinh tuý, giữ trọn vẹn <> hương vị nguyên bản.",
  },
  {
    title: "bảo vệ môi trường",
    description:
      "Bảo tồn đa dạng sinh học, tiết kiệm nước <> và giảm phát thải carbon",
  },
  {
    title: "kiểm định độc lập",
    description:
      "Đạt kiểm định từ tổ chức độc lập được <> Bộ Nông nghiệp Hoa Kỳ chấp thuận",
  },
];

export default function CoffeeAttributeSVG({
  children,
  className,
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
  title4,
  description4,
  title5,
  description5,
  title6,
  description6,
  ...rest
}: PropsWithChildrenAndClassName<SVGProps<SVGSVGElement> & Props>) {
  return (
    <div className={clsx("resize w-full h-full")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // width={1200}
        // height={742}
        fill="none"
        className="w-full h-full"
        viewBox="0 0 1200 742"
        {...rest}
      >
        <path fill="url(#a)" d="M400 171h400v400H400z" />
        <path
          fill="#fff"
          d="M805.888 142.311a2.667 2.667 0 1 0 3.648-3.891 2.667 2.667 0 0 0-3.648 3.891Zm-99.811 62.897-.269-.422-.156.1-.054.177.479.145Zm-18.886 64.302 19.364-64.158-.957-.289-19.364 64.158.957.289Zm19.155-63.881 101.635-64.842-.538-.843-101.635 64.842.538.843ZM409.042 82.31a2.667 2.667 0 1 1-3.65-3.89 2.667 2.667 0 0 1 3.65 3.89Zm99.811 62.898.269-.422.156.1.054.177-.479.145Zm18.886 64.302-19.365-64.158.958-.289 19.364 64.158-.957.289Zm-19.155-63.881L406.948 80.787l.538-.843 101.636 64.842-.538.843ZM850.029 548.142a2.667 2.667 0 1 0 3.648-3.891 2.667 2.667 0 0 0-3.648 3.891Zm-118.176-38.945-.433.248.098.172.188.058.147-.478Zm-21.721-36.886 21.288 37.134.867-.497L711 471.814l-.868.497Zm21.574 37.364 120 36.999.295-.955-120-37-.295.956ZM348.824 628.141a2.666 2.666 0 1 1-3.649-3.888 2.666 2.666 0 0 1 3.649 3.888ZM467 589.196l.434.249-.098.171-.189.058-.147-.478Zm21.721-36.885-21.287 37.134-.868-.497 21.288-37.134.867.497Zm-21.574 37.363-120 37-.294-.956 120-36.999.294.955ZM345.824 354.411a2.667 2.667 0 1 1-3.648-3.892 2.667 2.667 0 0 1 3.648 3.892Zm68.665.076-70.5-1.521.022-1 70.5 1.521-.022 1ZM856.412 361.655a2.667 2.667 0 1 1-3.763-3.78 2.667 2.667 0 0 1 3.763 3.78Zm-1.881-1.39H781v-1h73.531v1Z"
        />
        <text
          fill="url(#b)"
          x={841.409}
          y={130.297}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title4}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={841.409}
          y={134.297}
          className="text-base leading-8"
        >
          {description4?.split("<>").map((text, index) => (
            <tspan key={index} x={841.409} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <text
          fill="url(#b)"
          x={876.68}
          y={367.774}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title5}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={876.68}
          y={371.774}
          className="text-base leading-8"
        >
          {description5?.split("<>").map((text, index) => (
            <tspan key={index} x={876.68} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <text
          fill="url(#b)"
          x={72.16}
          y={72.934}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title1}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={72.16}
          y={75.934}
          className="text-base leading-8"
        >
          {description1?.split("<>").map((text, index) => (
            <tspan key={index} x={72.16} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <circle cx={409} cy={81} r={8} fill="#fff" />
        <circle cx={806.076} cy={140.707} r={8} fill="#fff" />
        <circle cx={853} cy={360.72} r={8} fill="#fff" />
        <circle cx={852} cy={546} r={8} fill="#fff" />
        <circle cx={347} cy={626} r={8} fill="#fff" />
        <circle cx={344} cy={352.487} r={8} fill="#fff" />
        <text
          fill="url(#b)"
          x={0.84}
          y={355.774}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title2}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={0.84}
          y={359.774}
          className="text-base leading-8"
        >
          {description2?.split("<>").map((text, index) => (
            <tspan key={index} x={0.84} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <text
          fill="url(#b)"
          x={873.04}
          y={569.314}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title6}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={873.04}
          y={573.314}
          className="text-base leading-8"
        >
          {description6?.split("<>").map((text, index) => (
            <tspan key={index} x={873.04} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <text
          fill="url(#b)"
          x={15.78}
          y={636.744}
          className={"font-serif text-xl font-bold tracking-[0.4] uppercase"}
        >
          {title3}
        </text>
        <text
          fill="#fff"
          opacity={0.64}
          x={15.78}
          y={637.744}
          className="text-base leading-8"
        >
          {description3?.split("<>").map((text, index) => (
            <tspan key={index} x={15.78} dy={"32px"}>
              {text}
            </tspan>
          ))}
        </text>
        <defs>
          <linearGradient
            id="b"
            // x1={896.918}
            // x2={898.894}
            // y1={114.411}
            // y2={144.093}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            // gradientUnits="userSpaceOnUse"
          >
            <stop offset={0} stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient>
          {/* <linearGradient
            id="c"
            x1={940.315}
            x2={942.066}
            y1={347.411}
            y2={377.122}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient>
          <linearGradient
            id="d"
            x1={116.644}
            x2={119.051}
            y1={54.411}
            y2={84.029}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient>
          <linearGradient
            id="e"
            x1={49.315}
            x2={51.593}
            y1={337.411}
            y2={367.05}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient>
          <linearGradient
            id="f"
            x1={933.411}
            x2={935.274}
            y1={550.411}
            y2={580.108}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient>
          <linearGradient
            id="g"
            x1={83.164}
            x2={84.867}
            y1={616.411}
            y2={646.127}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D0E1AA" />
            <stop offset={1} stopColor="#61924B" />
          </linearGradient> */}
          <pattern
            id="a"
            width={1}
            height={1}
            patternContentUnits="objectBoundingBox"
          >
            <use xlinkHref="#h" transform="matrix(.00154 0 0 .00154 0 .205)" />
          </pattern>
          <image
            xlinkHref="/assets/images/coffee-beans.png"
            id="h"
            width={650}
            height={384}
            className="brightness-75"
          />
        </defs>
      </svg>
    </div>
  );
}
