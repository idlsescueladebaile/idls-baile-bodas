import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Heart, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/shared/SEOHead';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            category: "Antes de empezar",
            questions: [
                {
                    question: "¿Y si no sabemos bailar nada de nada?",
                    answer: "¡La mayoría de nuestras parejas empiezan desde cero! No necesitáis experiencia previa. Nuestro método está diseñado precisamente para personas que nunca han bailado. Paso a paso, con paciencia, conseguiréis resultados que ni os imagináis."
                },
                {
                    question: "¿Cuánto tiempo antes de la boda debemos empezar?",
                    answer: "Lo ideal son 6-8 semanas, pero podemos adaptarnos. Si tenéis menos tiempo (mínimo 3-4 semanas), condensamos el proceso. Si tenéis más, aprovechamos para perfeccionar. Cuanto antes contactéis, más opciones tendréis."
                },
                {
                    question: "¿Podemos elegir cualquier canción?",
                    answer: "¡Absolutamente! Podéis elegir la canción que queráis, sea del estilo que sea. También podemos crear una mezcla de varias canciones si no os decidís por una sola. Si no tenéis claro qué canción elegir, os ayudamos a encontrarla."
                },
                {
                    question: "¿Y si tenemos vergüenza de bailar delante de la gente?",
                    answer: "Es totalmente normal sentir eso. Creamos un ambiente muy seguro y tranquilo en las clases. Poco a poco, esa vergüenza se transforma en confianza. Cuando llegue el día, estaréis tan preparados que los nervios serán ilusión, no miedo."
                }
            ]
        },
        {
            category: "Durante el proceso",
            questions: [
                {
                    question: "¿Cuántas clases necesitamos?",
                    answer: "Depende del nivel de complejidad que queráis y de vuestro punto de partida. Normalmente entre 4 y 8 clases son suficientes. Lo hablaremos en la primera conversación y os recomendaremos lo más adecuado para vosotros."
                },
                {
                    question: "¿Dónde son las clases?",
                    answer: "Las clases se realizan en nuestra escuela IDLS, en un espacio cómodo y privado. Si preferís clases a domicilio o en otro lugar, también podemos organizarlo (puede tener coste adicional según ubicación)."
                },
                {
                    question: "¿Los horarios son flexibles?",
                    answer: "Sí, completamente. Nos adaptamos a vuestras agendas. Ofrecemos horarios de mañana, tarde, noche e incluso fines de semana. Lo importante es que el proceso sea cómodo para vosotros."
                },
                {
                    question: "¿Grabáis las clases para que practiquemos?",
                    answer: "¡Sí! Al final de cada sesión grabamos los pasos aprendidos para que podáis repasar en casa. Es muy útil para afianzar lo aprendido entre clase y clase."
                }
            ]
        },
        {
            category: "El día de la boda",
            questions: [
                {
                    question: "¿Y si nos ponemos muy nerviosos el día de la boda?",
                    answer: "Los nervios son normales, pero estaréis tan preparados que os saldrá natural. Además, os daremos consejos específicos para gestionar los nervios ese día. La práctica y la confianza que habréis ganado harán el resto."
                },
                {
                    question: "¿Qué pasa si nos equivocamos en algún paso?",
                    answer: "Nada grave. La coreografía está diseñada para que, si os perdéis, podáis retomar fácilmente. Además, los invitados no conocen la coreografía, así que nadie notará un pequeño despiste. Lo importante es que disfrutéis."
                },
                {
                    question: "¿Podéis coordinaros con el DJ?",
                    answer: "Sí, especialmente en el pack Premium. Podemos hablar con vuestro DJ o wedding planner para asegurar que la música suena exactamente como la habéis practicado y en el momento preciso."
                }
            ]
        },
        {
            category: "Precios y reservas",
            questions: [
                {
                    question: "¿Cuánto cuesta el servicio?",
                    answer: "Tenemos diferentes packs adaptados a cada situación. El precio varía según el número de clases y nivel de personalización. Contactadnos para una consulta gratuita donde os daremos un presupuesto personalizado sin compromiso."
                },
                {
                    question: "¿Cómo se hace la reserva?",
                    answer: "Muy sencillo: primero tenemos una conversación gratuita para conoceros. Si decidís seguir adelante, reserváis con una señal y acordamos las fechas de las clases. ¡Así de fácil!"
                },
                {
                    question: "¿Qué pasa si tenemos que cancelar o cambiar fechas?",
                    answer: "Entendemos que las bodas pueden tener imprevistos. Somos flexibles con los cambios de fechas si nos avisáis con antelación suficiente. Consultadnos las condiciones específicas."
                }
            ]
        }
    ];

    return (
        <>
            <SEOHead 
                title="Preguntas Frecuentes Clases Baile Boda Vigo | FAQ IDLS"
                description="Resuelve todas tus dudas sobre clases de baile para bodas en Vigo. Precios, horarios, proceso, sin experiencia previa necesaria."
                keywords="preguntas baile boda vigo, dudas clases baile nupcial, faq baile bodas"
            />
            <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
            {/* Hero */}
            <section className="relative py-24 md:py-32 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <HelpCircle className="w-12 h-12 text-amber-500 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mb-6">
                            Preguntas frecuentes
                            <span className="font-serif italic text-amber-700"> sobre baile nupcial</span>
                        </h1>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                            Todas las respuestas que necesitáis para tomar la decisión 
                            con total tranquilidad.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="pb-20 px-4">
                <div className="max-w-3xl mx-auto">
                    {faqs.map((section, sectionIndex) => (
                        <motion.div
                            key={sectionIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: sectionIndex * 0.1 }}
                            className="mb-12"
                        >
                            <h2 className="text-sm font-medium text-amber-600 tracking-[0.2em] uppercase mb-6">
                                {section.category}
                            </h2>
                            <div className="space-y-3">
                                {section.questions.map((faq, index) => {
                                    const globalIndex = `${sectionIndex}-${index}`;
                                    const isOpen = openIndex === globalIndex;
                                    
                                    return (
                                        <div
                                            key={index}
                                            className={`bg-white rounded-2xl border transition-all duration-300 ${
                                                isOpen ? 'border-amber-200 shadow-lg' : 'border-stone-100'
                                            }`}
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                className="w-full px-6 py-5 flex items-center justify-between text-left"
                                            >
                                                <span className={`font-medium transition-colors ${
                                                    isOpen ? 'text-amber-700' : 'text-stone-800'
                                                }`}>
                                                    {faq.question}
                                                </span>
                                                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`} />
                                            </button>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-5">
                                                            <p className="text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Still have questions */}
            <section className="py-20 px-4 bg-stone-900">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-10 h-10 text-amber-400 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                            ¿Tenéis más <span className="font-serif italic text-amber-200">preguntas</span>?
                        </h2>
                        <p className="text-stone-400 mb-8">
                            Estamos aquí para resolver cualquier duda. Escribidnos sin compromiso.
                        </p>
                        <Link to={createPageUrl('Contacto')}>
                            <Button 
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full group"
                            >
                                Contactar
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