import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Train, Car, MapPin } from 'lucide-react';

const Travel = () => {
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

    return (
        <div className="min-h-screen pt-24 pb-16 bg-royal-sand">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-serif text-royal-slate mb-4">
                        Travel Guide
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join us in beautiful Goa for our special celebration. Here's how to reach the venue.
                    </p>
                </motion.div>

                {/* Venue */}
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
                            <h2 className="text-3xl font-serif text-royal-slate mb-2">The Venue</h2>
                            <p className="text-xl text-gray-700">Beachside Paradise Resort, Goa</p>
                            <p className="text-gray-600 mt-2">123 Coastal Road, Candolim Beach, North Goa, 403515</p>
                        </div>
                    </div>
                    <div className="aspect-video bg-gradient-to-br from-royal-blue/20 to-royal-rose/20 rounded-2xl flex items-center justify-center">
                        <p className="text-royal-slate/60 font-serif text-xl">Map Placeholder</p>
                    </div>
                </motion.div>

                {/* Transport Options */}
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

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
                >
                    <h3 className="text-2xl font-serif text-royal-slate mb-4">Accommodation</h3>
                    <p className="text-gray-700 mb-4">
                        We recommend booking your stay at hotels near Candolim, Calangute, or Baga beaches.
                        The venue offers limited accommodation for immediate family.
                    </p>
                    <p className="text-gray-600">
                        For group bookings or assistance, please contact: <span className="font-medium text-royal-gold">events@wedding.com</span>
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Travel;
