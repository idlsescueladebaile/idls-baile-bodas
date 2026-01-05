import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
                    alt="Pareja de novios bailando su primer baile en una boda en Vigo"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
            </div>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-amber-200/30 rounded-full"
                        initial={{ 
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 10
                        }}
                        animate={{ 
                            y: -10,
                            transition: {
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear"
                            }
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="inline-flex items-center gap-2 text-amber-200 text-sm md:text-base tracking-[0.3em] uppercase mb-6">
                        <Heart className="w-4 h-4" />
                        IDLS Baile Bodas
                        <Heart className="w-4 h-4" />
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight drop-shadow-2xl"
                >
                    Vuestro baile,
                    <br />
                    <span className="font-serif italic text-amber-100">vuestro momento</span>
                    <br />
                    <span className="text-2xl md:text-3xl text-white/90">en Vigo</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-lg"
                >
                    Creamos el baile perfecto para vuestra boda en Vigo. 
                    Sin estrés, sin complicaciones, solo magia.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link to={createPageUrl('Contacto')}>
                        <Button 
                            size="lg"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-amber-900/30 transition-all duration-300 hover:scale-105"
                        >
                            Solicitar información
                        </Button>
                    </Link>
                    <Link to={createPageUrl('ComoTrabajamos')}>
                        <Button 
                            variant="outline"
                            size="lg"
                            className="border-2 border-amber-500 bg-transparent text-white hover:bg-amber-500/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            Cómo funciona
                        </Button>
                    </Link>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-12 text-white/50 text-sm"
                >
                    Más de 20 años de experiencia · +500 parejas felices
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
                >
                    <div className="w-1 h-2 bg-white/50 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}