import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      text: "I thank Krishna Engineering Works Machinery Team for making our plant operations successful and helping us meet the capacity output desired in Grain Handling System – Unloading & Milling Sections. We look forward to working with Krishna Engineering Works Machinery in our future projects as we now know whom to entrust this responsibility to.",
      author: "B. Srinivas",
      position: "Chief Procurement Officer",
      company: "Balrampur Chini Mills",
    },
    {
      id: 2,
      text: "Krishna Engineering Works Machinery has consistently delivered exceptional quality equipment and outstanding service. Their expertise in grain handling systems has been instrumental in optimizing our production efficiency and reducing operational costs.",
      author: "R. Kumar",
      position: "Plant Manager",
      company: "ABC Industries",
    },
    {
      id: 3,
      text: "The professional approach and technical expertise of Krishna Engineering Works Machinery team exceeded our expectations. Their grain handling solutions have significantly improved our plant's productivity and reliability.",
      author: "S. Sharma",
      position: "Operations Director",
      company: "XYZ Manufacturing",
    },
    {
      id: 4,
      text: "Working with Krishna Engineering Works Machinery has been a game-changer for our operations. Their innovative solutions and commitment to quality have helped us achieve remarkable improvements in our grain processing capabilities.",
      author: "M. Patel",
      position: "Technical Head",
      company: "Global Grain Solutions",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      aria-label="Customer Testimonials"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Customer Testimonials
          </h2>
          <div className="w-20 h-1 bg-white mx-auto opacity-60"></div>
        </header>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonials Slider */}
          <div className="mx-8 sm:mx-12 lg:mx-16">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                role="region"
                aria-live="polite"
                aria-label="Testimonials carousel"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4 sm:px-8"
                    role="article"
                    aria-hidden={index !== currentIndex}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 sm:p-12 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      {/* Quote Icon */}
                      <div className="text-white/30 mb-6">
                        <svg
                          className="w-12 h-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 font-light">
                        "{testimonial.text}"
                      </blockquote>

                      {/* Author Info */}
                      <footer className="border-t border-white/20 pt-6">
                        <div className="text-right">
                          <cite className="text-white font-semibold text-lg block">
                            - {testimonial.author}
                          </cite>
                          <div className="text-white/80 text-base mt-1">
                            {testimonial.position}
                          </div>
                          <div className="text-white/70 text-sm font-medium mt-1">
                            {testimonial.company}
                          </div>
                        </div>
                      </footer>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div
            className="flex justify-center mt-8 space-x-3"
            role="tablist"
            aria-label="Testimonial indicators"
          >
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
