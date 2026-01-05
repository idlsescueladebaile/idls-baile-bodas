import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
    CheckCircle2, Star, Sparkles, Crown, 
    ArrowRight, Heart, Clock, Video, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEOHead from '@/components/shared/SEOHead';

export default function Packs() {
    const packs = [
        {
            name: "Esencial",
            subtitle: "Lo básico para brillar",
            highlight: false,
            classes: "4 clases",
            features: [
                "Coreografía sencilla y elegante",
                "Elección de música incluida",
                "Vídeos de repaso de cada sesión",
                "Soporte por WhatsApp",
                "Horarios flexibles"
            ],
            ideal: "Parejas con poco tiempo o que buscan algo sencillo pero bonito",
            notIncluded: [
                "Edición de música personalizada",
                "Ensayo general previo"
            ]
        },
        {
            name: "Personalizado",
            subtitle: "Nuestra recomendación",
            highlight: true,
            classes: "6 clases",
            features: [
                "Coreografía 100% a medida",
                "Edición de música personalizada",
                "Vídeos de repaso de cada sesión",
                "Ensayo general incluido",
                "Soporte por WhatsApp prioritario",
                "Horarios flexibles",
                "Ajustes ilimitados en el proceso"
            ],
            ideal: "La mayoría de parejas. Equilibrio perfecto entre personalización y practicidad",
            notIncluded: []
        },
        {
            name: "Premium",
            subtitle: "La experiencia completa",
            highlight: false,
            classes: "8+ clases",
            features: [
                "Todo lo del pack Personalizado",
                "Coreografía más elaborada",
                "Posibilidad de múltiples canciones",
                "2 ensayos generales",
                "Clase extra para familia/amigos",
                "Coordinación con DJ/fotógrafo",
                "Regalo sorpresa para el día B"
            ],
            ideal: "Parejas que quieren sorprender a lo grande o incluir elementos especiales",
            notIncluded: []
        }
    ];

    const faqs = [
        {
            question: "¿Los precios incluyen todo?",
            answer: "Sí, cada pack incluye todo lo mencionado. No hay costes ocultos ni sorpresas."
        },
        {
            question: "¿Puedo cambiar de pack después?",
            answer: "Por supuesto. Si empezáis con Esencial y queréis ampliar, ajustamos la diferencia."
        },
        {
            question: "¿Y si necesito más clases?",
            answer: "Se pueden añadir clases extra al pack elegido sin problema."
        }
    ];

    return (
        <>
            <SEOHead 
                title="Precios Clases de Baile para Bodas en Vigo | Packs IDLS"
                description="Descubre nuestros packs de clases de baile para bodas en Vigo. Desde pack básico hasta premium. Consulta gratuita incluida. Precios transparentes."
                keywords="precio clases baile boda vigo, tarifas baile nupcial, pack boda vigo, cuánto cuesta baile boda"
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
                        <span className="text-amber-600 text-sm tracking-[0.2em] uppercase">
                            Nuestras opciones
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-stone-800 mt-4 mb-6">
                            Precios clases de baile para bodas en Vigo
                            <span className="font-serif italic text-amber-700"> - Packs personalizados</span>
                        </h1>
                        <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
                            Tres opciones claras para que elijáis la que mejor se adapta 
                            a vuestras necesidades y presupuesto.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Packs */}
            <section className="pb-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {packs.map((pack, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative rounded-3xl ${
                                    pack.highlight 
                                        ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-2xl shadow-amber-200 scale-105 z-10' 
                                        : 'bg-white border border-stone-200 shadow-sm'
                                }`}
                            >
                                {pack.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <span className="bg-stone-900 text-white text-xs px-4 py-1.5 rounded-full flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            Más elegido
                                        </span>
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <div className={`w-14 h-14 mx-auto rounded-2xl ${
                                            pack.highlight ? 'bg-white/20' : 'bg-amber-100'
                                        } flex items-center justify-center mb-4`}>
                                            {index === 0 && <Heart className={`w-7 h-7 ${pack.highlight ? 'text-white' : 'text-amber-600'}`} />}
                                            {index === 1 && <Sparkles className={`w-7 h-7 ${pack.highlight ? 'text-white' : 'text-amber-600'}`} />}
                                            {index === 2 && <Crown className={`w-7 h-7 ${pack.highlight ? 'text-white' : 'text-amber-600'}`} />}
                                        </div>
                                        <h3 className={`text-2xl font-medium ${pack.highlight ? 'text-white' : 'text-stone-800'}`}>
                                            {pack.name}
                                        </h3>
                                        <p className={`text-sm mt-1 ${pack.highlight ? 'text-amber-100' : 'text-stone-500'}`}>
                                            {pack.subtitle}
                                        </p>
                                    </div>

                                    <div className={`text-center py-6 border-y ${
                                        pack.highlight ? 'border-white/20' : 'border-stone-100'
                                    }`}>
                                        <div className={`text-3xl font-light ${pack.highlight ? 'text-white' : 'text-amber-600'}`}>
                                            {pack.classes}
                                        </div>
                                        <p className={`text-sm ${pack.highlight ? 'text-amber-100' : 'text-stone-400'}`}>
                                            de 1 hora cada una
                                        </p>
                                    </div>

                                    <div className="py-6 space-y-3">
                                        {pack.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${
                                                    pack.highlight ? 'text-amber-200' : 'text-amber-500'
                                                }`} />
                                                <span className={`text-sm ${
                                                    pack.highlight ? 'text-white/90' : 'text-stone-600'
                                                }`}>
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className={`pt-6 border-t ${
                                        pack.highlight ? 'border-white/20' : 'border-stone-100'
                                    }`}>
                                        <p className={`text-sm mb-6 ${
                                            pack.highlight ? 'text-amber-100' : 'text-stone-500'
                                        }`}>
                                            <strong>Ideal para:</strong> {pack.ideal}
                                        </p>
                                        <Link to={createPageUrl('Contacto')}>
                                            <Button 
                                                className={`w-full py-6 rounded-xl ${
                                                    pack.highlight 
                                                        ? 'bg-white text-amber-700 hover:bg-amber-50' 
                                                        : 'bg-stone-900 text-white hover:bg-stone-800'
                                                }`}
                                            >
                                                Solicitar información
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Note */}
            <section className="py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-amber-50/50 rounded-3xl p-8 text-center border border-amber-100"
                    >
                        <Heart className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                        <p className="text-stone-700 leading-relaxed">
                            <strong>¿No sabéis cuál elegir?</strong>
                            <br />
                            No os preocupéis. Después de la primera conversación gratuita, 
                            os recomendaremos el pack que mejor se adapte a vosotros.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 px-4 bg-stone-50">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-light text-stone-800">
                            Preguntas sobre los <span className="font-serif italic">packs</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-sm"
                            >
                                <h3 className="font-medium text-stone-800 mb-2">{faq.question}</h3>
                                <p className="text-stone-500">{faq.answer}</p>
                            </motion.div>
                        ))}
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
                    >
                        <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
                            ¿Os ayudamos a <span className="font-serif italic">elegir</span>?
                        </h2>
                        <Link to={createPageUrl('Contacto')}>
                            <Button 
                                size="lg"
                                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-amber-200 group"
                            >
                                Pedir asesoramiento gratuito
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