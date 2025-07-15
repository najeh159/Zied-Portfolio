"use client"
import logo from './assets/logo.png'
import { useState } from "react"
import { FaDiscord, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import demoReel from "./assets/Jefo.mp4";
import th from './assets/th.png'
const Portfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handlePlayClick = () => {
    setIsPlaying(true);
  };


  const services = [
    {
      title: "Video Editing",
      description: "Professional post-production editing with color correction, audio mixing, and visual effects",
      icon: "🎬",
    },
    {
      title: "Motion Graphics",
      description: "Custom animations, titles, and graphic elements to enhance your video content",
      icon: "✨",
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading to achieve the perfect cinematic look",
      icon: "🎨",
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={logo} alt="Jefo Logo" className="logo-img" />
              <span className="logo-text">Jefo</span>
            </div>

            <nav className={`nav ${mobileMenuOpen ? "nav-open" : ""}`}>
              <button onClick={() => scrollToSection("home")} className="nav-link">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection("services")} className="nav-link">
                Services
              </button>
              <button onClick={() => scrollToSection("contact")} className="nav-link">
                Contact
              </button>
            </nav>

            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Jefo</h1>
            <p className="hero-subtitle">Professional Video Editor & Motion Graphics Artist</p>
            <p className="hero-description">
              Bringing your vision to life through compelling storytelling, stunning visuals, and seamless editing. From
              corporate videos to creative projects, I deliver high-quality content that captivates audiences.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection("services")}>
                View My Work
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection("contact")}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reel */}
      <section className="featured-reel">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Demo Reel</h2>
            <p className="section-subtitle">A showcase of my recent work and editing style</p>
          </div>
          <div className="reel-container">
            <div className="video-player" onClick={handlePlayClick} style={{ cursor: "pointer" }}>
              {!isPlaying ? (
                <>
                  <img
                    src={th}
                    alt="Demo Reel Thumbnail"
                    className="video-thumbnail"
                  />
                  <div className="play-overlay">
                    <div className="play-button">
                      <span className="play-icon">▶</span>
                    </div>
                  </div>
                  <div className="video-info">
                    <span>Demo Reel 2024 • 0:28</span>
                  </div>
                </>
              ) : (
                <video
                  src={demoReel}
                  controls='true'
                  autoPlay
                  className="video-player-element"
                  style={{ width: '100%', borderRadius: "8px" }}
                />
              )}
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About Jefo</h2>
              <p className="about-paragraph">
                With over a year and a half of experience in video editing and post-production, I specialize in creating
                compelling visual narratives that engage and inspire audiences. My passion for storytelling combined
                with technical expertise allows me to bring any vision to life.
              </p>
              <p className="about-paragraph">
                I work with a variety of clients from small businesses to large corporations, always delivering
                high-quality content that exceeds expectations. Every project is approached with creativity, attention
                to detail, and a commitment to excellence.
              </p>
              <div className="stats">
                <div className="stat">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Clients Completed</div>
                </div>
                <div className="stat">
                  <div className="stat-number">1.5+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={logo} alt="Jefo at work" />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Services</h2>
            <p className="section-subtitle">Professional video editing and post-production services</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div style={{ cursor: 'pointer' }} key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">Ready to bring your vision to life? Get in touch!</p>
          </div>
          <div className="contact-content">
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <h3>Email</h3>
                <a href="mailto:jefobambo@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
                  <p>Click me</p>
                </a>

              </div>
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <h3>Phone</h3>
                <p href="tel:+21693707288" >+216 93 707 288</p>
              </div>
              <div className="contact-method">
                <FaDiscord className="contact-icon" size={65} color="#1DA1F2" />
                <h3>Discord</h3>
                <a style={{ textDecoration: "none", color: "inherit" }} href='https://discord.com/channels/@me/1389601663869784066'>link</a>
              </div>

              <div className="contact-method">
                <FaTwitter className="contact-icon" size={65} color="#1DA1F2" />
                <h3>Twitter</h3>
                <a style={{ textDecoration: "none", color: "inherit" }} href='https://x.com/BamboJefo'>link</a>
              </div>



              <div className="contact-method">
                <FaYoutube className="contact-icon" size={65} color="red" />
                <h3>Youtube</h3>
                <a style={{ textDecoration: "none", color: "inherit" }} href='https://www.youtube.com/@MindGrindVisuals'>link</a>
              </div>

              <div className="contact-method">
                <FaWhatsapp className="contact-icon" size={65} color="green" />
                <h3>Whatsapp</h3>
                <a style={{ textDecoration: "none", color: "inherit" }} href='https://wa.me/21693707288'>link</a>
              </div>



            </div>
            <div className="contact-cta">
              <p className="ctaWork">Start Your Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Jefo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
