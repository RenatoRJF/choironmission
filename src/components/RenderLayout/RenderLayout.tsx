"use client";

import { Nunito } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import { ReactNode, useContext } from "react";

import { CMMainTheme } from "@/config/themes/main";

import classNames from "classnames";
import { ThemeContext } from "../ThemeProvider/ThemeProvider";

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "500", "700"] });

export default function RenderLayout({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);
  const classes = classNames(nunito.className, {
    "bg-black": theme === "dark",
    "bg-light-gray": theme === "light",
  });

  return (
    <body className={classes}>
      <PrimeReactProvider value={{ unstyled: true, pt: CMMainTheme }}>
        {children}
      </PrimeReactProvider>
    </body>
  );
}
