import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import route from './routers/Routes.jsx'
import Shop_allcategory_contex from './contex/Context.jsx'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Shop_allcategory_contex>
    <RouterProvider router={route}>
    <App />
    </RouterProvider>
    </Shop_allcategory_contex>
  // </StrictMode>,
)
