import { useState, useEffect } from "react";
import imag1 from "../assets/images/1.jpg"
import imag2 from "../assets/images/2.jpg"
import imag3 from "../assets/images/3.jpg"
import imag4 from "../assets/images/4.jpg"

const images = [imag1, imag2, imag3, imag4];

const ImageSlide = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  // ✅ Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // move to next slide
    }, 5000); // every 5000ms = 5 seconds

    return () => clearInterval(interval); // clean up on unmount
  }, [current]); // re-run when current changes

  return (
    <div className="relative w-full mt-4">
      <div className="relative h-56 overflow-hidden rounded-md md:h-96">
        {images.map((img, index) => (
          <div
            key={index}
            className={index === current ? "block duration-700 ease-in-out" : "hidden"}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === current ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>

      {/* Prev / Next */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 flex items-center justify-center h-full px-4 text-white"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 flex items-center justify-center h-full px-4 text-white"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlide;