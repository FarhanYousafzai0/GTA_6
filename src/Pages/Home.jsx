import React, { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home = () => {
  const [show, setShow] = useState(false);
    gsap.registerPlugin(ScrollTrigger);
  // Entry animation
  useGSAP(() => {
    const tl = gsap.timeline({
      onUpdate() {
        if (tl.progress() >= 0.9) {
          document.querySelector('.svg')?.remove();
          setShow(true);
          tl.kill();
        }
      },
    });

    tl.to('.vi-mask-group', {
      rotate: 10,
      ease: 'power4.inOut',
      duration: 2,
      transformOrigin: '50% 50%',
    }).to('.vi-mask-group', {
      scale: 10,
      opacity: 0,
      delay: -1.1,
      ease: 'expo.inOut',
      duration: 2,
    });
  });

  // Mouse icon bounce
  useGSAP(() => {
    gsap.fromTo(
      '.mouse-icon',
      { y: 0 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.2,
      },
    );
  });

  // Parallax effect
  useGSAP(() => {
    if (!show) return;
  
    const main = document.querySelector('.main');
    if (!main) return;
  
    const tl = gsap.timeline();
  
    tl.to('.main', {
      rotate: 0,
      scale: 1,
      ease: 'expo.inOut',
      duration: 1,
    })
      .to(
        '.main .bground',
        {
          scale: 1,
          rotate: 0,
          ease: 'expo.inOut',
          duration: 2,
        },
        '-=1.5' // overlap slightly
      )
      .to(
        '.main .sky',
        {
          scale: 1,
          rotate: 0,
          ease: 'expo.inOut',
          duration: 2,
        },
        '-=1.5'
      );

      tl.to('.img-2', {
        scale: 0,
        rotate: 0,
        ease: 'expo.inOut',
        duration: 1,
        scrollTrigger: {
          trigger: '.img-2',       // Element that triggers the animation
              // Optional end point
          scrub: true,            // Set to true if you want scroll-linked animation
          toggleActions: 'play none none reverse', // Optional
                  // Remove in production; helps with debugging
        }
      });
      
  
    const handleMouseMove = (e) => {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const clampedXMove = Math.min(Math.max(xMove, -20), 20);
  
      gsap.to('.main .text, .main .sky, .main .bground', {
        x: clampedXMove,
        duration: 0.5,
        ease: 'power1.out',
      });
    };
  
    main.addEventListener('mousemove', handleMouseMove);
    return () => main.removeEventListener('mousemove', handleMouseMove);
  }, [show]);
  
  return (
    <>
      <div className="svg fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000] flex items-center justify-center">
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
            href="/bg (1).png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {show && (
        <div className="w-screen overflow-x-hidden main rotate-[10deg] scale-[1.7]">
          {/* Landing Page */}
          <div className="landing-page w-screen h-screen relative overflow-hidden">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full h-[60px] px-4 flex items-center  z-[10]">
              <div className="logo flex items-center gap-5">
                <div className="flex flex-col gap-1 mt-2">
                  <span className="w-15 h-1 bg-white"></span>
                  <span className="w-10 h-1 bg-white"></span>
                  <span className="w-5 h-1 bg-white"></span>
                </div>
                <h2 className="font-semibold text-white text-2xl leading-none">Rockstart</h2>
              </div>
            </div>

            {/* Hero Text */}
            <div className="absolute text w-full left-1/2 -translate-x-1/2 z-[2] h-full text-center pointer-events-none flex flex-col items-center justify-center overflow-hidden">
              <h1 className="md:text-[10rem] text-[8rem] text-white leading-none">grand</h1>
              <h1 className="md:text-[10rem] text-[8rem] text-white leading-none">theft</h1>
              <h1 className="md:text-[10rem] text-[8rem] text-white leading-none">auto</h1>
            </div>

            {/* Images */}
            <div className="w-screen h-screen relative overflow-hidden images-div">
              <img
                src="/bg (1).png"
                alt=""
                className="absolute object-cover bground rotate-[-3deg] w-screen scale-[1.3] h-full z-1 left-0 top-0 pointer-events-none"
              />
              <img
                src="/sky.png"
                alt=""
                className="absolute object-cover sky w-full h-full scale-[1.3] pointer-events-none"
              />
              <img
                src="/girlbg.png"
                alt=""
                className="absolute object-cover pointer-events-none left-1/2 -translate-x-1/2 z-2 xl:-bottom-[70%] -bottom-[20%]"
              />
            </div>

            {/* Bottom Bar */}
            <div className="w-full h-[70px] px-5 absolute bottom-0 left-0 flex text-white bg-gradient-to-t from-black to-transparent z-[10]">
              <div className="flex items-center gap-1 overflow-hidden">
                <div className="mouse-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mouse"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="7" />
                    <path d="M12 6v4" />
                  </svg>
                </div>
                <h3 className="font-sans font-semibold">Scroll down</h3>
              </div>

              <img
                width={200}
                src="/ps5.png"
                alt="Ps4"
                className="absolute right-3 top-1/2 md:right-1/2 md:translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-full h-screen bg-black relative p-8 overflow-x-hidden">
            <div className="flex flex-col md:flex-row justify-between h-full gap-8">
              {/* Image */}
              <div className="md:w-1/2 w-full img-2 scale-[1.2] rotate-[-10] h-1/2 md:h-full">
                <img
                  src="/imag.png"
                  alt="Image"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full flex flex-col items-start justify-center gap-4 mt-10 md:mt-0">
                <h2 className="text-white text-5xl md:text-8xl font-semibold leading-tight">
                  not hunting,
                </h2>
                <h2 className="text-white text-5xl md:text-8xl font-semibold leading-tight">
                  just running
                </h2>
                <p className="text-white font-mono mt-4">
                  Vice City, USA. Jason and Lucia have always known the deck is stacked
                  against them. But when an easy score goes wrong, they find themselves
                  on the darkest ...
                </p>
                <p className="text-white font-mono mt-2">
                Grand Theft Auto VI is Now Coming May 26, 2026 - Rockstar Games.
                </p>
                <button className="bg-yellow-500 text-black rounded-lg cursor-pointer px-10 py-4 mt-10 w-full md:w-auto hover:bg-yellow-400 transition-all duration-300">
                  Play Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
