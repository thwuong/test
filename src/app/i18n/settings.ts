import { InitOptions } from "i18next";

export const fallbackLanguage = "vi";
export const languages = [fallbackLanguage, "en", "it"];
export const cookieName = "lang";
export const defaultNS = "translation";

export function getOptions(
  lang = fallbackLanguage,
  ns = defaultNS
): InitOptions {
  return {
    supportedLngs: languages,
    fallbackLng: fallbackLanguage,
    lng: lang,
    fallbackNS: defaultNS,
    ns,
  };
}
