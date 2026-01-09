import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'

function Events() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all') // all, upcoming, past

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      // TODO: Replace with actual API call
      // const response = await fetch(API_ENDPOINTS.EVENTS)
      // const data = await response.json()
      
      // Mock data for now
      const mockEvents = [
        {
          id: 1,
          title: 'Web Development Workshop',
          description: 'Learn modern web development with React and Node.js',
          date: '2026-02-15',
          time: '14:00',
          location: 'Tech Hub, Room 301',
          seats: 50,
          availableSeats: 23,
          image: 'https://via.placeholder.com/400x200'
        },
        {
          id: 2,
          title: 'AI & Machine Learning Seminar',
          description: 'Explore the latest trends in AI and ML',
          date: '2026-02-20',
          time: '10:00',
          location: 'Innovation Center',
          seats: 100,
          availableSeats: 45,
          image: 'https://via.placeholder.com/400x200'
        },
        {
          id: 3,
          title: 'Cybersecurity Conference',
          description: 'Stay updated on cybersecurity best practices',
          date: '2026-03-05',
          time: '09:00',
          location: 'Convention Hall A',
          seats: 200,
          availableSeats: 120,
          image: 'https://via.placeholder.com/400x200'
        }
      ]
      
      setEvents(mockEvents)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching events:', error)
      setLoading(false)
    }
  }

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    if (filter === 'all') return matchesSearch
    
    const eventDate = new Date(event.date)
    const today = new Date()
    
    if (filter === 'upcoming') {
      return matchesSearch && eventDate >= today
    } else {
      return matchesSearch && eventDate < today
    }
  })

  if (loading) {
    return <div className="container">Loading events...</div>
  }

  return (
    <div className="events-page">
      <div className="container">
        <h1>Browse Events</h1>
        
        <div className="events-controls">
          <input
            type="text"
            placeholder="Search events..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="filter-buttons">
            <button
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('all')}
            >
              All Events
            </button>
            <button
              className={`btn ${filter === 'upcoming' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`btn ${filter === 'past' ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter('past')}
            >
              Past
            </button>
          </div>
        </div>

        <div className="events-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p className="event-description">{event.description}</p>
                  
                  <div className="event-details">
                    <div className="event-info">
                      <span>📅 {new Date(event.date).toLocaleDateString()}</span>
                      <span>🕐 {event.time}</span>
                    </div>
                    <div className="event-info">
                      <span>📍 {event.location}</span>
                    </div>
                    <div className="event-seats">
                      <span className={event.availableSeats < 10 ? 'seats-low' : ''}>
                        {event.availableSeats} / {event.seats} seats available
                      </span>
                    </div>
                  </div>
                  
                  <Link to={`/events/${event.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="no-events">No events found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Events
