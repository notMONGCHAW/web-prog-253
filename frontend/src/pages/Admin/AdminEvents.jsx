import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AdminEvents.css'

function AdminEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      // TODO: Replace with actual API call
      const mockEvents = [
        {
          id: 1,
          title: 'Web Development Workshop',
          date: '2026-02-15',
          seats: 50,
          registrations: 27,
          status: 'active'
        },
        {
          id: 2,
          title: 'AI & Machine Learning Seminar',
          date: '2026-02-20',
          seats: 100,
          registrations: 55,
          status: 'active'
        }
      ]
      
      setEvents(mockEvents)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching events:', error)
      setLoading(false)
    }
  }

  const handleDelete = async (eventId) => {
    if (!confirm('Are you sure you want to delete this event?')) return
    
    try {
      // TODO: Replace with actual API call
      setEvents(events.filter(event => event.id !== eventId))
      alert('Event deleted successfully')
    } catch (error) {
      console.error('Error deleting event:', error)
      alert('Failed to delete event')
    }
  }

  if (loading) {
    return <div className="container">Loading events...</div>
  }

  return (
    <div className="admin-events-page">
      <div className="container">
        <div className="page-header">
          <h1>Manage Events</h1>
          <Link to="/admin/events/new" className="btn btn-primary">
            ➕ Create New Event
          </Link>
        </div>

        <div className="events-table-container">
          <table className="events-table">
            <thead>
              <tr>
                <th>Event Title</th>
                <th>Date</th>
                <th>Registrations</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map(event => (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{new Date(event.date).toLocaleDateString()}</td>
                  <td>
                    <span className="registrations-badge">
                      {event.registrations} / {event.seats}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge status-${event.status}`}>
                      {event.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <Link 
                        to={`/admin/events/edit/${event.id}`}
                        className="btn-icon"
                        title="Edit"
                      >
                        ✏️
                      </Link>
                      <Link
                        to={`#`}
                        className="btn-icon"
                        title="View Participants"
                      >
                        👥
                      </Link>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="btn-icon btn-danger"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminEvents
