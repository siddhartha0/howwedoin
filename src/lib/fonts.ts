import { Poppins, Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
export const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
