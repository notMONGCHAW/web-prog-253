import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './AdminEventForm.css'

function AdminEventForm() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = Boolean(id)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    longDescription: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    address: '',
    seats: '',
    price: 'Free',
    organizer: '',
    image: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isEditMode) {
      fetchEvent()
    }
  }, [id])

  const fetchEvent = async () => {
    try {
      // TODO: Replace with actual API call
      const mockEvent = {
        title: 'Web Development Workshop',
        description: 'Learn modern web development',
        longDescription: 'Detailed description...',
        date: '2026-02-15',
        time: '14:00',
        duration: '4 hours',
        location: 'Tech Hub, Room 301',
        address: '123 Tech Street',
        seats: '50',
        price: 'Free',
        organizer: 'Tech Foundation',
        image: ''
      }
      setFormData(mockEvent)
    } catch (error) {
      console.error('Error fetching event:', error)
      setError('Failed to load event')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // TODO: Replace with actual API call
      // const url = isEditMode 
      //   ? API_ENDPOINTS.ADMIN_EVENT_BY_ID(id)
      //   : API_ENDPOINTS.ADMIN_EVENTS
      // const method = isEditMode ? 'PUT' : 'POST'
      
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      alert(`Event ${isEditMode ? 'updated' : 'created'} successfully!`)
      navigate('/admin/events')
    } catch (error) {
      console.error('Error saving event:', error)
      setError('Failed to save event')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="admin-form-page">
      <div className="container">
        <h1>{isEditMode ? 'Edit Event' : 'Create New Event'}</h1>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="title" className="form-label">Event Title *</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="organizer" className="form-label">Organizer *</label>
              <input
                type="text"
                id="organizer"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">Short Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="form-input"
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="longDescription" className="form-label">Full Description *</label>
            <textarea
              id="longDescription"
              name="longDescription"
              value={formData.longDescription}
              onChange={handleChange}
              className="form-input"
              rows="6"
              required
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="date" className="form-label">Date *</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">Time *</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duration" className="form-label">Duration *</label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., 2 hours"
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="location" className="form-label">Location *</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="e.g., Conference Hall A"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address" className="form-label">Full Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="seats" className="form-label">Total Seats *</label>
              <input
                type="number"
                id="seats"
                name="seats"
                value={formData.seats}
                onChange={handleChange}
                className="form-input"
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="form-input"
                placeholder="Free or amount"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="form-input"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate('/admin/events')}
              className="btn btn-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? 'Saving...' : isEditMode ? 'Update Event' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminEventForm
