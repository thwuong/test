import { NextRequest, NextResponse } from "next/server";
import { cookieName, fallbackLanguage } from "./app/i18n/settings";

import { API_PREFIX } from "./utils/const";
import acceptLanguage from "accept-language";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export async function middleware(req: NextRequest) {
  const res = await fetch(`https://sonnguyen-gw.dev-tn.com/api/get-languages`);
  const data = await res.json();
  const languagesShortCode = data
    ?.filter((d: any) => !d.hidden)
    ?.map((d: any) => d.code.slice(0, 2));
  acceptLanguage.languages(languagesShortCode);

  let lng;
  if (req.cookies.has(cookieName))
    lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
  if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
  if (!lng) lng = fallbackLanguage;

  // Redirect if lng in path is not supported
  if (
    !languagesShortCode.some((loc: any) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next")
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const refererUrl = new URL(req.headers.get("referer") || "");
    const lngInReferer = languagesShortCode.find((l: any) =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
    return response;
  }

  if (req.url.endsWith("/news")) {
    return NextResponse.redirect(new URL(req.url + "/all", req.url));
  }

  return NextResponse.next();
}
