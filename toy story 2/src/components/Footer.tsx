import React from 'react'
import { Facebook, Youtube, Instagram } from 'lucide-react'
import { LOGO_TOY_STORY, STORE_FACADE, DECOR_COINS_CLOUDS } from '../constants/imageAssets'

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com', Icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com', Icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com', Icon: Youtube },
]

const policyLinks = [
  { label: 'Chính sách bảo mật', href: '#' },
  { label: 'Chính sách vận chuyển', href: '#' },
  { label: 'Chính sách đổi trả', href: '#' },
  { label: 'Chính sách bảo hành và đổi trả hàng hóa', href: '#' },
]

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-white">
      <div className="flex w-full h-[39px] overflow-hidden bg-[#ab0007]">
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src={DECOR_COINS_CLOUDS}
            alt=""
            className="w-[116px] h-[39px] flex-shrink-0 object-cover object-center"
          />
        ))}
      </div>

      <div className="bg-white text-black max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <img src={LOGO_TOY_STORY} alt="TOYSTORY" className="h-[52px] w-auto mb-4" />
            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              Tham gia ngay để nhận về tay thông tin ưu đãi và hữu ích từ Mykingdom
            </p>
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 min-w-0 border border-gray-300 rounded-lg py-2 px-3 text-sm outline-none focus:border-[#ab0007]"
              />
              <button className="bg-[#ab0007] text-white font-tilt-warp text-sm py-2 px-5 rounded-lg hover:opacity-90 whitespace-nowrap">
                Đăng kí
              </button>
            </div>
            <p className="text-xs text-gray-500 mb-4">Bạn có thể hủy đăng ký bất kỳ lúc nào</p>

            <h4 className="font-tilt-warp text-base text-[#ab0007] m-0 mb-3">Thông tin liên hệ</h4>
            <ul className="list-none p-0 m-0 space-y-2 text-sm text-gray-700">
              <li>33-35 Đường Ngô Thị Bì, Khu Đô Thị Mới Him Lam, Phường Tân Hưng, TP.Hồ Chí Minh</li>
              <li><a href="tel:19001208" className="text-black underline hover:text-[#ab0007]">19001208</a></li>
              <li><a href="mailto:hotro@mykingdom.com.vn" className="text-black underline hover:text-[#ab0007]">hotro@mykingdom.com.vn</a></li>
              <li>Thứ 2 - Thứ 7: 8:00-17:00</li>
              <li>Chủ nhật: 8:00-12:00</li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-tilt-warp text-base text-[#ab0007] m-0 mb-3">Điều khoản và chính sách</h4>
            <ul className="list-none p-0 m-0 space-y-2">
              {policyLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-gray-700 underline hover:text-[#ab0007]">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-tilt-warp text-base text-[#ab0007] m-0 mb-3">Follow us</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-[#ab0007] hover:text-white text-gray-600 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <h4 className="font-tilt-warp text-base text-[#ab0007] m-0 mb-3">Hệ thống cửa hàng</h4>
            <div className="w-full max-w-[269px] h-[154px] rounded-xl overflow-hidden border border-gray-200">
              <img src={STORE_FACADE} alt="Hệ thống cửa hàng TOYSTORY" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#930005] text-center text-xs py-3 text-white">
        © {new Date().getFullYear()} Toy Story. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
