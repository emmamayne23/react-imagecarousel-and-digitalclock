/* eslint-disable react/prop-types */
import { useState } from "react";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider-container flex flex-col items-center">
      <div className="relative w-full max-w-xl">
        <img
          src={images[currentIndex]}
          alt={`Carousel Image ${currentIndex + 1}`}
          className="w-full h-96 object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out"
        />
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            className="slider-btn left-0"
            onClick={handlePrev}
            aria-label="Previous"
          >
            &#9664;
          </button>
          <button
            className="slider-btn right-0"
            onClick={handleNext}
            aria-label="Next"
          >
            &#9654;
          </button>
        </div>
        <div className="absolute bottom-2 left-0 right-0 text-center bg-black/50 py-2 text-white font-semibold rounded-b-lg shadow-lg">
          Image {currentIndex + 1} of {images.length}
        </div>
      </div>
    </div>
  );
};

export default Slider;
