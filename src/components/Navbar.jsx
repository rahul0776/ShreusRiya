import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../media/IMG_6657.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        };
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsOpen(false);
    };

    const navLinks = [
        { name: 'Home', sectionId: null },
        { name: 'Travel', sectionId: 'travel' },
        { name: 'Wardrobe', sectionId: 'wardrobe' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <button
                    onClick={scrollToTop}
                    className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                    <img
                        src={logoImg}
                        alt="S&R Logo"
                        className={`transition-all duration-300 w-auto ${scrolled ? 'h-16 md:h-20 lg:h-24' : 'h-32 md:h-40 lg:h-48'}`}
                    />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 -translate-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => link.sectionId ? scrollToSection(link.sectionId) : scrollToTop()}
                            className="text-lg font-medium transition-colors hover:text-royal-gold text-royal-slate cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}

                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-royal-slate focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => link.sectionId ? scrollToSection(link.sectionId) : scrollToTop()}
                                    className="text-xl font-medium text-royal-slate hover:text-royal-gold cursor-pointer"
                                >
                                    {link.name}
                                </button>
                            ))}

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
