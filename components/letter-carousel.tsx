"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface CarouselSlide {
  letters: string[];
  title: string;
  description: string;
  backgroundImage: string;
}

export default function LetterCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides: CarouselSlide[] = [
    {
      letters: ["S", "K", "I", "L", "L"],
      title: "Skill Assessment",
      description: "Evaluate knowledge with comprehensive assessments built for modern hiring teams.",
      backgroundImage: "/images/homepage/Carousel/Drivers License.jpg",
    },
    {
      letters: ["Q", "U", "I", "Z"],
      title: "Quiz Excellence",
      description: "Deliver interactive, expert-led quizzes that keep every candidate engaged.",
      backgroundImage: "/images/homepage/Carousel/Pick - Laptop.jpg",
    },
    {
      letters: ["L", "E", "A", "R", "N"],
      title: "Learning Journey",
      description: "Guide learners through personalized feedback and measurable growth.",
      backgroundImage: "/images/homepage/Carousel/Secure Center.jpg",
    },
    {
      letters: ["H", "I", "R", "E"],
      title: "Hiring Simplified",
      description: "Connect verified skills to the right opportunities without the usual friction.",
      backgroundImage: "/images/homepage/Carousel/Skill Library.jpg",
    },
  ];

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;

    setIsAnimating(true);
    setCurrentSlide(index);
    window.setTimeout(() => setIsAnimating(false), 700);
  };

  const nextSlide = () => {
    goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      nextSlide();
    }, 6000);

    return () => window.clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="w-full">
      <div className="relative h-[70vh] min-h-[480px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#071b36] shadow-2xl shadow-slate-950/20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "translate-x-0 opacity-100"
                : index < currentSlide
                ? "-translate-x-full opacity-0"
                : "translate-x-full opacity-0"
            }`}
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={slide.backgroundImage || "/placeholder.svg"}
                alt={`${slide.title} background`}
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071b36]/95 via-[#071b36]/70 to-[#071b36]/20" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(247,62,93,0.25),_transparent_45%)]" />
            </div>

            <div className="relative z-10 flex h-full items-center">
              <div className="mx-auto flex w-full max-w-7xl flex-col justify-between gap-8 px-6 py-10 sm:px-8 lg:flex-row lg:items-end lg:px-12">
                <div className="max-w-2xl">
                  <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-[0.25em] text-slate-100/90">
                    Verified skills. Simplified hiring.
                  </p>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-lg leading-8 text-slate-100/90">
                    {slide.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:justify-end">
                  {slide.letters.map((letter, letterIndex) => (
                    <div
                      key={letterIndex}
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-3xl font-bold text-white shadow-lg backdrop-blur-sm sm:h-20 sm:w-20 sm:text-4xl"
                    >
                      {letter}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 p-2 text-[#00418d] shadow-lg transition hover:bg-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/80 p-2 text-[#00418d] shadow-lg transition hover:bg-white"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-[#f73e5d]" : "w-2.5 bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
