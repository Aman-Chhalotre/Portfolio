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

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='skills' element={<Skills/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Home/>
      },{
        path:'about',
        element:<About/>
      },{
        path:'skills',
        element:<Skills/>
      },{
        path:'qualification',
        element:<Qualification/>
      },{
        path:'projects',
        element:<Projects/>
      },{
        path:'contact',
        element:<Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
