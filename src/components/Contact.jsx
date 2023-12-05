import React from 'react'
import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'


function Contact() {

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.from("#box1 > div",{
        x:-50,
        duration:1.5,
         opacity:0
      }),gsap.from("#box2 > div",{
        x:50,
        duration:1.5,
         opacity:0
      })
  }
  )
  return () => ctx.revert();
},[])

  function copytoclipboard(text) {
    window.navigator.clipboard.writeText(text)
  }
  return (
    <>
    <div  className='h-screen mobile:mx-5 fold-screen:mx-0 mx-28 mt-16 '>

      <div id="box1" className='flex h-1/3 mobile:w-full mb-8 tablet:block mobile:block mobile:pt-3 fold-screen:pt-5 fold-screen:block bg-slate-300 rounded-xl'>

        <div className='w-1/2 tablet:w-auto mobile:w-fit fold-screen:w-auto font-bold self-center  ms-10 mb-8'>
          <h1 className='text-4xl w-fit laptop:text-3xl tablet:text-2xl mobile:text-xl fold-screen:text-lg text-stone-600'><FontAwesomeIcon icon={faPhone} className='text-3xl'/> Call</h1>
          <h1 className='tooltip text-2xl laptop:text-xl tablet:text-lg mobile:text-sm fold-screen:text-sm text-black ' onClick={() => {copytoclipboard(+917089826603)}}>+91 7089826603
            <span  className='tooltiptext text-xs bg-slate-950 w-16 p-1 ms-8 rounded opacity-50 text-white' >Click to copy</span>
          </h1>
        </div>
        <div className='w-1/2 tablet:w-auto mobile:w-fit fold-screen:w-auto font-bold self-center ms-10 mb-8'>
          <h1 className='text-4xl laptop:text-3xl tablet:text-2xl mobile:text-xl fold-screen:text-lg w-fit text-stone-600'><FontAwesomeIcon icon={faEnvelope} className='text-3xl'/> Email</h1>
          <h1  className='tooltip text-2xl laptop:text-xl tablet:text-lg mobile:text-sm fold-screen:text-sm text-black' onClick={() => {copytoclipboard('amanchhalotre200@gmail.com')}}>amanchhalotre200@gmail.com
            <span  className=' tooltiptext text-xs bg-slate-950 w-16 p-1 ms-8 mobile:ms-2 mobile:w-10 fold-screen:ms-0 fold-screen:w-8 rounded opacity-50 text-white' >Click to copy</span>
          </h1>
        </div>
      </div>

      <div id="box2" className='flex  h-1/3 mobile:w-full tablet:block mobile:block mobile:pt-2 fold-screen:pt-5 fold-screen:block bg-slate-300 rounded-xl'>

        <div className='w-1/2 tablet:w-auto mobile:w-fit fold-screen:w-auto font-bold self-center ms-10 mb-8'>
          <h1 className='text-4xl w-fit text-stone-600 laptop:text-3xl tablet:text-2xl mobile:text-xl fold-screen:text-lg' ><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</h1>
          <a href='https://www.instagram.com/aman_chhalotre/' target='_blank' className='text-2xl laptop:text-xl tablet:text-lg mobile:text-sm fold-screen:text-sm text-black'>aman_chhalotre</a>
        </div>
        <div className='w-1/2 tablet:w-auto mobile:w-fit fold-screen:w-auto font-bold self-center ms-10 mb-8'>
        <h1 className='text-4xl w-fit text-stone-600 laptop:text-3xl tablet:text-2xl mobile:text-xl fold-screen:text-lg'> Linkdin</h1>
          <a href='https://www.linkedin.com/in/aman-chhalotre-00873b249?' target='_blank' className='text-2xl laptop:text-xl tablet:text-lg mobile:text-sm fold-screen:text-sm text-black'>Aman Chhalotre</a>
        </div>
      </div>

    </div>
    </>
  )
}

export default Contact