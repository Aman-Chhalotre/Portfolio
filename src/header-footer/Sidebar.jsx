import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {useSideBar} from '../context/toggle'

function Sidebar() {

  const {setSideBar} = useSideBar()
  const {sideBar} = useSideBar()

function handleClick(){
 setSideBar(!sideBar)
}


  return (
    <>
    <div className=' z-50 h-screen w-52  bg-slate-900 rounded'>

      <div className='m-5'>
        <button onClick={() =>{handleClick()}}>
          <FontAwesomeIcon icon={faArrowLeft} style={{color: "white",}} />
        </button>
      </div>

      <ul id='navlinks'className='m-8'>

        <li>
          <NavLink to='/' className={({isActive}) => 
            `text-gray-300 hover:text-orange-600 duration-300 text-lg ${(isActive)?'text-orange-600':'text-gray-300'}`}>
            Home
            </NavLink>
        </li>

        <li>
          <NavLink to='/about' className={({isActive}) => 
            `text-gray-300 hover:text-orange-600 duration-300 text-lg ${(isActive)?'text-orange-600':'text-gray-300'}`}>
            About
            </NavLink>
        </li> 

        <li>
        <NavLink to='/skills' className={({isActive}) => 
          `text-gray-300 hover:text-orange-600 duration-300 text-lg ${(isActive)?'text-orange-600':'text-gray-300'}`}>
          Skills
          </NavLink>
        </li> 

        <li>
        <NavLink to='/qualification' className={({isActive}) => 
          `text-gray-300 hover:text-orange-600 duration-300 text-lg ${(isActive)?'text-orange-600':'text-gray-300'}`}>
          Qualification
          </NavLink>  
        </li> 
        
        <li>
        <NavLink to='/projects' className={({isActive}) => 
          `text-gray-300 hover:text-orange-600 duration-300 text-lg ${(isActive)?'text-orange-600':'text-gray-300'}`}>
          Projects
          </NavLink>
        </li>  
        
      </ul>

      <div className='m-8'>
        <NavLink to='/contact' id='button' className='text-white outline outline-1 outline-slate-500 rounded-2xl p-2 px-5 hover:text-orange-400  hover:bg-zinc-900 duration-300 '>
        Contact
        </NavLink>
      </div>
    </div>
</>
  )
}

export default Sidebar