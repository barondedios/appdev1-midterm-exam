import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/animated.css';
import './styles/fontawesome.css';
import './styles/owl.css';
import './styles/templatemo-chain-app-dev.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
