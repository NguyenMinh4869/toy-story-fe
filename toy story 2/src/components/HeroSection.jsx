import './HeroSection.css'

const HeroSection = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none'
    if (e.target.classList.contains('hero-bg-image')) {
      e.target.parentElement.style.backgroundColor = '#1a4a8c'
    }
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://www.figma.com/api/mcp/asset/85ffdb83-c5e4-47c3-9b96-2b51b1cd711c" 
          alt="Hero background" 
          className="hero-bg-image"
          onError={handleImageError}
        />
        <div className="hero-bg-placeholder">
          <h1 className="hero-title">DISNEY PIXAR TOY STORY 5</h1>
          <p className="hero-subtitle">ONLY IN THEATERS JUNE 19, 2026</p>
        </div>
      </div>
      <div className="hero-controls">
        <button className="hero-control-btn left" aria-label="Previous">
          <svg width="33" height="31" viewBox="0 0 33 31" fill="none">
            <path d="M20 6L10 15.5L20 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="hero-control-btn right" aria-label="Next">
          <svg width="33" height="31" viewBox="0 0 33 31" fill="none">
            <path d="M13 6L23 15.5L13 25" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
