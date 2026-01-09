import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to Event Registration System</h1>
            <p>Discover and register for amazing events with instant QR-coded tickets</p>
            <div className="hero-actions">
              <Link to="/events" className="btn btn-primary">
                Browse Events
              </Link>
              <Link to="/register" className="btn btn-outline">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎫</div>
              <h3>QR-Coded Tickets</h3>
              <p>Instant digital tickets with unique QR codes for secure event check-in</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Quick Registration</h3>
              <p>Register for events in seconds with our streamlined process</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📧</div>
              <h3>Email Confirmation</h3>
              <p>Receive instant email notifications with your ticket details</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>Your data is protected with industry-standard security measures</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
