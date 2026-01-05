import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/shared/SEOHead';

export default function Galeria() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
            alt: "Baile de novios elegante",
            category: "Baile clásico"
        },
        {
            url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
            alt: "Primera danza",
            category: "Momento emotivo"
        },
        {
            url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
            alt: "Pareja bailando vals",
            category: "Vals nupcial"
        },
        {
            url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80",
            alt: "Baile romántico",
            category: "Romanticismo"
        },
        {
            url: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&q=80",
            alt: "Baile sorpresa",
            category: "Baile sorpresa"
        },
        {
            url: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
            alt: "Celebración familiar",
            category: "Con familia"
        },
        {
            url: "https://images.unsplash.com/photo-1532712938310-34cb5ca4d37c?w=800&q=80",
            alt: "Novios felices",
            category: "Felicidad"
        },
        {
            url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
            alt: "Primera mirada",
            category: "Conexión"
        },
        {
            url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
            alt: "Beso en el baile",
            category: "Amor"
        },
        {
            url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
            alt: "Invitados aplaudiendo",
            category: "Ovación"
        },
        {
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
            alt: "Luz especial",
            category: "Atmósfera"
        },
        {
            url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
            alt: "Giro elegante",
            category: "Técnica"
        }
    ];

    return (
        <>
            <SEOHead 
                title="Galería Fotos Bailes de Boda Vigo | IDLS Baile Bodas"
                description="Descubre los momentos mágicos de nuestras parejas en Vigo. Galería de fotos reales de bailes nupciales, coreografías y celebraciones."
                keywords="fotos baile boda vigo, galería baile nupcial, momentos boda vigo"
            />
            <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-24 md:py-32 px-4 bg-gradient-to-br from-stone-900 to-stone-800">
                <div className="absolute inset-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-4xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
                            Momentos
                            <span className="font-serif italic text-amber-200"> mágicos</span>
                        </h1>
                        <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                            Cada foto cuenta una historia de amor, 
                            nervios superados y felicidad compartida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="break-inside-avoid group cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="relative rounded-2xl overflow-hidden">
                                    <img 
                                        src={image.url}
                                        alt={image.alt}
                                        className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        style={{ 
                                            aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/3' : '1/1'
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                                        <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span className="text-white text-sm bg-amber-600/80 px-3 py-1 rounded-full">
                                                {image.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button 
                            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            src={selectedImage.url}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA */}
            <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-10 h-10 text-amber-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
                            Vuestro momento también puede ser <span className="font-serif italic">así de especial</span>
                        </h2>
                        <Link to={createPageUrl('Contacto')}>
                            <Button 
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-200"
                            >
                                Empezar a crear vuestro baile
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
        </>
    );
}