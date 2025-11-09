
import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/styles.css'
import App from '@/pages/App'
import Home from '@/pages/Home'
import Charter from '@/pages/Charter'
import Join from '@/pages/Join'
import Forum from '@/pages/Forum'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/charter', element: <Charter /> },
      { path: '/join', element: <Join /> },
      { path: '/forum', element: <Forum /> },
    ]
  }
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
