import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>,
)
