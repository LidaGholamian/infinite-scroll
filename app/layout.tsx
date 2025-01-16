import type { Metadata } from "next";
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "user list",
  description: "user list infinity scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={vazirmatn.className}>
      <body className=" min-h-screen grid grid-rows-[80px_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
