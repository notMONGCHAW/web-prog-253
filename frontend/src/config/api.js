const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

export const API_ENDPOINTS = {
  // Auth
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  ME: `${API_BASE_URL}/auth/me`,
  
  // Events
  EVENTS: `${API_BASE_URL}/events`,
  EVENT_BY_ID: (id) => `${API_BASE_URL}/events/${id}`,
  
  // Registrations
  REGISTER_EVENT: (eventId) => `${API_BASE_URL}/events/${eventId}/register`,
  UNREGISTER_EVENT: (eventId) => `${API_BASE_URL}/events/${eventId}/unregister`,
  MY_REGISTRATIONS: `${API_BASE_URL}/registrations/my`,
  
  // Admin
  ADMIN_EVENTS: `${API_BASE_URL}/admin/events`,
  ADMIN_EVENT_BY_ID: (id) => `${API_BASE_URL}/admin/events/${id}`,
  ADMIN_PARTICIPANTS: (eventId) => `${API_BASE_URL}/admin/events/${eventId}/participants`,
  
  // QR Tickets
  DOWNLOAD_TICKET: (registrationId) => `${API_BASE_URL}/tickets/${registrationId}/download`,
  VERIFY_TICKET: `${API_BASE_URL}/tickets/verify`,
}

export default API_BASE_URL
