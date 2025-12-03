import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-royal-sand text-center">
            <div className="flex items-center justify-center gap-2 text-royal-slate/60 font-serif text-lg">
                <span>Website made with</span>
                <Heart size={16} className="text-royal-gold fill-royal-gold" />
                <span>by <span className="text-royal-slate font-medium">Rahul Lotlikar</span></span>
            </div>
        </footer>
    );
};

export default Footer;
