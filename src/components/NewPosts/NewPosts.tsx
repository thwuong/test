"use client";

import "react-multi-carousel/lib/styles.css";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { NewsModel, useAllNews } from "@/hooks/useNews";

import { ASSET_PREFIX } from "@/utils/const";
import Carousel from "react-multi-carousel";
import Loader from "../Loader/Loader";
import NewsCard from "../NewsCard/NewsCard";
import Product from "../Product/Product";
import { PropsWithChildrenAndClassName } from "@/types";
import clsx from "clsx";
import { useParams } from "next/navigation";
import { useRef } from "react";

type Props = {};
export default function NewPosts(props: PropsWithChildrenAndClassName<Props>) {
  const { children, className } = props;
  const { news: allNews, isLoading, getNews } = useAllNews("all");
  const ref = useRef<any>();
  const params = useParams();
  const lang = params?.lang || "vi";
  if (isLoading) return <Loader />;
  if (allNews) {
    const computedAllNews = allNews.toSorted((a, b) => b.id - a.id);
    return (
      <div className={clsx("mx-auto flex justify-center", className)}>
        <button onClick={() => ref.current.previous()}>
          <ChevronLeftIcon width={24} height={24} />
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
          itemClass="px-3 justify-center"
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
          {computedAllNews.map((item, index) => (
            <NewsCard
              tag={
                item?.news_category?.translations?.length
                  ? item?.news_category?.translations[0]?.name
                  : item?.news_category?.name
              }
              title={
                item.translations?.length
                  ? item.translations[0]?.title
                  : item.title
              }
              photo={ASSET_PREFIX + "/" + item.image}
              description={
                item.translations?.length
                  ? item.translations[0]?.summary
                  : item.summary
              }
              key={index}
              className="w-full mx-auto"
              href={`/${lang}/news/${item.news_category?.slug}/${item?.slug}`}
            />
          ))}
        </Carousel>
        <button onClick={() => ref.current.next()}>
          <ChevronRightIcon width={24} height={24} />
        </button>
      </div>
    );
  }
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
