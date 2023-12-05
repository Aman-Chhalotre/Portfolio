import React from 'react'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'


function Projects() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from("#box > div",{
        duration:1.5,
        opacity:0,
        stagger:0.3  
      })
  }
  )
  return () => ctx.revert();
},[])

  return (
  <>
    <div className='h-screen laptop:h-full tablet:h-full mobile:h-full fold-screen:h-full'>
        <div id='box' className='h-full m-10 rounded-xl flex justify-center gap-10 tablet:block mobile:block fold-screen:block'>

            <div className='p-2 w-1/4 h-fit bg-indo-600 border-2 border-teal-600 rounded-lg tablet:mb-10 mobile:mb-10 fold-screen:mb-10 
            tablet:w-1/2 mobile:w-full fold-screen:w-full'>
              <div className='h-52 rounded bg-white'>
                
              </div>
              <div className='text-indigo-500 bg-white rounded'>
                description
              </div>            
            </div>

            <div className='p-2 w-1/4 h-fit bg-indo-600 border-2 border-blue-500 rounded-lg tablet:mb-10 mobile:mb-10 fold-screen:mb-10 
            tablet:w-1/2 mobile:w-full fold-screen:w-full'>
              <div className='h-52 rounded bg-white'>
                
              </div>
              <div className='text-indigo-500 bg-white rounded'>
                description
              </div> 
            </div>

            <div className='p-2 w-1/4 h-fit bg-indo-600 border-2 border-indigo-500 rounded-lg tablet:mb-10 mobile:mb-10 fold-screen:mb-10  tablet:w-1/2 mobile:w-full fold-screen:w-full'>
              <div className='h-52 rounded bg-white'>
                
              </div>
              <div className='text-indigo-500 bg-white rounded'>
                description
              </div> 
            </div>
        </div>
    </div>
  </>
  )
}

export default Projects