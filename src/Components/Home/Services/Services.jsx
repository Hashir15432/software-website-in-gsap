import React, { useRef } from 'react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    useGSAP(() => {
        const headerWords = headerRef.current.querySelectorAll('.header-word');
        gsap.from(headerWords, {
            y: 120,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
                trigger: headerRef.current,
                start: "top 85%",
            }
        });

        const serviceItems = gsap.utils.toArray(".service-item");
        serviceItems.forEach((item: any, i) => {
            const accent = item.querySelector('.accent-bar');
            const content = item.querySelector('.service-content');
            const cta = item.querySelector('.cta-box');

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });

            tl.from(accent, { scaleY: 0, transformOrigin: "top", duration: 0.6 })
                .from(content, { x: -30, opacity: 0, duration: 0.8 }, "-=0.4")
                .from(cta, { x: 40, opacity: 0, scale: 0.8, duration: 0.6, ease: "back.out(1.7)" }, "-=0.6");
        });

        const statCards = gsap.utils.toArray(".stat-card");
        statCards.forEach((card: any) => {
            const number = card.querySelector('.stat-number');
            const bgBox = card.querySelector('.stat-bg-box');
            const plusIcon = card.querySelector('.stat-plus');
            const label = card.querySelector('.stat-label');

            const val = parseInt(number.getAttribute('data-value') || "0");

            gsap.to(number, {
                innerText: val,
                duration: 2.5,
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                }
            });

            gsap.from([bgBox, number, plusIcon, label], {
                y: 60,
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                }
            });

            gsap.to(bgBox, {
                y: -40,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });

    }, { scope: containerRef });

    const serviceData = [
        {
            title: "WEBSITE DEVELOPMENT",
            desc: "At Spicaware, we understand that a website is more than just a digital space — it's the heartbeat of your brand."
        },
        {
            title: "GRAPHIC DESIGNING",
            desc: "At Spicaware, we understand that great design isn't just about aesthetics — it's about communication."
        },
        {
            title: "BRAND STRATEGY",
            desc: "Comprehensive brand development, including logo creation, color scheme selection, and visual style design to ensure a cohesive and memorable brand identity."
        },
        {
            title: "MARKETING AND SMM",
            desc: "Creation of impactful advertising campaigns and marketing materials designed to increase brand visibility, engage target audiences, and drive customer..."
        }
    ];

    const statData = [
        { value: 14, label: "YEARS EXPERIENCE" },
        { value: 45, label: "UNIQUE CUSTOMERS" },
        { value: 57, label: "COMPLETED PROJECTS" },
        { value: 57, label: "COMPLETED PROJECTS" }
    ];

    return (
        <section ref={containerRef} id="services" className="py-24 md:py-40 bg-customBg overflow-hidden">
            <div className="container mx-auto px-32">

                {/* Section Header */}
                <div ref={headerRef} className="mb-24 overflow-hidden">
                    <h2 className="text-5xl md:text-8xl font-display font-black text-dark uppercase tracking-tight leading-[0.85]">
                        <span className="header-word inline-block mr-4 md:mr-8">WE</span>
                        <span className="header-word inline-block mr-4 md:mr-8">GENERATE</span>
                        <span className="header-word inline-block text-accent mr-4 md:mr-8">UNIQUE</span>
                        <span className="header-word inline-block">IDEAS</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">

                    {/* LEFT: Services List */}
                    <div className="lg:col-span-7 space-y-0">
                        {serviceData.map((service, idx) => (
                            <div key={idx} className="service-item group relative py-12 border-b border-gray-300 flex items-start justify-between">
                                <div className="flex gap-8 max-w-[85%]">
                                    <div className="accent-bar w-[4px] h-14 bg-accent/20 group-hover:bg-accent transition-colors duration-500 mt-2"></div>
                                    <div className="service-content">
                                        <h3 className="text-3xl md:text-4xl font-black font-display text-dark uppercase mb-5 tracking-wide group-hover:text-accent transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-sm font-medium">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                                <button className="cta-box hidden md:flex flex-col items-center justify-center w-32 h-28 bg-[#E5E5E3] hover:bg-gray-300 transition-all rounded-sm flex-shrink-0 shadow-sm">
                                    <ArrowUpRight size={28} className="mb-2 text-dark transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-dark">Read More</span>
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-12 pt-12">
                        {statData.map((stat, idx) => (
                            <div key={idx} className="stat-card relative flex flex-col group">
                                <div className="stat-bg-box absolute top-0 right-0 w-[70%] h-[75%] bg-[#DEDEDA] rounded-sm -z-0"></div>

                                <div className="relative z-10 flex items-end">
                                    <span
                                        className="stat-number text-[7rem] md:text-[9.5rem] font-black font-display leading-[0.75] text-dark select-none"
                                        data-value={stat.value}
                                    >
                                        0
                                    </span>
                                    <div className="stat-plus pb-2 md:pb-4 ml-1">
                                        <Plus size={52} className="text-[#FF4081]" strokeWidth={6} />
                                    </div>
                                </div>

                                <p className="stat-label text-sm md:text-base font-black uppercase tracking-[0.2em] text-dark mt-6 ml-4 relative z-10">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                        {/* <button className="group relative overflow-hidden bg-dark text-white px-16 py-6 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:pr-20"></button> */}
                    </div>
                </div>
            </div>

            <div className="mt-48 pt-32 border-t border-gray-200 bg-white/30 backdrop-blur-sm">
                <div className="container mx-auto px-6 text-center">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">Partnership</h4>
                    <h2 className="text-5xl md:text-8xl font-display font-black text-dark uppercase mb-16 leading-[0.9]">
                        START YOUR <br className="md:hidden" /> <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgb(53, 54, 57)' }}>NEXT</span> PROJECT
                    </h2>
                    <div className="flex justify-center">
                        <button className="group relative overflow-hidden bg-dark text-white px-16 py-6 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:pr-20">
                            <span className="relative z-10">Contact Us Now</span>
                            <ArrowUpRight size={18} className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;