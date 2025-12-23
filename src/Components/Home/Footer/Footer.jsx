import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import Logo from '../../logo.png';

const ContactFooter = ({ simple = false }) => {
    return (
        <footer id="contact" className="bg-black text-white pt-24 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col md:flex-row justify-between items-start gap-12 ${!simple ? 'border-t border-gray-800 pt-16' : ''}`}>
                    <div className="max-w-xs">
                        <div className="flex items-center gap-2 mb-6">
                            <img src={Logo} alt="Spicaware logo" className="h-6 w-auto object-contain" />
                            <span className="text-lg font-bold">Spicaware</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-6">
                            Welcome To Spicaware where your ideas come to life. We specialize in crafting unique brands, captivating advertising campaigns, and effective digital strategies.
                        </p>
                        <div className="flex gap-4">
                            <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-xs" aria-label="Facebook"><Facebook size={14} /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-xs" aria-label="Instagram"><Instagram size={14} /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-xs" aria-label="Twitter"><Twitter size={14} /></button>
                            <button className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-xs" aria-label="LinkedIn"><Linkedin size={14} /></button>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-8 md:flex-row md:gap-20">
                        <div>
                            <h4 className="text-6xl font-black font-display text-gray-700 uppercase mb-4">Let's Talk</h4>
                            <div className="flex items-center gap-4 mb-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Call</p>
                                    <p className="text-sm font-bold group-hover:text-accent transition-colors">+923380593242</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500">E-Mail</p>
                                    <p className="text-sm font-bold group-hover:text-accent transition-colors">contact@example@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <button className="self-start md:self-end bg-accent/20 hover:bg-accent w-24 h-24 flex flex-col items-center justify-center text-white transition-all group">
                            <span className="text-2xl mb-1 group-hover:-translate-y-1 transition-transform"><ArrowUpRight /></span>
                            <span className="text-[8px] font-bold uppercase tracking-widest">Read More</span>
                        </button>
                    </div>

                </div>

                <div className={`text-white text-center mt-12 text-[10px] text-gray-700 uppercase tracking-widest ${!simple ? 'border-t border-gray-800 pt-12' : ''}`}>
                    © 2025 Spicaware Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default ContactFooter;