import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
    MessageCircle, Music2, Palette, GraduationCap, 
    Star, Heart, ArrowRight, CheckCircle2, Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/shared/SEOHead';

export default function ComoTrabajamos() {
    const steps = [
        {
            icon: MessageCircle,
            number: "01",
            title: "Primera conversación",
            description: "Nos conocemos en una llamada o videollamada gratuita. Hablamos de vuestros gustos, miedos, ilusiones y expectativas. Sin compromiso.",
            duration: "30 minutos",
            details: [
                "Entendemos qué tipo de pareja sois",
                "Analizamos vuestro nivel de baile",
                "Hablamos de la fecha y el espacio",
                "Respondemos todas vuestras dudas"
            ]
        },
        {
            icon: Music2,
            number: "02",
            title: "Elección de música",
            description: "Juntos seleccionamos la canción perfecta. Si no tenéis claro qué queréis, os proponemos opciones basadas en vuestros gustos.",
            duration: "1-2 días",
            details: [
                "Podemos usar una o varias canciones",
                "Editamos la música a medida",
                "Creamos mezclas personalizadas",
                "Os enviamos opciones para aprobar"
            ]
        },
        {
            icon: Palette,
            number: "03",
            title: "Diseño de coreografía",
            description: "Nuestro equipo crea una coreografía única, pensando en vuestra canción, vuestro nivel y vuestra personalidad.",
            duration: "3-5 días",
            details: [
                "Cada paso pensado para vosotros",
                "Equilibrio entre impacto y ejecución",
                "Momentos emotivos y divertidos",
                "Adaptada al espacio de vuestra boda"
            ]
        },
        {
            icon: GraduationCap,
            number: "04",
            title: "Clases prácticas",
            description: "Sesiones individuales donde aprendéis la coreografía paso a paso. Sin prisas, a vuestro ritmo, con toda la paciencia del mundo.",
            duration: "4-8 sesiones",
            details: [
                "Clases de 1 hora aproximadamente",
                "Grabamos cada sesión para repaso",
                "Horarios flexibles",
                "Podéis repetir lo que necesitéis"
            ]
        },
        {
            icon: Star,
            number: "05",
            title: "Ensayo final",
            description: "Una sesión especial donde repasamos todo y perfeccionamos detalles. Salís de aquí sintiéndoos completamente preparados.",
            duration: "1-2 horas",
            details: [
                "Simulamos el momento real",
                "Consejos para gestionar nervios",
                "Últimos ajustes de pasos",
                "Vídeo final de referencia"
            ]
        },
        {
            icon: Heart,
            number: "06",
            title: "Vuestro gran día",
            description: "Brilláis en la pista. Vuestra familia y amigos alucinan. Vosotros disfrutáis cada segundo. Nosotros, orgullosos.",
            duration: "¡El momento!",
            details: [
                "Disponibilidad por si necesitáis algo",
                "Recordatorio de consejos clave",
                "Mucha confianza acumulada",
                "¡A disfrutar!"
            ]
        }
    ];

    return (
        <>
            <SEOHead 
                title="Cómo Trabajamos - Proceso de Clases de Baile para Bodas | IDLS Vigo"
                description="Conoce nuestro método paso a paso para crear tu baile de boda perfecto. Desde la primera consulta hasta el día especial. Proceso transparente y sin estrés."
                keywords="proceso clases baile boda, método enseñanza baile nupcial, cómo aprender baile boda vigo"
            />
            <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative py-24 md:py-32 px-4 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
                <div className="max-w-4xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-amber-400 text-sm tracking-[0.2em] uppercase">
                            Proceso transparente
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-4 mb-6">
                            Cómo trabajamos: Clases de baile nupcial en Vigo
                            <br />
                            <span className="font-serif italic text-amber-200">paso a paso</span>
                        </h1>
                        <p className="text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
                            Un camino tranquilo, sin sorpresas, donde sabéis exactamente 
                            qué esperar en cada momento.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Steps */}
            <section className="py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-amber-200 to-stone-100 hidden md:block" />
                            )}

                            <div className="flex flex-col md:flex-row gap-8 mb-16">
                                {/* Icon and number */}
                                <div className="flex-shrink-0 flex md:flex-col items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-200 relative z-10">
                                        <step.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <span className="text-3xl font-light text-stone-200">{step.number}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-grow bg-gradient-to-br from-stone-50 to-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                        <h3 className="text-2xl font-medium text-stone-800">
                                            {step.title}
                                        </h3>
                                        <span className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                                            <Clock className="w-4 h-4" />
                                            {step.duration}
                                        </span>
                                    </div>
                                    <p className="text-stone-600 leading-relaxed mb-6">
                                        {step.description}
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {step.details.map((detail, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-stone-500">{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Timeline summary */}
            <section className="py-20 px-4 bg-amber-50/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-light text-stone-800">
                            ¿Cuánto tiempo <span className="font-serif italic">necesitamos</span>?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl text-center shadow-sm"
                        >
                            <div className="text-4xl font-light text-amber-600 mb-2">6-8</div>
                            <div className="text-stone-800 font-medium">semanas ideales</div>
                            <p className="text-sm text-stone-500 mt-2">
                                Tiempo óptimo para aprender sin prisas
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-8 rounded-3xl text-center shadow-sm"
                        >
                            <div className="text-4xl font-light text-amber-600 mb-2">3-4</div>
                            <div className="text-stone-800 font-medium">semanas mínimas</div>
                            <p className="text-sm text-stone-500 mt-2">
                                Si vais justos de tiempo, también podemos
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-8 rounded-3xl text-center shadow-sm"
                        >
                            <div className="text-4xl font-light text-amber-600 mb-2">4-8</div>
                            <div className="text-stone-800 font-medium">clases normalmente</div>
                            <p className="text-sm text-stone-500 mt-2">
                                Depende del nivel y complejidad
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
                            ¿Empezamos a crear <span className="font-serif italic">vuestra historia</span>?
                        </h2>
                        <p className="text-stone-500 mb-8">
                            El primer paso es una conversación sin compromiso
                        </p>
                        <Link to={createPageUrl('Contacto')}>
                            <Button 
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-200 group"
                            >
                                Solicitar primera cita gratuita
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