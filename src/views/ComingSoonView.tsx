"use client";

import classNames from "classnames";
import { Bebas_Neue } from "next/font/google";
import { useContext } from "react";

import Logo from "@/components/Logo/Logo";
import { ThemeContext } from "@/components/ThemeProvider/ThemeProvider";

const nunito = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export default function ComingSoonView() {
  const { theme } = useContext(ThemeContext);
  const isThemeLight = theme === "light";

  const containerClasses = classNames(
    "container mx-auto p-4 bg-no-repeat bg-contain lg:bg-auto bg-right-bottom h-screen flex flex-col items-center md:block",
    {
      "bg-microphones-black": isThemeLight,
      "bg-microphones-white": !isThemeLight,
    }
  );

  const comingSoonClasses = classNames(
    "font-bold flex flex-col gap-6 md:block text-center md:text-left uppercase p-0",
    {
      [nunito.className]: true,
    }
  );

  const comingClasses = classNames(
    "leading-[4rem] text-[5rem] md:text-[9.38rem] md:leading-[6rem] transition-colors md:me-[2rem]",
    {
      "text-green": isThemeLight,
      "text-yellow": !isThemeLight,
    }
  );

  const soonClasses = classNames(
    "text-[9.38rem] leading-[6rem] transition-colors",
    {
      "text-grey": isThemeLight,
      "text-white": !isThemeLight,
    }
  );

  const paragraphClasses = classNames(
    "mt-6 md:mt-12 text-[1rem] md:text-[2rem] text-center md:text-left mx-auto md:mx-0 font-extralight max-w-[80%] md:max-w-[448px] leading-5 md:leading-10 transition-colors",
    {
      "text-black": isThemeLight,
      "text-white": !isThemeLight,
    }
  );

  return (
    <main className={containerClasses}>
      <Logo />

      <div className="mt-[128px]">
        <h2 className={comingSoonClasses}>
          <span className={comingClasses}>Coming</span>
          <span className={soonClasses}>soon</span>
        </h2>

        <p className={paragraphClasses}>
          Spreading the message of love and hope in Christ is our mission.
        </p>
      </div>
    </main>
  );
}
