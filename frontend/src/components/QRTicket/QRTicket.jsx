import { useEffect, useRef } from 'react'
import QRCode from 'qrcode'
import './QRTicket.css'

function QRTicket({ registration, onClose }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current && registration) {
      QRCode.toCanvas(
        canvasRef.current,
        registration.qrData,
        {
          width: 250,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#ffffff'
          }
        },
        (error) => {
          if (error) console.error('QR Code generation error:', error)
        }
      )
    }
  }, [registration])

  const handleDownload = () => {
    if (!canvasRef.current) return
    
    const url = canvasRef.current.toDataURL('image/png')
    const link = document.createElement('a')
    link.download = `ticket-${registration.eventTitle.replace(/\s+/g, '-')}.png`
    link.href = url
    link.click()
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="ticket-modal" onClick={onClose}>
      <div className="ticket-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="ticket-content">
          <div className="ticket-header">
            <h2>🎫 Event Ticket</h2>
            <p className="ticket-status">Status: {registration.status.toUpperCase()}</p>
          </div>

          <div className="ticket-details">
            <h3>{registration.eventTitle}</h3>
            <div className="ticket-info">
              <div className="info-row">
                <span className="info-label">Date:</span>
                <span className="info-value">
                  {new Date(registration.eventDate).toLocaleDateString()}
                </span>
              </div>
              <div className="info-row">
                <span className="info-label">Time:</span>
                <span className="info-value">{registration.eventTime}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Location:</span>
                <span className="info-value">{registration.eventLocation}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Registration ID:</span>
                <span className="info-value">#{registration.id}</span>
              </div>
            </div>
          </div>

          <div className="qr-section">
            <canvas ref={canvasRef} />
            <p className="qr-instruction">
              Present this QR code at the event entrance for check-in
            </p>
          </div>

          <div className="ticket-actions">
            <button onClick={handleDownload} className="btn btn-primary">
              📥 Download Ticket
            </button>
            <button onClick={handlePrint} className="btn btn-outline">
              🖨️ Print Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QRTicket
