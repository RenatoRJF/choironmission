import { HTMLProps } from 'react';

export default function MenuIcon(props: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      width="45"
      height="15"
      viewBox="0 0 45 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="45" height="4" rx="2" fill="currentColor" />
      <rect y="11" width="45" height="4" rx="2" fill="currentColor" />
    </svg>
  );
}
