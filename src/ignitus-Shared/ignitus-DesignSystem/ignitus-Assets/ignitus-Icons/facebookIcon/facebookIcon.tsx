import React, {HTMLAttributes} from 'react';

type Props = HTMLAttributes<SVGElement>;

const FacebookIcon = ({title = 'Facebook Icon', ...rest}: Props) => (
  <svg
    aria-label={title}
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    {...rest}
  >
    <title>{title}</title>
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
  </svg>
);

export default FacebookIcon;

/* SVG Credits goes to font-awesome : https://fontawesome.com/license */
