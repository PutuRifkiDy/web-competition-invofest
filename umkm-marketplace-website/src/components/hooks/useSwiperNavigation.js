import { useRef } from "react";

export default function useSwiperNavigation() {
  const swiperRef = useRef(null);

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return { swiperRef, slidePrev, slideNext };
}