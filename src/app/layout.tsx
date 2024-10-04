import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header1 from "@/layouts/Header1";
import Header2 from "@/layouts/Header2";
import Footer1 from "@/layouts/Footer1";
import Footer2 from "@/layouts/Footer2";
import ResponsiveHeader from "@/layouts/ResponsiveHeader";
import Footer3 from "@/layouts/Footer3";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header1 />
        <Header2 />
        <ResponsiveHeader />
        {children}
        <Footer1 />
        {/* <Footer2 /> */}
        <Footer3 />
      </body>
    </html>
  );
}
