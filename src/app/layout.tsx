import type { Metadata } from "next";

import RenderLayout from "@/components/RenderLayout/RenderLayout";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

import "../styles/globals.css";

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
      <ThemeProvider theme="dark">
        <RenderLayout>{children}</RenderLayout>
      </ThemeProvider>
    </html>
  );
}
