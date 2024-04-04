"use client";

import { CurrentLanguage } from "@/app/context";
import Loader from "../Loader/Loader";
import { ReactNode } from "react";
import { useLanguages } from "@/hooks/useLanguages";

type Props = {
  lang: string;
  children: ReactNode;
};
export default function Provider({ lang, children }: Props) {
  const { languagesCode, isLoading } = useLanguages();
  if (languagesCode) {
    const currentLanguage =
      languagesCode.find((l: string) => l.startsWith(lang)) || "vi-VN";
    return (
      <CurrentLanguage.Provider value={currentLanguage}>
        {children}
      </CurrentLanguage.Provider>
    );
  }
}
