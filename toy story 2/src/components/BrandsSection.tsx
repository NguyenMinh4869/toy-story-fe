import React from 'react'
import './BrandsSection.css'

interface Brand {
  id: number
  name: string
}

const BrandsSection: React.FC = () => {
  const brands: Brand[] = Array(8).fill(null).map((_, i) => ({
    id: i,
    name: `Brand ${i + 1}`
  }))

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget
    target.style.display = 'none'
    const nextElement = target.nextElementSibling as HTMLElement
    nextElement?.classList.add('show')
  }

  return (
    <section className="brands-section">
      <div className="section-header">
        <h2 className="section-title">Thương hiệu uy tín</h2>
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <div className="divider-icon-placeholder"></div>
          </div>
          <div className="divider-line"></div>
        </div>
      </div>
      <div className="brands-grid">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-card">
            <img 
              src="https://www.figma.com/api/mcp/asset/ea8dd4e8-ec41-449b-b606-2f8996b5be87" 
              alt={brand.name}
              onError={handleImageError}
            />
            <div className="brand-placeholder">
              <span>LEGO</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandsSection
