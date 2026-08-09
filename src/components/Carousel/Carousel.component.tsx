import React, { useState, useEffect, Children, useRef } from "react";
import type { CarouselProps } from "./Carousel.types";
import style from "./Carousel.module.css";
import { classNames } from "utils/classNames";

const DRAG_THRESHOLD = 50;

const Carousel = ({
  children,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showDots = true,
  className,
}: CarouselProps) => {
  const slideCount = Children.count(children);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const startXRef = useRef(0);

  useEffect(() => {
    if (!autoPlay || slideCount <= 1 || isDragging) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideCount);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slideCount, isDragging]);

  const goTo = (index: number) => {
    setCurrentIndex((index + slideCount) % slideCount);
  };

  const handleDragStart = (e: React.PointerEvent) => {
    if (slideCount <= 1) return;
    setIsDragging(true);
    startXRef.current = e.clientX;
    setDragOffset(0);
  };

  const handleDragMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startXRef.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset < -DRAG_THRESHOLD) {
      goTo(currentIndex + 1);
    } else if (dragOffset > DRAG_THRESHOLD) {
      goTo(currentIndex - 1);
    }
    setDragOffset(0);
  };

  return (
    <div className={classNames(style["carousel"], className)}>
      <div
        className={classNames(
          style["carousel-viewport"],
          isDragging && style["carousel-viewport__dragging"]
        )}
        onPointerDown={handleDragStart}
        onPointerMove={handleDragMove}
        onPointerUp={handleDragEnd}
        onPointerCancel={handleDragEnd}
      >
        <div
          className={style["carousel-track"]}
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transition: isDragging ? "none" : undefined,
          }}
        >
          {Children.map(children, (child, index) => (
            <div
              className={classNames(
                style["carousel-slide"],
                index === currentIndex && style["carousel-slide__active"]
              )}
              aria-hidden={index !== currentIndex}
            >
              {child}
            </div>
          ))}
        </div>
        {showArrows && slideCount > 1 && (
          <>
            <button
              type="button"
              className={classNames(style["carousel-arrow"], style["carousel-arrow__prev"])}
              onClick={() => goTo(currentIndex - 1)}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className={classNames(style["carousel-arrow"], style["carousel-arrow__next"])}
              onClick={() => goTo(currentIndex + 1)}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
      </div>
      {showDots && slideCount > 1 && (
        <div className={style["carousel-dots"]} role="tablist">
          {Array.from({ length: slideCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={classNames(
                style["carousel-dot"],
                index === currentIndex && style["carousel-dot__active"]
              )}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
