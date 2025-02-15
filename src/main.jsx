import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'

import routes from './assets/Components/Utility/Router.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes}/>
  </StrictMode>
)
