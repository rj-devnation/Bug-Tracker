import { Route, Routes } from 'react-router-dom'
import React, { useState } from 'react'

/** Components */
import Layout from './components/Navigation/Layout'

/** Pages */
import Projects from './pages/Projects'
import Tickets from './pages/Tickets'
import Admin from './pages/Administration'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return (
    <>
    <Layout />
      {/* {!isLoggedIn && <Layout><Dashboard /></Layout>} */}
      {/* {!isLoggedIn && 
      <Routes>
        <Route index path='/Bug-Tracker/login' element={<Login onLogin={handleLogin} />} />
      </Routes>}
      {isLoggedIn && (
        <Layout>
          <Routes>
            <Route index path='/Bug-Tracker/dashboard' element={<Dashboard />} />
            <Route path='/Bug-Tracker/projects' element={<Projects />} />
            <Route path='/Bug-Tracker/tickets' element={<Tickets />} />
            <Route path='/Bug-Tracker/admin' element={<Admin />} />
          </Routes>
        </Layout>
    )} */}
    </>
  )
}

export default App
