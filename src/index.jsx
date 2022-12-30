import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import ShipmentContextProvider from './context/ShipmentContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ShipmentContextProvider>
      <App />
    </ShipmentContextProvider>
  </React.StrictMode>
)
