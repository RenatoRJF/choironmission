'use client';

import { useContext } from 'react';
import classNames from 'classnames';
import { Bebas_Neue } from 'next/font/google';

import Header from '@/components/Header/Header';
import { ThemeContext } from '@/components/ThemeProvider/ThemeProvider';

const nunito = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export default function HomeSection() {
  const { theme } = useContext(ThemeContext);
  const isThemeLight = theme === 'light';

  const titleClasses = classNames(
    'text-center md:text-left uppercase p-0 max-w-[400px] mx-auto md:mx-0',
    'leading-[3rem] text-[3.13rem] md:text-heading-1 md:leading-[4rem] transition-colors md:me-[2rem]',
    {
      [nunito.className]: true,
      'text-green': isThemeLight,
      'text-white': !isThemeLight,
    },
  );

  const paragraphClasses = classNames(
    'mt-6 md:mt-4 text-[1rem] md:text-[1.5rem] text-center md:text-left mx-auto md:mx-0 font-thin max-w-[80%] md:max-w-[448px] leading-5 md:leading-7 transition-colors',
    {
      'text-eerie-black': isThemeLight,
      'text-white': !isThemeLight,
    },
  );

  return (
    <div className="h-screen flex flex-col px-5 md:px-8 lg:px-[4.5rem] bg-home-mic bg-no-repeat bg-95% md:bg-70% xl:bg-60% bg-right-bottom">
      <Header />

      <div className="flex flex-1 flex-col lg:block lg:mt-[6rem] justify-center max-h-[70%] md:max-h-[50%]">
        <h2 className={titleClasses}>Transforming lives with songs</h2>

        <p className={paragraphClasses}>
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
}
