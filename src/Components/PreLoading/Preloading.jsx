
import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const counterRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      } 
    });

    // 1. Initial State
    gsap.set(".preloader-bar", { scaleY: 1, transformOrigin: "top" });
    gsap.set(".loader-content", { opacity: 0, y: 40 });

    // 2. Reveal Content
    tl.to(".loader-content", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
      stagger: 0.2
    });

    // 3. Counter Animation
    const counterObj = { value: 0 };
    tl.to(counterObj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      }
    }, "-=0.5");

    // 4. Exit Animation - Staggered Curtain Reveal
    tl.to(".loader-content", {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power4.in"
    });

    tl.to(".preloader-bar", {
      scaleY: 0,
      duration: 1.2,
      stagger: {
        amount: 0.4,
        from: "center"
      },
      ease: "expo.inOut"
    }, "-=0.2");

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      {/* Background Curtains */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="preloader-bar flex-1 bg-dark h-full border-r border-white/5 last:border-0" />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center pointer-events-none overflow-hidden">
        <div className="loader-content">
          <p className="text-[10px] font-black uppercase tracking-[0.8em] text-accent mb-4">
            Studio Loading
          </p>
          <h1 className="text-6xl md:text-9xl font-black font-display text-white uppercase tracking-tighter leading-none mb-8">
            Spica<span className="text-accent">ware.</span>
          </h1>
        </div>
        
        <div className="loader-content flex flex-col items-center">
          <div className="text-white font-display text-8xl md:text-[12rem] leading-none select-none opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap">
            EST 2011 • EST 2011 • EST 2011
          </div>
          
          <div className="relative mt-8">
            <span ref={counterRef} className="text-white text-5xl md:text-7xl font-black font-display tracking-widest">
              {progress < 10 ? `00${progress}` : progress < 100 ? `0${progress}` : progress}
            </span>
            <span className="text-accent text-xl font-black absolute -top-2 -right-6">%</span>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .preloader-bar {
          will-change: transform;
        }
      `}} />
    </div>
  );
};

export default Preloader;
