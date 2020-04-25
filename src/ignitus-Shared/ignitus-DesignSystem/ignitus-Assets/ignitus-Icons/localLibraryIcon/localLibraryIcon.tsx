import React, {HTMLAttributes} from 'react';

type Props = HTMLAttributes<SVGElement>;

const LocalLibraryIcon = ({title = 'Local Library Icon', ...rest}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-label={title}
    viewBox="0 0 24 24"
    {...rest}
  >
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" />
  </svg>
);

export default LocalLibraryIcon;

/* SVG credits goes to https://material.io/resources/icons/ */
