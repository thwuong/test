import { EB_Garamond, Inter, Playfair_Display } from "next/font/google";

export const playfairDisplay = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  // display: "swap",
  variable: "--font-playfair_display",
});

export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  // display: "swap",
  variable: "--font-inter",
});

export const garamond = EB_Garamond({
  subsets: ["latin", "vietnamese"],
  // display: "swap",
  variable: "--font-eb_garamond",
});
