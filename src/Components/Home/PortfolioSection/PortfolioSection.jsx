import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PortfolioSection.css'
gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {

        const headingParts = textRef.current.querySelectorAll('span, .text-segment');

        gsap.from(headingParts, {
            y: 50,
            opacity: 0,
            rotateX: -45,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: textRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.from(".manifesto-footer", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".manifesto-footer",
                start: "top 90%",
            }
        });

        gsap.to(".bg-deco-x", {
            y: -100,
            rotate: 180,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        console.clear();

        const buttons = gsap.utils.toArray(".button");
        buttons.forEach((item) => {
            let span = item.querySelector("span");
            let tl = gsap.timeline({ paused: true });

            tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
            tl.set(span, { yPercent: 150 });
            tl.to(span, { duration: 0.2, yPercent: 0 });

            item.addEventListener("mouseenter", () => tl.play(0));
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-customBg flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
            <div className="bg-deco-x absolute top-20 right-10 md:right-32 text-[15rem] font-black text-gray-200/40 select-none pointer-events-none font-display">
                X
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border-[40px] border-accent/5 rounded-full blur-xl pointer-events-none"></div>

            <div className="max-w-6xl relative z-10">
                <p className="text-[12px] font-black uppercase text-gray-400 mb-12 tracking-[0.4em] fade-in-up">Explore Our Agency</p>

                <h2 ref={textRef} className="text-4xl md:text-4xl lg:text-6xl font-black text-dark uppercase leading-[1.1] font-display">
                    <span className="inline-block mr-3">Spicaware</span>
                    <span className="inline-block mr-3">is</span>
                    <span className="inline-block mr-3">a</span>
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#59BB8C]">
                        <span className="text-black inline-block mr-3">creative</span>
                    </span>
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-[#935E2D]">
                        <span className="text-white inline-block mr-3">agency</span>
                    </span>
                    <span className="inline-block mr-3">that</span>
                    <span className="inline-block mr-3">transforms</span>
                    <span className="text-black inline-block mr-3">ideas</span>
                    <span className="inline-block mr-3">into</span>
                    <span className="inline-block mr-3">masterpieces.</span>
                    <br className="hidden md:block" />
                    <span className="inline-block mr-3">We</span>
                    <span className="inline-block mr-3">craft</span>
                    <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gray-400">
                        <span className="text-black inline-block mr-3">design</span>
                    </span>
                    <span className="inline-block mr-3">magic,</span>
                    <span className="inline-block mr-3">breathe</span>
                    <span className="inline-block mr-3">new</span>
                    <span className="inline-block mr-3">life</span>
                    <span className="inline-block mr-3">into</span>
                    <span className="inline-block mr-3">brands,</span>
                    <span className="inline-block mr-3">and</span>
                    <span className="inline-block mr-3">make</span>
                    <span className="inline-block mr-3">the</span>
                    <span className="text-accent inline-block mr-3">impossible</span>
                    <span className="text-accent inline-block mr-3">possible.</span>
                    <br className="hidden md:block" />
                    <span className="inline-block mr-3">Choose</span>
                    <span className="text-purple-600 inline-block">Pixy</span>
                    <span className="inline-block ml-3">because</span>
                    <span className="inline-block ml-3">we</span>
                    <span className="inline-block ml-3">are</span>
                    <span className="inline-block ml-3">worth</span>
                    <span className="inline-block ml-3">it!</span>
                </h2>

                <div className="manifesto-footer mt-20 flex flex-col items-center">
                    <p className="text-xs md:text-sm text-gray-500 max-w-sm mb-12 leading-loose font-medium">
                        We've been working for several years to build a portfolio that truly reflects our passion for innovation and storytelling.
                    </p>

                    <button className="button group relative bg-accent text-white font-black rounded-full uppercase text-xs hover:bg-dark transition-all duration-300 transform hover:scale-30 active:scale-20">
                        <span className=" relative">View Portfolio</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;