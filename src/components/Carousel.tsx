import { useState } from "react";
import { carouselData } from "../data/CarouselData";

const Carousel = () => {
  const data = carouselData;
  console.log();
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="relative min-w-screen max-w-4xl mx-auto overflow-hidden rounded-xl border">
      {/* image */}
      <img
        src={data[current].image}
        alt="slide"
        className="w-full h-[550px] object-cover"
      />

      <p className="absolute left-40 top-1/2 text-amber-50 bg-gray-100 p-5 text-black font-bold text-xl rounded-md border">
        {data[current].description}
      </p>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-400 px-4 py-2 rounded-md cursor-pointer hover:bg-amber-50 border"
      >
        Left
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400 px-4 py-2 rounded-md cursor-pointer hover:bg-amber-50 border"
      >
        Right
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
