declare module 'react-responsive-masonry' {
  import * as React from 'react';
  export interface ResponsiveMasonryProps {
    children?: React.ReactNode;
    columnsCountBreakPoints?: { [key: number]: number };
  }
  export const ResponsiveMasonry: React.FC<ResponsiveMasonryProps>;
  const Masonry: React.FC<any>;
  export default Masonry;
}
