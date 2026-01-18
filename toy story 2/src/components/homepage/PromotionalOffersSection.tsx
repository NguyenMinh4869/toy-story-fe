import React from "react";

// Figma MCP Asset URLs
const image8 = "https://www.figma.com/api/mcp/asset/97a5f957-4de8-4424-a0fb-920de4c2e165";
const image82 = image8; // Same as image8
const image83 = image8; // Same as image8
const image84 = image8; // Same as image8
const image9 = "https://www.figma.com/api/mcp/asset/6e8d958a-f948-4551-948e-99be5f6aae1e";
const image92 = image9; // Same as image9
const image93 = image9; // Same as image9
const image10 = "https://www.figma.com/api/mcp/asset/874014bc-9737-4521-b8c4-90b3db0362b4";
const image102 = image10; // Same as image10
const image103 = image10; // Same as image10
const image104 = image10; // Same as image10
const image = image9; // Product image - using image9
const image1 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50"; // Vector line
const vector1 = "https://www.figma.com/api/mcp/asset/d3ec4de9-3478-4971-9327-7ad41ea78b50";
const vector12 = vector1; // Same as vector1
const vector13 = vector1; // Same as vector1

interface ProductCardData {
  id: number;
  backgroundImage: string;
  productImage: string;
  heartIcon: string;
  vectorLine: string;
  title: string;
  salePrice: string;
  originalPrice: string;
  discount: string;
}

export const PromotionalOffersSection = (): React.JSX.Element => {
  const products: ProductCardData[] = [
    {
      id: 1,
      backgroundImage: image84,
      productImage: image9,
      heartIcon: image10,
      vectorLine: vector1,
      title: "Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600",
      salePrice: "1.245.300 Đ",
      originalPrice: "1.779.000 Đ",
      discount: "-30%",
    },
    {
      id: 2,
      backgroundImage: image8,
      productImage: image,
      heartIcon: image102,
      vectorLine: image1,
      title: "Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600",
      salePrice: "1.245.300 Đ",
      originalPrice: "1.779.000 Đ",
      discount: "-30%",
    },
    {
      id: 3,
      backgroundImage: image82,
      productImage: image92,
      heartIcon: image103,
      vectorLine: vector12,
      title: "Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600",
      salePrice: "1.245.300 Đ",
      originalPrice: "1.779.000 Đ",
      discount: "-30%",
    },
    {
      id: 4,
      backgroundImage: image83,
      productImage: image93,
      heartIcon: image104,
      vectorLine: vector13,
      title: "Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600",
      salePrice: "1.245.300 Đ",
      originalPrice: "1.779.000 Đ",
      discount: "-30%",
    },
  ];

  const marginLeftValues = ["ml-[21px]", "ml-[42px]", "ml-[38px]", "ml-[30px]"];

  return (
    <section className="absolute top-[669px] left-[111px] w-[991px] h-[465px] flex rounded-[45px] overflow-hidden bg-[linear-gradient(180deg,rgba(248,227,184,1)_0%,rgba(226,182,99,1)_100%)]">
      {products.map((product, index) => (
        <article
          key={product.id}
          className={`mt-[100px] ${index === 0 ? "w-[209px]" : "w-[207px]"} h-[285px] relative ${marginLeftValues[index]}`}
        >
          <img
            className={`absolute top-0 ${index === 0 ? "left-px" : "left-0"} w-[201px] h-[285px] aspect-[0.71]`}
            alt="Product background"
            src={product.backgroundImage}
          />

          <div
            className={`absolute top-0 ${index === 0 ? "left-0 w-[203px]" : "left-0 w-[201px]"} h-[285px] rounded-[17px] border border-solid border-[#d08856]`}
          />

          <div
            className={`absolute top-9 left-[15px] ${index === 0 ? "w-[170px]" : "w-[168px]"} h-[237px] bg-white rounded-[17px] overflow-hidden`}
          >
            <img
              className="absolute top-[17px] left-[29px] w-[115px] h-[115px] aspect-[1] object-cover"
              alt={product.title}
              src={product.productImage}
            />

            <button
              className="absolute top-[209px] left-[22px] w-[79px] h-[15px] flex bg-[#c40029] rounded-md overflow-hidden cursor-pointer border-0"
              aria-label="Thêm vào giỏ hàng"
            >
              <span className="mt-[3px] w-[62px] h-[9px] ml-[7px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-white text-[7px] tracking-[0] leading-[normal]">
                Thêm vào giỏ hàng
              </span>
            </button>

            <div className="absolute top-[7px] left-[118px] w-[39px] h-[13px] flex bg-[#c40029] rounded-md overflow-hidden">
              <span className="mt-0.5 w-[25px] h-2.5 ml-[7px] [font-family:'Archivo_Black-Regular',Helvetica] text-white text-[9px] whitespace-nowrap font-normal tracking-[0] leading-[normal]">
                {product.discount}
              </span>
            </div>

            <button
              className="absolute top-[207px] left-[122px] w-5 h-5 aspect-[1] cursor-pointer border-0 bg-transparent p-0"
              aria-label="Thêm vào danh sách yêu thích"
            >
              <img
                className="w-full h-full object-cover"
                alt="Yêu thích"
                src={product.heartIcon}
              />
            </button>

            <img
              className="absolute top-48 left-[100px] w-[60px] h-px object-cover"
              alt=""
              src={product.vectorLine}
            />
          </div>

          <p
            className={`absolute ${index === 0 ? "top-[173px]" : "top-[172px]"} left-[27px] ${index === 0 ? "w-[158px]" : "w-[156px]"} [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] leading-[normal]`}
          >
            {product.title}
          </p>

          <div
            className={`absolute top-[221px] left-8 ${index === 0 ? "w-[60px]" : ""} [font-family:'Tilt_Warp-Regular',Helvetica] text-[#ff0000] text-[11px] font-normal tracking-[0] leading-[normal]`}
          >
            {product.salePrice}
          </div>

          <div
            className={`absolute top-[221px] ${index === 0 ? "left-[116px] w-[59px]" : "left-[115px]"} [font-family:'Tilt_Warp-Regular',Helvetica] text-black text-[11px] font-normal tracking-[0] leading-[normal]`}
          >
            {product.originalPrice}
          </div>
        </article>
      ))}
    </section>
  );
};
