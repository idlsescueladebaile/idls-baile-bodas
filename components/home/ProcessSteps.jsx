import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Music2, Palette, GraduationCap, Star, Heart } from 'lucide-react';

export default function ProcessSteps() {
    const steps = [
        {
            icon: MessageCircle,
            number: "01",
            title: "Primera conversación",
            description: "Nos conocemos, hablamos de vuestros gustos, miedos e ilusiones. Sin compromiso."
        },
        {
            icon: Music2,
            number: "02",
            title: "Elegimos la música",
            description: "Juntos seleccionamos la canción perfecta o la mezcla ideal para vuestro momento."
        },
        {
            icon: Palette,
            number: "03",
            title: "Diseñamos el baile",
            description: "Creamos una coreografía única, adaptada a vuestro nivel y personalidad."
        },
        {
            icon: GraduationCap,
            number: "04",
            title: "Clases progresivas",
            description: "Paso a paso, sin prisas, hasta que os sintáis seguros y disfrutéis bailando."
        },
        {
            icon: Star,
            number: "05",
            title: "Ensayo final",
            description: "Repasamos todo antes del gran día para que os sintáis completamente preparados."
        },
        {
            icon: Heart,
            number: "06",
            title: "¡Vuestro día!",
            description: "Brilláis en la pista. Nosotros estaremos ahí, orgullosos de vosotros."
        }
    ];

    return (
        <section className="py-24 px-4 bg-stone-900 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="max-w-6xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-400 text-sm tracking-[0.2em] uppercase">
                        Proceso paso a paso
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light mt-4">
                        Así creamos vuestro <span className="font-serif italic text-amber-200">primer baile de boda</span>
                    </h2>
                    <p className="text-stone-400 mt-4 max-w-2xl mx-auto">
                        Un camino tranquilo y emocionante desde el primer contacto hasta vuestro baile nupcial perfecto
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -top-4 -left-4 text-6xl font-light text-stone-800 group-hover:text-amber-900/30 transition-colors duration-300">
                                {step.number}
                            </div>
                            <div className="relative bg-stone-800/50 backdrop-blur-sm rounded-3xl p-8 border border-stone-700/50 hover:border-amber-600/30 transition-all duration-500">
                                <div className="w-12 h-12 rounded-xl bg-amber-600/20 flex items-center justify-center mb-6">
                                    <step.icon className="w-6 h-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                                <p className="text-stone-400 leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}