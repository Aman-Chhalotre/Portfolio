
import { NavLink, } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Sidebar from './Sidebar'
import { useSideBar} from '../context/toggle'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'



function Header() {
  const {setSideBar} = useSideBar()
  const {sideBar} = useSideBar()

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from('#navlinks > li',{
        y:-15,
        duration:0.5,
        stagger:0.2,
        opacity:0
    }),gsap.from('#button,#logo',{
        opacity:0,
        duration:0.8
    })
  }
  )
  return () => ctx.revert();
},[])
  
function handleClick (){
  setSideBar(!sideBar)
 }

  return (
    <>
    <nav className='h-16 mobile:h-36 flex justify-between mobile:block mobile:pb-10 fold-screen:mx-0 p-5 mobile:border-none border-b border-slate-700 z-50'>
        <div id='logo' className='text-lg text-gray-500 font-bold mobile:text-sm'> Portfolio.</div>
        <div className='mobile:text-center'>
            <ul id='navlinks'className='flex gap-20 laptop:gap-10 tablet:gap-5 mobile:gap-3.5 mobile:text-sm mobile:pt-5 fold-screen:hidden tablet:text-sm '>

                <li>
                  <NavLink to='/' className={({isActive}) => 
                    `text-gray-300 hover:text-orange-600 duration-300 ${(isActive)?'text-orange-600':'text-gray-300'}`}>
                    Home
                    </NavLink>
                </li>

                <li>
                  <NavLink to='/about' className={({isActive}) => 
                    `text-gray-300 hover:text-orange-600 duration-300 ${(isActive)?'text-orange-600 ':'text-gray-300'}`}>
                    About
                    </NavLink>
                </li> 

                <li>
                <NavLink to='/skills' className={({isActive}) => 
                  `text-gray-300 hover:text-orange-600 duration-300 ${(isActive)?'text-orange-600 ':'text-gray-300'}`}>
                  Skills
                  </NavLink>
                </li> 

                <li>
                <NavLink to='/qualification' className={({isActive}) => 
                  `text-gray-300 hover:text-orange-600 duration-300 ${(isActive)?'text-orange-600 ':'text-gray-300'}`}>
                  Qualification
                  </NavLink>  
                </li> 
                
                <li>
                <NavLink to='/projects' className={({isActive}) => 
                  `text-gray-300 hover:text-orange-600 duration-300 ${(isActive)?'text-orange-600 ':'text-gray-300'}`}>
                  Projects
                  </NavLink>
                </li>  
                
            </ul>
        </div>
        <div className='mobile:text-end mobile:mt-5'>
        <NavLink to='/contact' id='button' className='text-white outline outline-1 outline-slate-500 rounded-2xl mobile:py-1 mobile:text-sm 
         p-2 px-5 hover:text-orange-400 hover:bg-zinc-900 duration-300 fold-screen:hidden'>
          Contact
        </NavLink>
        </div>

        
        <div className={`hidden ${(sideBar)? ' fold-screen:hidden ':' fold-screen:block'} fold-screen:block  text-end` } >
          <button onClick={() => handleClick()} >
            <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
          </button>
        </div>
        
        
        {(sideBar)?<Sidebar />: null}
        
    </nav>
    </>
  )
}

export default Header;