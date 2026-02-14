import React, { useEffect } from "react";
import { DECOR_FIRECRACKERS_CLOUD, DECOR_FANS_INGOTS } from "../../constants/imageAssets";

// Figma MCP Asset URL (hero slide)
const image36 = "https://www.figma.com/api/mcp/asset/16661e53-92cf-4ab5-9f06-7c063eda908a";

interface HeroBannerSectionProps {
  page?: number;
  onPageChange?: (nextPage: number) => void;
  maxPages?: number;
}

export const HeroBannerSection = ({
  page = 0,
  onPageChange,
  maxPages = 3,
}: HeroBannerSectionProps): React.JSX.Element => {
  // NOTE: Only one hero image is currently available in the repo.
  // We still implement the carousel so you can later swap in real slide images.
  const slides = Array.from({ length: Math.max(1, maxPages) }).map(() => image36);
  const pageCount = slides.length;
  const safePage = Math.max(0, Math.min(page, pageCount - 1));

  useEffect(() => {
    if (safePage !== page) onPageChange?.(safePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safePage]);

  return (
    <section aria-label="Hero banner">
      <div className="absolute top-[165px] left-[111px] w-[994px] h-[306px] rounded-[20px] overflow-hidden">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${safePage * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={`hero-slide-${i}`}
              className="w-full h-full shrink-0 object-cover"
              alt={`Main banner ${i + 1}`}
              src={src}
            />
          ))}
        </div>
      </div>

      {/* Trang trí trái: pháo + mây vàng */}
      <img
        className="absolute top-[120px] left-[40px] w-[220px] h-[280px] object-contain object-top-left"
        alt="Trang trí pháo và mây vàng"
        src={DECOR_FIRECRACKERS_CLOUD}
      />
      {/* Trang trí phải: quạt + mây + thỏi vàng */}
      <img
        className="absolute top-[280px] left-[820px] w-[280px] h-[200px] object-contain object-bottom-right"
        alt="Trang trí quạt, mây và thỏi vàng"
        src={DECOR_FANS_INGOTS}
      />
    </section>
  );
};

