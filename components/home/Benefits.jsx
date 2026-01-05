import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Smile, Award } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: Shield,
            title: "Sin presión",
            description: "Ambiente relajado donde podéis equivocaros sin problema. Estamos aquí para guiaros, no para juzgaros."
        },
        {
            icon: Clock,
            title: "A vuestro ritmo",
            description: "Cada pareja es única. Adaptamos el proceso a vuestras necesidades y tiempo disponible."
        },
        {
            icon: Smile,
            title: "Lo vais a disfrutar",
            description: "Descubriréis que bailar juntos es más divertido de lo que imaginabais. Lo prometemos."
        },
        {
            icon: Award,
            title: "Resultados garantizados",
            description: "Más de 500 parejas han confiado en nosotros. Todas brillaron en su gran día."
        }
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-amber-50/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                        Por qué elegirnos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                        Profesores de baile para bodas en Vigo: Más que clases, una <span className="font-serif italic">experiencia</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex gap-6 p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-200">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-stone-800 mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-stone-500 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}