import React from "react";
import { BANNER_LC2000, DECOR_LANTERNS_ENVELOPES } from "../../constants/imageAssets";

export const FeaturedProductsBannerSection = (): React.JSX.Element => {
  return (
    <section aria-label="Cơ hội cuối">
      <img
        className="absolute top-[584px] left-[111px] w-[991px] h-[149px] object-contain object-center"
        alt="Cơ hội cuối - Mua nhanh kẻo lỡ"
        src={BANNER_LC2000}
      />
      <img
        className="absolute top-[560px] left-[80px] w-[120px] h-[100px] object-contain opacity-90"
        alt=""
        src={DECOR_LANTERNS_ENVELOPES}
      />
      <img
        className="absolute top-[560px] left-[1000px] w-[120px] h-[100px] object-contain object-right opacity-90 scale-x-[-1]"
        alt=""
        src={DECOR_LANTERNS_ENVELOPES}
      />
    </section>
  );
};
