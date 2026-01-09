import { useState, useEffect } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import QRTicket from '../../components/QRTicket/QRTicket'
import './MyEvents.css'

function MyEvents() {
  const { user } = useAuth()
  const [registrations, setRegistrations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTicket, setSelectedTicket] = useState(null)

  useEffect(() => {
    fetchMyRegistrations()
  }, [])

  const fetchMyRegistrations = async () => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(API_ENDPOINTS.MY_REGISTRATIONS)
      // const data = await response.json()
      
      // Mock data
      const mockRegistrations = [
        {
          id: 1,
          eventId: 1,
          eventTitle: 'Web Development Workshop',
          eventDate: '2026-02-15',
          eventTime: '14:00',
          eventLocation: 'Tech Hub, Room 301',
          registrationDate: '2026-01-05',
          status: 'confirmed',
          qrData: `event-1-user-${user?.id || 1}`
        }
      ]
      
      setRegistrations(mockRegistrations)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching registrations:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="container">Loading your events...</div>
  }

  return (
    <div className="my-events-page">
      <div className="container">
        <h1>My Registered Events</h1>

        {registrations.length > 0 ? (
          <div className="registrations-list">
            {registrations.map(registration => (
              <div key={registration.id} className="registration-card">
                <div className="registration-info">
                  <h3>{registration.eventTitle}</h3>
                  <div className="registration-details">
                    <p>📅 {new Date(registration.eventDate).toLocaleDateString()} at {registration.eventTime}</p>
                    <p>📍 {registration.eventLocation}</p>
                    <p>Registered on: {new Date(registration.registrationDate).toLocaleDateString()}</p>
                    <span className={`status-badge status-${registration.status}`}>
                      {registration.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="registration-actions">
                  <button
                    onClick={() => setSelectedTicket(registration)}
                    className="btn btn-primary"
                  >
                    View Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>You haven't registered for any events yet.</p>
            <a href="/events" className="btn btn-primary">Browse Events</a>
          </div>
        )}

        {selectedTicket && (
          <QRTicket
            registration={selectedTicket}
            onClose={() => setSelectedTicket(null)}
          />
        )}
      </div>
    </div>
  )
}

export default MyEvents
