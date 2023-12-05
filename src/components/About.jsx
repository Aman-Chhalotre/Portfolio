import React from 'react'
import '../css/about.css'
import img from '../images/aman.png'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'




function About() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from('.about-text',{
        y:50,
        duration:1.5,
    }),gsap.from("#download-button,#aboutbg",{
        opacity:0,
        duration:1.5
    }),gsap.from('#image',{
        x:-50,
        duration:1.8,
        opacity:0
    })
  }
  )
  return () => ctx.revert();
},[])
  

  return (
    <div className='h-full'>
        <div className='h-screen m-10 fold-screen:m-2'>
          <div id='aboutbg' className='p-20 w-full flex rounded-2xl relative fold-screen:block fold-screen:p-5 mobile:block mobile:p-5 tablet:block'>
              
                <img src={img} id='image' className='border-2 rounded-full w-60 bg-yellow-300 mobile:w-32 fold-screen:w-40 tablet:w-40 tablet:h-40 laptop:h-60 laptop:self-center '/>
              

              <div id='bg-blur' className='about-text ms-10 rounded-xl w-fit fold-screen:mt-5 fold-screen:ms-0 fold-screen:w-full mobile:mt-5 mobile:ms-0 mobile:w-full tablet:mt-10' >
              <h1  className='text-xl text-black font-bold pt-10 mx-5 mobile:text-sm fold-screen:text-sm'>
                Hi, I'am <b>Aman Chhalotre</b> a Web developer with a strong background in web development and a diverse skill set including Ajax, MySQL, PHP, HTML/CSS, JavaScript and React.js. I am confident in my ability to contribute to a dynamic team. I have completed a Web Development certification course. As a result, I have developed a deep understanding of frontend web development, UI development. I take pride in my attention to detail and my ability to create user-friendly interfaces.
              </h1>
              </div>

          </div>
            
            <div className='flex justify-center'>
              <a href="../images/AMAN_CHHALOTRE.Resume.docx" download={"./images/AMAN_CHHALOTRE.Resume.docx"} target='_blank'>
                <button id='download-button' className='w-52 mt-20 p-3 border rounded-2xl border-slate-400 text-black font-bold bg-slate-200 mobile:w-40 mobile:text-sm' >Download Resume</button></a>
            </div>
            
        </div>
    </div>
  )
}

export default About