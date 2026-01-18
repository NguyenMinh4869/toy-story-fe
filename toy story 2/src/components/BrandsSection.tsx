import React from 'react'

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
    if (nextElement) {
      nextElement.classList.add('flex')
      nextElement.classList.remove('hidden')
    }
  }

  return (
    <section className="py-20 px-[132px] mb-20 max-xl:px-5 max-xl:py-10">
      <div className="text-center mb-10">
        <h2 className="font-tilt-warp text-5xl bg-gradient-to-b from-white via-white to-[#ffd900] bg-clip-text text-transparent m-0 mb-[27px] leading-[1.2]">Thương hiệu uy tín</h2>
        <div className="flex items-center justify-center gap-[17px]">
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
          <div className="w-[53.707px] h-[53.707px] rotate-[13deg]">
            <div className="w-full h-full bg-[#d8c59e] rounded-sm border border-black/16"></div>
          </div>
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10 max-xl:grid-cols-2">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white rounded-[32px] p-5 flex items-center justify-center h-24 cursor-pointer transition-transform hover:scale-105 relative">
            <img 
              src="https://www.figma.com/api/mcp/asset/ea8dd4e8-ec41-449b-b606-2f8996b5be87" 
              alt={brand.name}
              className="max-w-full max-h-full object-contain [&[style*='display:_none']~.brand-placeholder]:flex"
              onError={handleImageError}
            />
            <div className="hidden items-center justify-center w-full h-full font-tilt-warp text-2xl font-bold text-[#ab0007] [img[style*='display:_none']~&]:flex">
              <span>LEGO</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandsSection
