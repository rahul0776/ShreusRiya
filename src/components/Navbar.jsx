import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../media/IMG_6657.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavigation = (sectionId) => {
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                if (sectionId) {
                    const element = document.getElementById(sectionId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }, 100);
        } else {
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    const navLinks = [
        { name: 'Home', sectionId: null },
        { name: 'Travel', sectionId: 'travel' },
        { name: 'Wardrobe', sectionId: 'wardrobe' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-[#f3eee6] shadow-md py-2' : 'bg-transparent py-4'}`}
        >
            <div className="container mx-auto px-6 flex justify-center md:justify-between items-center relative">
                <button
                    onClick={() => handleNavigation(null)}
                    className="flex items-center hover:opacity-80 transition-opacity cursor-pointer"
                >
                    <img
                        src={logoImg}
                        alt="S&R Logo"
                        className={`transition-all duration-300 w-auto ${scrolled || isOpen ? 'h-14 md:h-16 lg:h-20' : 'h-20 md:h-24 lg:h-28'}`}
                    />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 -translate-y-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavigation(link.sectionId)}
                            className="text-lg font-medium transition-colors hover:text-royal-gold text-royal-slate cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="https://forms.gle/n13ELECCFw2EWUJm7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-royal-gold text-white rounded-full font-serif hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg flex items-center"
                    >
                        RSVP
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-royal-slate focus:outline-none z-50 absolute right-6"
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
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[#f3eee6] border-t border-royal-gold/20 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col items-center justify-start pt-12 space-y-8 h-full">
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => handleNavigation(link.sectionId)}
                                    className="text-3xl font-serif text-royal-slate hover:text-royal-gold cursor-pointer w-full py-2 transition-colors"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="https://forms.gle/n13ELECCFw2EWUJm7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-3xl font-serif text-white bg-royal-gold px-8 py-2 rounded-full hover:bg-opacity-90 transition-all shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                RSVP
                            </motion.a>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="w-12 h-0.5 bg-royal-gold/30"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
