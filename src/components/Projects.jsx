import React from 'react'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'
import pglife from '../assets/images/project-1.png'
import rejouice from '../assets/images/project-2.png'


function Projects() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#box > div", {
        duration: 1.5,
        opacity: 0,
        stagger: 0.3
      })
    }
    )
    return () => ctx.revert();
  }, [])

  return (
    <>
      <div className='md:h-[100vh] h-auto bg-white'>
        <div id='box' className='h-full w-fullrounded-xl grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-5 sm:px-10'>

          <a className='p-2 md:w-[300px] w-[250px] h-fit bg-indo-600 border-2 border-teal-600 rounded-lg mb-10' href='http://pg-life-aman-chhalotre.vercel.app' target='blank'>
            <div className='md:h-52 h-40 rounded bg-white'>
              <img src={pglife} alt="" />
            </div>
            <div className='text-gray-500 bg-white rounded'>
              <b>Personal Project:-</b> Developed a dynamic web application, PG Life, facilitating students and professionals in finding paying guest accommodations in their preferred cities.
            </div>
          </a>

          <a className='p-2 md:w-[300px] w-[250px] h-fit bg-indo-600 border-2 border-teal-600 rounded-lg mb-10' href='http://rejouice-website-clone.vercel.app' target='blank'>
            <div className='md:h-52 h-40 rounded bg-white'>
              <img src={rejouice} alt="" />
            </div>
            <div className='text-gray-500 bg-white rounded'>
              <b>Personal Project:-</b> Developed a dynamic animated Landing page clone.
            </div>
          </a>


        </div>
      </div>
    </>
  )
}

export default Projects