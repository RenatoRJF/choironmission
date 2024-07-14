import { Dispatch, ReactNode, SetStateAction } from 'react';

import { ThemeVariant } from '@/@types/theme';

export interface ThemeProviderProps {
  theme: ThemeVariant;
  children: ReactNode;
  setTheme: Dispatch<SetStateAction<ThemeVariant>>;
}
