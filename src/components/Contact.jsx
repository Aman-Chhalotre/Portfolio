import React from 'react'
import '../css/contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'


function Contact() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from("#box1 > div", {
        x: -50,
        duration: 1.5,
        opacity: 0
      }), gsap.from("#box2 > div", {
        x: 50,
        duration: 1.5,
        opacity: 0
      })
    }
    )
    return () => ctx.revert();
  }, [])

  function copytoclipboard(text) {
    window.navigator.clipboard.writeText(text)
  }
  return (
    <>
      <div className='h-screen sm:mx-28 mx-5 mt-16'>

        <div id="box1" className='lg:flex justify-around h-1/3 w-full mb-8 block pt-3 p-5 bg-slate-300 rounded-xl'>

          <div className='w-auto  font-bold self-center  mb-8'>
            <h1 className='lg:text-4xl w-fit md:text-3xl sm:text-2xl text-xl text-stone-600'><FontAwesomeIcon icon={faPhone} className='text-3xl' /> Call</h1>
            <h1 className='tooltip lg:text-2xl md:text-xl sm:text-lg text-sm text-black ' onClick={() => { copytoclipboard(+917089826603) }}>+91 7089826603
              <span className='tooltiptext text-xs bg-slate-950 w-16 p-1 ms-8 rounded opacity-50 text-white' >Click to copy</span>
            </h1>
          </div>
          <div className='w-auto font-bold self-center mb-8'>
            <h1 className='lg:text-4xl w-fit md:text-3xl sm:text-2xl text-xl text-stone-600'><FontAwesomeIcon icon={faEnvelope} className='text-3xl' /> Email</h1>
            <h1 className='tooltip lg:text-2xl md:text-xl sm:text-lg text-sm text-black' onClick={() => { copytoclipboard('amanchhalotre200@gmail.com') }}>amanchhalotre200@gmail.com
              <span className=' tooltiptext text-xs bg-slate-950 w-16 p-1 sm:ms-8 ms-2 mobile:w-10 rounded opacity-50 text-white' >Click to copy</span>
            </h1>
          </div>
        </div>

        <div id="box2" className='lg:flex justify-around h-1/3 w-full block pt-2 p-5 bg-slate-300 rounded-xl'>

          <div className='w-auto font-bold self-center mb-8'>
            <h1 className='lg:text-4xl w-fit md:text-3xl sm:text-2xl text-xl text-stone-600' ><FontAwesomeIcon icon="fa-brands fa-instagram" /> Instagram</h1>
            <a href='https://www.instagram.com/aman_chhalotre/' target='_blank' className='lg:text-2xl md:text-xl sm:text-lg text-sm text-black'>aman_chhalotre</a>
          </div>
          <div className='w-auto font-bold self-center mb-8'>
            <h1 className='lg:text-4xl w-fit md:text-3xl sm:text-2xl text-xl text-stone-600'> Linkdin</h1>
            <a href='https://www.linkedin.com/in/aman-chhalotre-00873b249?' target='_blank' className='lg:text-2xl md:text-xl sm:text-lg text-sm text-black'>Aman Chhalotre</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact