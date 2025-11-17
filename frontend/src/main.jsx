import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import App from './App.jsx'
// import Sidebar from './Components/Sidebar.jsx'
// import ProfileSidebar from './Components/ProfileSideBar.jsx'
import Profile from './Pages/Profile'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Profile />
    </BrowserRouter>
  </StrictMode>,
)
