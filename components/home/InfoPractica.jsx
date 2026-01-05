import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Users, Calendar, Euro } from 'lucide-react';

export default function InfoPractica() {
    const info = [
        {
            icon: MapPin,
            title: "Ubicación",
            detail: "Vigo, Galicia",
            description: "Clases en nuestro estudio"
        },
        {
            icon: Clock,
            title: "Duración",
            detail: "1 hora aprox.",
            description: "Por sesión"
        },
        {
            icon: Users,
            title: "Modalidad",
            detail: "Presencial",
            description: "Clases privadas para la pareja"
        },
        {
            icon: Calendar,
            title: "Flexibilidad",
            detail: "Horarios adaptados",
            description: "Fines de semana disponibles"
        },
        {
            icon: Euro,
            title: "Precio",
            detail: "Desde 300€",
            description: "Consulta tu presupuesto personalizado"
        }
    ];

    return (
        <section className="py-20 px-4 bg-stone-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                        Información práctica
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                        Todo lo que necesitáis <span className="font-serif italic">saber</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {info.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                                <item.icon className="w-6 h-6 text-amber-600" />
                            </div>
                            <p className="text-sm text-stone-400 mb-1">{item.title}</p>
                            <p className="font-semibold text-stone-800 mb-1">{item.detail}</p>
                            <p className="text-xs text-stone-500">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}