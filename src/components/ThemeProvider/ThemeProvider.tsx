"use client";

import { createContext, useState } from "react";

import { ThemeVariant } from "@/@types/theme";
import { ThemeProviderProps } from "./ThemeProvider.types";

export const ThemeContext = createContext<Omit<ThemeProviderProps, "children">>(
  {
    theme: "dark",
    setTheme: () => {},
  }
);

export default function ThemeProvider({
  theme,
  children,
}: Omit<ThemeProviderProps, "setTheme">) {
  const [themeValue, setTheme] = useState<ThemeVariant>(theme);

  return (
    <ThemeContext.Provider value={{ theme: themeValue, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
