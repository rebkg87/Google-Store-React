import React from 'react'
import ReactDOM from 'react-dom/client'
import { PhotoProvider } from './components/photos/photo-context.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </React.StrictMode>,
)
