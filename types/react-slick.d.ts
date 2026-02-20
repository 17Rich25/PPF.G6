declare module 'react-slick' {
  import * as React from 'react';
  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    [key: string]: any;
  }
  const Slider: React.ComponentType<Settings & { children?: React.ReactNode }>;
  export default Slider;
}
