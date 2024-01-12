import { useState } from 'react'
import Layout from './components/Layout'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Projects from './pages/Projects'
import Tickets from './pages/Tickets'
import Admin from './pages/Administration'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/projects' element={<Projects />}></Route>
      <Route path='/tickets' element={<Tickets />}></Route>
      <Route path='/admin' element={<Admin />}></Route>
    </Route>
    
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
