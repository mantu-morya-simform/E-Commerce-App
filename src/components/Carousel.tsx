import { useState } from "react";
import { carouselData } from "../data/CarouselData";

const Carousel = () => {
  const data = carouselData;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden shadow-2xl bg-black mt-16">
      {/* Image */}
      <img
        src={data[current].image}
        alt="slide"
        className="w-screen h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] object-cover transition-all duration-500"
      />

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 md:px-4 md:py-3 rounded-full shadow-md transition cursor-pointer"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black px-3 py-2 md:px-4 md:py-3 rounded-full shadow-md transition cursor-pointer"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index ? "w-6 h-3 bg-white" : "w-3 h-3 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
