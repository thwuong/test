"use client";

import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import Button from "@/components/Button/Button";
import CategoryText from "@/components/CategoryText/CategoryText";
import { CurrentLanguage } from "@/app/context";
import Error from "next/error";
import Loader from "@/components/Loader/Loader";
import PageContent from "@/components/PageContent/PageContent";
import ProductDetailTab from "@/components/ProductDetailTab/ProductDetailTab";
import ProductGallery from "@/components/ProductGallery/ProductGallery";
import RelatedProducts from "./related-products";
import SectionDescription from "@/components/SectionDescription/SectionDescription";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SocialShare from "@/components/SocialShare/SocialShare";
import clsx from "clsx";
import { getIcon } from "@/utils/getAssets";
import { handleSocialShare } from "@/utils/handleSocialShare";
import { useAllProduct } from "@/hooks/useProduct";
import { useContext } from "react";

type Props = {
  params: {
    slug: string;
    lang: string;
  };
};
export const revalidate = 300;

export default function ProductDetail({ params: { slug, lang } }: Props) {
  // const productData = await getProductData(slug);
  const currentLocale = useContext(CurrentLanguage);
  const { isLoading, getProduct } = useAllProduct(undefined, currentLocale);
  const { t, isLoading: isLangLoading } = useLocaleTranslation(
    currentLocale,
    "products"
  );
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("products");
  let trans;
  if (!isDefaultLoading && !isLoading) {
    trans = t ? t : defaultT;
  }
  const product = getProduct(slug);
  if (isLoading || isDefaultLoading || isLangLoading) return <Loader />;
  if (product) {
    // const renderDescription = () => (
    //   <Fragment>
    //     {product.descriptions.map((description, index) => (
    //       <div key={index}>
    //         <SectionSubheading className="mb-4 lg:mb-2">
    //           {description.title}
    //         </SectionSubheading>
    //         <SectionDescription className="mb-4">
    //           {description.description}
    //         </SectionDescription>
    //       </div>
    //     ))}
    //   </Fragment>
    // );
    // const renderDetails = () => (
    //   <Fragment>
    //     {product.details.map((detail, index) => (
    //       <div
    //         key={index}
    //         className={clsx(
    //           "grid grid-cols-[6rem_1fr] lg:grid-cols-[7.5rem_1fr] gap-x-4 mb-2 items-start lg:items-center"
    //         )}
    //       >
    //         <ProductDescription type="title">{detail.title}</ProductDescription>
    //         <ProductDescription type="description">
    //           {detail.description}
    //         </ProductDescription>
    //       </div>
    //     ))}
    //   </Fragment>
    // );
    return (
      <>
        <PageContent>
          <div
            className={clsx(
              "flex flex-col lg:flex-row gap-x-12 items-center lg:pt-12"
            )}
          >
            <div>
              <ProductGallery
                images={product.images?.map((img) => img.directus_files_id)}
              />
            </div>
            <div>
              <CategoryText>
                {product.product_category.translations?.length
                  ? product.product_category.translations[0]?.name
                  : product.product_category.name}
              </CategoryText>
              <SectionHeading>
                {product.translations?.length
                  ? product.translations[0]?.title
                  : product.title}
              </SectionHeading>
              <SectionDescription>
                {product.translations?.length
                  ? product.translations[0]?.summary
                  : product.summary}
              </SectionDescription>
              <div className="flex items-center gap-x-6 mt-4 mb-6">
                <Button variant="primary">{trans && trans("orderNow")}</Button>
                <Button
                  variant="shaped"
                  icon={getIcon("arrow-up-right-dark.svg")}
                  shapeColor="dark"
                  href={`/${lang}/contact`}
                >
                  <span className="text-neutral-100 hover:text-neutral-300">
                    {trans && trans("contact")}
                  </span>
                </Button>
              </div>
              <div className={clsx("text-lg font-medium mb-2")}>
                {trans && trans("shareVia")}
              </div>
              <div className={clsx("flex items-center gap-x-4 lg:gap-x-6")}>
                <SocialShare
                  icon={getIcon("facebook.svg")}
                  onClick={() => handleSocialShare("facebook")}
                />
                {/* <SocialShare
                  icon={getIcon("instagram.svg")}
                  onClick={() => handleSocialShare("instagram")}
                  shouldPopup={true}
                  trans={trans}
                /> */}
                <SocialShare
                  icon={getIcon("telegram.svg")}
                  onClick={() => handleSocialShare("telegram")}
                />
                <SocialShare
                  icon={getIcon("embed.svg")}
                  onClick={() => handleSocialShare("copy")}
                  shouldPopup={true}
                  trans={trans}
                />
              </div>
            </div>
          </div>
        </PageContent>
        <PageContent>
          <div className={clsx("py-12 lg:py-16 lg:px-[7.5rem]")}>
            <SectionHeading className="mb-6">
              {trans && trans("productDetail")}
            </SectionHeading>
            <ProductDetailTab
              trans={trans}
              // descriptions={renderDescription()}
              // details={renderDetails()}
              descriptions={
                product.translations?.length
                  ? product.translations[0]?.description
                  : product.description
              }
              details={
                product.translations?.length
                  ? product.translations[0]?.product_details
                  : product.product_details
              }
            />
          </div>
        </PageContent>
        <PageContent>
          <div className={clsx("pb-16")}>
            <SectionHeading className={clsx("text-center mb-16")}>
              {trans && trans("relatedProduct")}
            </SectionHeading>
            <RelatedProducts
              lang={lang}
              currentCategory={product.product_category.slug}
            />
          </div>
        </PageContent>
      </>
    );
  } else return <Error statusCode={404} />;
}
