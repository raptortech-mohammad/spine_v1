import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const gilker = localFont({
  src: "../../public/fonts/Gliker-RegularExpanded.woff2",
  variable: "--font-gilker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SPINE - Strategic Political Communications",
  description: "Spine web application.",
  keywords: ["spine", "web app", "nextjs", "react"],
  openGraph: {
    title: "SPINE - Strategic Political Communications",
    description: "Spine web application.",
    url: "https://spine.com",
    siteName: "Spine",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Spine Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPINE - Strategic Political Communications",
    description: "Spine web application.",
    images: ["/globe.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${gilker.variable}`}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
