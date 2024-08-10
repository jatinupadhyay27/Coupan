import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { slides } from '../JSON';

const Carousel = () => {


  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
<div className="mt-10 px-4 md:px-8 lg:px-44 max-[780px]:px-0">
  <div className="relative mx-auto overflow-hidden max-w-full h-[276px] lg:h-[276px] md:h-[250px] sm:h-[100px]" >
    <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)`, height: '100%' }}>
      {slides.map((slide, index) => (
        <img key={index} src={slide} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 h-full object-cover" />
      ))}
    </div>
    <button
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none"
      onClick={prevSlide}
    >
      <AiOutlineLeft size={24} />
    </button>
    <button
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full focus:outline-none"
      onClick={nextSlide}
    >
      <AiOutlineRight size={24} />
    </button>
  </div>
</div>
  );
};

export default Carousel;
