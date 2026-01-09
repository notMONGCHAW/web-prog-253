# **2. Online Event Registration System (With QR Ticket Twist)**

### **Description**

A platform for users to register for events, while admins manage events and participants.

### **Twist**

Registration automatically generates a **QR-coded ticket** with pure PHP (no external API).

## **Functional Requirements**

* **User Features**
  * Create account and log in
  * Browse events
  * Register/unregister
  * Download QR ticket

* **Admin Features**
  * Create/edit/delete events
  * Set seat limits
  * View participant list
* **QR Ticket System (Twist)**a
  * Generate QR containing “eventID-userID”
  * JS-based QR scanner to mark attendance
* **Notifications**
  * Email confirmation on successful registration

## **Non-Functional Requirements**

* Fast event pagination
* Secure session management
* Prevent duplicate registrations
* Anti-spam rate limiting

---
