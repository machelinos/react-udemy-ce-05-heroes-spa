import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { appRouterConfiguration } from './router/appRouterConfiguration'

import './style.css'

const router = createBrowserRouter(appRouterConfiguration)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
