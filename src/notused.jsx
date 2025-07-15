import React from 'react'

function notused() {

    const portfolioItems = [
      {
        id: "1",
        title: "Corporate Brand Video",
        category: "Commercial",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Corporate+Video",
        duration: "2:30",
        client: "Tech Corp",
      },
      {
        id: "2",
        title: "Wedding Highlight Reel",
        category: "Wedding",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Wedding+Video",
        duration: "4:15",
        client: "Sarah & Mike",
      },
      {
        id: "3",
        title: "Music Video",
        category: "Music",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Music+Video",
        duration: "3:45",
        client: "Local Band",
      },
      {
        id: "4",
        title: "Product Launch",
        category: "Commercial",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Product+Launch",
        duration: "1:20",
        client: "StartupXYZ",
      },
      {
        id: "5",
        title: "Documentary Short",
        category: "Documentary",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Documentary",
        duration: "8:30",
        client: "Non-profit Org",
      },
      {
        id: "6",
        title: "Event Recap",
        category: "Event",
        thumbnail: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=Event+Video",
        duration: "5:00",
        client: "Conference 2024",
      },
    ]


    
  return (
    <div>
      {/* Portfolio Grid */}
      <section id="portfolio" className="portfolio-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">Recent projects and collaborations</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="portfolio-image">
                  <img src={item.thumbnail || "/placeholder.svg"} alt={item.title} />
                  <div className="portfolio-overlay">
                    <button className="watch-btn">
                      <span className="play-icon">▶</span>
                      Watch
                    </button>
                  </div>
                  <div className="duration-badge">{item.duration}</div>
                  <div className="category-badge">{item.category}</div>
                </div>
                <div className="portfolio-content">
                  <h3 className="portfolio-title">{item.title}</h3>
                  <p className="portfolio-client">Client: {item.client}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default notused