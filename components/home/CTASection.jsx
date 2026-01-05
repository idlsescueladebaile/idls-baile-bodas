import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
    return (
        <section className="py-24 px-4 bg-gradient-to-br from-amber-600 via-amber-500 to-amber-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full"
                />
                <motion.div
                    animate={{ 
                        rotate: -360,
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ 
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-white/5 to-transparent rounded-full"
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Heart className="w-12 h-12 text-white/80 mx-auto mb-6" />
                    
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
                        ¿Preparados para crear
                        <br />
                        <span className="font-serif italic">vuestro momento mágico?</span>
                    </h2>
                    
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                        Contadnos vuestra fecha y empezamos a diseñar el baile de vuestros sueños. 
                        Sin compromiso.
                    </p>

                    <Link to={createPageUrl('Contacto')}>
                        <Button 
                            size="lg"
                            className="bg-white text-amber-700 hover:bg-amber-50 px-10 py-7 text-lg rounded-full shadow-2xl shadow-amber-900/30 transition-all duration-300 hover:scale-105 group"
                        >
                            Solicitar información gratuita
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>

                    <p className="mt-8 text-white/60 text-sm">
                        Respondemos en menos de 24 horas
                    </p>
                </motion.div>
            </div>
        </section>
    );
}