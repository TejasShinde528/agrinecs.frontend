import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './styles/index.css'

const spaPath = sessionStorage.getItem('tejas-spa-path')
if (spaPath) {
  sessionStorage.removeItem('tejas-spa-path')
  if (spaPath !== window.location.pathname + window.location.search + window.location.hash) {
    window.history.replaceState(null, '', spaPath)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
