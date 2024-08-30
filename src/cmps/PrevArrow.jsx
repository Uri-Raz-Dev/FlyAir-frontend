import React from 'react';
// import './CustomArrow.scss';

export function  PrevArrow  ({ onClick, ...rest })  {
  const { carouselState: { currentSlide } } = rest; // Extract currentSlide from carousel state

  // Only show the arrow if it's not the first slide
  if (currentSlide === 0) return null;

  return (
    <button
      className="custom-arrow left-arrow"
      onClick={onClick}
    >
      &lt;
    </button>
  );
};