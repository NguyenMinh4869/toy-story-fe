import React from "react";
import { SectionTitle } from "./SectionTitle";
import { SECTION_ICON, DECOR_TET_PANEL } from "../../constants/imageAssets";

export const GundamKingdomHeaderSection = (): React.JSX.Element => {
  return (
    <section aria-label="Gundam Kingdom">
      <div className="absolute top-[1099px] left-[398px] w-[405px] h-1 bg-[#d8c59e] border border-solid border-[#00000029]" />
      <img
        className="absolute top-[1073px] left-[382px] w-[53px] h-[53px] aspect-[1] object-cover"
        alt="Section icon"
        src={SECTION_ICON}
      />
      <SectionTitle top="1193px" left="368px">
        GUNDAM KINGDOM
      </SectionTitle>
      {/* Panel trang trí "Vui đón TẾT" bên trái (theo Figma) */}
      <img
        className="absolute top-[1230px] left-[134px] w-[220px] h-[280px] object-cover object-center rounded-xl overflow-hidden"
        alt="Vui đón Tết"
        src={DECOR_TET_PANEL}
      />
    </section>
  );
};

