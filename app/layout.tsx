import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./styles/google.css";
import { Navi } from "./compostions/headers/navigation/navi";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Footermenu from './compostions/footer/footerbar'
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
  const queryClient = new QueryClient()
  return (
    <html lang="kr">
     
      <body className={inter.className}>
      <Navi></Navi>
      {/* <QueryClientProvider client={queryClient}> */}
        {children}

      {/* </QueryClientProvider> */}
        <Footermenu></Footermenu>
        </body>
    </html>
  );
}
