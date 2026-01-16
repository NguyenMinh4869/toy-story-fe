import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductSection from '../components/ProductSection'
import './ProductDetail.css'

interface Product {
  id: string
  name: string
  price: number
  originalPrice: number
  description: string
  brandName: string
  categoryName: string
  imageUrl: string
  images: string[]
  sku: string
  ageRange: string
  origin: string
  manufacturer: string
  gender: string
  stock: number
  storeName: string
  storeAddress: string
  storePhone: string
  discount: number
}

interface ProductCardData {
  image: string
  name: string
  price: string
  originalPrice: string
  discount: string
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  // Mock data - structure ready for API call with useEffect
  const product: Product = {
    id: id || '1',
    name: 'Mô Hình Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600',
    price: 1245300,
    originalPrice: 1779000,
    description: `Khám phá thế giới kỳ diệu qua từng mặt khối!
Bé sẽ hoàn toàn bị cuốn hút vào hành trình khám phá đầy màu sắc và bất ngờ với đồ chơi hình khối 6 mặt PEEK A BOO – mã PAB055. Sản phẩm là sự kết hợp hoàn hảo giữa học và chơi, giúp bé phát triển đa giác quan, khả năng vận động, nhận thức và tư duy logic ngay từ giai đoạn đầu đời.

6 mặt – 6 trải nghiệm học hỏi độc đáo
Mỗi mặt của khối đồ chơi được thiết kế như một mini-game nhỏ:
- Mặt 1 – Bánh răng xoay: Bé sẽ học cách phối hợp tay mắt và nhận biết nguyên lý vận hành.
- Mặt 2 –  Mặt trống vui nhộn-  Giúp bé làm phát triên vận động tinh, xúc giác qua việc chạm và lắng nghe âm thanh
- Mặt 3 – Cửa sổ lật mở và đàn piano: Rèn luyện kỹ năng điều khiển ngón tay linh hoạt, tạo cảm giác vui khi khám phá điều bất ngờ phía sau.

Lợi ích nổi bật cho bé
- Phát triển vận động tinh và sự khéo léo của bàn tay.
- Khuyến khích sự tò mò, tư duy giải quyết vấn đề.
- Tăng khả năng ghi nhớ, quan sát và phản xạ.
- Tạo nền tảng cho kỹ năng xã hội thông qua việc tự chơi hoặc chơi cùng người lớn.`,
    brandName: 'SKIBIDI TOILET',
    categoryName: 'PEEK TODDLERS TOY',
    imageUrl: 'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
    images: [
      'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff'
    ],
    sku: 'ST1310',
    ageRange: '6 tháng tuổi trở lên',
    origin: 'Việt Nam',
    manufacturer: 'Trung Quốc',
    gender: 'Preschool',
    stock: 24,
    storeName: '[CHA193] MYKINGDOM YÊN BÁI ĐÀ NẴNG',
    storeAddress: 'Số 21 Yên Bái Phường Hải Châu 1, Quận Hải Châu Thành phố Đà Nẵng',
    storePhone: '+842363522379',
    discount: 30
  }

  // Mock related products
  const relatedProducts: ProductCardData[] = [
    {
      image: 'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      name: 'Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600',
      price: '1.245.300 Đ',
      originalPrice: '1.779.000 Đ',
      discount: '-30%'
    },
    {
      image: 'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      name: 'Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600',
      price: '1.245.300 Đ',
      originalPrice: '1.779.000 Đ',
      discount: '-30%'
    },
    {
      image: 'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      name: 'Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600',
      price: '1.245.300 Đ',
      originalPrice: '1.779.000 Đ',
      discount: '-30%'
    },
    {
      image: 'https://www.figma.com/api/mcp/asset/ddd8d83c-d216-4677-adb5-899a3f1d6fff',
      name: 'Đồ Chơi Xe Tập Đi Đa Năng Có Nhạc Và Đèn Cho Bé VTECH 80-505600',
      price: '1.245.300 Đ',
      originalPrice: '1.779.000 Đ',
      discount: '-30%'
    }
  ]

  // TODO: Replace with actual API call
  // useEffect(() => {
  //   fetch(`/api/products/${id}`)
  //     .then(res => res.json())
  //     .then(data => setProduct(data))
  // }, [id])

  const handleQuantityChange = (change: number): void => {
    setQuantity(prev => Math.max(1, prev + change))
  }

  const handleAddToCart = (): void => {
    console.log(`Adding ${quantity} of product ${id} to cart`)
    // TODO: Implement cart logic
  }

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price).replace('₫', 'Đ')
  }

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Trang chủ</span>
        <span> {'>'} </span>
        <span>{product.name}</span>
      </div>

      {/* Main Product Section */}
      <div className="product-detail-container">
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="gallery-main">
            <img 
              src={product.images[selectedImageIndex]} 
              alt={product.name}
              className="main-image"
            />
          </div>
          <div className="gallery-thumbnails">
            <button className="gallery-nav prev" aria-label="Previous image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            {product.images.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={img} alt={`${product.name} - view ${index + 1}`} />
              </div>
            ))}
            <button className="gallery-nav next" aria-label="Next image">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="product-info-section">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <span className="meta-label">Thương hiệu</span>
            <span className="meta-value brand">{product.brandName}</span>
            <span className="meta-label">SKU</span>
            <span className="meta-value">{product.sku}</span>
          </div>

          <div className="product-pricing">
            <span className="price-label">Giá Bán:</span>
            <div className="prices">
              <span className="current-price">{formatPrice(product.price)}</span>
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            </div>
          </div>

          <div className="pricing-notes">
            <p>Đã bao gồm VAT và các khoản thuế/phí theo quy định</p>
            <p>(Chưa bao gồm phí vận chuyển)</p>
            <ul>
              <li>Miễn phí vận chuyển tiêu chuẩn cho đơn hàng từ 500.000 ₫.</li>
              <li>Phí vận chuyển hỏa tốc áp dụng cho tất cả đơn hàng.</li>
              <li>Giao hàng hỏa tốc 4 tiếng. <a href="#">Xem chi tiết</a></li>
              <li>Hỗ trợ trả góp đơn hàng từ 3 triệu. <a href="#">Xem chi tiết</a></li>
            </ul>
          </div>

          {/* Quantity Selector and Add to Cart */}
          <div className="product-actions">
            <div className="quantity-label">Số lượng</div>
            <div className="quantity-actions">
              <div className="quantity-selector">
                <button 
                  className="qty-btn"
                  onClick={() => handleQuantityChange(-1)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="qty-value">{quantity}</span>
                <button 
                  className="qty-btn"
                  onClick={() => handleQuantityChange(1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>

          {/* Store Availability */}
          <div className="store-availability">
            <h3>Dự kiến các cửa hàng còn sản phẩm</h3>
            <div className="store-info">
              <p>
                <strong>{product.storeName}</strong> - <span className="stock">{product.stock}</span> có sẵn
              </p>
              <p className="store-address">{product.storeAddress}</p>
              <p className="store-phone">{product.storePhone}</p>
            </div>
          </div>

          {/* Product Specifications */}
          <div className="product-specs">
            <h3>Thông tin sản phẩm</h3>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td>Chủ đề</td>
                  <td>{product.categoryName}</td>
                </tr>
                <tr>
                  <td>Mã sản phẩm</td>
                  <td>{product.sku}</td>
                </tr>
                <tr>
                  <td>Tuổi</td>
                  <td>{product.ageRange}</td>
                </tr>
                <tr>
                  <td>Thương hiệu</td>
                  <td>{product.brandName}</td>
                </tr>
                <tr>
                  <td>Xuất xứ thương hiệu</td>
                  <td>{product.origin}</td>
                </tr>
                <tr>
                  <td>Giới tính</td>
                  <td>{product.gender}</td>
                </tr>
                <tr>
                  <td>Nơi sản xuất</td>
                  <td>{product.manufacturer}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="product-description">
        <h2>Mô tả sản phẩm</h2>
        <div className="description-content">
          {product.description.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="product-reviews">
        <h2>Đánh giá sản phẩm</h2>
        <div className="reviews-summary">
          <div className="rating-score">5.0/5</div>
          <div className="rating-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star filled">★</span>
            ))}
          </div>
        </div>
        <div className="reviews-list">
          <div className="review-item">
            <div className="reviewer-info">
              <div className="reviewer-avatar">C</div>
              <span className="reviewer-name">Minh Nguyen</span>
            </div>
            <div className="review-rating">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star filled">★</span>
              ))}
            </div>
            <p className="review-text">Ngon</p>
            <span className="review-date">01/08/2026</span>
          </div>
        </div>
        <div className="review-prompt">
          <p>Nhấn để đánh giá</p>
          <p className="review-note">Chỉ khách hàng đã mua hàng mới được đánh giá</p>
        </div>
      </div>

      {/* Related Products */}
      <ProductSection 
        title="Sản phẩm liên quan"
        products={relatedProducts}
      />
    </div>
  )
}

export default ProductDetail
