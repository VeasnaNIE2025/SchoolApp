import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imag1 from "../../assets/images/1.jpg";
import imag2 from "../../assets/images/2.jpg";
import imag3 from "../../assets/images/3.jpg";
import imag4 from "../../assets/images/4.jpg";

const images = [imag1, imag2, imag3, imag4];

const ImageSlide = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const goToSlide = (index) => setCurrent(index);

  return (
    <div 
      className="relative w-full mt-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-56 overflow-hidden shadow-xl md:h-96 rounded-2xl">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === current 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-4"
            }`}
          >
            <img
              src={img}
              alt={`ស្លាយ ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* Optional overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute p-3 text-white transition-all -translate-y-1/2 rounded-full top-1/2 left-4 bg-black/50 hover:bg-black/70 active:scale-90"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute p-3 text-white transition-all -translate-y-1/2 rounded-full top-1/2 right-4 bg-black/50 hover:bg-black/70 active:scale-90"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots */}
      <div className="absolute z-10 flex gap-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white scale-125" 
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Optional: Slide Counter */}
      <div className="absolute px-3 py-1 text-xs font-medium text-white rounded-full top-4 right-4 bg-black/60">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageSlide;