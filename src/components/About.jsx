import React from 'react'
import '../css/about.css'
import img from '../images/aman.png'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'




function About() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-text', {
        y: 50,
        duration: 1.5,
      }), gsap.from("#download-button,#aboutbg", {
        opacity: 0,
        duration: 1.5
      }), gsap.from('#image', {
        x: -50,
        duration: 1.8,
        opacity: 0
      })
    }
    )
    return () => ctx.revert();
  }, [])


  return (
    <section id='about' className='lg:h-[100vh] h-auto p-10 bg-white flex flex-col gap-20 items-end'>

      <div id='bg-blur' className='about-text grid lg:grid-cols-2 grid-cols-1 items-center sm:w-fit mt-5 w-full sm:mt-10' >
        <img src={img} id='image' className='border-2 sm:w-60 w-48 bg-yellow-300' />
        <h1 className='sm:text-xl text-gray-600 font-bold pt-10 text-sm'>
          Hi, I'am <b>Aman Chhalotre</b> a Web developer with a strong Hands-on Knowledge in web development and a diverse skill set. I am confident in my ability to contribute to a dynamic team. I have completed a Web Development certification course. As a result, I have developed a deep understanding of frontend web development, UI development. I take pride in my attention to detail and my ability to create user-friendly interfaces.
        </h1>
      </div>



      <div className='flex justify-center items-center'>
        <a href="../images/AMAN_CHHALOTRE_Resume.docx" download={"AMAN_CHHALOTRE_Resume.docx"} target='_blank'>
          <button id='download-button' className='sm:w-52 w-40 p-3 border rounded-2xl text-white font-bold bg-[#494D60]  sm:text-base text-sm' >Download Resume</button></a>
      </div>

    </section>
  )
}

export default About