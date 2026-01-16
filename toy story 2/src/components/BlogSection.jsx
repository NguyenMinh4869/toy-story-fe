import './BlogSection.css'

const BlogSection = () => {
  const blogs = [
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

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextElementSibling?.classList.add('show')
  }

  return (
    <section className="blog-section">
      <div className="section-header">
        <h2 className="section-title">Cẩm nang mua sắm</h2>
        <button className="btn-see-more">
          Xem Thêm
          <svg className="arrow-icon" width="11" height="12" viewBox="0 0 11 12" fill="none">
            <path d="M5.5 1L10 6L5.5 11" stroke="red" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-icon">
            <div className="divider-icon-placeholder"></div>
          </div>
          <div className="divider-line"></div>
        </div>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-card">
            <div className="blog-image">
              <img 
                src={blog.image} 
                alt={blog.title}
                onError={handleImageError}
              />
              <div className="blog-image-placeholder">
                <span>📚</span>
              </div>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <div className="blog-meta">
                <span className="blog-date">{blog.date}</span>
                <span className="blog-author">{blog.author}</span>
              </div>
              <p className="blog-description">{blog.description}</p>
              <a href="#" className="blog-link">Xem Thêm</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
