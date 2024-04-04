import { API_PREFIX } from "@/utils/const";
import { RenderBuilderContent } from "@/components/Builder.io/builder";
import { builder } from "@builder.io/sdk";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
    lang: string;
  };
}

export const revalidate = 300;

export function generateStaticParams() {
  return ["about-us", "", "contact"];
}

async function getTranslations(locale: string) {
  const resCommon = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=${locale}&pages=common`
  );
  const resHome = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=${locale}&pages=home`
  );
  const resAboutUs = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=${locale}&pages=about-us`
  );
  const resContact = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=${locale}&pages=contact`
  );
  const _resCommon = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=vi-VN&pages=common`
  );
  const _resHome = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=vi-VN&pages=home`
  );
  const _resAboutUs = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=vi-VN&pages=about-us`
  );
  const _resContact = await fetch(
    `https://sonnguyen-gw.dev-tn.com/api/get-translations?locale=vi-VN&pages=contact`
  );
  // const res = [resCommon, resHome, resAboutUs, resContact, _resCommon, _resHome, _resAboutUs, _resContact];
  const commonData = await resCommon.json();
  const _commonData = await _resCommon.json();

  const homeData = await resHome.json();
  const _homeData = await _resHome.json();

  const aboutUsData = await resAboutUs.json();
  const _aboutUsData = await _resAboutUs.json();

  const contactData = await resContact.json();
  const _contactData = await _resContact.json();

  // return { commonTrans, contactTrans, homeTrans, aboutUsTrans };
  return {
    commonData,
    _commonData,
    aboutUsData,
    _aboutUsData,
    homeData,
    _homeData,
    contactData,
    _contactData,
  };
}

async function getCurrentLanguages(lang: string) {
  const res = await fetch(`https://sonnguyen-gw.dev-tn.com/api/get-languages`);
  const data = await res.json();
  return data.find((d: any) => d?.code.startsWith(lang)).code || "vi-VN";
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();
  const currentLang = await getCurrentLanguages(props.params.lang);
  // const { commonTrans, contactTrans, homeTrans, aboutUsTrans } =
  //   await getTranslations(currentLang);
  const {
    commonData,
    _commonData,
    contactData,
    _contactData,
    aboutUsData,
    _aboutUsData,
    homeData,
    _homeData,
  } = await getTranslations(currentLang);
  return (
    <RenderBuilderContent
      lang={props.params.lang}
      content={content}
      commonData={commonData}
      aboutUsData={aboutUsData}
      homeData={homeData}
      contactData={contactData}
      _commonData={_commonData}
      _aboutUsData={_aboutUsData}
      _homeData={_homeData}
      _contactData={_contactData}
    />
  );
}
