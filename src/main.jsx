import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { GlobalStyle } from './styles/Globalstyle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
   
    <RouterProvider  router={router}/>
  </StrictMode>,
)
