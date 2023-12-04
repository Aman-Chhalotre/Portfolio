import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Qualification from './components/Qualification'
import Projects from './components/Projects'
import Contact from './components/Contact'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route} from 'react-router-dom'
import Notfound from './components/Notfound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='skills' element={<Skills/>}/>
      <Route path='qualification' element={<Qualification/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
