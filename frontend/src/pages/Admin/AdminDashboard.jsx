import { Link } from 'react-router-dom'
import './AdminDashboard.css'

function AdminDashboard() {
  return (
    <div className="admin-dashboard-page">
      <div className="container">
        <h1>Admin Dashboard</h1>
        
        <div className="admin-stats">
          <div className="stat-card">
            <div className="stat-icon">🎫</div>
            <h3>Total Events</h3>
            <p className="stat-value">12</p>
            <p className="stat-description">Active events</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <h3>Total Users</h3>
            <p className="stat-value">248</p>
            <p className="stat-description">Registered users</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <h3>Registrations</h3>
            <p className="stat-value">456</p>
            <p className="stat-description">Total bookings</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <h3>Attendance Rate</h3>
            <p className="stat-value">87%</p>
            <p className="stat-description">Average rate</p>
          </div>
        </div>

        <div className="admin-actions">
          <h2>Quick Actions</h2>
          <div className="action-grid">
            <Link to="/admin/events/new" className="action-card">
              <div className="action-icon">➕</div>
              <h3>Create Event</h3>
              <p>Add a new event to the system</p>
            </Link>

            <Link to="/admin/events" className="action-card">
              <div className="action-icon">📋</div>
              <h3>Manage Events</h3>
              <p>View and edit existing events</p>
            </Link>

            <Link to="#" className="action-card">
              <div className="action-icon">📧</div>
              <h3>Send Notifications</h3>
              <p>Notify users about updates</p>
            </Link>

            <Link to="#" className="action-card">
              <div className="action-icon">📈</div>
              <h3>View Reports</h3>
              <p>Analytics and statistics</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
