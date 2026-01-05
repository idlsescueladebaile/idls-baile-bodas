import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, Users, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function QuienesSomos() {
    return (
        <section className="py-32 px-4 bg-gradient-to-b from-white to-stone-50">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Imagen */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80"
                                alt="Profesores profesionales de baile para bodas en Vigo - IDLS Escuela"
                                className="w-full h-[500px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="flex items-center gap-4 text-white">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-amber-500 border-2 border-white flex items-center justify-center">
                                                <Users className="w-5 h-5 text-white" />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <p className="font-medium">+500 parejas</p>
                                        <p className="text-sm text-white/80">confían en nosotros</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contenido */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                            Quién os va a enseñar
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4 mb-6">
                            Más de 20 años creando
                            <br />
                            <span className="font-serif italic text-amber-700">momentos mágicos</span>
                        </h2>

                        <div className="space-y-4 text-stone-600 leading-relaxed mb-8">
                            <p>
                                Somos un equipo de profesores profesionales de baile con más de 20 años de 
                                experiencia. Hemos trabajado con más de 500 parejas en Vigo y alrededores, 
                                ayudándolas a crear el baile perfecto para su gran día.
                            </p>
                            <p>
                                Formamos parte de <strong>IDLS Escuela de Baile</strong>, referente en Vigo 
                                en la enseñanza de baile con clases de salsa, bachata, tango, vals y muchos 
                                otros estilos para todos los niveles.
                            </p>
                            <p className="font-medium text-stone-800">
                                Nuestra especialidad son las parejas que nunca han bailado. Sabemos exactamente 
                                cómo transformar los nervios en confianza y el miedo en disfrute.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                                <div className="text-3xl font-light text-amber-600">20+</div>
                                <div className="text-sm text-stone-500">años</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                                <div className="text-3xl font-light text-amber-600">500+</div>
                                <div className="text-sm text-stone-500">parejas</div>
                            </div>
                            <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                                <div className="text-3xl font-light text-amber-600">100%</div>
                                <div className="text-sm text-stone-500">satisfechas</div>
                            </div>
                        </div>

                        <a 
                            href="https://idlsescueladebaile.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Button 
                                variant="outline"
                                className="border-amber-600 text-amber-600 hover:bg-amber-50"
                            >
                                Conoce IDLS Escuela de Baile
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}