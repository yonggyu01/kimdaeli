import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navi } from "./compostions/headers/navigation/navi";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "김대리",
  description: "동네 일꾼 급구앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
     
      <body className={inter.className}>
      <Navi></Navi>
        {children}
        </body>
    </html>
  );
}
