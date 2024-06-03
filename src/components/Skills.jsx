import React from 'react'
import '../css/skills.css'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'
import html from '../assets/images/html-logo.png'
import css from '../assets/images/css-logo.png'
import bootstrap from '../assets/images/bootstrap-logo.png'
import tailwind from '../assets/images/tailwind-logo.png'
import javascript from '../assets/images/js-logo.png'
import reactjs from '../assets/images/reactjs-logo.png'

function Skills() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#frontend > div", {
        y: 50,
        duration: 1.5,
        opacity: 0,
      }), gsap.from("#backend > div", {
        y: -50,
        duration: 1.5,
        opacity: 0
      }), gsap.from("#frontend,#backend", {
        opacity: 0,
        duration: 1.5,
      })
    }
    )
    return () => ctx.revert();
  }, [])

  return (
    <>

      <section id='skill' className='md:h-[100vh] bg-white h-full'>

        <div className='h-full'>

          <div id="frontend" className='p-16 w-full text-xl'>
            <h1 className='font-bold text-4xl text-teal-700 mb-5 '>Frontend</h1>

            <div id='f-list' className='mt-10 w-full md:flex flex-auto'>

              <div className=' w-2/5 rounded-xl p-2 mobile:mb-5 tablet:mb-5'>
                <img src={html} alt="" className='h-10' />
                <h1 className=' font-bold text-slate-500 '>HTML</h1>
              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <img src={css} alt="" className='h-10 ' />
                <h1 className='font-bold text-slate-500'>CSS</h1>
              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <img src={bootstrap} alt="" className='h-10 ' />
                <h1 className='font-bold text-slate-500'>Bootstrap</h1>
              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <img src={tailwind} alt="" className='h-10 ' />
                <h1 className='font-bold text-slate-500'>Tailwind</h1>

              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <img src={javascript} alt="" className='h-10 ' />
                <h1 className='font-bold text-slate-500'>Javascript</h1>

              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <img src={reactjs} alt="" className='h-10 ' />
                <h1 className='font-bold text-slate-500'>React JS</h1>

              </div>
            </div>
            <div id='additional' className='text-black mt-10'>
              <h1 className='font-semibold text-gray-600'>Additional Technologies</h1>
              <div className='text-sm font-medium text-gray-600'>
                <h3>Redux Toolkit</h3>
                <h3>React hook form</h3>
                <h3>Github</h3>
                <h3>GSAP (React animation library)</h3>
              </div>
            </div>
          </div>

          {/* <div id="backend" className='w-full p-16 text-xl '>
            <h1 className='font-bold text-4xl   text-teal-700 mb-5'>Backend</h1>

            <div id='b-list' className='flex mt-10 md:flex flex-auto'>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <h1 className='font-bold text-slate-500'>PHP</h1>
              </div>

              <div className=' w-2/5 rounded-xl p-2 mb-5'>
                <h1 className='font-bold text-slate-500'>MY SQL</h1>
              </div>

            </div>



          </div> */}
        </div>
      </section >

    </>
  )
}

export default Skills