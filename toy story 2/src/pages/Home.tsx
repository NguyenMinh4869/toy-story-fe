import React from "react";
import { GundamKingdomProductListSection } from "../components/homepage/GundamKingdomProductListSection";
import { GundamKingdomSection } from "../components/homepage/GundamKingdomSection";
import { PromotionalOffersSection } from "../components/homepage/PromotionalOffersSection";
import { ShoppingGuideContentSection } from "../components/homepage/ShoppingGuideContentSection";
import { ShoppingGuideSection } from "../components/homepage/ShoppingGuideSection";

// Figma MCP Asset URLs
const LC2000WebTop1 = "https://www.figma.com/api/mcp/asset/095730ed-dfd3-46e4-8510-9a4f5cea6f1b";
const decorDynamicBrand21 = "https://www.figma.com/api/mcp/asset/c18966b1-02ef-44dc-b6e0-7ce67b29570f";
const decorDynamicBrand22 = "https://www.figma.com/api/mcp/asset/c18966b1-02ef-44dc-b6e0-7ce67b29570f"; // Same as 21
const decorDynamicBrand23 = "https://www.figma.com/api/mcp/asset/c18966b1-02ef-44dc-b6e0-7ce67b29570f"; // Same as 21
const decorDynamicBrand24 = "https://www.figma.com/api/mcp/asset/c18966b1-02ef-44dc-b6e0-7ce67b29570f"; // Same as 21
const decorDynamicBrand25 = "https://www.figma.com/api/mcp/asset/c18966b1-02ef-44dc-b6e0-7ce67b29570f"; // Same as 21
const decorImageSlider11 = "https://www.figma.com/api/mcp/asset/e5fe30ab-bbfd-4bcc-9888-c3aa41d1059f";
const decorImageSlider21 = "https://www.figma.com/api/mcp/asset/7d376ed9-b011-4185-980e-795c277b1fdb";
const decorTopProductCard61 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68";
const decorTopProductCard62 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68"; // Same as 61
const decorTopProductCard63 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68"; // Same as 61
const decorTopProductCard64 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68"; // Same as 61
const decorTopProductCard66 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68"; // Same as 61
const image6 = "https://www.figma.com/api/mcp/asset/9936294e-3987-4e45-86ce-c0e0f0d9cac9";
const image8 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165";
const image9 = "https://www.figma.com/api/mcp/asset/6e8d958a-f948-4551-948e-99be5f6aae1e";
const image10 = "https://www.figma.com/api/mcp/asset/874014bc-9737-4521-b8c4-90b3db0362b4";
const image11 = "https://www.figma.com/api/mcp/asset/edbb82e2-43ff-4612-a4ff-4c40b79b4f29";
const image12 = "https://www.figma.com/api/mcp/asset/e1ee249f-6e80-45a6-b62a-dd23687ca975";
const image13 = "https://www.figma.com/api/mcp/asset/90b57607-01f4-436a-84b7-bf19c8142dc8";
const image132 = "https://www.figma.com/api/mcp/asset/90b57607-01f4-436a-84b7-bf19c8142dc8"; // Same as 13
const image133 = "https://www.figma.com/api/mcp/asset/90b57607-01f4-436a-84b7-bf19c8142dc8"; // Same as 13
const image134 = "https://www.figma.com/api/mcp/asset/90b57607-01f4-436a-84b7-bf19c8142dc8"; // Same as 13
const image16 = "https://www.figma.com/api/mcp/asset/65922a4e-cf15-4803-971c-a52562301534";
const image17 = "https://www.figma.com/api/mcp/asset/65922a4e-cf15-4803-971c-a52562301534"; // Same as 16
const image18 = "https://www.figma.com/api/mcp/asset/65922a4e-cf15-4803-971c-a52562301534"; // Same as 16
const image19 = "https://www.figma.com/api/mcp/asset/65922a4e-cf15-4803-971c-a52562301534"; // Same as 16
const image20 = "https://www.figma.com/api/mcp/asset/f8d42236-59cd-4852-bcb7-126b11fed0d1";
const image21 = "https://www.figma.com/api/mcp/asset/581a0aa2-9d3a-46e8-9d2f-6293b92af77e";
const image22 = "https://www.figma.com/api/mcp/asset/dddd0ef3-7a3e-48c9-82c5-937f3ca12807";
const image23 = "https://www.figma.com/api/mcp/asset/fd690058-b724-4d1c-a990-8928671eec36";
const image24 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d";
const image28 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image29 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image30 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image31 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image32 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image33 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image34 = "https://www.figma.com/api/mcp/asset/bc780d28-b30d-4701-8754-4995225b004d"; // Same as 24
const image36 = "https://www.figma.com/api/mcp/asset/16661e53-92cf-4ab5-9f06-7c063eda908a";
const image37 = "https://www.figma.com/api/mcp/asset/b779d896-3a23-4d57-adbf-13e2bd183230";
const image62 = "https://www.figma.com/api/mcp/asset/c41e1d5f-9c82-4ce9-b9ad-d9046e8b346d";
const image63 = "https://www.figma.com/api/mcp/asset/49c15ba9-e6f3-4fe5-af71-208e8e3b81a2";
const image67 = "https://www.figma.com/api/mcp/asset/0a8a8a27-1320-4939-97ba-bff582712e29";
const image87 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165"; // Same as image8
const image88 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165"; // Same as image8
const image96 = "https://www.figma.com/api/mcp/asset/edbb82e2-43ff-4612-a4ff-4c40b79b4f29"; // Same as image11
const image107 = "https://www.figma.com/api/mcp/asset/874014bc-9737-4521-b8c4-90b3db0362b4"; // Same as image10
const line15 = "https://www.figma.com/api/mcp/asset/84873425-9473-446e-bf8a-cc361a15a42a";
const polygon1 = "https://www.figma.com/api/mcp/asset/5e68e861-ac68-4b71-976d-32ab173b1eac";
const polygon12 = "https://www.figma.com/api/mcp/asset/5e68e861-ac68-4b71-976d-32ab173b1eac"; // Same as polygon1
const polygon2 = "https://www.figma.com/api/mcp/asset/7ce161cd-3aed-46cc-ac02-b847295e949d"; // imgGroup1
const polygon22 = "https://www.figma.com/api/mcp/asset/7ce161cd-3aed-46cc-ac02-b847295e949d"; // Same as polygon2
const polygon3 = "https://www.figma.com/api/mcp/asset/2b3172e3-1b05-4a57-978b-4a46b8e74b20"; // imgGroup2
const polygon32 = "https://www.figma.com/api/mcp/asset/2b3172e3-1b05-4a57-978b-4a46b8e74b20"; // Same as polygon3
const polygon4 = "https://www.figma.com/api/mcp/asset/bfa0b650-16a1-42fb-aa56-4a6bf362986f"; // imgNutQuaPhai
const polygon42 = "https://www.figma.com/api/mcp/asset/bfa0b650-16a1-42fb-aa56-4a6bf362986f"; // Same as polygon4
const polygon5 = "https://www.figma.com/api/mcp/asset/2b3172e3-1b05-4a57-978b-4a46b8e74b20"; // imgGroup2
const polygon52 = "https://www.figma.com/api/mcp/asset/2b3172e3-1b05-4a57-978b-4a46b8e74b20"; // Same as polygon5
const polygon6 = "https://www.figma.com/api/mcp/asset/549e467e-e899-4866-9efa-a5b8a8863ee0";
const vector1 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50";
const vector16 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50"; // Same as vector1

const favoriteToysImages = [
  { src: image20, alt: "Image 20", top: "1811px", left: "132px" },
  { src: image21, alt: "Image 21", top: "1811px", left: "383px" },
  { src: image22, alt: "Image 22", top: "1810px", left: "632px" },
  { src: image23, alt: "Image 23", top: "1808px", left: "866px" },
];

const favoriteToysLargeImages = [
  {
    src: image17,
    alt: "Image 17",
    top: "1806px",
    left: "131px",
    width: "202px",
    height: "205px",
    aspect: "0.99",
  },
  {
    src: image16,
    alt: "Image 16",
    top: "1806px",
    left: "383px",
    width: "202px",
    height: "208px",
    aspect: "0.97",
  },
  {
    src: image18,
    alt: "Image 18",
    top: "1806px",
    left: "629px",
    width: "202px",
    height: "208px",
    aspect: "0.97",
  },
  {
    src: image19,
    alt: "Image 19",
    top: "1802px",
    left: "866px",
    width: "202px",
    height: "208px",
    aspect: "0.97",
  },
];

const brandLogosRow1 = [
  { src: image24, left: "132px" },
  { src: image32, left: "372px" },
  { src: image33, left: "625px" },
  { src: image34, left: "866px" },
];

const brandLogosRow2 = [
  { src: image28, left: "132px" },
  { src: image29, left: "372px" },
  { src: image30, left: "625px" },
  { src: image31, left: "866px" },
];

const decorBrands = [
  { src: decorDynamicBrand21, top: "1793px", left: "126px" },
  { src: decorDynamicBrand22, top: "1788px", left: "374px" },
  { src: decorDynamicBrand23, top: "1788px", left: "621px" },
  { src: decorDynamicBrand24, top: "1784px", left: "858px" },
];

const navigationButtons = [
  { top: "1402px", left: "1107px", polygon: polygon2 },
  { top: "1890px", left: "1105px", polygon: polygon22 },
  { top: "881px", left: "1112px", polygon: polygon4 },
  { top: "277px", left: "1116px", polygon: polygon42 },
];

const navigationButtonsLeft = [
  { top: "1413px", left: "42px", polygon: polygon3 },
  { top: "1890px", left: "54px", polygon: polygon32 },
  { top: "886px", left: "44px", polygon: polygon5 },
  { top: "292px", left: "39px", polygon: polygon52 },
];

const sectionDividers = [
  { top: "1588px", left: "397px", image: image13 },
  { top: "2019px", left: "409px", image: image132 },
  { top: "2404px", left: "426px", image: image133 },
];

export const Homepage = (): React.JSX.Element => {
  return (
    <div className="bg-[#ab0007] w-full min-w-[1200px] min-h-[3005px] relative">
      <main className="max-w-[1200px] mx-auto relative">
        <section aria-label="Hero banner">
          <img
            className="absolute top-[165px] left-[111px] w-[994px] h-[306px] aspect-[3.25] object-cover"
            alt="Main banner"
            src={image36}
          />
          <img
            className="absolute top-[143px] left-[65px] w-[248px] h-[248px] aspect-[1] object-cover"
            alt="Decorative slider element"
            src={decorImageSlider11}
          />
          <img
            className="absolute top-[343px] left-[850px] w-[296px] h-[148px] aspect-[2] object-cover"
            alt="Decorative slider element"
            src={decorImageSlider21}
          />
        </section>

        <PromotionalOffersSection />

        <section aria-label="Featured products">
          <img
            className="absolute top-[584px] left-[111px] w-[991px] h-[149px] aspect-[6.67] object-cover"
            alt="Promotional banner"
            src={LC2000WebTop1}
          />

          <img
            className="top-[748px] left-[406px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
            alt="Product card decoration"
            src={decorTopProductCard62}
          />
          <img
            className="top-[742px] left-[651px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
            alt="Product card decoration"
            src={decorTopProductCard63}
          />
          <img
            className="top-[742px] left-[885px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
            alt="Product card decoration"
            src={decorTopProductCard64}
          />
        </section>

        <GundamKingdomProductListSection />

        <section aria-label="Gundam Kingdom">
          <div className="absolute top-[1099px] left-[398px] w-[405px] h-1 bg-[#d8c59e] border border-solid border-[#00000029]" />
          <img
            className="absolute top-[1073px] left-[382px] w-[53px] h-[53px] aspect-[1] object-cover"
            alt="Section icon"
            src={image12}
          />
          <h2 className="absolute top-[1193px] left-[368px] [-webkit-text-stroke:1px_#c7b6b6] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,217,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[normal]">
            GUNDAM KINGDOM
          </h2>
          <img
            className="top-[1259px] left-[400px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
            alt="Product card decoration"
            src={decorTopProductCard66}
          />
        </section>

        <GundamKingdomSection />

        <article className="absolute w-[203px] h-[285px] top-[1279px] left-[865px]">
          <div className="w-[209px] h-[285px] relative">
            <img
              className="absolute top-0 left-px w-[201px] h-[285px] aspect-[0.71]"
              alt="Product background"
              src={image87}
            />
            <div className="absolute top-0 left-0 w-[203px] h-[285px] rounded-[17px] border border-solid border-[#d08856]" />
            <div className="absolute top-9 left-[15px] w-[170px] h-[237px] bg-white rounded-[17px] overflow-hidden">
              <img
                className="absolute top-[17px] left-[22px] w-[115px] h-[115px] aspect-[1] object-cover"
                alt="Gundam product"
                src={image96}
              />
              <button
                className="absolute top-[209px] left-[22px] w-[79px] h-[15px] flex bg-[#c40029] rounded-md overflow-hidden"
                aria-label="Thêm vào giỏ hàng"
              >
                <span className="mt-[3px] w-[62px] h-[9px] ml-[7px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-white text-[7px] tracking-[0] leading-[normal]">
                  Thêm vào giỏ hàng
                </span>
              </button>
              <div className="absolute top-[7px] left-[118px] w-[39px] h-[13px] flex bg-[#c40029] rounded-md overflow-hidden">
                <span className="mt-0.5 w-[25px] h-2.5 ml-[7px] [font-family:'Archivo_Black-Regular',Helvetica] text-white text-[9px] whitespace-nowrap font-normal tracking-[0] leading-[normal]">
                  -30%
                </span>
              </div>
              <button aria-label="Yêu thích">
                <img
                  className="absolute top-[207px] left-[122px] w-5 h-5 aspect-[1] object-cover"
                  alt="Favorite icon"
                  src={image107}
                />
              </button>
              <img
                className="absolute top-48 left-[100px] w-[60px] h-px object-cover"
                alt=""
                src={vector16}
              />
            </div>
            <p className="top-[173px] absolute left-[27px] w-[158px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] leading-[normal]">
              GUNDAM HOT 2026 80-&amp;4847 DA NANG
            </p>
            <div className="absolute top-[221px] left-8 w-[60px] [font-family:'Tilt_Warp-Regular',Helvetica] text-[#ff0000] text-[11px] font-normal tracking-[0] leading-[normal]">
              1.245.300 Đ
            </div>
            <div className="absolute top-[221px] left-[116px] w-[59px] [font-family:'Tilt_Warp-Regular',Helvetica] text-black text-[11px] font-normal tracking-[0] leading-[normal]">
              1.779.000 Đ
            </div>
          </div>
        </article>

        <img
          className="top-[1279px] left-[134px] object-cover absolute w-[201px] h-[285px] aspect-[0.71]"
          alt="Product"
          src={image88}
        />

        <section aria-label="Đồ chơi yêu thích">
          {sectionDividers[0] && (
            <div
              className="absolute w-[422px] h-[54px]"
              style={{
                top: sectionDividers[0].top,
                left: sectionDividers[0].left,
              }}
            >
              <div className="absolute top-[27px] left-[17px] w-[405px] h-1 bg-[#d8c59e]" />
              <img
                className="absolute top-px left-px w-[53px] h-[53px] aspect-[1] object-cover"
                alt="Section icon"
                src={sectionDividers[0].image}
              />
            </div>
          )}

          <h2 className="absolute top-[1692px] left-[368px] [-webkit-text-stroke:1px_#c7b6b6] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,217,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[normal]">
            Đồ chơi yêu thích
          </h2>

          {decorBrands.map((decor, index) => (
            <img
              key={index}
              className="w-[217px] h-9 absolute aspect-[6] object-cover"
              style={{ top: decor.top, left: decor.left }}
              alt="Brand decoration"
              src={decor.src}
            />
          ))}

          {favoriteToysImages.map((img, index) => (
            <img
              key={index}
              className="w-[199px] h-[199px] absolute aspect-[1] object-cover"
              style={{ top: img.top, left: img.left }}
              alt={img.alt}
              src={img.src}
            />
          ))}

          {favoriteToysLargeImages.map((img, index) => (
            <img
              key={index}
              className="absolute object-cover"
              style={{
                top: img.top,
                left: img.left,
                width: img.width,
                height: img.height,
                aspectRatio: img.aspect,
              }}
              alt={img.alt}
              src={img.src}
            />
          ))}
        </section>

        <section aria-label="Thương hiệu uy tín">
          {sectionDividers[1] && (
            <div
              className="absolute w-[422px] h-[54px]"
              style={{
                top: sectionDividers[1].top,
                left: sectionDividers[1].left,
              }}
            >
              <div className="absolute top-[27px] left-[17px] w-[405px] h-1 bg-[#d8c59e]" />
              <img
                className="absolute top-px left-px w-[53px] h-[53px] aspect-[1] object-cover"
                alt="Section icon"
                src={sectionDividers[1].image}
              />
            </div>
          )}

          <h2 className="absolute top-[2065px] left-[371px] [-webkit-text-stroke:1px_#c7b6b6] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,217,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-transparent text-5xl tracking-[0] leading-[normal]">
            Thương hiệu uy tín
          </h2>

          {brandLogosRow1.map((logo, index) => (
            <img
              key={index}
              className="absolute top-[2193px] w-[195px] h-24 aspect-[2.03] object-cover"
              style={{ left: logo.left }}
              alt="Brand logo"
              src={logo.src}
            />
          ))}

          {brandLogosRow2.map((logo, index) => (
            <img
              key={index}
              className="absolute top-[2308px] w-[195px] h-24 aspect-[2.03] object-cover"
              style={{ left: logo.left }}
              alt="Brand logo"
              src={logo.src}
            />
          ))}
        </section>

        <section aria-label="Cẩm nang mua sắm">
          {sectionDividers[2] && (
            <div
              className="absolute w-[422px] h-[54px]"
              style={{
                top: sectionDividers[2].top,
                left: sectionDividers[2].left,
              }}
            >
              <div className="absolute top-[27px] left-[17px] w-[405px] h-1 bg-[#d8c59e]" />
              <img
                className="absolute top-px left-px w-[53px] h-[53px] aspect-[1] object-cover"
                alt="Section icon"
                src={sectionDividers[2].image}
              />
            </div>
          )}

          <h2 className="absolute top-[2454px] left-[371px] [-webkit-text-stroke:1px_#c7b6b6] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,217,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Tilt_Warp-Regular',Helvetica] text-transparent text-5xl font-normal tracking-[0] leading-[normal]">
            Cẩm nang mua sắm
          </h2>

          <ShoppingGuideSection />
          <ShoppingGuideContentSection />

          <button className="top-[2535px] left-[514px] w-[172px] h-[54px] absolute flex rounded-[34px] overflow-hidden bg-[linear-gradient(180deg,rgba(254,246,204,1)_3%,rgba(243,212,51,1)_100%)]">
            <span className="mt-[17px] w-[73px] h-[19px] ml-[49px] [font-family:'Tilt_Warp-Regular',Helvetica] text-[15px] font-normal text-[#ff0000] tracking-[0] leading-[normal]">
              Xem Thêm
            </span>
            <img
              className="mt-[22.8px] w-[8.25px] h-[10.39px] ml-[10.8px]"
              alt=""
              src={polygon6}
            />
          </button>

          <img
            className="absolute top-[2589px] left-[152px] w-[399px] h-[67px] aspect-[6] object-cover"
            alt="Decorative brand element"
            src={decorDynamicBrand25}
          />
        </section>

        {navigationButtons.map((btn, index) => (
          <button
            key={index}
            className="w-[33px] h-[31px] rounded-[16.5px/15.5px] border border-solid border-white bg-[linear-gradient(180deg,rgba(227,184,103,1)_0%,rgba(220,199,160,1)_100%)] absolute flex"
            style={{ top: btn.top, left: btn.left }}
            aria-label="Next"
          >
            <img
              className="mt-[11.5px] w-[7.04px] h-[9.03px] ml-[13.2px]"
              alt=""
              src={btn.polygon}
            />
          </button>
        ))}

        {navigationButtonsLeft.map((btn, index) => (
          <button
            key={index}
            className="w-[33px] h-[31px] rounded-[16.5px/15.5px] border border-solid border-white bg-[linear-gradient(180deg,rgba(227,184,103,1)_0%,rgba(220,199,160,1)_100%)] absolute flex"
            style={{ top: btn.top, left: btn.left }}
            aria-label="Previous"
          >
            <img
              className="mt-[11.5px] w-[7.04px] h-[9.03px] ml-[11.8px]"
              alt=""
              src={btn.polygon}
            />
          </button>
        ))}
      </main>
    </div>
  );
};

// Default export for routing compatibility
export default Homepage;
