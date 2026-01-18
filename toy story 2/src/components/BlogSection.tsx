import React from 'react'
import { ChevronRight } from 'lucide-react'

interface Blog {
  image: string
  title: string
  date: string
  author: string
  description: string
}

const BlogSection: React.FC = () => {
  const blogs: Blog[] = [
    {
      image: "https://www.figma.com/api/mcp/asset/1d1fb706-1cdb-4b52-908b-8bc96b2bb371",
      title: "Cẩm nang mua đồ chơi không mua phải hàng giả",
      date: "07.01.2004",
      author: "Nguyen Hoang Minh",
      description: "Mua đồ chơi cho con trai hay con gái thì mua ở chỗ tôi nhé có giảm giá cho người biết chơi đồ hoặc không biết chơi đồ biết chơi thì càng tốt có thể giảm giá mạng hehe hi hi haha hah ah ...."
    },
    {
      image: "https://www.figma.com/api/mcp/asset/1d1fb706-1cdb-4b52-908b-8bc96b2bb371",
      title: "Cẩm nang mua đồ chơi không mua phải hàng giả",
      date: "07.01.2004",
      author: "Nguyen Hoang Minh",
      description: "Mua đồ chơi cho con trai hay con gái thì mua ở chỗ tôi nhé có giảm giá cho người biết chơi đồ hoặc không biết chơi đồ biết chơi thì càng tốt có thể giảm giá mạng hehe hi hi haha hah ah ...."
    }
  ]

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
    <section className="py-20 px-[149px] mb-20 max-xl:px-5 max-xl:py-10">
      <div className="text-center mb-10">
        <h2 className="font-tilt-warp text-5xl bg-gradient-to-b from-white via-white to-[#ffd900] bg-clip-text text-transparent m-0 mb-5 leading-[1.2]">Cẩm nang mua sắm</h2>
        <button className="bg-gradient-to-b from-[#fef6cc] to-[#f3d433] border-none rounded-[34px] py-[17px] px-[49px] font-tilt-warp text-[15px] text-red-600 cursor-pointer inline-flex items-center gap-3 m-5">
          Xem Thêm
          <ChevronRight className="w-[11px] h-3 rotate-90 flex-shrink-0" size={12} stroke="red" strokeWidth={2} />
        </button>
        <div className="flex items-center justify-center gap-[17px] mt-[27px]">
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
          <div className="w-[53.707px] h-[53.707px] rotate-[13deg]">
            <div className="w-full h-full bg-[#d8c59e] rounded-sm border border-black/16"></div>
          </div>
          <div className="w-[405px] h-1 bg-[#d8c59e] border border-black/16 max-xl:w-[200px]"></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-10 max-xl:grid-cols-1">
        {blogs.map((blog, index) => (
          <article key={index} className="bg-white rounded-[49px] overflow-hidden p-0">
            <div className="w-full h-[151px] overflow-hidden relative bg-gradient-to-br from-gray-100 to-gray-200">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover [&[style*='display:_none']~.blog-image-placeholder]:flex"
                onError={handleImageError}
              />
              <div className="hidden absolute inset-0 items-center justify-center text-5xl [img[style*='display:_none']~&]:flex">
                <span>📚</span>
              </div>
            </div>
            <div className="p-[17px_46px_17px_13px]">
              <h3 className="font-varela text-sm text-[#004c6c] m-0 mb-3 font-normal">{blog.title}</h3>
              <div className="flex gap-[18px] mb-3 font-varela text-sm text-black">
                <span>{blog.date}</span>
                <span className="text-[rgba(72,58,58,0.46)]">{blog.author}</span>
              </div>
              <p className="font-varela text-[13px] text-black leading-[1.5] m-0 mb-5">{blog.description}</p>
              <a href="#" className="font-viga text-sm text-red-600 no-underline inline-block hover:underline">Xem Thêm</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
