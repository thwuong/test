"use client";

import "../../builder-registry";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { BuilderContent, builder } from "@builder.io/sdk";
import { getIcon, getImage } from "@/utils/getAssets";
import {
  useDefaultTranslation,
  useLocaleTranslation,
} from "@/hooks/useTranslation";

import { CurrentLanguage } from "@/app/context";
import DefaultErrorPage from "next/error";
import Loader from "../Loader/Loader";
import { useContext } from "react";

interface BuilderPageProps {
  content?: BuilderContent;
  lang: string;
  commonTrans?: any;
  aboutUsTrans?: any;
  homeTrans?: any;
  contactTrans?: any;
  commonData?: any;
  aboutUsData?: any;
  homeData?: any;
  contactData?: any;
  _commonData?: any;
  _aboutUsData?: any;
  _homeData?: any;
  _contactData?: any;
}

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export function RenderBuilderContent({
  content,
  lang,
  commonData,
  _commonData,
  contactData,
  _contactData,
  homeData,
  _homeData,
  aboutUsData,
  _aboutUsData,
}: BuilderPageProps) {
  const currentLocale = useContext(CurrentLanguage);
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If "content" has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (content || isPreviewing) {
    return (
      <BuilderComponent
        content={content}
        model="page"
        context={{
          getImage: getImage,
          getIcon: getIcon,
          lang,
          currentLocale,
          commonData,
          aboutUsData,
          contactData,
          homeData,
          _commonData,
          _aboutUsData,
          _contactData,
          _homeData,
        }}
      />
    );
  }
  // If the "content" is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  else return <DefaultErrorPage statusCode={404} />;
}
