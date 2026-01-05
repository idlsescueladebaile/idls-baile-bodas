import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Heart, Loader2 } from 'lucide-react';

export default function TestimonialForm({ onSuccess }) {
    const [formData, setFormData] = useState({
        couple_names: '',
        wedding_date: '',
        quote: '',
        rating: 5
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await base44.entities.Testimonial.create(formData);
            setSuccess(true);
            if (onSuccess) onSuccess();
            
            // Reset form
            setTimeout(() => {
                setFormData({
                    couple_names: '',
                    wedding_date: '',
                    quote: '',
                    rating: 5
                });
                setSuccess(false);
            }, 3000);
        } catch (error) {
            console.error('Error al enviar testimonio:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100"
        >
            {success ? (
                <div className="text-center py-12">
                    <Heart className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-light text-stone-800 mb-2">
                        ¡Gracias por vuestro testimonio!
                    </h3>
                    <p className="text-stone-500">
                        Lo revisaremos pronto y aparecerá en nuestra web
                    </p>
                </div>
            ) : (
                <>
                    <h2 className="text-2xl font-light text-stone-800 mb-6 text-center">
                        Compartid vuestra <span className="font-serif italic text-amber-700">experiencia</span>
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm text-stone-600 mb-2">
                                Nombres de la pareja *
                            </label>
                            <Input
                                required
                                placeholder="María y Carlos"
                                value={formData.couple_names}
                                onChange={(e) => setFormData({...formData, couple_names: e.target.value})}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-stone-600 mb-2">
                                Fecha de la boda *
                            </label>
                            <Input
                                required
                                placeholder="Junio 2024"
                                value={formData.wedding_date}
                                onChange={(e) => setFormData({...formData, wedding_date: e.target.value})}
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-stone-600 mb-2">
                                Vuestra experiencia *
                            </label>
                            <Textarea
                                required
                                placeholder="Contadnos qué tal fue vuestra experiencia con nosotros..."
                                value={formData.quote}
                                onChange={(e) => setFormData({...formData, quote: e.target.value})}
                                className="w-full min-h-32"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-stone-600 mb-3">
                                Valoración *
                            </label>
                            <div className="flex gap-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setFormData({...formData, rating: star})}
                                        className="transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-8 h-8 ${
                                                star <= formData.rating
                                                    ? 'fill-amber-400 text-amber-400'
                                                    : 'text-stone-300'
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                'Enviar testimonio'
                            )}
                        </Button>

                        <p className="text-xs text-stone-400 text-center">
                            * Revisaremos vuestro testimonio antes de publicarlo en la web
                        </p>
                    </form>
                </>
            )}
        </motion.div>
    );
}