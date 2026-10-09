import type { Metadata } from "next";
import { Inter, Gloria_Hallelujah } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { Preloader } from "@/components/preloader/Preloader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const gloriaHallelujah = Gloria_Hallelujah({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Sai Teja Kalepu — Product Designer",
  description:
    "Product designer in Hyderabad. B2C and B2B work across fintech, client products, and enterprise tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gloriaHallelujah.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        {children}
        <div className="bottom-blur-fade" aria-hidden="true">
          <div className="bottom-blur-fade__layer" />
          <div className="bottom-blur-fade__layer" />
          <div className="bottom-blur-fade__layer" />
          <div className="bottom-blur-fade__layer" />
          <div className="bottom-blur-fade__layer" />
          <div className="bottom-blur-fade__layer" />
        </div>
        <Preloader />
        <Navbar />
      </body>
    </html>
  );
}
