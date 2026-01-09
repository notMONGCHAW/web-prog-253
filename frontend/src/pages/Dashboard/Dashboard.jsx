import { useAuth } from '../../contexts/AuthContext'
import './Dashboard.css'

function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="dashboard-page">
      <div className="container">
        <h1>Welcome, {user?.name}!</h1>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-icon">🎫</div>
            <h3>My Events</h3>
            <p className="card-value">0</p>
            <p className="card-description">Events you're registered for</p>
            <a href="/my-events" className="card-link">View all →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">📅</div>
            <h3>Upcoming Events</h3>
            <p className="card-value">3</p>
            <p className="card-description">Events happening soon</p>
            <a href="/events" className="card-link">Browse →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">✉️</div>
            <h3>Notifications</h3>
            <p className="card-value">0</p>
            <p className="card-description">Unread messages</p>
            <a href="#" className="card-link">View all →</a>
          </div>

          <div className="dashboard-card">
            <div className="card-icon">⚙️</div>
            <h3>Account Settings</h3>
            <p className="card-description">Manage your profile and preferences</p>
            <a href="#" className="card-link">Settings →</a>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">ℹ️</div>
              <div className="activity-content">
                <p className="activity-title">No recent activity</p>
                <p className="activity-time">Register for events to see activity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
