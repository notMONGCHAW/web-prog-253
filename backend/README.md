# UIU Events - Backend

Express.js server-rendered application with EJS templates.

## Features

- Server-side rendering with EJS
- Session-based authentication
- QR code generation (server-side)
- QR code scanning (client-side with html5-qrcode)
- Event management (CRUD)
- Admin panel
- Mock data (ready for database integration)

## Installation

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

Server runs at [http://localhost:3000](http://localhost:3000)

## Production

```bash
npm start
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `SESSION_SECRET` - Session secret key
- `NODE_ENV` - Environment (production/development)

## Project Structure

```
backend/
├── server.js              # Express app entry point
├── package.json
├── views/
│   ├── pages/            # Full page templates
│   ├── components/       # Reusable components (QR ticket, scanner)
│   └── partials/         # Header, footer
└── public/
    ├── css/
    │   └── styles.css    # Main stylesheet
    └── js/
        └── main.js       # Client-side scripts
```

## Demo Accounts

- **User**: user@example.com (any password)
- **Admin**: admin@example.com (any password)

## Deployment

Deploy to Vercel, Render, Heroku, or any Node.js hosting service.
