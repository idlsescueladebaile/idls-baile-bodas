import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
    // Default testimonials if none provided
    const displayTestimonials = testimonials.length > 0 ? testimonials : [
        {
            couple_names: "María y Carlos",
            wedding_date: "Septiembre 2024",
            quote: "Llegamos sin saber ni dar un paso y terminamos bailando como si lo hubiéramos hecho toda la vida. Fue mágico ver las caras de nuestros invitados.",
            rating: 5,
            image_url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=200&h=200&fit=crop"
        },
        {
            couple_names: "Laura y Javier",
            wedding_date: "Junio 2024",
            quote: "Teníamos pánico escénico. El equipo nos ayudó a superarlo con tanta paciencia que al final disfrutamos cada segundo del baile.",
            rating: 5,
            image_url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=200&h=200&fit=crop"
        },
        {
            couple_names: "Ana y Pablo",
            wedding_date: "Mayo 2024",
            quote: "La coreografía sorpresa que preparamos dejó a todos boquiabiertos. ¡Hasta mi madre lloró de la emoción!",
            rating: 5,
            image_url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=200&h=200&fit=crop"
        }
    ];

    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                        Historias reales
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                        Opiniones de parejas que aprendieron su baile de boda en Vigo
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {displayTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                                <Quote className="w-10 h-10 text-amber-200 mb-6" />
                                
                                <p className="text-stone-600 leading-relaxed mb-8 italic">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    {testimonial.image_url && (
                                        <img 
                                            src={testimonial.image_url}
                                            alt={testimonial.couple_names}
                                            className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-100"
                                        />
                                    )}
                                    <div>
                                        <p className="font-medium text-stone-800">
                                            {testimonial.couple_names}
                                        </p>
                                        <p className="text-sm text-stone-400">
                                            {testimonial.wedding_date}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1 mt-4">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-stone-100">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <div className="border-l border-stone-200 pl-3">
                            <p className="text-sm">
                                <span className="font-semibold text-stone-800">4.9/5</span>
                                <span className="text-stone-500"> en Google</span>
                            </p>
                        </div>
                    </div>
                    <p className="text-sm text-stone-400 mt-3">
                        Basado en más de 100 opiniones verificadas
                    </p>
                </motion.div>
            </div>
        </section>
    );
}