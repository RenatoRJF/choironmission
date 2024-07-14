import classNames from 'classnames';
import { useContext } from 'react';

import Logo from '@/components/Logo/Logo';
import Menu from '@/components/Icons/Menu';
import YoutubeIcon from '@/components/Icons/YoutubeIcon';
import InstagramIcon from '@/components/Icons/InstagramIcon';
import { ThemeContext } from '@/components/ThemeProvider/ThemeProvider';

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const isLightTheme = theme === 'light';

  const linkClasses = classNames('hover:opacity-90 hidden md:inline-block', {
    'text-white': !isLightTheme,
    'text-eernie-black': isLightTheme,
  });

  return (
    <header className="flex items-center py-6 justify-between">
      <Logo />

      <div className="flex items-center gap-5">
        <a href="#" className={linkClasses}>
          <InstagramIcon />
        </a>

        <a href="#" className={linkClasses}>
          <YoutubeIcon />
        </a>

        <Menu className={isLightTheme ? 'text-eernie-black' : 'text-white'} />
      </div>
    </header>
  );
}
