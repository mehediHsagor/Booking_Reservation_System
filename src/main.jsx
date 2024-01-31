import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Provider/Authprovider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>

<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

  </AuthProvider>
 
)
