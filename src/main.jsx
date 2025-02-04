import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css'; 

// Usar createRoot desde 'react-dom/client'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <GifExpertApp />
  </StrictMode>
)
