"use client";

import { useAllProduct, useProduct } from "@/hooks/useProduct";
import { useContext, useEffect, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import Categories from "./categories";
import { CurrentLanguage } from "@/app/context";
import Loader from "@/components/Loader/Loader";
import PageContent from "@/components/PageContent/PageContent";
import Pagination from "@/components/Pagination/Pagination";
import Products from "./products";
import SectionBanner from "@/components/SectionBanner/SectionBanner";
import SectionBannerBreadcrumb from "@/components/SectionBanner/SectionBannerBreadcrumb";
import clsx from "clsx";
import { useProductCategory } from "@/hooks/useProductCategory";
import { useSearchParams } from "next/navigation";
import { useWindowDimensions } from "@/hooks/useWIndowDimensions";

type Props = {
  params: {
    lang: string;
  };
};

export default function ProductPage({ params: { lang } }: Props) {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") || "all";
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
  });
  const { categories, isLoading, error } = useProductCategory();
  const currentLocale = useContext(CurrentLanguage);
  const { width } = useWindowDimensions();
  const {
    products,
    isLoading: isProductLoading,
    error: productError,
  } = useProduct(category, currentLocale, pagination.page, pagination.limit);
  const { products: allProducts } = useAllProduct(category);
  const handlePageChange = ({ selected }: { selected: number }) =>
    setPagination((pagination) => ({
      page: selected + 1,
      limit: pagination.limit,
    }));
  useEffect(() => {
    if (width < 768) {
      setPagination((pagination) => ({ page: pagination.page, limit: 3 }));
    } else {
      setPagination((pagination) => ({
        page: Math.ceil((pagination.page * 3) / 9),
        limit: 9,
      }));
    }
  }, [width]);
  useEffect(() => {
    if (width < 768) {
      setPagination({ page: 1, limit: 3 });
    } else {
      setPagination({
        page: 1,
        limit: 9,
      });
    }
  }, [category, width]);
  const { t, isLoading: isLangLoading } = useLocaleTranslation(
    currentLocale,
    "common"
  );
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  if (isLoading) return <Loader />;
  if (categories && products && allProducts) {
    const totalPages = Math.ceil(allProducts.length / pagination.limit);
    return (
      <div>
        <SectionBanner title={trans && trans("products")}>
          <SectionBannerBreadcrumb
            label={trans && trans("products")}
            href={`/${lang}/products`}
          />
        </SectionBanner>
        <PageContent>
          <div
            className={clsx("pt-4 lg:py-16 flex flex-col lg:flex-row gap-x-12")}
          >
            <div
              className={clsx(
                "lg:w-[18.75rem] flex lg:flex-col gap-4 mb-9 lg:mb-0 overflow-x-auto hide-scrollbar"
              )}
            >
              <Categories
                trans={trans}
                currentCategory={category}
                categories={categories}
              />
            </div>
            <div
              className={clsx(
                "flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-x-6 gap-y-9 transition-all duration-300"
              )}
            >
              <Products
                trans={trans}
                products={products}
                isLoading={isProductLoading}
                error={productError}
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center mb-16 mt-9 md:mt-4">
            <div className="mx-auto md:mx-0 md:ml-[450px]">
              <Pagination
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                activePage={pagination.page}
              />
            </div>
          </div>
        </PageContent>
      </div>
    );
  }
}
