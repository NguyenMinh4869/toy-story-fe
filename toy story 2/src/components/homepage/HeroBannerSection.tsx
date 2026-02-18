import React from "react";
import { DECOR_FIRECRACKERS_CLOUD, DECOR_FANS_INGOTS } from "../../constants/imageAssets";
import { HomeCarousel, type CarouselSlide } from "./HomeCarousel";

// Figma MCP Asset URL (hero slide)
const image36 = "https://www.figma.com/api/mcp/asset/16661e53-92cf-4ab5-9f06-7c063eda908a";

const paroselImagesModules = import.meta.glob("../../assets/parosel/*.{png,jpg,jpeg,webp,gif,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const paroselImages = Object.entries(paroselImagesModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src);

interface HeroBannerSectionProps {
  page?: number;
  onPageChange?: (nextPage: number) => void;
  maxPages?: number;
}

export const HeroBannerSection = ({
  page = 0,
  onPageChange,
  maxPages,
}: HeroBannerSectionProps): React.JSX.Element => {
  const sourceImages = paroselImages.length > 0 ? paroselImages : [image36];
  const limit =
    typeof maxPages === "number" ? Math.max(1, Math.min(maxPages, sourceImages.length)) : sourceImages.length;
  const carouselSlides: CarouselSlide[] = sourceImages.slice(0, limit).map((src, i) => ({
    id: `parosel-${i + 1}`,
    image: src,
  }));

  const safePage = Math.max(0, Math.min(page, carouselSlides.length - 1));

  return (
    <section aria-label="Hero banner" className="relative">
      {/* Banner wrapper so decorations align with banner */}
      <div className="absolute top-[120px] left-0 w-full">
        <div className="relative w-full">
          {/* Main Carousel */}
          <HomeCarousel
            slides={carouselSlides}
            autoPlay={true}
            autoPlayInterval={5000}
            currentSlide={safePage}
            onSlideChange={onPageChange}
            heightClassName="h-[420px]"
          />

          {/* Trang trí trái trên: pháo + mây vàng (góc trên trái của carousel) */}
          <img
            className="absolute left-0 top-0 -translate-x-[-10px] -translate-y-[40px] w-[240px] h-[280px] object-contain z-20 pointer-events-none"
            alt="Trang trí pháo và mây vàng"
            src={DECOR_FIRECRACKERS_CLOUD}
          />
          {/* Trang trí phải dưới: quạt + mây + thỏi vàng (góc dưới phải của carousel) */}
          <img
            className="absolute right-0 bottom-0 translate-x-[-10px] translate-y-[50px] w-[300px] h-[220px] object-contain z-20 pointer-events-none"
            alt="Trang trí quạt, mây và thỏi vàng"
            src={DECOR_FANS_INGOTS}
          />
        </div>
      </div>
    </section>
  );
};

