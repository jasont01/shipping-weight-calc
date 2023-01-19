import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import BuildContextProvider from './context/BuildContext'
import ShipmentContextProvider from './context/ShipmentContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BuildContextProvider>
      <ShipmentContextProvider>
        <App />
      </ShipmentContextProvider>
    </BuildContextProvider>
  </React.StrictMode>
)
