import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Hero.css"
import { JumpingText } from './JumpingText';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {

    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.to(".hero-float", {
            y: -25,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                amount: 2,
                from: "random"
            }
        });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        });

        tl.to(".hero-img-1", {
            xPercent: -20,
            yPercent: -50
        }, 0);

        tl.to(".hero-img-2", {
            xPercent: 20,
            yPercent: -40
        }, 0);

        tl.to(".hero-img-3", {
            xPercent: -20,
            yPercent: 50
        }, 0);

        tl.to(".hero-img-4", {
            yPercent: -150,
            opacity: 0.7
        }, 0);

        tl.to(".hero-img-5", {
            yPercent: 150,
            opacity: 0.7
        }, 0);
        
        tl.to(".hero-text", {
            y: 100,
            // opacity: 0.7,
            scale: 0.9,
        }, 0);
        


        gsap.from(".hero-text", {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });
        
        gsap.from(".hero-img-fade", {
            opacity: 0,
            scale: 0.9,
            duration: 0.5,
            delay: 0.1,
            stagger: 0.2,
            ease: "power2.out"
        });

    }, { scope: containerRef });

    return (

        <section ref={containerRef} className="relative min-h-[100vh] flex flex-col justify-center items-center overflow-hidden bg-customBg pt-20 pb-48">

            <div className="hero-img-1 absolute top-[-5%] left-[-5%] md:top-[-10%] md:left-[-2%] w-[45vw] md:w-[28vw] max-w-[450px] hero-float hero-img-fade z-10 pointer-events-none">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-1.png" alt="Abstract White Shape" className="w-full h-auto object-contain" />
            </div>

            <div className="hero-img-2 absolute top-[15%] right-[-15%] md:top-[5%] md:right-[-8%] w-[55vw] md:w-[38vw] max-w-[650px] hero-float hero-img-fade z-10 pointer-events-none">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-2.png" alt="Abstract Brown Shape" className="w-full h-auto object-contain" />
            </div>


            <div className="hero-img-3 absolute bottom-[5%] left-[-10%] md:bottom-[-5%] md:left-[-5%] w-[50vw] md:w-[35vw] max-w-[600px] hero-float hero-img-fade z-10 pointer-events-none">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-3.png" alt="Abstract Green Shape" className="w-full h-auto object-contain" />
            </div>

            <div className="hero-img-4 absolute top-[20%] left-[20%] md:left-[28%] w-[15vw] md:w-[10vw] max-w-[180px] hero-float hero-img-fade z-0 opacity-90 pointer-events-none">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-4.png" alt="Small White Shape" className="w-full h-auto object-contain" />
            </div>

            <div className="hero-img-5 absolute bottom-[23%] right-[20%] md:right-[33%] w-[12vw] md:w-[8vw] max-w-[150px] hero-float hero-img-fade z-20 pointer-events-none">
                <img src="https://spicaware.com/wp-content/uploads/2024/12/shapes-5.png" alt="Small White Shape" className="w-full h-auto object-contain" />
            </div>

            <div className="text-since relative z-4 text-center flex flex-col items-center justify-center mt-4 md:mt-0 select-none mix-blend-difference md:mix-blend-normal py-16">
                <h1 className="hero-text font-black text-dark tracking-tighter uppercase">
                    <JumpingText
                        text="Creative"
                        // className="hero-text font-black font-display text-dark track-tighter uppercase"
                        // style={{ fontSize: 'calc(1rem + 6vw)', lineHeight: '80%'}}
                        hoverColor="hover:text-[#59BB8C]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-2"
                        // yOffset={-10} 
                        />
                </h1>
                <h1 className="hero-text font-black font-display text-dark tracking-tighter uppercase">
                    <JumpingText
                        text="Design"
                        // className="hero-text font-black font-display text-dark tracking-tighter uppercase"
                        // style={{ fontSize: 'calc(1rem + 6vw)', lineHeight: '80%'}}
                        hoverColor="hover:text-[#935E2D]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-2"
                        // yOffset={-10}
                    />
                    {/* <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-16"
                    >
                        <span className="text-neutral-700 uppercase text-[90px] tracking-[1.2em] font-black block mb-4">
                            Vertical Stretch System
                        </span>
                        <div className="h-[1px] w-20 bg-neutral-900 mx-auto"></div>
                    </motion.div> */}
                </h1>
                <h1 className="hero-text font-black font-display text-dark tracking-tighter uppercase flex items-baseline justify-center">
                    <JumpingText
                        text="agency"
                        // className="hero-text font-black font-display text-dark tracking-tighter uppercase"
                        // style={{ fontSize: 'calc(1rem + 6vw)', lineHeight: '80%'}}
                        hoverColor="hover:text-gray-400"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="mb-2"
                        // yOffset={-10} 
                        />
                </h1>

                <div className="mt-16 md:mt-24 hero-text">
                    <p className="text-[12px] md:text-xs tracking-[0.3em] text-gray-500 uppercase">Since 2014</p>
                </div>
            </div>
        </section>
    )
}
