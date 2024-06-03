
import '../css/home.css'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'
import About from './About'
import homeBg from '../assets/images/home-image3-removebg-preview.png'
import Skills from './Skills'
import Projects from './Projects'



function Home() {


  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to("#text", {
        y: -70,
        delay: 4.4
      }), gsap.to("#text", {
        opacity: 0,
        delay: 3.5
      }), gsap.from('.intro', {
        x: 75,
        opacity: 0,
        duration: 2,
        delay: 1,
      }), gsap.from('#homeBg', {
        opacity: 0,
        delay: 1
      })
    }
    )
    return () => ctx.revert();
  }, [])

  return (
    <>
      <section id='home' className='h-[100vh] w-full overflow-hidden bg-white' >

        <div id='homeBg' className='h-full flex sm:flex-row flex-col items-center sm:justify-between sm:px-20 px-3'>


          <div className='text-black flex flex-col justify-center items-center '>

            <h1 className='sm:text-5xl text-3xl font-sans intro text-gray-500' id='intro'>Hi, I'am <span id='name' className='font-semibold text-gray-600'>Aman</span> </h1>

            <h1 className='sm:text-2xl text-xl pt-2 intro text-gray-500' >Frontend Web Developer</h1>

          </div>
          <div>
            <img id='homeBg' src={homeBg} alt="" className='lg:h-[400px] md:h-[300px] w-[100%] h-[200px]' />
          </div>
        </div>

      </section>
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default Home