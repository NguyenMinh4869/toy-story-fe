import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.currentTarget
    target.style.display = 'none'
    if (target.classList.contains('hero-bg-image')) {
      const parent = target.parentElement as HTMLElement
      if (parent) {
        parent.style.backgroundColor = '#1a4a8c'
      }
    }
  }

  return (
    <section className="relative h-[306px] mx-[111px] rounded-[29px] overflow-hidden mb-[149px] max-xl:mx-5 max-xl:mb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a8c] to-[#4a90e2]">
        <img 
          src="https://www.figma.com/api/mcp/asset/85ffdb83-c5e4-47c3-9b96-2b51b1cd711c" 
          alt="Hero background" 
          className="w-full h-full object-cover rounded-[29px]"
          onError={handleImageError}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-[1]">
          <h1 className="font-tilt-warp text-5xl m-0 mb-2.5 text-center drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">DISNEY PIXAR TOY STORY 5</h1>
          <p className="font-tilt-warp text-lg m-0 text-center drop-shadow-[1px_1px_2px_rgba(0,0,0,0.3)]">ONLY IN THEATERS JUNE 19, 2026</p>
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-11 z-[3]">
        <button className="bg-transparent border-none cursor-pointer p-0 w-[33px] h-[31px]" aria-label="Previous">
          <ChevronLeft size={33} stroke="white" strokeWidth={3} className="w-full h-full" />
        </button>
        <button className="bg-transparent border-none cursor-pointer p-0 w-[33px] h-[31px]" aria-label="Next">
          <ChevronRight size={33} stroke="white" strokeWidth={3} className="w-full h-full" />
        </button>
      </div>
    </section>
  )
}

export default HeroSection
