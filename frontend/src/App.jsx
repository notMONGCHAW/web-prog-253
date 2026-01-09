import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Events from './pages/Events/Events'
import EventDetails from './pages/Events/EventDetails'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import MyEvents from './pages/Events/MyEvents'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminEvents from './pages/Admin/AdminEvents'
import AdminEventForm from './pages/Admin/AdminEventForm'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import AdminRoute from './components/ProtectedRoute/AdminRoute'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected User Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/my-events" element={
              <ProtectedRoute>
                <MyEvents />
              </ProtectedRoute>
            } />
            
            {/* Admin Routes */}
            <Route path="/admin" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            <Route path="/admin/events" element={
              <AdminRoute>
                <AdminEvents />
              </AdminRoute>
            } />
            <Route path="/admin/events/new" element={
              <AdminRoute>
                <AdminEventForm />
              </AdminRoute>
            } />
            <Route path="/admin/events/edit/:id" element={
              <AdminRoute>
                <AdminEventForm />
              </AdminRoute>
            } />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  )
}

export default App
