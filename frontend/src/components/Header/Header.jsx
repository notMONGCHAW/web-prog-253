import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './Header.css'

function Header() {
  const { user, logout } = useAuth()
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <Link to="/">Event Registration</Link>
          </div>
          
          <ul className="nav-menu">
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li><Link to="/events" className={isActive('/events')}>Events</Link></li>
            
            {user ? (
              <>
                <li><Link to="/dashboard" className={isActive('/dashboard')}>Dashboard</Link></li>
                <li><Link to="/my-events" className={isActive('/my-events')}>My Events</Link></li>
                
                {user.role === 'admin' && (
                  <li><Link to="/admin" className={isActive('/admin')}>Admin</Link></li>
                )}
                
                <li>
                  <button onClick={logout} className="btn btn-outline">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className={isActive('/login')}>Login</Link></li>
                <li>
                  <Link to="/register" className="btn btn-primary">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
