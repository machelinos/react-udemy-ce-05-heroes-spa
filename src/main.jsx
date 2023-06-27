import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { appRouterConfiguration } from './router/appRouterConfiguration'

import './style.css'
import { AuthProvider } from './auth'

const router = createBrowserRouter(appRouterConfiguration)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
