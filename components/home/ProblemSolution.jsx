import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemSolution() {
    const problems = [
        "No sabemos bailar nada...",
        "Tenemos miedo de hacer el ridículo",
        "No tenemos tiempo para clases",
        "No sabemos qué música elegir"
    ];

    const solutions = [
        "Partimos de cero, sin experiencia previa",
        "Os guiamos paso a paso con total confianza",
        "Horarios flexibles adaptados a vosotros",
        "Os ayudamos a elegir la canción perfecta"
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-stone-50 to-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                        Entendemos vuestras preocupaciones
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-stone-800 mt-4">
                        Clases de baile para bodas en Vigo: De la preocupación a la <span className="font-serif italic">ilusión</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Problems */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-medium text-stone-500 mb-6 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-stone-400" />
                            Lo que sentís ahora
                        </h3>
                        {problems.map((problem, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-stone-100/50 rounded-2xl border border-stone-200/50"
                            >
                                <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 text-sm font-medium">
                                    {index + 1}
                                </div>
                                <p className="text-stone-600">{problem}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Arrow for desktop */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                        <ArrowRight className="w-8 h-8 text-amber-400" />
                    </div>

                    {/* Solutions */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h3 className="text-lg font-medium text-amber-700 mb-6 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-amber-500" />
                            Nuestra solución
                        </h3>
                        {solutions.map((solution, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex items-center gap-4 p-4 bg-amber-50/50 rounded-2xl border border-amber-200/50"
                            >
                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                                </div>
                                <p className="text-stone-700">{solution}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}