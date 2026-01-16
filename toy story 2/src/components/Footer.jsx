import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-decor">
        {[...Array(11)].map((_, i) => (
          <img 
            key={i}
            src="https://www.figma.com/api/mcp/asset/1f5f2438-2e1a-4bad-9277-37d56d8daf39" 
            alt="Decoration" 
            className="footer-decor-item"
          />
        ))}
      </div>
      <div className="footer-red-bar">
        <div className="footer-info-item">
          <img 
            src="https://www.figma.com/api/mcp/asset/6849fe38-3f44-43c3-91d6-a32c6ff0279d" 
            alt="Icon" 
          />
          <span>miễn phí giao hàng đơn 200k</span>
        </div>
        <div className="footer-info-item">
          <img 
            src="https://www.figma.com/api/mcp/asset/6849fe38-3f44-43c3-91d6-a32c6ff0279d" 
            alt="Icon" 
          />
          <span>miễn phí giao hàng đơn 200k</span>
        </div>
        <div className="footer-info-item">
          <img 
            src="https://www.figma.com/api/mcp/asset/6849fe38-3f44-43c3-91d6-a32c6ff0279d" 
            alt="Icon" 
          />
          <span>miễn phí giao hàng đơn 200k</span>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-logo">
            <img 
              src="https://www.figma.com/api/mcp/asset/a3292b82-feb6-483d-a4f2-619ec8b796dd" 
              alt="Logo" 
            />
          </div>
          <p className="footer-description">
            Tham gia ngay để nhận về tay thông tin ưu đãi và hữu ích từ Mykingdom
          </p>
          <p className="footer-small-text">*Bạn có thể hủy đăng ký bất kỳ lúc nào!</p>
          <div className="footer-email-signup">
            <input 
              type="email" 
              placeholder="Nhập email của bạn" 
              className="email-input"
            />
            <button className="btn-subscribe">Đăng kí</button>
          </div>
          <div className="footer-contact">
            <h4>Thông tin liên hệ</h4>
            <ul>
              <li>33-35 Đường Ngô Thị Bì, Khu Đô Thị Mới Him Lam, Phường Tân Hưng, TP.Hồ Chí Minh</li>
              <li><a href="tel:19001208">19001208</a></li>
              <li><a href="mailto:hotro@mykingdom.com.vn">hotro@mykingdom.com.vn</a></li>
              <li>Thứ 2 - Thứ 7 8:00 - 17:00</li>
              <li>Chủ nhật 8:00 - 12:00</li>
            </ul>
          </div>
        </div>
        <div className="footer-middle">
          <h4>Điều khoản và chính sách</h4>
          <ul>
            <li><a href="https://www.mykingdom.com.vn/pages/dieu-kien-giao-dich-chung">Điều kiện giao dịch chung</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/dieu-kien-dieu-khoan-thanh-vien">Điều kiện & Điều khoản thành viên</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/chinh-sach-giao-hang">Chính sách giao hàng</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/private-policy">Chính sách bảo mật</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/exchange-refunds">Chính sách bảo hành và đổi trả hàng hóa</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/payment">Chính sách thanh toán</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/chinh-sach-tra-gop">Chính sách trả góp</a></li>
            <li><a href="https://www.mykingdom.com.vn/pages/store-locator">Hệ thống cửa hàng</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow us</h4>
          <div className="social-icons">
            <img 
              src="https://www.figma.com/api/mcp/asset/9649f4ac-a977-46e2-bcd8-74773ac48c70" 
              alt="Social" 
            />
            <img 
              src="https://www.figma.com/api/mcp/asset/7493b9e4-4b31-4cbd-96d2-ae9a6cf887ba" 
              alt="Social" 
            />
            <img 
              src="https://www.figma.com/api/mcp/asset/9649f4ac-a977-46e2-bcd8-74773ac48c70" 
              alt="Social" 
            />
            <img 
              src="https://www.figma.com/api/mcp/asset/7493b9e4-4b31-4cbd-96d2-ae9a6cf887ba" 
              alt="Social" 
            />
            <img 
              src="https://www.figma.com/api/mcp/asset/9649f4ac-a977-46e2-bcd8-74773ac48c70" 
              alt="Social" 
            />
          </div>
          <h4>Hệ thống cửa hàng</h4>
          <div className="store-image">
            <img 
              src="https://www.figma.com/api/mcp/asset/5d22d290-b7a7-4271-8d67-dd4b5263c2d2" 
              alt="Store" 
            />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
