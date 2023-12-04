import { gsap } from "gsap/dist/gsap";



   export const header_animation = [
    gsap.from('#navlinks > li',{
        y:-15,
        duration:0.5,
        stagger:0.2,
        opacity:0
    }),gsap.from('#button,#logo',{
        opacity:0,
        duration:0.8
    })
] 



export const home_animation = [
    gsap.to("#banner",{
    height:0,
    duration:1.3,
  }), gsap.to("#banner",{
  opacity:0,
  duration:3,
  }),
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
  ]


export const about_animation = [
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
]

export const skills_animation = [
    gsap.from("#frontend > div",{
        y:50,
        duration:1.5,
        opacity:0,
    }),gsap.from("#backend > div",{
        y:-50,
        duration:1.5,
        opacity:0
    }),gsap.from("#frontend,#backend",{
        opacity:0,
        duration:1.5,
    })
]

export const qualification_animation = [
    gsap.from(".heading",{
    y:-50,
    opacity:0,
    duration:1.5,
}),gsap.from('#degrees > div, #education',{
  x:-30,
  duration:1.5,
  opacity:0
}),gsap.from('#certificates > div, #certification',{
  x:30,
  duration:1.5,
  opacity:0
})
]

export const project_animation = [
    gsap.from("#box > div",{
      y:-50,
      duration:1.5,
      opacity:0,
      stagger:0.3  
    })
]
export const contact_animation = [
    gsap.from("#box1 > div",{
      x:-50,
      duration:1.5,
       opacity:0
    }),gsap.from("#box2 > div",{
      x:50,
      duration:1.5,
       opacity:0
    }),
]