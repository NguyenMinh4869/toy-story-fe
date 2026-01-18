import React, { useState } from "react";

// Figma MCP Asset URLs
const geminiGeneratedImageS7220Js7220Js722RemovebgPreview12 = "https://www.figma.com/api/mcp/asset/227333fe-7ffe-4e9d-8d44-ea7fdce7d5a5"; // Same as geminiGeneratedImageS7220Js7220Js722RemovebgPreview1
const image62 = "https://www.figma.com/api/mcp/asset/c41e1d5f-9c82-4ce9-b9ad-d9046e8b346d";
const image63 = "https://www.figma.com/api/mcp/asset/49c15ba9-e6f3-4fe5-af71-208e8e3b81a2";
const image64 = image62; // Same as image62
const image65 = image63; // Same as image63
const image66 = image62; // Same as image62
const image67 = "https://www.figma.com/api/mcp/asset/0a8a8a27-1320-4939-97ba-bff582712e29";
const line15 = "https://www.figma.com/api/mcp/asset/84873425-9473-446e-bf8a-cc361a15a42a";

interface SocialLink {
  href: string;
  image: string;
  alt: string;
}

interface PolicyLink {
  href: string;
  text: string;
}

export const PromotionalOffersWrapperSection = (): React.JSX.Element => {
  const [email, setEmail] = useState("");

  const socialLinks: SocialLink[] = [
    {
      href: "https://facebook.com",
      image: image62,
      alt: "Facebook",
    },
    {
      href: "https://instagram.com",
      image: image63,
      alt: "Instagram",
    },
    {
      href: "https://youtube.com",
      image: image64,
      alt: "YouTube",
    },
    {
      href: "https://tiktok.com",
      image: image65,
      alt: "TikTok",
    },
    {
      href: "https://zalo.me",
      image: image66,
      alt: "Zalo",
    },
  ];

  const policyLinks: PolicyLink[] = [
    {
      href: "https://www.mykingdom.com.vn/pages/dieu-kien-giao-dich-chung",
      text: "Điều kiện giao dịch chung",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/dieu-kien-dieu-khoan-thanh-vien",
      text: "Điều kiện & Điều khoản thành viên",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/chinh-sach-giao-hang",
      text: "Chính sách giao hàng",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/private-policy",
      text: "Chính sách bảo mật",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/exchange-refunds",
      text: "Chính sách bảo hành và đổi trả hàng hóa",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/payment",
      text: "Chính sách thanh toán",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/chinh-sach-tra-gop",
      text: "Chính sách trả góp",
    },
    {
      href: "https://www.mykingdom.com.vn/pages/store-locator",
      text: "Hệ thống cửa hàng",
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <footer className="absolute top-[3113px] left-0 w-[1200px] h-[392px] bg-white">
      <img
        className="absolute top-2 left-[113px] w-[166px] h-[47px] aspect-[3.53] object-cover"
        alt="Mykingdom Logo"
        src={geminiGeneratedImageS7220Js7220Js722RemovebgPreview12}
      />

      <img
        className="top-[103px] left-[141px] w-[316px] absolute h-px"
        alt=""
        src={line15}
        role="presentation"
      />

      <form
        onSubmit={handleSubmit}
        className="absolute top-[88px] left-[475px]"
      >
        <button
          type="submit"
          className="w-[72px] h-6 flex bg-[#ca002a] rounded-[9px] overflow-hidden"
          aria-label="Đăng ký nhận thông tin"
        >
          <span className="mt-[5px] w-9 h-[13px] ml-[18px] text-[10px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-white tracking-[0] leading-[normal]">
            Đăng kí
          </span>
        </button>
      </form>

      <div className="absolute top-[18px] left-[890px] [font-family:'Viga-Regular',Helvetica] font-normal text-[#ca002a] text-sm tracking-[0] leading-[normal]">
        Follow us
      </div>

      <h2 className="absolute top-[164px] left-[141px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-[#ca002a] text-sm tracking-[0] leading-[normal]">
        Thông tin liên hệ
      </h2>

      <h2 className="absolute top-[164px] left-[545px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-[#ca002a] text-sm tracking-[0] leading-[normal]">
        Điều khoản và chính sách
      </h2>

      <h2 className="absolute top-[164px] left-[881px] [font-family:'Tilt_Warp-Regular',Helvetica] font-normal text-[#ca002a] text-sm tracking-[0] leading-[normal]">
        Hệ thống cửa hàng
      </h2>

      <nav
        className="absolute top-[42px] left-[853px] flex gap-[37px]"
        aria-label="Social media links"
      >
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.alt}
          >
            <img
              className={`w-${index === 1 || index === 3 ? "[29px]" : "7"} h-${index === 1 || index === 3 ? "[29px]" : "7"} aspect-[1] object-cover`}
              alt={link.alt}
              src={link.image}
            />
          </a>
        ))}
      </nav>

      <div className="absolute top-[62px] left-[126px] w-[624px] h-[248px]">
        <p className="absolute top-0 left-[15px] w-[378px] [font-family:'Tilt_Neon-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          Tham gia ngay để nhận về tay thông tin ưu đãi và hữu ích từ Mykingdom
        </p>

        <p className="absolute top-[59px] left-[15px] [font-family:'Thasadith-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal]">
          *Bạn có thể hủy đăng ký bất kỳ lúc nào!
        </p>

        <label
          htmlFor="email-input"
          className="absolute top-7 left-[15px] [font-family:'Thasadith-Regular',Helvetica] font-normal text-black text-[9px] tracking-[0] leading-[normal]"
        >
          Nhập email của bạn
        </label>

        <input
          type="email"
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sr-only"
          aria-label="Nhập email của bạn"
          required
        />

        <address className="absolute top-[143px] left-0 w-[491px] [font-family:'Red_Hat_Display-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0] leading-[normal] not-italic">
          <span className="[font-family:'Red_Hat_Display-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0]">
            33-35 Đường Ngô Thị Bì, Khu Đô Thị Mới Him Lam, Phường Tân Hưng,
            TP.Hồ Chí Minh
            <br />
          </span>

          <a href="tel:19001208" rel="noopener noreferrer" target="_blank">
            <span className="underline">
              19001208
              <br />
            </span>
          </a>

          <a
            href="mailto:hotro@mykingdom.com.vn"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="underline">
              hotro@mykingdom.com.vn
              <br />
            </span>
          </a>

          <span className="[font-family:'Red_Hat_Display-Regular',Helvetica] font-normal text-black text-[10px] tracking-[0]">
            Thứ 2 - Thứ 7 8:00 - 17:00
            <br />
            Chủ nhật 8:00 - 12:00
          </span>
        </address>

        <nav
          className="absolute top-32 left-[402px] [font-family:'Red_Hat_Display-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] leading-[normal]"
          aria-label="Policy links"
        >
          {policyLinks.map((link, index) => (
            <span key={index}>
              <a
                href={link.href}
                rel="noopener noreferrer"
                target="_blank"
                className="[font-family:'Red_Hat_Display-Regular',Helvetica] font-normal text-black text-[11px] tracking-[0] underline"
              >
                {link.text}
              </a>
              <br />
            </span>
          ))}
        </nav>
      </div>

      <img
        className="absolute top-48 left-[815px] w-[269px] h-[154px] aspect-[1.75] object-cover"
        alt="Store location map"
        src={image67}
      />
    </footer>
  );
};
