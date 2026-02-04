import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n';
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// Navigeerimiseks:
// 1. npm i react-router-dom (paneb node_modules kausta vajalikud koodid)
// 2. importida BrowserRouter sealtsamast react-router-dom moodulist
// 3. ümbritseda <App /> ehk App.jsx fail selle BrowserRouteriga
// 4. App.jsx failis teha URLi ja HTMLi seoseid

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
