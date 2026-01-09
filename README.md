# Online Event Registration System with QR Ticket Twist

**Course:** Web Programming 253 (Trimester)  
**University:** United International University  
**Repository:** [notMONGCHAW/web-prog-253](https://github.com/notMONGCHAW/web-prog-253)  
**Project Type:** Full-Stack Web Application  
**Stack:** Express.js + EJS (Server-Side Rendering)

---

## 📋 Overview

A complete online event registration platform where users can discover events, register/unregister, and receive QR-coded tickets. Administrators manage events, view participants, and scan QR codes for attendance tracking.

**The Twist:** Registration automatically generates **QR-coded tickets** (format: `eventID-userID`) that can be downloaded, printed, and scanned for seamless check-in.

**Tech Stack:** Express.js server with EJS templates, session-based authentication, server-side QR generation, and responsive CSS design.

---

## 🎯 Features

### 👤 User Features
- ✅ User authentication (sign up & login)
- ✅ Browse all available events
- ✅ Search and filter events
- ✅ View detailed event information
- ✅ Register/unregister for events
- ✅ Download QR-coded tickets
- ✅ View all registered events
- ✅ Personal user dashboard

### 🛡️ Admin Features
- ✅ Admin dashboard with statistics
- ✅ Create new events
- ✅ Edit existing events
- ✅ Delete events
- ✅ View participant lists
- ✅ Scan QR tickets for attendance

### 🎫 QR Ticket System (Twist)
- ✅ Auto-generate QR code on successful registration
- ✅ QR encodes unique identifier: `eventID-userID`
- ✅ Download tickets as PNG
- ✅ Print-friendly ticket layout
- ✅ JS-based QR scanner for check-in

### 🔐 Security & Performance
- ✅ Protected routes (require authentication)
- ✅ Admin-only routes
- ✅ Secure session management
- ✅ Input validation
- ✅ Prevent duplicate registrations
- ✅ Fast event browsing

---

## 📁 Project Structure

```
web-prog-253/
├── backend/                            # Express.js application (MAIN)
│   ├── server.js                      # Express server entry point
│   ├── package.json                   # Dependencies & scripts
│   ├── views/                         # EJS templates
│   │   ├── pages/                     # Full pages
│   │   │   ├── home.ejs              # Landing page
│   │   │   ├── events.ejs            # Events listing with search
│   │   │   ├── event-details.ejs     # Event details & registration
│   │   │   ├── my-events.ejs         # User's registered events
│   │   │   ├── login.ejs             # Login form
│   │   │   ├── register.ejs          # Registration form
│   │   │   ├── dashboard.ejs         # User dashboard
│   │   │   ├── admin-dashboard.ejs   # Admin overview
│   │   │   ├── admin-events.ejs      # Admin event management
│   │   │   ├── admin-event-form.ejs  # Create/edit event form
│   │   │   └── 404.ejs               # Not found page
│   │   ├── components/                # Reusable components
│   │   │   ├── qr-ticket.ejs         # QR ticket display & download
│   │   │   └── qr-scanner.ejs        # QR code scanner
│   │   └── partials/                  # Layout partials
│   │       ├── header.ejs            # Header with navigation
│   │       └── footer.ejs            # Footer
│   ├── public/                        # Static assets
│   │   ├── css/
│   │   │   └── styles.css            # Main stylesheet
│   │   └── js/
│   │       └── main.js               # Client-side JavaScript
│   └── README.md                      # Backend documentation
├── frontend/                           # [Legacy React app - not in use]
├── .git/                              # Git repository
├── .vscode/                           # VS Code workspace settings
├── vercel.json                        # Vercel deployment config
├── scope.md                           # Course project requirements
├── README.md                          # This file (root documentation)
└── .gitignore                         # Git ignore rules
```

---

## 🚀 Getting Started

### Requirements
- **Node.js** v16+ 
- **npm** or **yarn**
- **Git**
- Modern web browser (for QR scanner: requires HTTPS in production)

### Installation

1. **Clone repository:**
   ```bash
   git clone https://github.com/notMONGCHAW/web-prog-253.git
   cd web-prog-253
   ```

2. **Navigate to backend:**
   ```bash
   cd backend
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Server runs at `http://localhost:3000`

### Demo Accounts
```
Regular User:
  Email: user@example.com
  Password: (any password works)

Admin User:
  Email: admin@example.com
  Password: (any password works)

Note: Email containing "admin" gets admin role
```

---

## 🛠️ Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 📦 Dependencies

### Core
- **react** (^18.2.0) - UI library
- **react-dom** (^18.2.0) - DOM rendering
- **react-router-dom** (^6.21.0) - Client-side routing

### QR Code
- **qrcode** (^1.5.3) - Generate QR codes
- **html5-qrcode** (^2.3.8) - Scan QR codes from camera

### HTTP
- **axios** (^1.6.2) - HTTP client for API calls

### Build Tools
- **Vite** (^5.0.8) - Lightning fast build tool
- **ESLint** - Code quality linting

---

## 🏗️ Architecture

### Technology Stack

**Frontend Framework:**
- React 18 with hooks for state management
- Vite for ultra-fast development and builds
- React Router v6 for client-side navigation
- Context API for global authentication state

**Styling:**
- Vanilla CSS3 with CSS Variables for theming
- Mobile-first responsive design
- Component-scoped CSS files

**State Management:**
- Context API (AuthContext for user state)
- React hooks (useState, useEffect, useRef)
- localStorage for session persistence

**Features:**
- QR code generation with `qrcode` library
- QR code scanning with `html5-qrcode`
- HTTP requests with `axios`
- Protected routes with role-based access

### Data Flow

```
User Action → Component State → Context Update → Re-render
```

Mock data currently flows through components. Will integrate with backend API endpoints defined in `src/config/api.js`.

---

## 🗺️ Routes & Pages

### Public Routes
| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Landing page with features |
| `/events` | Events | Browse all events |
| `/events/:id` | EventDetails | View event & register |
| `/login` | Login | User authentication |
| `/register` | Register | Create new account |

### Protected Routes (Logged-in Users)
| Route | Component | Purpose |
|-------|-----------|---------|
| `/dashboard` | Dashboard | User overview & stats |
| `/my-events` | MyEvents | View registered events & tickets |

### Admin Routes (Admin Users Only)
| Route | Component | Purpose |
|-------|-----------|---------|
| `/admin` | AdminDashboard | Admin overview & stats |
| `/admin/events` | AdminEvents | List & manage all events |
| `/admin/events/new` | AdminEventForm | Create new event |
| `/admin/events/edit/:id` | AdminEventForm | Edit existing event |

---

## 🔄 Key Flows

### User Registration Flow
```
1. User visits /register
2. Fills form (name, email, password)
3. Submits form
4. Account saved (currently mock)
5. Redirects to /dashboard
```

### Event Registration Flow
```
1. Browse events at /events
2. Click on event → /events/:id
3. Click "Register Now"
4. Registration saved (currently mock)
5. QR code auto-generated (eventID-userID)
6. Ticket available for download
7. Email confirmation sent (mock)
```

### Event Check-in Flow
```
1. Admin visits /admin
2. Opens QR scanner
3. Points camera at user's QR ticket
4. Scanner reads: eventID-userID
5. System marks attendance
6. Confirmation displayed
```

---

## 🔧 Configuration

### Environment Variables
Create `.env` file:
```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Event Registration System
VITE_APP_DESCRIPTION=Online Event Registration with QR Tickets
```

### Theme Customization
Edit `src/index.css`:
```css
:root {
  --primary-color: #4f46e5;           /* Main brand color */
  --primary-hover: #4338ca;
  --secondary-color: #10b981;         /* Success/call-to-action */
  --danger-color: #ef4444;            /* Errors/delete */
  --warning-color: #f59e0b;           /* Warnings */
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-primary: #ffffff;
  --bg-secondary: #f9fafb;
  --border-color: #e5e7eb;
}
```

---

## 🔌 API Integration (Backend)

### Current Status
The frontend uses **mock data** for development. All API endpoints are pre-configured and ready for backend integration.

### Pre-configured Endpoints
All defined in `src/config/api.js`:

**Authentication:**
- `POST /auth/login` - User login
- `POST /auth/register` - Create account
- `POST /auth/logout` - User logout
- `GET /auth/me` - Get current user

**Events:**
- `GET /events` - List all events
- `GET /events/:id` - Get event details
- `POST /admin/events` - Create event (admin)
- `PUT /admin/events/:id` - Update event (admin)
- `DELETE /admin/events/:id` - Delete event (admin)

**Registrations:**
- `POST /events/:id/register` - Register for event
- `DELETE /events/:id/unregister` - Unregister from event
- `GET /registrations/my` - Get user's registrations

**Admin:**
- `GET /admin/events/:id/participants` - Get event participants

**Tickets:**
- `GET /tickets/:registrationId/download` - Download QR ticket
- `POST /tickets/verify` - Verify ticket QR code

### How to Integrate

1. **Update API URL in `.env`:**
   ```env
   VITE_API_URL=http://your-backend-url/api
   ```

2. **Replace mock data with API calls:**
   ```javascript
   // Before: Mock data
   const mockEvents = [...]
   setEvents(mockEvents)

   // After: Real API
   import axios from 'axios'
   import { API_ENDPOINTS } from '../config/api'

   const response = await axios.get(API_ENDPOINTS.EVENTS)
   setEvents(response.data)
   ```

3. **Update authentication in `AuthContext.jsx`:**
   ```javascript
   const login = async (email, password) => {
     const response = await axios.post(API_ENDPOINTS.LOGIN, {
       email, password
     })
     const { token, user } = response.data
     localStorage.setItem('token', token)
     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
     setUser(user)
   }
   ```

4. **Handle tokens in axios requests:**
   ```javascript
   axios.interceptors.request.use((config) => {
     const token = localStorage.getItem('token')
     if (token) {
       config.headers.Authorization = `Bearer ${token}`
     }
     return config
   })
   ```

---

## 📱 Responsive Design

The application is fully responsive:
- **Mobile** (< 768px) - Single column, mobile navigation
- **Tablet** (768px - 1024px) - Two columns
- **Desktop** (> 1024px) - Full multi-column layout

All components adapt automatically using CSS media queries.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

**Option 1: GitHub Integration**
1. Push code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com)
3. Import repository
4. Set environment variables
5. Deploy (auto on every push)

**Option 2: CLI**
```bash
npm install -g vercel
cd frontend
vercel
```

**Option 3: Manual Upload**
```bash
npm run build
# Upload `dist` folder to Vercel
```

### Environment Variables on Vercel
Set in Vercel dashboard:
```
VITE_API_URL=https://api.yourdomain.com/api
```

### Other Platforms
- **Netlify:** Drag & drop `dist` folder or connect GitHub
- **GitHub Pages:** Requires build configuration
- **Custom Server:** Deploy `dist` folder to any static host

---

## 🔐 Security Notes

### Implemented
✅ Protected routes (ProtectedRoute component)  
✅ Admin-only routes (AdminRoute component)  
✅ Form input validation  
✅ HTTPS support  
✅ localStorage for tokens  

### TODO for Production
- [ ] Implement JWT validation on backend
- [ ] Add rate limiting
- [ ] CSRF token validation
- [ ] Password hashing (bcrypt)
- [ ] SQL injection prevention
- [ ] XSS protection
- [ ] Content Security Policy headers
- [ ] Session timeout
- [ ] Secure password reset
- [ ] Email verification

---

## 🧩 Component API Reference

### AuthContext
Global authentication state and methods:
```javascript
import { useAuth } from '../contexts/AuthContext'

const { user, loading, login, register, logout } = useAuth()

// user: { id, email, name, role }
// loading: boolean
// login(email, password): Promise
// register(userData): Promise
// logout(): void
```

### ProtectedRoute
Wraps components that require authentication:
```javascript
<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>
```

### AdminRoute
Wraps admin-only components:
```javascript
<Route 
  path="/admin" 
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  } 
/>
```

### QRTicket
Displays and manages QR ticket:
```javascript
<QRTicket 
  registration={{
    id: 1,
    eventTitle: 'Event Name',
    eventDate: '2026-02-15',
    eventTime: '14:00',
    eventLocation: 'Venue',
    qrData: 'event-1-user-5',
    status: 'confirmed'
  }}
  onClose={() => {}}
/>
```

### QRScanner
Scans QR codes:
```javascript
<QRScanner 
  onScan={(decodedText, result) => {
    console.log('Scanned:', decodedText)
  }}
  onClose={() => {}}
/>
```

---

## 🎨 Customization Guide

### Add New Page
1. Create folder: `src/pages/YourPage/`
2. Create component: `YourPage.jsx`
3. Create styles: `YourPage.css`
4. Add route in `App.jsx`:
   ```javascript
   <Route path="/your-page" element={<YourPage />} />
   ```
5. Update navigation in `Header.jsx`

### Change Colors
Edit `:root` variables in `src/index.css`

### Modify Layout
Edit `src/components/Layout/Layout.jsx` and `Layout.css`

### Add Form Fields
Update form in respective page component and add validation

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Change port in vite.config.js
server: {
  port: 3001
}
```

### Dependencies Installation Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### QR Scanner Not Working
- Requires HTTPS in production
- Check browser camera permissions
- Allow camera access in browser settings
- Test on `localhost` first for development

### API Calls Failing
- Verify `.env` API_URL is correct
- Ensure backend server is running
- Check browser DevTools console for CORS errors
- Add `Access-Control-Allow-Origin` headers on backend

### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

---

## 📊 Project Status

**✅ Completed:**
- Frontend structure & setup
- All UI components
- Routing & navigation
- QR generation & scanning
- Mock authentication
- Admin panel
- Responsive design
- Deployment config

**🔄 Next Phase:**
- Backend API development
- Database schema
- Real authentication (JWT)
- Email service integration
- Testing (unit, integration, E2E)

---

## 🤝 Contributing

### Git Workflow
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: description of changes"

# Push to remote
git push origin feature/feature-name

# Create Pull Request on GitHub
```

### Code Style
- Use 2-space indentation
- Follow React naming conventions
- Use meaningful variable/component names
- Keep components focused (under 200 lines)
- Add comments for complex logic
- Format with Prettier (recommended)

### File Naming
- Components: PascalCase (`MyComponent.jsx`)
- Files: Same as component (`MyComponent.css`)
- Pages: Folder name matches component

---

## 📚 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router](https://reactrouter.com)
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/)
- [html5-qrcode](https://github.com/mebjas/html5-qrcode)
- [Context API Guide](https://react.dev/reference/react/useContext)

---

## 📝 Course Info

**Course:** WEB-253 - Web Programming  
**University:** United International University  
**Trimester:** Current Term  
**Instructor:** [Your Instructor]  

For questions: Create GitHub issues or contact team members

---

## ✅ Submission Checklist

Before final submission:
- [ ] Frontend builds without errors (`npm run build`)
- [ ] All pages accessible and functional
- [ ] QR ticket generation works
- [ ] QR scanner functional
- [ ] Responsive design tested on mobile
- [ ] All links/buttons working
- [ ] No console errors
- [ ] README complete & clear
- [ ] Code is clean and commented
- [ ] Git history is clean
- [ ] Ready for backend integration
- [ ] Deployed to Vercel/Netlify

---

## 📄 License

Course project for Web Programming 253, United International University.

---

**Project initialized:** January 9, 2026  
**Current version:** 0.0.1  
**Status:** Frontend complete, ready for backend integration

**Happy Coding! 🚀**

