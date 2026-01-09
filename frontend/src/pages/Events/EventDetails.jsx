import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './EventDetails.css'

function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { user } = useAuth()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isRegistered, setIsRegistered] = useState(false)
  const [registering, setRegistering] = useState(false)

  useEffect(() => {
    fetchEventDetails()
  }, [id])

  const fetchEventDetails = async () => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(API_ENDPOINTS.EVENT_BY_ID(id))
      // const data = await response.json()
      
      // Mock data
      const mockEvent = {
        id: parseInt(id),
        title: 'Web Development Workshop',
        description: 'Learn modern web development with React and Node.js. This comprehensive workshop covers frontend and backend development, state management, API integration, and deployment strategies.',
        longDescription: 'Join us for an intensive full-day workshop where you\'ll learn the fundamentals and advanced concepts of modern web development. We\'ll cover React hooks, component architecture, state management with Context API, REST API integration, and best practices for deploying your applications.',
        date: '2026-02-15',
        time: '14:00',
        duration: '4 hours',
        location: 'Tech Hub, Room 301',
        address: '123 Tech Street, Innovation District',
        seats: 50,
        availableSeats: 23,
        price: 'Free',
        organizer: 'Tech Education Foundation',
        image: 'https://via.placeholder.com/800x400'
      }
      
      setEvent(mockEvent)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching event:', error)
      setLoading(false)
    }
  }

  const handleRegister = async () => {
    if (!user) {
      navigate('/login')
      return
    }

    setRegistering(true)
    try {
      // TODO: Replace with actual API call
      // await fetch(API_ENDPOINTS.REGISTER_EVENT(id), { method: 'POST' })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsRegistered(true)
      alert('Successfully registered! Check your email for the QR ticket.')
    } catch (error) {
      console.error('Registration error:', error)
      alert('Failed to register. Please try again.')
    } finally {
      setRegistering(false)
    }
  }

  const handleUnregister = async () => {
    setRegistering(true)
    try {
      // TODO: Replace with actual API call
      // await fetch(API_ENDPOINTS.UNREGISTER_EVENT(id), { method: 'DELETE' })
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsRegistered(false)
      alert('Successfully unregistered from the event.')
    } catch (error) {
      console.error('Unregistration error:', error)
      alert('Failed to unregister. Please try again.')
    } finally {
      setRegistering(false)
    }
  }

  if (loading) {
    return <div className="container">Loading event details...</div>
  }

  if (!event) {
    return <div className="container">Event not found</div>
  }

  return (
    <div className="event-details-page">
      <div className="container">
        <img src={event.image} alt={event.title} className="event-banner" />
        
        <div className="event-details-content">
          <div className="event-main">
            <h1>{event.title}</h1>
            <p className="event-short-desc">{event.description}</p>
            
            <div className="event-meta">
              <div className="meta-item">
                <strong>📅 Date:</strong> {new Date(event.date).toLocaleDateString()}
              </div>
              <div className="meta-item">
                <strong>🕐 Time:</strong> {event.time}
              </div>
              <div className="meta-item">
                <strong>⏱️ Duration:</strong> {event.duration}
              </div>
              <div className="meta-item">
                <strong>📍 Location:</strong> {event.location}
              </div>
              <div className="meta-item">
                <strong>🏢 Address:</strong> {event.address}
              </div>
              <div className="meta-item">
                <strong>👥 Organizer:</strong> {event.organizer}
              </div>
              <div className="meta-item">
                <strong>💰 Price:</strong> {event.price}
              </div>
            </div>

            <div className="event-long-desc">
              <h2>About This Event</h2>
              <p>{event.longDescription}</p>
            </div>
          </div>

          <div className="event-sidebar">
            <div className="sidebar-card">
              <div className="seats-info">
                <h3>Available Seats</h3>
                <p className="seats-count">
                  <span className="available">{event.availableSeats}</span>
                  <span className="separator">/</span>
                  <span className="total">{event.seats}</span>
                </p>
                {event.availableSeats < 10 && (
                  <p className="seats-warning">Limited seats remaining!</p>
                )}
              </div>

              {isRegistered ? (
                <div>
                  <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '0.5rem' }}>
                    ✓ Registered
                  </button>
                  <button
                    onClick={handleUnregister}
                    disabled={registering}
                    className="btn btn-danger"
                    style={{ width: '100%' }}
                  >
                    {registering ? 'Processing...' : 'Unregister'}
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleRegister}
                  disabled={registering || event.availableSeats === 0}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  {registering ? 'Processing...' : event.availableSeats === 0 ? 'Sold Out' : 'Register Now'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails
