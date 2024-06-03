
import { NavLink, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'
import { useSideBar } from '../context/toggle'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'



function Header() {
  const { setSideBar } = useSideBar()
  const { sideBar } = useSideBar()

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('#navlinks > li', {
        y: -15,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0
      }), gsap.from('#button,#logo', {
        opacity: 0,
        duration: 0.8
      })
    }
    )
    return () => ctx.revert();
  }, [])

  function handleClick() {
    setSideBar(!sideBar)
  }

  return (
    <>
      <nav className='sm:h-16 w-full flex justify-between border-b p-5 bg-white'>
        <div id='logo' className='sm:text-lg text-gray-500 font-bold text-sm'> Portfolio.</div>
        <div className='text-center'>
          {/* <ul id='navlinks' className='flex lg:gap-20 md:gap-16 sm:gap-10 gap-5 sm:text-base text-sm sm:pt-0 pt-5'> */}

          <li>
            <NavLink to='/' className={({ isActive }) =>
              `font-medium hover:text-orange-600 duration-300 ${(isActive) ? 'text-orange-600' : 'text-black'}`}>
              Home
            </NavLink>
          </li>

          {/* <li>
              <NavLink to='#about' className={({ isActive }) =>
                `font-medium hover:text-orange-600 duration-300 ${(isActive) ? 'text-orange-600 ' : 'text-black'}`}>
                About
              </NavLink>
            </li> */}

          {/* <li>
              <NavLink to='/skills' className={({ isActive }) =>
                `font-medium hover:text-orange-600 duration-300 ${(isActive) ? 'text-orange-600 ' : 'text-black'}`}>
                Skills
              </NavLink>
            </li> */}

          {/* <li>
              <NavLink to='/qualification' className={({ isActive }) =>
                `font-medium hover:text-orange-600 duration-300 ${(isActive) ? 'text-orange-600 ' : 'text-black'}`}>
                Qualification
              </NavLink>
            </li> */}

          {/* <li>
            <NavLink to='/projects' className={({ isActive }) =>
              `font-medium hover:text-orange-600 duration-300 ${(isActive) ? 'text-orange-600 ' : 'text-black'}`}>
              Projects
            </NavLink>
          </li> */}

          {/* </ul>  */}
        </div>
        <div className='text-end'>
          <NavLink to='/contact' id='button' className='font-medium text-black outline outline-1 outline-slate-500 rounded-2xl py-1 sm:text-base text-sm 
         p-2 px-5 hover:text-orange-400 hover:bg-zinc-900 duration-300 '>
            Contact
          </NavLink>
        </div>


        {/* <div className={` ${(sideBar) ? ' fold-screen:hidden ' : ' fold-screen:block'} text-black fold-screen:block  text-end`} >
          <button onClick={() => handleClick()} >
            <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </button>
        </div> */}


        {/* {(sideBar) ? <Sidebar /> : null} */}

      </nav >
    </>
  )
}

export default Header;