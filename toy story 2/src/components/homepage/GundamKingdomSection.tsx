import React from "react";

// Figma MCP Asset URLs
const decorTopProductCard61 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68";
const decorTopProductCard67 = decorTopProductCard61; // Same as 61
const decorTopProductCard68 = decorTopProductCard61; // Same as 61
const image86 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165"; // Same as image8
const image95 = "https://www.figma.com/api/mcp/asset/edbb82e2-43ff-4612-a4ff-4c40b79b4f29"; // Same as image11
const image106 = "https://www.figma.com/api/mcp/asset/874014bc-9737-4521-b8c4-90b3db0362b4"; // Same as image10
const vector15 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50"; // Same as vector1

export const GundamKingdomSection = (): React.JSX.Element => {
  return (
    <article className="absolute top-[1255px] left-[628px] w-[422px] h-[309px]">
      <img
        className="top-0 left-[259px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
        alt="Decorative top product card"
        src={decorTopProductCard68}
      />

      <img
        className="top-6 left-px absolute w-[201px] h-[285px] aspect-[0.71]"
        alt="Gundam product background"
        src={image86}
      />

      <div className="top-6 left-0 w-[203px] absolute h-[285px] rounded-[17px] border border-solid border-[#d08856]" />

      <div className="top-[60px] left-[15px] w-[170px] absolute h-[237px] bg-white rounded-[17px] overflow-hidden">
        <img
          className="absolute top-[17px] left-[22px] w-[115px] h-[115px] aspect-[1] object-cover"
          alt="Gundam HOT 2026 product"
          src={image95}
        />

        <button
          className="absolute top-[209px] left-[22px] w-[79px] h-[15px] flex bg-[#c40029] rounded-md overflow-hidden cursor-pointer border-0 hover:bg-[#a00022] transition-colors"
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

        <button
          className="absolute top-[207px] left-[122px] w-5 h-5 aspect-[1] cursor-pointer border-0 bg-transparent p-0"
          aria-label="Yêu thích"
        >
          <img
            className="w-full h-full object-cover"
            alt="Favorite icon"
            src={image106}
          />
        </button>

        <img
          className="absolute top-48 left-[100px] w-[60px] h-px object-cover"
          alt=""
          src={vector15}
        />
      </div>

      <h3 className="top-[197px] absolute left-[27px] w-[158px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] leading-[normal]">
        GUNDAM HOT 2026 80-&amp;4847 DA NANG
      </h3>

      <div className="absolute top-[245px] left-8 w-[60px] [font-family:'Tilt_Warp-Regular',Helvetica] text-[#ff0000] text-[11px] font-normal tracking-[0] leading-[normal]">
        <span className="sr-only">Giá khuyến mãi: </span>1.245.300 Đ
      </div>

      <div className="absolute top-[245px] left-[116px] w-[59px] [font-family:'Tilt_Warp-Regular',Helvetica] text-black text-[11px] font-normal tracking-[0] leading-[normal] line-through">
        <span className="sr-only">Giá gốc: </span>1.779.000 Đ
      </div>

      <img
        className="top-1 left-[23px] absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
        alt="Decorative top product card"
        src={decorTopProductCard67}
      />
    </article>
  );
};
