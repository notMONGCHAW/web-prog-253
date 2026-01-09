# Event Registration System - Frontend

A modern React-based frontend for an Online Event Registration System with QR-coded tickets.

## 🚀 Features

- **User Features**
  - User authentication (Login/Register)
  - Browse and search events
  - Event registration/unregistration
  - QR-coded ticket generation
  - Personal dashboard
  - View registered events

- **Admin Features**
  - Admin dashboard with statistics
  - Create, edit, and delete events
  - Manage event capacity and details
  - View event participants
  - QR ticket scanner (for check-in)

- **Technical Features**
  - Modern React with Vite
  - React Router for navigation
  - Context API for state management
  - QR code generation and scanning
  - Responsive design
  - Modular component architecture

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header/           # Navigation header
│   │   ├── Footer/           # Footer component
│   │   ├── Layout/           # Main layout wrapper
│   │   ├── ProtectedRoute/   # Route guards
│   │   ├── QRTicket/         # QR ticket display & download
│   │   └── QRScanner/        # QR code scanner
│   ├── contexts/
│   │   └── AuthContext.jsx   # Authentication state
│   ├── pages/
│   │   ├── Home/             # Landing page
│   │   ├── Events/           # Event listing & details
│   │   ├── Auth/             # Login & Register
│   │   ├── Dashboard/        # User dashboard
│   │   └── Admin/            # Admin panel
│   ├── config/
│   │   └── api.js            # API endpoints configuration
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Installation

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   cp .env.example .env
   ```

4. **Configure your API endpoint in `.env`:**
   ```env
   VITE_API_URL=http://localhost:8000/api
   ```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start at `http://localhost:3000`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Or connect your GitHub repository to Vercel for automatic deployments**

### Deploy to Netlify

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder to Netlify**

## 🔑 Demo Credentials

- **Regular User:** 
  - Email: `user@example.com`
  - Password: `password`

- **Admin User:**
  - Email: `admin@example.com`
  - Password: `password`

## 🧩 Key Components

### Authentication
- `AuthContext`: Manages user authentication state
- `ProtectedRoute`: Guards routes requiring authentication
- `AdminRoute`: Guards admin-only routes

### Event Management
- `Events`: Lists all available events with search/filter
- `EventDetails`: Shows detailed event information
- `MyEvents`: Displays user's registered events

### QR Features
- `QRTicket`: Generates and displays QR-coded tickets
- `QRScanner`: Scans QR codes for event check-in (admin)

### Admin Panel
- `AdminDashboard`: Overview statistics
- `AdminEvents`: Manage all events
- `AdminEventForm`: Create/edit events

## 🔧 Configuration

### API Endpoints
Update `src/config/api.js` to match your backend API:

```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'
```

### Styling
- Global styles: `src/index.css`
- Component-specific styles: `ComponentName.css` in each component folder
- CSS variables defined in `:root` for easy theming

## 📦 Dependencies

- **react**: UI library
- **react-router-dom**: Routing
- **qrcode**: QR code generation
- **html5-qrcode**: QR code scanning
- **axios**: HTTP client (ready for API integration)

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #4f46e5;
  --secondary-color: #10b981;
  --danger-color: #ef4444;
  /* ... more variables */
}
```

### Adding New Routes
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header/Header.jsx`

## 🔄 Backend Integration

Currently using mock data. To connect to a real backend:

1. Update API endpoints in `src/config/api.js`
2. Replace mock data calls with actual API calls using axios
3. Handle authentication tokens (add to localStorage/sessionStorage)
4. Update error handling for real API responses

Example API call pattern:
```javascript
import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'

const response = await axios.get(API_ENDPOINTS.EVENTS)
const events = response.data
```

## 📝 TODO for Production

- [ ] Connect to real backend API
- [ ] Add proper error handling and loading states
- [ ] Implement pagination for event lists
- [ ] Add form validation library (e.g., Formik, React Hook Form)
- [ ] Add toast notifications (e.g., react-toastify)
- [ ] Implement email verification flow
- [ ] Add password reset functionality
- [ ] Optimize images and assets
- [ ] Add unit and integration tests
- [ ] Set up CI/CD pipeline

## 🐛 Known Issues

- Mock authentication - replace with real JWT/session management
- No actual API calls - currently using mock data
- QR scanner requires HTTPS in production (browser security requirement)

## 📄 License

This project is part of a web programming course assignment.

## 🤝 Contributing

This is a course project. For improvements or bug fixes, please coordinate with your team members.

---

**Happy Coding! 🎉**
