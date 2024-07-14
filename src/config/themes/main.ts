import classNames from 'classnames';
import { PrimeReactPTOptions } from 'primereact/api';

export const CMMainTheme: PrimeReactPTOptions = {
  button: {
    root: {
      className:
        'px-5 py-2 uppercase font-bold text-white rounded-[0.31rem] focus:outline-none hover:opacity-80 transition-opacity',
    },
  },
  inputtext: {
    root: {
      className: 'border border-gray-300 rounded-md px-3 py-2',
    },
  },
};
