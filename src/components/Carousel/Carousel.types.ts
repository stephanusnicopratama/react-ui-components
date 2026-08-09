import { HTMLAttributes } from "react";

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
}
