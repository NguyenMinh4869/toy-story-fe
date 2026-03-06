import React from 'react'
import { ChevronLeft, ChevronRight, Heart, Image } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../types/ProductCard'

interface ProductSectionProps {
  title: string
  subtitle?: string
  products: ProductCard[]
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
    if (nextElement) {
      nextElement.classList.add('flex')
      nextElement.classList.remove('hidden')
    }
  }

  return (
    <section className={`py-20 px-[111px] mb-20 relative max-xl:px-5 max-xl:py-10 ${hasGradient ? 'bg-gradient-to-b from-[#f8e3b8] via-[#f8e3b8] to-[#e2b663] rounded-[45px] py-[100px] px-[21px] pb-20 mx-[111px] mb-20 max-xl:mx-5' : ''}`}>
      <div className="text-center mb-10">
        {subtitle && (
          <div className="mb-5 h-[53px] flex items-center justify-center">
            <div className="w-[157px] h-[53px] bg-white/20 rounded-lg"></div>
          </div>
        )}
        <h2 className={`font-tilt-warp text-5xl bg-gradient-to-b from-white via-white to-[#ffd900] bg-clip-text text-transparent m-0 leading-[1.2] text-center ${!hasGradient ? 'mb-[27px]' : ''}`}>{title}</h2>
        {subtitle && <p className="font-tilt-warp text-sm text-white m-2.5">{subtitle}</p>}
        <div className="flex items-center justify-center gap-[17px] mt-[27px]">
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
          <div className="w-[53.707px] h-[53.707px] rotate-[13deg]">
            <div className="w-full h-full bg-[#d8c59e] rounded-sm border border-black/16"></div>
          </div>
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
        </div>
      </div>
      <div className="relative flex items-center gap-5">
        <button className="bg-transparent border-none cursor-pointer w-[33px] h-[31px] flex-shrink-0 z-[2]" aria-label="Previous">
          <ChevronLeft size={33} stroke="white" strokeWidth={3} className="w-full h-full" />
        </button>
        <div className="flex gap-[50px] overflow-x-auto scroll-smooth flex-1 py-5 [&::-webkit-scrollbar]:hidden">
          {products.map((product, index) => (
            <div key={index} className="relative min-w-[203px] h-[285px] flex-shrink-0">
              <Link to={`/product/${index + 1}`} className="no-underline text-inherit block w-full h-full">
              <div className="absolute inset-0 z-[1] rounded-[19px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[19px]"></div>
              </div>
              <div className="relative z-[2] w-full h-full border border-[#d08856] rounded-[17px] p-[36px_15px] flex flex-col">
                <div className="bg-white rounded-[17px] p-[17px] mb-3 flex-1 flex items-center justify-center relative min-h-[150px]">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-[115px] h-[115px] object-contain rounded-xl"
                    onError={handleImageError}
                  />
                  <div className="hidden flex-col items-center justify-center gap-2 text-[#999] text-[10px] [img[style*='display:_none']~&]:flex">
                    <Image size={60} stroke="#ccc" strokeWidth={2} />
                    <span>Image</span>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-[160px] -right-[50px] bg-[#c40029] text-white font-archivo text-[9px] px-[7px] py-0.5 rounded-md">{product.discount}</div>
                  <h3 className="font-tilt-warp text-[11px] text-black m-2 mt-2 leading-[1.4] h-[62px] overflow-hidden line-clamp-3">{product.name}</h3>
                  <div className="flex gap-5 items-center m-2">
                    <span className="font-tilt-warp text-[11px] text-red-600">{product.price}</span>
                    <span className="font-tilt-warp text-[11px] text-black line-through relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:right-0 before:h-px before:bg-black">{product.originalPrice}</span>
                  </div>
                  <div className="flex gap-5 items-center mt-3">
                    <button className="bg-[#c40029] text-white font-tilt-warp text-[7px] px-[7px] py-[3px] border-none rounded-md cursor-pointer flex-1">Thêm vào giỏ hàng</button>
                    <button className="bg-transparent border-none cursor-pointer w-5 h-5 p-0" aria-label="Add to favorites">
                      <Heart size={20} stroke="#c40029" strokeWidth={2} fill="none" className="w-full h-full" />
                    </button>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
        <button className="bg-transparent border-none cursor-pointer w-[33px] h-[31px] flex-shrink-0 z-[2]" aria-label="Next">
          <ChevronRight size={33} stroke="white" strokeWidth={3} className="w-full h-full" />
        </button>
      </div>
    </section>
  )
}

export default ProductSection
