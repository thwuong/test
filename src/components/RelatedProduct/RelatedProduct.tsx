"use client";

import "react-multi-carousel/lib/styles.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import { ASSET_PREFIX } from "@/utils/const";
import Carousel from "react-multi-carousel";
import Product from "../Product/Product";
import { ProductModel } from "@/hooks/useProduct";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { useRef } from "react";

type Props = {
  relatedProducts: ProductModel[];
  lang: string;
};
export default function RelatedProduct(
  props: PropsWithChildrenAndClassName<Props>
) {
  const { children, className, relatedProducts, lang,  } = props;
  const ref = useRef<any>();
  return (
    <div className={clsx("mx-auto flex justify-center", className)}>
      <button onClick={() => ref.current.previous()}>
        <ChevronLeftIcon width={20} height={20} />
      </button>
      <Carousel
        ref={ref}
        additionalTransfrom={0}
        customDot={<CustomDot />}
        // autoPlaySpeed={2000}
        arrows={false}
        // centerMode={true}
        className=""
        containerClass="container pb-6"
        dotListClass="transition-all"
        draggable
        focusOnSelect={false}
        infinite
        itemClass="px-3"
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1280,
            },
            items: 3,
            slidesToSlide: 3,
            // partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 768,
              min: 0,
            },
            items: 1,
            // partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1280,
              min: 768,
            },
            items: 2,
            slidesToSlide: 2,
            // partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass="flex"
        swipeable
      >
        {relatedProducts.map((item, index) => (
          <Product
          key={index}
          lang={lang}
          href={item.slug}
          name={
            item.translations?.length
              ? item.translations[0]?.title
              : item.title
          }
          photo={ASSET_PREFIX + "/" + item.images[0]?.directus_files_id}
          width="100%"
        />
        ))}
      </Carousel>
      <button onClick={() => ref.current.next()}>
        <ChevronRightIcon width={20} height={20} />
      </button>
    </div>
  );
}

export function CustomDot({ onClick, ...rest }: any) {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <button
      className={clsx(
        "w-8 h-2 first:rounded-l-[0.25rem] last:rounded-r-[0.25rem] transition-all ease-in-out duration-500",
        active ? "bg-primary rounded-[0.25rem]" : "bg-mint"
      )}
      onClick={onClick}
    ></button>
  );
}
