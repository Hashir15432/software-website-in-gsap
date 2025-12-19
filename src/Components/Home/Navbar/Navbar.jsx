import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ onNavigate, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (page) => {
        onNavigate(page);
        setMobileOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
                    <div className="w-8 h-8 rounded-tr-xl rounded-bl-xl bg-gradient-to-tr from-primary to-accent"></div>
                    <span className="text-[26px] font-black tracking-tight text-dark">Spicaware</span>
                </div>


                <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
                    <button onClick={() => handleNav('home')} className={`${currentPage === 'home' ? 'text-accent' : ''} hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-[20px]`}>Home</button>
                    <button onClick={() => handleNav('about')} className={`${currentPage === 'about' ? 'text-accent' : ''} hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-[20px]`}>About Us</button>

                    <div className="relative group">
                        <button
                            onClick={() => handleNav('services')}
                            className={`text-[20px] flex items-center gap-1 hover:text-accent transition-colors py-4 ${currentPage === 'service-web-dev' ? 'text-accent' : ''}`}>
                            Services <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                            <div className="bg-accent text-white shadow-xl rounded-sm py-4 min-w-[230px] flex flex-col">
                                <button
                                    onClick={(e) => { e.stopPropagation(); handleNav('service-web-dev'); }}
                                    className="px-6 py-3 text-left hover:bg-white hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap"
                                >
                                    Web Development
                                </button>
                                <button className="px-6 py-3 text-left hover:bg-white hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                                    Brand Strategy
                                </button>
                                <button className="px-6 py-3 text-left hover:bg-white hover:text-accent text-xs font-bold uppercase tracking-widest transition-colors whitespace-nowrap">
                                    Marketing
                                </button>
                            </div>
                        </div>
                    </div>

                    <button onClick={() => handleNav('portfolio')} className={`${currentPage === 'portfolio' ? 'text-accent' : ''} text-[20px] hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full`}>Portfolio</button>
                    <button onClick={() => handleNav('blog')} className={`${currentPage === 'blog' ? 'text-accent' : ''} hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-[20px]`}>Blog</button>
                    <button onClick={() => handleNav('contact')} className={`${currentPage === 'contact' ? 'text-accent' : ''} hover:text-accent transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-[20px]`}>Contact</button>
                </div>
                <div className="hidden md:block">
                    <button onClick={() => handleNav('contact')} className="bg-accent hover:bg-primary text-white text-sm font-bold uppercase tracking-wider px-10 py-6 rounded-full transition-transform transform hover:scale-105 shadow-lg text-lg">
                        Get in Touch
                    </button>
                </div>
                <button className="md:hidden text-dark" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-4 text-center">
                    <button className="text-sm font-bold uppercase" onClick={() => handleNav('home')}>Home</button>
                    <button className="text-sm font-bold uppercase" onClick={() => handleNav('about')}>About Us</button>
                    <button className="text-sm font-bold uppercase" onClick={() => handleNav('service-web-dev')}>Services</button>
                    <button className="text-sm font-bold uppercase" onClick={() => handleNav('blog')}>Blog</button>
                    <button className="text-sm font-bold uppercase text-accent" onClick={() => handleNav('contact')}>Get In Touch</button>
                </div>
            )}
        </nav>
    );
};


export default Navbar;