'use client';

import classNames from 'classnames';
import { Roboto } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import { ReactNode, useContext } from 'react';

import { CMMainTheme } from '@/config/themes/main';

import { ThemeContext } from '../ThemeProvider/ThemeProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export default function RenderLayout({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext);

  const classes = classNames(`${roboto.className}`, {
    'bg-eerie-black': theme === 'dark',
    'bg-light-gray': theme === 'light',
  });

  return (
    <body className={classes}>
      <PrimeReactProvider value={{ unstyled: true, pt: CMMainTheme }}>
        {children}
      </PrimeReactProvider>
    </body>
  );
}
