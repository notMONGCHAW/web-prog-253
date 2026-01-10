import express from 'express'
import session from 'express-session'
import path from 'path'
import { fileURLToPath } from 'url'
import QRCode from 'qrcode'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3000

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'uiu-web-253-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24,
    secure: process.env.NODE_ENV === 'production'
  }
}))

// Body parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Mock data
const mockEvents = [
  {
    id: 1,
    title: 'Web Development Workshop',
    description: 'Learn modern web development with React and Node.js',
    longDescription: 'Join us for an intensive full-day workshop covering React hooks, component architecture, state management, API integration, and deployment strategies.',
    date: '2026-02-15',
    time: '14:00',
    duration: '4 hours',
    location: 'Tech Hub, Room 301',
    address: '123 Tech Street, Innovation District',
    seats: 50,
    availableSeats: 23,
    price: 'Free',
    organizer: 'Tech Education Foundation',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'AI & Machine Learning Seminar',
    description: 'Explore the latest trends in AI and ML',
    longDescription: 'Dive deep into ML pipelines, neural networks, model deployment, and ethics in AI. Expert speakers from industry and academia.',
    date: '2026-02-20',
    time: '10:00',
    duration: '3 hours',
    location: 'Innovation Center',
    address: '456 AI Avenue',
    seats: 100,
    availableSeats: 45,
    price: 'Free',
    organizer: 'Innovation Lab',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Database Design Masterclass',
    description: 'Master database design principles and optimization',
    longDescription: 'Learn normalization, indexing strategies, query optimization, and NoSQL vs SQL decision making.',
    date: '2026-02-25',
    time: '15:00',
    duration: '5 hours',
    location: 'Data Lab, Building A',
    address: '789 Database Drive',
    seats: 30,
    availableSeats: 12,
    price: 'Free',
    organizer: 'Database Experts Association',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=400&fit=crop'
  }
]

// Middleware helpers
function requireAuth(req, res, next) {
  if (!req.session.user) {
    return res.redirect('/login')
  }
  next()
}

function requireAdmin(req, res, next) {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.redirect('/dashboard')
  }
  next()
}

// Public routes
app.get('/', (req, res) => {
  res.render('pages/home', { user: req.session.user || null })
})

app.get('/events', (req, res) => {
  const { search } = req.query
  let filteredEvents = mockEvents
  
  if (search) {
    const term = search.toLowerCase()
    filteredEvents = mockEvents.filter(e => 
      e.title.toLowerCase().includes(term) || 
      e.description.toLowerCase().includes(term)
    )
  }
  
  res.render('pages/events', { 
    user: req.session.user || null, 
    events: filteredEvents,
    search: search || ''
  })
})

app.get('/events/:id', (req, res) => {
  const event = mockEvents.find(e => e.id === Number(req.params.id))
  if (!event) {
    return res.status(404).render('pages/404', { user: req.session.user || null })
  }
  
  const isRegistered = req.session.user && req.session.registrations?.some(r => r.eventId === event.id)
  
  res.render('pages/event-details', { 
    user: req.session.user || null, 
    event,
    isRegistered
  })
})

// Registration
app.post('/events/:id/register', requireAuth, async (req, res) => {
  const event = mockEvents.find(e => e.id === Number(req.params.id))
  if (!event) {
    return res.status(404).send('Event not found')
  }
  
  req.session.registrations = req.session.registrations || []
  
  // Check if already registered
  if (req.session.registrations.some(r => r.eventId === event.id)) {
    return res.redirect(`/events/${event.id}`)
  }
  
  const registrationId = Date.now()
  const qrData = `${event.id}-${req.session.user.id}`
  
  req.session.registrations.push({
    id: registrationId,
    eventId: event.id,
    eventTitle: event.title,
    eventDate: event.date,
    eventTime: event.time,
    eventLocation: event.location,
    status: 'confirmed',
    qrData
  })
  
  res.redirect('/my-events')
})

app.post('/events/:id/unregister', requireAuth, (req, res) => {
  const eventId = Number(req.params.id)
  req.session.registrations = (req.session.registrations || []).filter(r => r.eventId !== eventId)
  res.redirect(`/events/${eventId}`)
})

// User routes
app.get('/my-events', requireAuth, (req, res) => {
  const registrations = req.session.registrations || []
  res.render('pages/my-events', { 
    user: req.session.user, 
    registrations 
  })
})

app.get('/tickets/:id', requireAuth, async (req, res) => {
  const registrations = req.session.registrations || []
  const reg = registrations.find(r => r.id === Number(req.params.id))
  
  if (!reg) {
    return res.status(404).render('pages/404', { user: req.session.user })
  }
  
  const qrPng = await QRCode.toDataURL(reg.qrData, { width: 300, margin: 2 })
  
  res.render('components/qr-ticket', { 
    user: req.session.user, 
    registration: reg, 
    qrPng 
  })
})

// Auth routes
app.get('/login', (req, res) => {
  if (req.session.user) {
    return res.redirect('/dashboard')
  }
  res.render('pages/login', { user: null, error: null })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body
  
  if (!email || !password) {
    return res.render('pages/login', { user: null, error: 'Please enter email and password' })
  }
  
  // Mock authentication
  const role = email.toLowerCase().includes('admin') ? 'admin' : 'user'
  
  req.session.user = { 
    id: Date.now(), 
    email, 
    name: email.split('@')[0], 
    role 
  }
  
  res.redirect('/dashboard')
})

app.get('/register', (req, res) => {
  if (req.session.user) {
    return res.redirect('/dashboard')
  }
  res.render('pages/register', { user: null, error: null })
})

app.post('/register', (req, res) => {
  const { name, email, password } = req.body
  
  if (!name || !email || !password) {
    return res.render('pages/register', { user: null, error: 'Please fill all fields' })
  }
  
  req.session.user = { 
    id: Date.now(), 
    email, 
    name, 
    role: 'user' 
  }
  
  res.redirect('/dashboard')
})

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

// Dashboard
app.get('/dashboard', requireAuth, (req, res) => {
  const registrations = req.session.registrations || []
  res.render('pages/dashboard', { 
    user: req.session.user,
    registrationCount: registrations.length
  })
})

// Admin routes
app.get('/admin', requireAdmin, (req, res) => {
  res.render('pages/admin-dashboard', { 
    user: req.session.user,
    eventCount: mockEvents.length
  })
})

app.get('/admin/events', requireAdmin, (req, res) => {
  res.render('pages/admin-events', { 
    user: req.session.user, 
    events: mockEvents 
  })
})

app.get('/admin/events/new', requireAdmin, (req, res) => {
  res.render('pages/admin-event-form', { 
    user: req.session.user, 
    event: null, 
    isEdit: false 
  })
})

app.get('/admin/events/edit/:id', requireAdmin, (req, res) => {
  const event = mockEvents.find(e => e.id === Number(req.params.id))
  
  if (!event) {
    return res.status(404).render('pages/404', { user: req.session.user })
  }
  
  res.render('pages/admin-event-form', { 
    user: req.session.user, 
    event, 
    isEdit: true 
  })
})

app.get('/scanner', requireAdmin, (req, res) => {
  res.render('components/qr-scanner', { user: req.session.user })
})

// 404
app.use((req, res) => {
  res.status(404).render('pages/404', { user: req.session.user || null })
})

// Start server
// In Vercel's serverless environment, we must export the app instead of listening.
// Locally, still start the server with app.listen.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`🚀 UIU Events running at http://localhost:${PORT}`)
  })
}

export default app
