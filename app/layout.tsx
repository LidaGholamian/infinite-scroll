import type { Metadata } from "next";
import "./globals.css";
import "@/styles/Layout.module.scss";
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
      <body className="layout">
        <Header />
        <main className="layout__main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
