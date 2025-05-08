import React, { useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
const Home = () => {
    const [show,setShow] = useState(false);
    // Adding animations:
    useGSAP(() => {
        const tl = gsap.timeline({
          onUpdate() {
            if (tl.progress() >= 0.9) {
              document.querySelector('.svg')?.remove();
              setShow(true);
              tl.kill();
            }
          }
        });
      
        tl.to(".vi-mask-group", {
          rotate: 10,
          ease: "power4.inOut",
          duration: 2,
          transformOrigin: "50% 50%",
        })
        .to(".vi-mask-group", {
          scale: 10,
          opacity: 0,
          delay: -1.1,
          ease: "expo.inOut",
          duration: 2,
        });
      });
      
    
  return (
    <>
       <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
          href='/bg (1).png'
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>


      {show && 
      
      <div className='w-screen main  overflow-hidden '>
        {/* Landing_Page: */}

        <div className='landing-page w-screen h-screen '>
{/* Navigation-bar */}
<div className='fixed top-0 left-0 w-full h-[60px] px-4 flex items-center  z-[10]'>

   <div className='logo flex items-center gap-5'>
<div className='flex flex-col gap-1 mt-2'>
    <span className='w-15 h-1 bg-white'></span>
    <span className='w-10 h-1 bg-white'></span>

    <span className='w-5 h-1 bg-white'></span>

</div>

   <h2 className='font-semibold text-white logo text-2xl leading-none'>Rockstart</h2>
   </div>
</div>




{/* Images-section */}
<div className='w-full h-screen relative images-div'>

<img  src="/bg (1).png" alt='' className='absolute object-cover  w-full h-full z-1 left-0 top-0 pointer-events-none'/>
<img  src="/sky.png" alt='' className='absolute object-cover  w-full h-full pointer-events-none'/>
<img   src="/girlbg.png" alt='' className='absolute object-cover  pointer-events-none  left-1/2 z-2 -translate-x-1/2 xl:-bottom-[55%] -bottom-[20%]'/>



</div>

        </div>
        
       </div>
      }
    </>
  )
}

export default Home
