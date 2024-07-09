import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";

import { CMMainTheme } from "@/config/themes/main";

import "../styles/globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "500", "700"] });

// const inter = Inter({ subsets: ["latin"], weight: ["300", "500", "700"] });

export const metadata: Metadata = {
  title: "Choir on Mission",
  description: "Spreading the love of Jesus through songs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={nunito.className}>
        <PrimeReactProvider value={{ unstyled: true, pt: CMMainTheme }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
