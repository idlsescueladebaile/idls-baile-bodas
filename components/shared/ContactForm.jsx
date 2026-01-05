import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { base44 } from '@/api/base44Client';
import { Loader2, CheckCircle2, Heart, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ContactForm({ compact = false }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        couple_names: '',
        wedding_date: '',
        wedding_location: '',
        city: '',
        phone: '',
        email: '',
        has_dance_experience: false,
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Enviar datos al CRM centralizado usando ingestRegistro
            const datosParaCRM = {
                origen_web: "bodas",
                tipo_evento: "lead",
                nombre: formData.couple_names,
                email: formData.email,
                telefono: formData.phone,
                mensaje: formData.message,
                datos_extra: {
                    ciudad: formData.city,
                    lugar_boda: formData.wedding_location,
                    tiene_experiencia: formData.has_dance_experience
                },
                fecha_evento: formData.wedding_date || new Date().toISOString()
            };
            
            const resultado = await base44.functions.invoke('ingestRegistro', datosParaCRM);
            
            if (resultado.data.status !== 'success') {
                throw new Error('Error al procesar en CRM');
            }

            // Obtener configuración de notificaciones para email
            const settings = await base44.entities.SiteSettings?.list().catch(() => []);
            const settingsMap = {};
            settings.forEach(s => {
                settingsMap[s.setting_key] = s.setting_value;
            });
            
            // Enviar email de notificación si está habilitado
            if (settingsMap.notifications_enabled === 'true' && settingsMap.admin_email) {
                const emailSubject = '📩 Nueva solicitud – IDLS Baile Bodas';
                const emailBody = `
¡Nueva solicitud recibida!

━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Fecha y hora: ${new Date().toLocaleString('es-ES')}
🌐 Página origen: Formulario de contacto

━━━━━━━━━━━━━━━━━━━━━━━━━━

DATOS DE LA PAREJA:

👥 Nombres: ${formData.couple_names}
💍 Fecha de la boda: ${formData.wedding_date || 'No especificada'}
📍 Lugar: ${formData.wedding_location || 'No especificado'}
🏙️ Ciudad: ${formData.city || 'No especificada'}
📱 Teléfono: ${formData.phone}
📧 Email: ${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MENSAJE:
${formData.message || 'Sin mensaje adicional'}

━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 EXPERIENCIA EN BAILE:
${formData.has_dance_experience ? 'Sí, tienen algo de experiencia' : 'No, empiezan de cero'}

━━━━━━━━━━━━━━━━━━━━━━━━━━

🔗 Ver en el panel de administración:
${window.location.origin}${createPageUrl('AdminLeads')}

💬 Contactar por WhatsApp:
https://wa.me/${formData.phone.replace(/\D/g, '')}

━━━━━━━━━━━━━━━━━━━━━━━━━━

IDLS Baile Bodas
                `.trim();

                try {
                    await base44.integrations.Core.SendEmail({
                        to: settingsMap.admin_email,
                        subject: emailSubject,
                        body: emailBody,
                        from_name: 'IDLS Baile Bodas'
                    });
                } catch (emailError) {
                    console.error('Error enviando email:', emailError);
                    // No bloqueamos el proceso si falla el email
                }
            }
            
            setIsSubmitting(false);
            setIsSubmitted(true);
            
            // Redirect to thank you page after brief delay
            setTimeout(() => {
                navigate(createPageUrl('Gracias'));
            }, 1500);
        } catch (error) {
            console.error('Error:', error);
            setIsSubmitting(false);
            alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-light text-stone-800 mb-2">
                    ¡Mensaje enviado!
                </h3>
                <p className="text-stone-500">
                    Os contactaremos muy pronto
                </p>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="couple_names" className="text-stone-700">
                        Nombres de la pareja *
                    </Label>
                    <Input
                        id="couple_names"
                        name="couple_names"
                        placeholder="Ej: María y Carlos"
                        value={formData.couple_names}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="wedding_date" className="text-stone-700">
                        Fecha de la boda
                    </Label>
                    <Input
                        id="wedding_date"
                        name="wedding_date"
                        type="date"
                        value={formData.wedding_date}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="wedding_location" className="text-stone-700">
                        Lugar de la boda
                    </Label>
                    <Input
                        id="wedding_location"
                        name="wedding_location"
                        placeholder="Nombre del venue"
                        value={formData.wedding_location}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="city" className="text-stone-700">
                        Ciudad
                    </Label>
                    <Input
                        id="city"
                        name="city"
                        placeholder="Vuestra ciudad"
                        value={formData.city}
                        onChange={handleChange}
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-stone-700">
                        Teléfono *
                    </Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="600 000 000"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-stone-700">
                        Email *
                    </Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="vuestro@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12 rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400"
                    />
                </div>
            </div>

            <div className="space-y-3">
                <Label className="text-stone-700">
                    ¿Habéis bailado antes en pareja?
                </Label>
                <RadioGroup
                    value={formData.has_dance_experience ? "yes" : "no"}
                    onValueChange={(value) => setFormData(prev => ({ 
                        ...prev, 
                        has_dance_experience: value === "yes" 
                    }))}
                    className="flex gap-6"
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no" className="text-stone-600 cursor-pointer">
                            No, empezamos de cero
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes" className="text-stone-600 cursor-pointer">
                            Sí, algo de experiencia
                        </Label>
                    </div>
                </RadioGroup>
            </div>

            {!compact && (
                <div className="space-y-2">
                    <Label htmlFor="message" className="text-stone-700">
                        Cuéntanos más (opcional)
                    </Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="¿Tenéis alguna canción en mente? ¿Algún estilo de baile preferido? ¿Algo que os preocupe?"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="rounded-xl border-stone-200 focus:border-amber-400 focus:ring-amber-400 resize-none"
                    />
                </div>
            )}

            <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-lg shadow-lg shadow-amber-200 transition-all duration-300 hover:shadow-xl hover:shadow-amber-300"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5 mr-2" />
                        Quiero información sin compromiso
                    </>
                )}
            </Button>

            <p className="text-center text-sm text-stone-400">
                <Heart className="w-4 h-4 inline mr-1" />
                Respondemos en menos de 24 horas
            </p>
        </form>
    );
}