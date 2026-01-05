import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Heart, Music, Sparkles, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/shared/SEOHead';

export default function ElBaile() {
    const danceTypes = [
        {
            title: "Baile de entrada",
            description: "El clásico vals nupcial o una versión moderna. Elegante, emotivo y perfecto para abrir la pista.",
            image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80",
            ideal: "Parejas que buscan un momento clásico y elegante"
        },
        {
            title: "Baile sorpresa",
            description: "Una coreografía que deja a todos boquiabiertos. Mezcla de estilos, cambios de ritmo y mucha diversión.",
            image: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=600&q=80",
            ideal: "Parejas divertidas que quieren sorprender"
        },
        {
            title: "Mezcla personalizada",
            description: "Combinamos varias canciones que significan algo para vosotros en una única pieza.",
            image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
            ideal: "Parejas con historia y canciones especiales"
        },
        {
            title: "Baile con familia",
            description: "Incluimos a padres, amigos o toda la familia en parte de la coreografía.",
            image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=600&q=80",
            ideal: "Parejas familiares que quieren compartir el momento"
        }
    ];

    const adaptations = [
        {
            icon: Users,
            title: "Nivel cero",
            description: "Nunca habéis bailado juntos. No pasa nada. Empezamos desde el principio, con paciencia y paso a paso."
        },
        {
            icon: Music,
            title: "Poco tiempo",
            description: "Si tenéis la boda cerca, condensamos el proceso. Os damos lo esencial para brillar."
        },
        {
            icon: Sparkles,
            title: "Miedos y nervios",
            description: "Si os da vergüenza bailar, os entendemos perfectamente. Creamos un ambiente seguro donde soltaros."
        }
    ];

    return (
        <>
            <SEOHead 
                title="Coreografía Personalizada para Bodas en Vigo | IDLS"
                description="Descubre cómo crear el baile perfecto para tu boda. Valses, bailes modernos, latinos. Coreografía adaptada a tu estilo y nivel en Vigo."
                keywords="coreografía boda vigo, baile nupcial personalizado, vals boda, baile moderno boda"
            />
            <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-24 md:py-32 px-4 bg-gradient-to-br from-stone-50 to-amber-50/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Heart className="w-10 h-10 text-amber-500 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6">
                            Coreografía personalizada para
                            <br />
                            <span className="font-serif italic text-amber-700">el baile de vuestra boda en Vigo</span>
                        </h1>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                            Una coreografía única, creada para vosotros, que contará vuestra historia 
                            sin necesidad de palabras.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What is a personalized choreography */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80"
                                alt="Pareja bailando"
                                className="rounded-3xl shadow-2xl"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                                ¿Qué es?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4 mb-6">
                                Una coreografía <span className="font-serif italic">a vuestra medida</span>
                            </h2>
                            <div className="space-y-4 text-stone-600 leading-relaxed">
                                <p>
                                    No es una clase de baile genérica. Es un proceso creativo donde diseñamos 
                                    cada movimiento pensando en vosotros: vuestra personalidad, vuestro nivel, 
                                    vuestra canción favorita.
                                </p>
                                <p>
                                    El resultado es un baile que os representa, que podéis ejecutar con 
                                    confianza y que emocionará a todos vuestros invitados.
                                </p>
                                <p className="font-medium text-stone-800">
                                    Lo más importante: no hace falta saber bailar. De verdad.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Types of dances */}
            <section className="py-20 px-4 bg-stone-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                            Tipos de baile
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                            Elegid vuestro <span className="font-serif italic">estilo</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {danceTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={type.image}
                                        alt={type.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <h3 className="absolute bottom-4 left-6 text-2xl font-light text-white">
                                        {type.title}
                                    </h3>
                                </div>
                                <div className="p-6">
                                    <p className="text-stone-600 mb-4">{type.description}</p>
                                    <p className="text-sm text-amber-600 flex items-center gap-2">
                                        <Star className="w-4 h-4" />
                                        {type.ideal}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Adaptations */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                            Nos adaptamos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                            Sea cual sea vuestra <span className="font-serif italic">situación</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {adaptations.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 p-8 rounded-3xl bg-gradient-to-br from-amber-50/50 to-white border border-amber-100/50"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center">
                                        <item.icon className="w-7 h-7 text-amber-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-stone-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-stone-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 bg-stone-900">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                            ¿Qué tipo de baile os <span className="font-serif italic text-amber-300">imagináis</span>?
                        </h2>
                        <p className="text-stone-400 mb-8">
                            Contádnoslo y os ayudamos a hacerlo realidad
                        </p>
                        <Link to={createPageUrl('Contacto')}>
                            <Button 
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full group"
                            >
                                Hablamos
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
            </div>
        </>
    );
}