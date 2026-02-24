import React, { useEffect, useMemo } from "react";
import type { ViewProductDto } from "../../types/ProductDTO";
import { ProductCard } from "../ProductCard";
import { DECOR_RED_ENVELOPE } from "../../constants/imageAssets";

interface GundamKingdomCardsSectionProps {
  products?: ViewProductDto[];
  isLoading?: boolean;
  page?: number;
  onPageChange?: (nextPage: number) => void;
  maxPages?: number;
}

export const GundamKingdomCardsSection = ({ 
  products = [], 
  isLoading = false,
  page = 0,
  onPageChange,
  maxPages = 3,
}: GundamKingdomCardsSectionProps): React.JSX.Element => {
  if (isLoading) {
    return (
      <section className="absolute top-[1280px] left-[134px] w-[950px] h-[350px] flex items-center justify-center">
        <p className="[font-family:'Tilt_Warp-Regular',Helvetica] text-white text-lg">Đang tải...</p>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="absolute top-[1280px] left-[134px] w-[950px] h-[350px] flex items-center justify-center">
        <p className="[font-family:'Tilt_Warp-Regular',Helvetica] text-white text-lg">Không có sản phẩm Gundam</p>
      </section>
    );
  }

  const pageSize = 4;
  const pageCount = Math.max(1, Math.min(maxPages, Math.ceil(products.length / pageSize)));
  const safePage = Math.max(0, Math.min(page, pageCount - 1));
  const displayProducts = useMemo(
    () => products.slice(0, pageCount * pageSize),
    [products, pageCount]
  );

  useEffect(() => {
    if (safePage !== page) onPageChange?.(safePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safePage]);

  const pages = useMemo(() => {
    const result: ViewProductDto[][] = [];
    for (let i = 0; i < pageCount; i++) {
      result.push(displayProducts.slice(i * pageSize, i * pageSize + pageSize));
    }
    return result;
  }, [displayProducts, pageCount]);

  return (
    <section className="absolute top-[1280px] left-[134px] w-[1000px] h-[350px] overflow-hidden">
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${safePage * 100}%)` }}
      >
        {pages.map((pageProducts, pageIndex) => (
          <div key={`gundam-page-${pageIndex}`} className="w-full shrink-0 h-full">
            <div className="pt-0 flex gap-x-[34px]" style={{ paddingLeft: pageIndex === 0 ? "244px" : 0 }}>
              {pageProducts.map((product) => (
                <article key={product.productId} className="relative w-[203px] h-[309px]">
                  <img
                    className="absolute top-0 left-[23px] w-[80px] h-[70px] object-contain z-10"
                    alt="Trang trí lì xì"
                    src={DECOR_RED_ENVELOPE}
                  />

                  <ProductCard
                    product={product}
                    className="absolute"
                    style={{ top: "24px", left: "0" }}
                  />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

