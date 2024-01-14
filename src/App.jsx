import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

/** Components */
import Layout from './components/Navigation/Layout'

/** Pages */
import Projects from './pages/Projects'
import Tickets from './pages/Tickets'
import Admin from './pages/Administration'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const handleLogin = () => {
    setIsLoggedIn(true);

  }

  // let navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/dashboard")
  //   }, [])
  // }, handleLogin)

  return (
    <>
      {/* {!isLoggedIn && <Layout><Dashboard /></Layout>} */}
      {!isLoggedIn && 
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin} />} />
      </Routes>}
      {isLoggedIn && (
        <Layout>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
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
