import "./globals.css";

import { garamond, inter, playfairDisplay } from "../fonts";

import { API_PREFIX } from "@/utils/const";
import Cursor from "@/components/Cursor/Cursor";
import Footer from "@/components/Footer/Footer";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import type { Metadata } from "next";
import Provider from "@/components/Provider/Provider";
import Style from "./Style";
import { dir } from "i18next";

export const metadata: Metadata = {
  title: "Sơn Nguyên Farm",
  description: "Rooted locally, Bloom globally",
  icons: {
    icon: "/assets/favicon.ico",
    shortcut: "/assets/favicon.ico",
    apple: "/assets/apple-touch-icon.ico",
    origin: "/assets/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://sonnguyen.farm"),
  alternates: {
    canonical: "https://sonnguyen.farm",
    languages: {
      en: "https://sonnguyen.farm/en",
      vi: "https://sonnguyen.farm/vi",
    },
  },
  openGraph: {
    images: [
      {
        url: "/assets/images/home-coffee-2.png",
        alt: "Son Nguyen Coffee",
      },
    ],
  },
  verification: {
    google: "google",
  },
};

export async function generateStaticParams() {
  const res = await fetch(`https://sonnguyen-gw.dev-tn.com/api/get-languages`);
  const data = await res.json();
  const languagesShortCode = data?.map((d: any) => d.code.slice(0, 2));
  return languagesShortCode;
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <body
        className={`${inter.variable} ${playfairDisplay.variable} ${garamond.variable} ${inter.className} max-w-[100vw]`}
      >
        <Provider lang={lang}>
          <HeaderBar lang={lang} />
          {children}
          <Footer lang={lang} />
          <Style />
        </Provider>
      </body>
    </html>
  );
}
