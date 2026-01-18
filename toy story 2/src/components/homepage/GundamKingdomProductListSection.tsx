import React from "react";

// Figma MCP Asset URLs
const decorTopProductCard61 = "https://www.figma.com/api/mcp/asset/cb65df8d-ab94-4273-904d-f9d409106b68";
const image85 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165"; // Same as image8
const image94 = "https://www.figma.com/api/mcp/asset/edbb82e2-43ff-4612-a4ff-4c40b79b4f29"; // Same as image11
const image105 = "https://www.figma.com/api/mcp/asset/874014bc-9737-4521-b8c4-90b3db0362b4"; // Same as image10
const vector14 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50"; // Same as vector1

export const GundamKingdomProductListSection = (): React.JSX.Element => {
  return (
    <section className="absolute top-[748px] left-[150px] w-[441px] h-[816px]">
      <article className="relative">
        <img
          className="top-[531px] left-[233px] absolute w-[201px] h-[285px] aspect-[0.71]"
          alt="Product background"
          src={image85}
        />

        <div className="top-[531px] left-[232px] w-[203px] absolute h-[285px] rounded-[17px] border border-solid border-[#d08856]" />

        <div className="top-[567px] left-[247px] w-[170px] absolute h-[237px] bg-white rounded-[17px] overflow-hidden">
          <img
            className="absolute top-[17px] left-[22px] w-[115px] h-[115px] aspect-[1] object-cover"
            alt="GUNDAM HOT 2026 80-&4847 DA NANG product image"
            src={image94}
          />

          <button
            className="absolute top-[209px] left-[22px] w-[79px] h-[15px] flex bg-[#c40029] rounded-md overflow-hidden cursor-pointer hover:bg-[#a00022] transition-colors"
            aria-label="Add to cart"
          >
            <span className="mt-[3px] w-[62px] h-[9px] ml-[7px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-white text-[7px] tracking-[0] leading-[normal]">
              Thêm vào giỏ hàng
            </span>
          </button>

          <div
            className="absolute top-[7px] left-[118px] w-[39px] h-[13px] flex bg-[#c40029] rounded-md overflow-hidden"
            aria-label="Discount 30%"
          >
            <span className="mt-0.5 w-[25px] h-2.5 ml-[7px] [font-family:'Archivo_Black-Regular',Helvetica] text-white text-[9px] whitespace-nowrap font-normal tracking-[0] leading-[normal]">
              -30%
            </span>
          </div>

          <button
            className="absolute top-[207px] left-[122px] w-5 h-5 aspect-[1] cursor-pointer"
            aria-label="Add to wishlist"
          >
            <img
              className="w-full h-full object-cover"
              alt="Wishlist icon"
              src={image105}
            />
          </button>

          <img
            className="absolute top-48 left-[100px] w-[60px] h-px object-cover"
            alt=""
            src={vector14}
          />
        </div>

        <h3 className="absolute top-[704px] left-[259px] w-[158px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] leading-[normal]">
          GUNDAM HOT 2026 80-&amp;4847 DA NANG
        </h3>

        <div className="absolute top-[752px] left-[264px] w-[60px] [font-family:'Tilt_Warp-Regular',Helvetica] text-[#ff0000] text-[11px] font-normal tracking-[0] leading-[normal]">
          1.245.300 Đ
        </div>

        <img
          className="top-0 left-0 absolute w-[157px] h-[53px] aspect-[2.95] object-cover"
          alt="Decorative top element"
          src={decorTopProductCard61}
        />

        <div className="absolute top-[752px] left-[348px] w-[59px] [font-family:'Tilt_Warp-Regular',Helvetica] text-black text-[11px] font-normal tracking-[0] leading-[normal] line-through">
          1.779.000 Đ
        </div>
      </article>
    </section>
  );
};
