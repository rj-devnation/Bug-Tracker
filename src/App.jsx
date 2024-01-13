import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Tickets from './pages/Tickets'
import Admin from './pages/Administration'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route index path='/dashboard' element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/admin' element={<Admin />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
