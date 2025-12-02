import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Plane, Train, Car, Sparkles, Mail, Phone } from 'lucide-react';
import Marquee from '../components/Marquee';
import Countdown from '../components/Countdown';
import heroImg from '../media/homepage2.JPG';
import itineraryImg from '../media/Itinerary.png';
import haldiImg from '../media/haldi.png';
import sangeetImg from '../media/sangeet.png';
import weddingImg from '../media/wedding.png';

const Home = () => {
    const [flippedCards, setFlippedCards] = useState({});

    const handleFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const transportOptions = [
        {
            id: 'air',
            icon: Plane,
            title: 'By Air',
            description: 'Fly into Goa International Airport (Dabolim)',
            details: 'The airport is approximately 30 km from the venue. Taxis and pre-booked cabs are available.',
            schedule: [
                { airline: 'Indigo', dep: 'Mumbai(BOM)', arr: 'Goa(Dabolim)', date: '07/02/2026', depTime: '04:20', arrTime: '05:30' },
                { airline: 'Air India', dep: 'Mumbai(BOM)', arr: 'Goa(MOPA)', date: '07/02/2026', depTime: '05:10', arrTime: '06:20' },
                { airline: 'Indigo', dep: 'Navi Mumbai(NMI)', arr: 'Goa(MOPA)', date: '07/02/2026', depTime: '12:45', arrTime: '13:45' }
            ]
        },
        {
            id: 'train',
            icon: Train,
            title: 'By Train',
            description: 'Arrive at Madgaon Railway Station',
            details: 'Madgaon is the main railway station in South Goa, well-connected to major cities.',
            schedule: [
                { name: 'Nzm Mao Rajdani', dep: 'Panvel', arr: 'Madgaon (MAO)', date: '06/02/2026', depTime: '22:57', arrTime: '07:30' },
                { name: 'Mangaluru Exp', dep: 'Mumbai CSMT', arr: 'Madgaon (MAO)', date: '06/02/2026', depTime: '21:54', arrTime: '07:30' },
                { name: 'Goa Express', dep: 'Pune', arr: 'Madgaon (MAO)', date: '06/02/2026', depTime: '17:10', arrTime: '05:40' }
            ]
        }
    ];

    const events = [
        {
            name: 'Haldi',
            date: 'February 8, 2026',
            theme: 'Vibrant Hues in Semi-Traditional',
            colors: ['#ce006c', '#ef671d', '#fbaf03', '#f478af'],
            description: 'A vibrant celebration. Women: Palazzo, Lehenga, Sharara | Men: Kurta Pajamas, Nehru Jacket',
            suggestions: 'Vibrant Hues in Semi-Traditional',
            image: haldiImg
        },
        {
            name: 'Sangeet',
            date: 'February 7, 2026 (Evening)',
            theme: 'Glitz and Glam in Indo-Western',
            colors: ['#063f90', '#010101', '#D4AF37', '#C0C0C0'],
            description: 'An evening of music and dance. Women: Western gowns, Cocktail Sarees | Men: Indo Western Jackets, Jodhpuri',
            suggestions: 'Glitz and Glam in Indo-Western',
            image: sangeetImg
        },
        {
            name: 'Wedding',
            date: 'February 8, 2026 (Evening)',
            theme: 'Indian Traditional in Hues of Pastel',
            colors: ['#d3e8fa', '#d3cbe3', '#fed3cf', '#c9dbba', '#fef8ba'],
            description: 'The main ceremony. Women: Lehenga, Sarees | Men: Sherwani, Jodhpuri',
            suggestions: 'Indian Traditional in Hues of Pastel',
            image: weddingImg
        }
    ];

    return (
        <div className="min-h-screen wave-pattern">
            {/* Hero Section */}
            <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center"
                    style={{
                        backgroundImage: `url(${heroImg})`
                    }}
                />

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
                        <div className="flex items-center space-x-2 text-base md:text-lg font-sans text-royal-slate">
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
            <section id="itinerary" className="py-24 bg-royal-sand relative sand-texture">
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
                        <div className="mt-6 w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner border border-royal-gold/20">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=Nanu+Beach+Resort+%26+Spa+Betalbatim&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight="0"
                                marginWidth="0"
                                title="Wedding Venue Location"
                            ></iframe>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {transportOptions.map((option, index) => (
                            <div key={option.title} className="h-[400px] perspective-1000">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                                    className="relative w-full h-full transition-all duration-500 preserve-3d cursor-pointer"
                                    onClick={() => handleFlip(index)}
                                    style={{ transformStyle: 'preserve-3d' }}
                                >
                                    {/* Front Side */}
                                    <div className="absolute inset-0 backface-hidden bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-transparent hover:border-royal-gold/30 group flex flex-col items-center justify-center text-center" style={{ backfaceVisibility: 'hidden' }}>
                                        <div className="p-4 bg-royal-blue/10 rounded-full w-fit mb-6 group-hover:bg-royal-gold/20 transition-colors">
                                            <option.icon className="w-12 h-12 text-royal-gold" />
                                        </div>
                                        <h3 className="text-3xl font-serif text-royal-slate mb-4">{option.title}</h3>
                                        <p className="text-lg font-medium text-gray-700 mb-4">{option.description}</p>
                                        <p className="text-gray-600 mb-6">{option.details}</p>
                                        <p className="text-royal-gold font-medium text-sm uppercase tracking-wider mt-auto">Click to know more</p>
                                    </div>

                                    {/* Back Side */}
                                    <div
                                        className="absolute inset-0 backface-hidden bg-white rounded-2xl p-6 shadow-xl border border-royal-gold/30 overflow-hidden flex flex-col"
                                        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                    >
                                        <h3 className="text-xl font-serif text-royal-slate mb-4 text-center border-b border-royal-gold/20 pb-2">{option.title} Schedule</h3>
                                        <div className="overflow-x-auto flex-grow custom-scrollbar">
                                            <table className="w-full text-xs text-left">
                                                <thead className="text-xs text-royal-slate uppercase bg-royal-gold/10 sticky top-0">
                                                    <tr>
                                                        <th className="px-3 py-3 rounded-tl-lg">{option.id === 'air' ? 'Airline' : 'Train'}</th>
                                                        <th className="px-3 py-3">From</th>
                                                        <th className="px-3 py-3">To</th>
                                                        <th className="px-3 py-3">Date</th>
                                                        <th className="px-3 py-3">Dep</th>
                                                        <th className="px-3 py-3 rounded-tr-lg">Arr</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100">
                                                    {option.schedule.map((item, i) => (
                                                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                            <td className="px-3 py-3 font-semibold text-royal-slate">{item.airline || item.name}</td>
                                                            <td className="px-3 py-3 text-gray-600">{item.dep}</td>
                                                            <td className="px-3 py-3 text-gray-600">{item.arr}</td>
                                                            <td className="px-3 py-3 text-gray-600 whitespace-nowrap">{item.date}</td>
                                                            <td className="px-3 py-3 text-royal-slate font-medium">{item.depTime}</td>
                                                            <td className="px-3 py-3 text-royal-slate font-medium">{item.arrTime}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-center text-xs text-royal-gold mt-4 font-medium uppercase tracking-wider">Click to flip back</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Wardrobe Section */}
            < section id="wardrobe" className="py-20 bg-royal-sand" >
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
                                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-royal-gold/20 hover:shadow-2xl transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 p-4 bg-white flex items-center justify-center border-r border-royal-gold/10">
                                        <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-2xl" />
                                    </div>
                                    <div className="md:w-2/3 p-8 bg-white flex flex-col justify-center">
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
                        className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-royal-gold/30"
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
            < section id="rsvp" className="py-20 bg-royal-sand" >
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
            < section className="py-16 bg-royal-sand" >
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
