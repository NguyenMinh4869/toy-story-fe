import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { LOGO_TOY_STORY } from "../../constants/imageAssets";

export interface CarouselSlide {
  id: string;
  image: string;
  headline?: string;
  promoBoxes?: Array<{
    text: string;
  }>;
  dateRange?: {
    label: string;
    startDate: string;
    endDate: string;
  };
  characterImage?: string;
}

interface HomeCarouselProps {
  slides: CarouselSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
  heightClassName?: string;
  currentSlide?: number;
  onSlideChange?: (index: number) => void;
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
  heightClassName = "h-[306px]",
  currentSlide: controlledSlide,
  onSlideChange,
}) => {
  const [internalSlide, setInternalSlide] = useState(0);
  const totalSlides = slides.length;
  
  // Use controlled slide if provided, otherwise use internal state
  const isControlled = controlledSlide !== undefined;
  const currentSlide = isControlled ? controlledSlide : internalSlide;
  
  const setCurrentSlide = (index: number) => {
    if (!isControlled) {
      setInternalSlide(index);
    }
    onSlideChange?.(index);
  };

  useEffect(() => {
    // Only auto-play if not controlled externally
    if (!autoPlay || totalSlides <= 1 || isControlled) return;

    const interval = setInterval(() => {
      setInternalSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, totalSlides, isControlled]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  if (totalSlides === 0) return null;

  return (
    <div className={`relative w-full ${className}`}>
      {/* Main Carousel Container */}
      <div
        className={`relative w-full ${heightClassName} rounded-[20px] overflow-hidden bg-[#ab0007]`}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, i) => {
            const slideHasOverlay =
              Boolean(slide.headline) ||
              Boolean(slide.promoBoxes?.length) ||
              Boolean(slide.dateRange) ||
              Boolean(slide.characterImage);

            return (
              <div key={slide.id ?? `slide-${i}`} className="relative w-full h-full shrink-0">
                <img
                  src={slide.image}
                  alt={`Slide ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-contain bg-[#ab0007]"
                />

                {slideHasOverlay && (
                  <>
                    {/* Decorative Gold Pattern Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)`,
                      }}
                    />

                    {/* Slide Content */}
                    <div className="relative z-10 h-full flex flex-col px-6 py-4">
                      {/* Logo at top center */}
                      <div className="flex justify-center mb-2">
                        <img
                          src={LOGO_TOY_STORY}
                          alt="Toy Story Logo"
                          className="h-10 w-auto object-contain"
                        />
                      </div>

                      {/* Main Content Container */}
                      <div className="flex-1 flex items-center justify-between gap-6 px-4">
                        {/* Left Side - Promo Boxes */}
                        {slide.promoBoxes?.length ? (
                          <div className="flex flex-col gap-2.5 flex-shrink-0">
                            {slide.promoBoxes.map((box, index) => (
                              <div
                                key={index}
                                className="bg-transparent border-2 border-white rounded-md px-5 py-2.5 min-w-[180px]"
                              >
                                <p className="text-white text-base font-bold text-center [font-family:'Tilt_Warp-Regular',Helvetica] whitespace-nowrap leading-tight">
                                  {box.text}
                                </p>
                              </div>
                            ))}

                            {/* Date Range */}
                            {slide.dateRange && (
                              <div className="flex items-center gap-2 mt-1">
                                <Calendar className="w-4 h-4 text-white flex-shrink-0" />
                                <span className="text-white text-xs [font-family:'Tilt_Warp-Regular',Helvetica] whitespace-nowrap">
                                  {slide.dateRange.label} {slide.dateRange.startDate} - {slide.dateRange.endDate}
                                </span>
                              </div>
                            )}
                          </div>
                        ) : null}

                        {/* Center - Headline */}
                        {slide.headline ? (
                          <div className="flex-1 flex items-center justify-center px-4">
                            <h1
                              className="text-white text-4xl md:text-5xl font-bold text-center [font-family:'Tilt_Warp-Regular',Helvetica] leading-tight"
                              style={{
                                textShadow:
                                  "3px 3px 0px #8b0000, -1px -1px 0px #8b0000, 1px -1px 0px #8b0000, -1px 1px 0px #8b0000",
                                WebkitTextStroke: "1px #8b0000",
                              }}
                            >
                              {slide.headline}
                            </h1>
                          </div>
                        ) : (
                          <div className="flex-1" />
                        )}

                        {/* Right Side - Character/Product Image */}
                        {slide.characterImage && (
                          <div className="flex-shrink-0 w-[180px] h-[180px] flex items-center justify-center">
                            <img
                              src={slide.characterImage}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f8e3b8]/95 border border-[#e2b663] flex items-center justify-center hover:bg-[#f8e3b8] transition-colors shadow-[0_6px_18px_rgba(0,0,0,0.18)] backdrop-blur-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 text-[#ab0007]" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#f8e3b8]/95 border border-[#e2b663] flex items-center justify-center hover:bg-[#f8e3b8] transition-colors shadow-[0_6px_18px_rgba(0,0,0,0.18)] backdrop-blur-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 text-[#ab0007]" />
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots */}
      {totalSlides > 1 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 z-20 flex justify-center items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/70 w-2"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
