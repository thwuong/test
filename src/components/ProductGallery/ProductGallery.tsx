"use client";

import "react-image-gallery/styles/scss/image-gallery.scss";
import "./ProductGallery.scss";

import { MouseEventHandler, useMemo } from "react";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";

import { ASSET_PREFIX } from "@/utils/const";
import Image from "next/image";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";

type Props = {
  images: string[];
};
export default function ProductGallery({ images }: Props) {
  const renderItemFn = (item: ReactImageGalleryItem) => {
    return <Image src={item.original} alt={""} fill className="object-cover" />;
  };
  const renderThumbInnerFn = (item: ReactImageGalleryItem) => {
    return (
      <div
        className={clsx(
          "relative w-16 h-16 sm:w-20 sm:h-20 md:w-[6.25rem] md:h-[6.25rem] bg-neutral-800"
        )}
      >
        <Image
          src={item.thumbnail || ""}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    );
  };
  const renderLeftNavFn = (
    onClick: MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "bg-[rgba(20,20,22,0.56)] rounded-full p-2 absolute z-[1] top-1/2 -translate-y-1/2 left-4"
        )}
      >
        <div className="hidden md:block">
          <Image
            src={getIcon("chevron_left.svg")}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className="md:hidden">
          <Image
            src={getIcon("chevron_left.svg")}
            width={10}
            height={10}
            alt=""
          />
        </div>
      </button>
    );
  };
  const renderRightNavFn = (
    onClick: MouseEventHandler<HTMLElement>,
    disabled: boolean
  ) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={clsx(
          "bg-[rgba(20,20,22,0.56)] rounded-full p-2 absolute z-[1] top-1/2 -translate-y-1/2 right-4"
        )}
      >
        <div className="hidden md:block">
          <Image
            src={getIcon("chevron_right.svg")}
            width={24}
            height={24}
            alt=""
          />
        </div>
        <div className="md:hidden">
          <Image
            src={getIcon("chevron_right.svg")}
            width={10}
            height={10}
            alt=""
          />
        </div>
      </button>
    );
  };
  const renderItem = useMemo(() => renderItemFn, []);
  const renderThumbInner = useMemo(() => renderThumbInnerFn, []);
  const renderLeftNav = useMemo(() => renderLeftNavFn, []);
  const renderRightNav = useMemo(() => renderRightNavFn, []);
  const renderImages = images.map((image, index) => ({
    original: ASSET_PREFIX + "/" + image,
    thumbnail: ASSET_PREFIX + "/" + image,
    originalClass: `w-[calc(100vw-15px)] h-[calc(0.75*100vw)] md:w-[37.5rem] md:h-[31.25rem] object-cover bg-neutral-800`,
    renderItem: renderItem,
    renderThumbInner: renderThumbInner,
  }));
  // const _images: ReactImageGalleryItem[] = [
  //   {
  //     original: "https://picsum.photos/id/1018/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1018/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1015/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1015/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1019/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1019/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1011/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1011/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1010/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1010/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  //   {
  //     original: "https://picsum.photos/id/1009/1000/600/",
  //     thumbnail: "https://picsum.photos/id/1009/250/150/",
  //     originalClass: `w-[37.5rem] h-[31.25rem] object-cover`,
  //     renderItem: renderItem,
  //     renderThumbInner: renderThumbInner,
  //   },
  // ];
  return (
    <div className="">
      <ReactImageGallery
        items={renderImages}
        showPlayButton={false}
        showBullets={false}
        showFullscreenButton={false}
        autoPlay={false}
        additionalClass={
          "w-[calc(100vw-15px)] h-[calc(0.75*100vw)] md:w-[37.5rem] md:h-[31.25rem] mb-[6.5rem] sm:mb-[8rem] gallery"
        }
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
      />
    </div>
  );
}
