
import '../css/home.css'
import { gsap } from 'gsap/dist/gsap'
import { useEffect } from 'react'



function Home() {


  useEffect(()=>{
    let ctx = gsap.context(()=>{
      gsap.to("#banner",{
      height:0,
      duration:1.3,
    })
    gsap.to("#banner2",{
      height:0,
      duration:1.5,
      delay:4
    }),
    gsap.to("#slide-up",{
      y:-30,
      height:0,
      duration:1.2,
      delay:1.5
    }),gsap.to("#text",{
      y:-70,
      delay:4.4
    }),gsap.to("#text",{
      opacity:0,
      delay:3.5
    }),gsap.from('.intro',{
      y:75,
      opacity:0,
      duration:2,
      delay:5.5,
    })
  }
  )
  return () => ctx.revert();
},[])
  
  return (
  <>
  <div className='h-screen w-full overflow-hidden ' >
    <div id='homeBg' className='h-full relative '>
      <div id='banner' className='h-screen bg-teal-700 w-full z-40 relative' style={{zindex: 100}}></div>
      <div id='banner2' className='h-screen bg-white w-ful z-10 flex justify-center items-center relative' >
        <div id='slide-up' className='w-80 h-16 bg-white absolute'></div>
        <div id='text' className='text-5xl mobile:text-3xl fold-screen:text-2xl font-bold text-black'>WELCOME...</div>
      </div>

        
        <div className='text-slate-300 text-center '>
          
              <h1 className='text-5xl mobile:text-3xl font-serif pt-52 intro text-white intro ' id='intro'>Hi, I'am <span id='name'>Aman</span> </h1>
              <h1 className='text-3xl mobile:text-2xl pt-2 intro' >Frontend Web Developer</h1>
            
        </div>
        </div>
        
    </div>
  </>
  )
}

export default Home