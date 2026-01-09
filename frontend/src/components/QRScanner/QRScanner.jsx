import { useState, useRef, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import './QRScanner.css'

function QRScanner({ onScan, onClose }) {
  const [scanning, setScanning] = useState(true)
  const [result, setResult] = useState(null)
  const scannerRef = useRef(null)

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        rememberLastUsedCamera: true,
      },
      false
    )

    scanner.render(
      (decodedText, decodedResult) => {
        setScanning(false)
        setResult(decodedText)
        scanner.clear()
        onScan && onScan(decodedText, decodedResult)
      },
      (error) => {
        // Ignore scan errors (happens continuously while scanning)
        console.warn('QR scan error:', error)
      }
    )

    scannerRef.current = scanner

    return () => {
      scanner.clear().catch(error => {
        console.error('Failed to clear scanner:', error)
      })
    }
  }, [onScan])

  return (
    <div className="scanner-modal" onClick={onClose}>
      <div className="scanner-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="scanner-content">
          <h2>Scan QR Ticket</h2>
          
          {scanning ? (
            <>
              <div id="qr-reader" />
              <p className="scanner-instruction">
                Position the QR code within the frame to scan
              </p>
            </>
          ) : (
            <div className="scan-result">
              <div className="result-icon">✅</div>
              <h3>Scan Successful!</h3>
              <p className="result-data">{result}</p>
              <button onClick={onClose} className="btn btn-primary">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default QRScanner
