import React from 'react'
import './ProductSection.css'
import { Link } from 'react-router-dom'

interface Product {
  image: string
  name: string
  price: string
  originalPrice: string
  discount: string
}

interface ProductSectionProps {
  title: string
  subtitle?: string
  products: Product[]
  hasGradient?: boolean
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  title, 
  subtitle, 
  products, 
  hasGradient = false 
}) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget
    target.style.display = 'none'
    const nextElement = target.nextElementSibling as HTMLElement
    nextElement?.classList.add('show')
  }

  return (
    <section className={`product-section ${hasGradient ? 'with-gradient' : ''}`}>
      <div className="section-header">
        {subtitle && (
          <div className="section-title-decor">
            <div className="decor-placeholder"></div>
          </div>
        )}
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <div className="divider-icon-placeholder"></div>
          </div>
          <div className="divider-line"></div>
        </div>
      </div>
      <div className="product-grid-wrapper">
        <button className="product-nav-btn left" aria-label="Previous">
          <svg width="33" height="31" viewBox="0 0 33 31" fill="none">
            <path d="M20 6L10 15.5L20 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Link to={`/product/${index + 1}`} className="product-card-link">
              <div className="product-card-bg">
                <div className="card-bg-placeholder"></div>
              </div>
              <div className="product-card-border">
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={handleImageError}
                  />
                  <div className="product-image-placeholder">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <rect x="5" y="5" width="50" height="50" rx="5" stroke="#ccc" strokeWidth="2" strokeDasharray="4 4"/>
                      <path d="M20 25L25 30L40 15" stroke="#ccc" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span>Image</span>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-badge">{product.discount}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="price-current">{product.price}</span>
                    <span className="price-original">{product.originalPrice}</span>
                  </div>
                  <div className="product-actions">
                    <button className="btn-add-cart">Thêm vào giỏ hàng</button>
                    <button className="btn-favorite" aria-label="Add to favorites">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10 17L3.5 10.5C2.5 9.5 2 8.25 2 6.875C2 4.125 4.125 2 6.875 2C7.875 2 8.75 2.375 9.5 3L10 3.5L10.5 3C11.25 2.375 12.125 2 13.125 2C15.875 2 18 4.125 18 6.875C18 8.25 17.5 9.5 16.5 10.5L10 17Z" stroke="#c40029" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="product-nav-btn right" aria-label="Next">
          <svg width="33" height="31" viewBox="0 0 33 31" fill="none">
            <path d="M13 6L23 15.5L13 25" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default ProductSection
