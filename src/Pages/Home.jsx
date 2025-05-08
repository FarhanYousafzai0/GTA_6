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
    </>
  )
}

export default Home
