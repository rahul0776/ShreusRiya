import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Plane, Train, Car, Sparkles, Mail, Phone } from 'lucide-react';
import Marquee from '../components/Marquee';
import BeachDecor from '../components/BeachDecor';
import Countdown from '../components/Countdown';
import heroImg from '../media/homepage2.JPG';
import itineraryImg from '../media/Itinerary.png';

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const transportOptions = [
        {
            icon: Plane,
            title: 'By Air',
            description: 'Fly into Goa International Airport (Dabolim)',
            details: 'The airport is approximately 30 km from the venue. Taxis and pre-booked cabs are available.'
        },
        {
            icon: Train,
            title: 'By Train',
            description: 'Arrive at Madgaon Railway Station',
            details: 'Madgaon is the main railway station in South Goa, well-connected to major cities.'
        },
        {
            icon: Car,
            title: 'By Road',
            description: 'Drive along the scenic coastal highways',
            details: 'Goa is connected via NH66. Self-drive and hired cars are excellent options.'
        }
    ];

    const events = [
        {
            name: 'Haldi',
            date: 'February 8, 2026',
            theme: 'Vibrant Hues in Semi-Traditional',
            colors: ['#ce006c', '#ef671d', '#fbaf03', '#f478af'],
            description: 'A vibrant celebration. Women: Palazzo, Lehenga, Sharara | Men: Kurta Pajamas, Nehru Jacket',
            suggestions: 'Vibrant Hues in Semi-Traditional'
        },
        {
            name: 'Sangeet',
            date: 'February 7, 2026 (Evening)',
            theme: 'Glitz and Glam in Indo-Western',
            colors: ['#063f90', '#010101', '#D4AF37', '#C0C0C0'],
            description: 'An evening of music and dance. Women: Western gowns, Cocktail Sarees | Men: Indo Western Jackets, Jodhpuri',
            suggestions: 'Glitz and Glam in Indo-Western'
        },
        {
            name: 'Wedding',
            date: 'February 8, 2026 (Evening)',
            theme: 'Indian Traditional in Hues of Pastel',
            colors: ['#d3e8fa', '#d3cbe3', '#fed3cf', '#c9dbba', '#fef8ba'],
            description: 'The main ceremony. Women: Lehenga, Sarees | Men: Sherwani, Jodhpuri',
            suggestions: 'Indian Traditional in Hues of Pastel'
        }
    ];

    return (
        <div className="min-h-screen pt-16 wave-pattern">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent z-0" />

                {/* Beach Decorations */}
                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="absolute bottom-6 left-6 w-24 h-24 md:w-32 md:h-32 z-10 animate-float"
                >
                    <BeachDecor />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: 20 }}
                    animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    className="absolute bottom-6 right-6 w-24 h-24 md:w-32 md:h-32 z-10 transform scale-x-[-1] animate-float"
                    style={{ animationDelay: '2s' }}
                >
                    <BeachDecor />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute top-24 left-12 w-20 h-20 md:w-24 md:h-24 z-10 hidden lg:block animate-float"
                    style={{ animationDelay: '1s' }}
                >
                    <BeachDecor />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute top-24 right-12 w-20 h-20 md:w-24 md:h-24 z-10 hidden lg:block transform scale-x-[-1] animate-float"
                    style={{ animationDelay: '3s' }}
                >
                    <BeachDecor />
                </motion.div>

                {/* Content - Positioned at top */}
                <div className="absolute top-20 left-0 right-0 z-20 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="text-5xl md:text-7xl font-serif text-royal-slate mb-4"
                    >
                        Riya & Shreus
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-col items-center space-y-2"
                    >
                        <div className="flex items-center space-x-2 text-base md:text-lg font-sans text-royal-slate bg-white/70 px-5 py-2 rounded-full backdrop-blur-sm shadow-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Feb 7-8, 2026</span>
                            <span className="w-1 h-1 bg-royal-slate rounded-full mx-2" />
                            <MapPin className="w-4 h-4" />
                            <span className="hidden md:inline">Nanu Beach Resort & Spa Betalbatim</span>
                            <span className="md:hidden">Nanu Beach Resort</span>
                        </div>
                    </motion.div>

                </div>

                {/* RSVP Button - Positioned at bottom */}
                <div className="absolute bottom-20 left-0 right-0 z-20 text-center px-4">
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        onClick={() => scrollToSection('rsvp')}
                        className="px-8 py-3 rounded-full bg-royal-slate text-white font-medium hover:bg-royal-slate/90 hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                        RSVP Now
                    </motion.button>
                </div>
            </section>

            {/* Wave Divider */}
            <div className="relative h-32 overflow-hidden">
                <svg className="absolute bottom-0 w-full h-32" preserveAspectRatio="none" viewBox="0 0 1200 120">
                    <path d="M0 0 Q300 40 600 0 T1200 0 L1200 120 L0 120 Z" fill="#ffffff" opacity="0.9" />
                    <path d="M0 20 Q300 50 600 20 T1200 20 L1200 120 L0 120 Z" fill="#A0C4FF" opacity="0.4">
                        <animate attributeName="d" dur="5s" repeatCount="indefinite" values="M0 20 Q300 50 600 20 T1200 20 L1200 120 L0 120 Z;M0 30 Q300 10 600 30 T1200 30 L1200 120 L0 120 Z;M0 20 Q300 50 600 20 T1200 20 L1200 120 L0 120 Z" />
                    </path>
                    <path d="M0 40 Q300 70 600 40 T1200 40 L1200 120 L0 120 Z" fill="#FFC8DD" opacity="0.3">
                        <animate attributeName="d" dur="7s" repeatCount="indefinite" values="M0 40 Q300 70 600 40 T1200 40 L1200 120 L0 120 Z;M0 50 Q300 30 600 50 T1200 50 L1200 120 L0 120 Z;M0 40 Q300 70 600 40 T1200 40 L1200 120 L0 120 Z" />
                    </path>
                </svg>
            </div>

            {/* Countdown Section */}
            <Countdown />

            {/* Itinerary Section */}
            <section id="itinerary" className="py-24 bg-white relative sand-texture">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif text-royal-slate mb-12">The Wedding Itinerary</h2>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative max-w-4xl w-full"
                        >
                            <img
                                src={itineraryImg}
                                alt="Wedding Itinerary"
                                className="w-full h-auto rounded-xl shadow-2xl border-4 border-white/50"
                            />
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 z-10 hidden md:block animate-float" style={{ animationDelay: '2s' }}>
                                <BeachDecor />
                            </div>
                            <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 z-10 hidden md:block transform scale-x-[-1] animate-float">
                                <BeachDecor />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Travel Section */}
            <section id="travel" className="py-20 bg-royal-sand">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-royal-slate mb-4">Travel Guide</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">How to reach our venue in beautiful Goa</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-12 border border-royal-gold/20"
                    >
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-royal-gold/10 rounded-full">
                                <MapPin className="w-8 h-8 text-royal-gold" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-serif text-royal-slate mb-2">The Venue</h3>
                                <p className="text-xl text-gray-700">Nanu Beach Resort & Spa Betalbatim</p>
                                <p className="text-gray-600 mt-2">Betalbatim Beach, South Goa</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {transportOptions.map((option, index) => (
                            <motion.div
                                key={option.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-transparent hover:border-royal-gold/30 group"
                            >
                                <div className="p-4 bg-royal-blue/10 rounded-full w-fit mb-4 group-hover:bg-royal-gold/20 transition-colors">
                                    <option.icon className="w-10 h-10 text-royal-gold" />
                                </div>
                                <h3 className="text-2xl font-serif text-royal-slate mb-2">{option.title}</h3>
                                <p className="text-lg font-medium text-gray-700 mb-3">{option.description}</p>
                                <p className="text-gray-600">{option.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Wardrobe Section */}
            < section id="wardrobe" className="py-20 bg-white" >
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-royal-slate mb-4">Wardrobe Guide</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">Dress codes and color themes for each celebration</p>
                    </motion.div>

                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-royal-sand rounded-3xl overflow-hidden shadow-xl border border-royal-gold/20 hover:shadow-2xl transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 p-8 bg-gradient-to-br from-white to-royal-sand/50 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Sparkles className="w-6 h-6 text-royal-gold" />
                                            <h3 className="text-3xl font-serif text-royal-slate">{event.name}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-4">{event.date}</p>
                                        <div className="flex gap-3 mb-6">
                                            {event.colors.map((color, i) => (
                                                <div key={i} className="w-16 h-16 rounded-full shadow-md border-2 border-white" style={{ backgroundColor: color }} />
                                            ))}
                                        </div>
                                        <p className="text-lg font-medium text-royal-gold mb-2">{event.theme}</p>
                                    </div>
                                    <div className="md:w-2/3 p-8 flex flex-col justify-center bg-white">
                                        <p className="text-lg text-gray-700 mb-4">{event.description}</p>
                                        <div className="bg-royal-blue/5 rounded-xl p-4 border-l-4 border-royal-gold">
                                            <p className="text-sm font-medium text-royal-slate mb-1">Outfit Suggestions:</p>
                                            <p className="text-gray-600">{event.suggestions}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-12 bg-gradient-to-br from-royal-gold/10 to-royal-rose/10 rounded-3xl p-8 md:p-12 border border-royal-gold/30"
                    >
                        <h3 className="text-2xl font-serif text-royal-slate mb-6 flex items-center gap-3">
                            <Sparkles className="w-7 h-7 text-royal-gold" />
                            General Guidelines
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <span className="text-royal-gold mr-3">•</span>
                                <span>The venue is beachside, so consider comfortable footwear for outdoor events.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-royal-gold mr-3">•</span>
                                <span>Goa weather in February is warm and pleasant. Light, breathable fabrics are recommended.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-royal-gold mr-3">•</span>
                                <span>Accessories: Feel free to add your personal touch while staying within the color themes.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </section >

            {/* RSVP Section */}
            < section id="rsvp" className="py-20 bg-gradient-to-br from-royal-blue/10 to-royal-rose/10" >
                <div className="container mx-auto px-6 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-royal-slate mb-4">RSVP</h2>
                        <p className="text-xl text-gray-600">We'd love to have you join us!</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-gold focus:outline-none focus:ring-2 focus:ring-royal-gold/20 transition-colors" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-gold focus:outline-none focus:ring-2 focus:ring-royal-gold/20 transition-colors" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Number of Guests *</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-gold focus:outline-none focus:ring-2 focus:ring-royal-gold/20 transition-colors">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                                <textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-royal-gold focus:outline-none focus:ring-2 focus:ring-royal-gold/20 transition-colors" rows="4" placeholder="Dietary restrictions, accessibility needs, etc."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-royal-slate text-white px-8 py-4 rounded-full font-medium hover:bg-royal-slate/90 hover:scale-105 transition-all duration-300 shadow-lg">
                                Submit RSVP
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section >

            {/* Contact Section */}
            < section id="contact" className="py-20 bg-royal-sand" >
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-royal-slate mb-4">Contact Us</h2>
                        <p className="text-xl text-gray-600">Need more information? We're here to help!</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-royal-gold/10 rounded-full">
                                    <Mail className="w-6 h-6 text-royal-gold" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-royal-slate mb-2">Email</h3>
                                    <p className="text-gray-600">wedding@riyashreus.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-royal-gold/10 rounded-full">
                                    <Phone className="w-6 h-6 text-royal-gold" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-royal-slate mb-2">Phone</h3>
                                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Marquee Section */}
            < section className="py-16 bg-white" >
                <h3 className="text-center text-2xl font-serif mb-8 text-royal-slate/60">With Love From</h3>
                <Marquee speed="slow">
                    {['Family', 'Friends', 'Colleagues', 'Best Wishes', 'Blessings', 'Love', 'Joy', 'Happiness'].map((text, i) => (
                        <span key={i} className="text-4xl font-script text-royal-gold/80 mx-8">{text}</span>
                    ))}
                </Marquee>
            </section >
        </div >
    );
};

export default Home;
