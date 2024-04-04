import { useContext, useMemo, useState } from "react";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { ASSET_PREFIX } from "@/utils/const";
import Button from "@/components/Button/Button";
import { CurrentLanguage } from "@/app/context";
import Product from "@/components/Product/Product";
import RelatedProduct from "@/components/RelatedProduct/RelatedProduct";
import clsx from "clsx";
import { getImage } from "@/utils/getAssets";
import { useAllProduct } from "@/hooks/useProduct";

type Props = {
  currentCategory: string;
  lang: string;
};
export default function RelatedProducts({ currentCategory, lang }: Props) {
  const currentLocale = useContext(CurrentLanguage);
  const { products: productsInCategory } = useAllProduct(
    currentCategory,
    currentLocale
  );
  const [postSize, setPostSize] = useState(3); // default 3
  const data = useMemo(() => {
    return productsInCategory.slice(0, postSize);
  }, [productsInCategory, postSize]);
  const { t, isLoading } = useLocaleTranslation(currentLocale, "common");
  const { t: defaultT, isLoading: isDefaultLoading } =
    useDefaultTranslation("common");
  if (!isDefaultLoading && !isLoading) {
    const trans = t ? t : defaultT;
    return (
      <>
        <RelatedProduct
          relatedProducts={productsInCategory}
          className="hidden md:flex"
          lang={lang}
        
        />
        {data.map((i, index) => (
          <Product
            lang={lang}
            key={index}
            name={i.translations?.length ? i.translations[0]?.title : i.title}
            photo={ASSET_PREFIX + "/" + i.images[0].directus_files_id}
            width="100%"
            className="md:hidden mb-4"
          />
        ))}
        <div className="flex justify-center md:hidden">
          <Button
            variant="primary"
            className={clsx("mt-6", postSize > data.length && "hidden")}
            extraAttribute={{
              onClick: () => {
                setPostSize((prev) => prev + 3);
              },
            }}
          >
            {trans("loadMore")}
          </Button>
        </div>
      </>
    );
  }
}
