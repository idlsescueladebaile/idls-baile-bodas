import React from 'react';
import { motion } from 'framer-motion';
import { Music, Users, Sparkles, Calendar, Video, HeartHandshake } from 'lucide-react';

export default function ServiceIncludes() {
    const features = [
        {
            icon: Music,
            title: "Elección de música",
            description: "Os ayudamos a elegir la canción perfecta que represente vuestra historia"
        },
        {
            icon: Sparkles,
            title: "Coreografía a medida",
            description: "Diseñamos cada paso pensando en vosotros, vuestra personalidad y nivel"
        },
        {
            icon: Users,
            title: "Clases privadas",
            description: "Sesiones individuales donde avanzáis a vuestro ritmo, sin prisas"
        },
        {
            icon: Calendar,
            title: "Horarios flexibles",
            description: "Nos adaptamos a vuestra agenda, incluso fines de semana"
        },
        {
            icon: Video,
            title: "Vídeos de repaso",
            description: "Grabamos los pasos para que podáis practicar en casa"
        },
        {
            icon: HeartHandshake,
            title: "Acompañamiento total",
            description: "Estaremos con vosotros hasta el día de la boda"
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
                        Todo incluido
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                        Coreografía de boda personalizada: ¿Qué incluye nuestro <span className="font-serif italic">servicio</span>?
                    </h2>
                    <p className="text-stone-500 mt-4 max-w-2xl mx-auto">
                        Un acompañamiento completo desde el primer día hasta el momento mágico de vuestro baile nupcial
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-gradient-to-br from-stone-50 to-white border border-stone-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-100/20 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-medium text-stone-800 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-stone-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}