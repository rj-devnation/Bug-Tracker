import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'

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
      {/* {!isLoggedIn && <Layout><Dashboard /></Layout>} */}
      {!isLoggedIn && 
      <Routes>
        <Route index path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>}
      {isLoggedIn && (
        <Layout>
          <Routes>
            <Route index path='/dashboard' element={<Dashboard />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/tickets' element={<Tickets />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </Layout>
    )}
    </>
  )
}

export default App
