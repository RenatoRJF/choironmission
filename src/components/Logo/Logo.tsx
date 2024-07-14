"use client";

import { useContext } from "react";

import { ThemeContext } from "@/components/ThemeProvider/ThemeProvider";

import LogoDesktop from "./LogoDesktop";
import LogoMobile from "./LogoMobile";

const black = "#000000";
const green = "#34C759";
const white = "#ffffff";
const colorTransitionClasses = "cursor-pointer transition-colors ease-in-out";

export default function Logo() {
  const { theme, setTheme } = useContext(ThemeContext);
  const isLightTheme = theme === "light";
  const textColor = isLightTheme ? black : white;

  const onToggleSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <LogoDesktop
        textColor={textColor}
        className="hidden md:block"
        isLightTheme={isLightTheme}
        onToggleSwitch={onToggleSwitch}
        colorTransitionClasses={colorTransitionClasses}
        circleBackgroundColor={isLightTheme ? white : black}
        switchBackgroundColor={isLightTheme ? green : white}
      />

      <LogoMobile
        textColor={textColor}
        className="block md:hidden"
        isLightTheme={isLightTheme}
        onToggleSwitch={onToggleSwitch}
        colorTransitionClasses={colorTransitionClasses}
        circleBackgroundColor={isLightTheme ? white : black}
        switchBackgroundColor={isLightTheme ? green : white}
      />
    </>
  );
}
