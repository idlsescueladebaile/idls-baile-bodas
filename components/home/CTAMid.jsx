import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTAMid({ title, buttonText, buttonLink }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
        >
            <h3 className="text-2xl md:text-3xl font-light text-stone-800 mb-6">
                {title}
            </h3>
            <Link to={createPageUrl(buttonLink)}>
                <Button 
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-200 group"
                >
                    {buttonText}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
            </Link>
        </motion.div>
    );
}