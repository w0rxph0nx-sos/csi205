// react dependencies
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// react component
import './index.css'
// stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
