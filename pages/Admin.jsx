import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
    TrendingUp, Users, Star, Image, Eye, ArrowRight,
    Calendar, MessageSquare, Shield
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AuthDocumentation from '@/components/admin/AuthDocumentation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Admin() {
    const [stats, setStats] = useState({
        leads: 0,
        testimonials: 0,
        gallery: 0,
        faqs: 0
    });
    const [recentLeads, setRecentLeads] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {
        try {
            const [leads, testimonials, gallery, faqs] = await Promise.all([
                base44.entities.ContactRequest.list(),
                base44.entities.Testimonial.list(),
                base44.entities.GalleryItem?.list().catch(() => []),
                base44.entities.FAQItem?.list().catch(() => [])
            ]);

            setStats({
                leads: leads.length,
                testimonials: testimonials.length,
                gallery: gallery.length,
                faqs: faqs.length
            });

            setRecentLeads(leads.slice(0, 5));
        } catch (error) {
            console.error('Error cargando dashboard:', error);
        } finally {
            setLoading(false);
        }
    };

    const quickLinks = [
        { label: 'Gestionar Packs', page: 'AdminPacks', icon: TrendingUp, color: 'bg-blue-500' },
        { label: 'Ver Leads', page: 'AdminLeads', icon: Users, color: 'bg-green-500' },
        { label: 'Testimonios', page: 'AdminTestimonials', icon: Star, color: 'bg-amber-500' },
        { label: 'Galería', page: 'AdminGallery', icon: Image, color: 'bg-purple-500' },
    ];

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-light text-stone-800 mb-2">
                            Panel de <span className="font-serif italic text-amber-700">Control</span>
                        </h1>
                        <p className="text-stone-500">
                            Gestiona todo el contenido de IDLS Baile Bodas
                        </p>
                    </div>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="flex-shrink-0">
                                <Shield className="w-4 h-4 mr-2" />
                                Seguridad
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Sistema de Autenticación y Permisos</DialogTitle>
                            </DialogHeader>
                            <AuthDocumentation />
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-stone-600">
                                Leads Totales
                            </CardTitle>
                            <Users className="w-4 h-4 text-stone-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-stone-800">{stats.leads}</div>
                            <p className="text-xs text-stone-500 mt-1">Solicitudes recibidas</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-stone-600">
                                Testimonios
                            </CardTitle>
                            <Star className="w-4 h-4 text-stone-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-stone-800">{stats.testimonials}</div>
                            <p className="text-xs text-stone-500 mt-1">Opiniones publicadas</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-stone-600">
                                Galería
                            </CardTitle>
                            <Image className="w-4 h-4 text-stone-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-stone-800">{stats.gallery}</div>
                            <p className="text-xs text-stone-500 mt-1">Imágenes subidas</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <CardTitle className="text-sm font-medium text-stone-600">
                                FAQs
                            </CardTitle>
                            <MessageSquare className="w-4 h-4 text-stone-400" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-stone-800">{stats.faqs}</div>
                            <p className="text-xs text-stone-500 mt-1">Preguntas activas</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {quickLinks.map((link, index) => (
                        <Link key={index} to={createPageUrl(link.page)}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-lg ${link.color} flex items-center justify-center mb-4`}>
                                        <link.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-medium text-stone-800">{link.label}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Recent Leads */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle>Últimos Leads</CardTitle>
                            <Link to={createPageUrl('AdminLeads')}>
                                <Button variant="ghost" size="sm">
                                    Ver todos
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-8 text-stone-400">Cargando...</div>
                        ) : recentLeads.length === 0 ? (
                            <div className="text-center py-8 text-stone-400">
                                No hay leads todavía
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {recentLeads.map((lead) => (
                                    <div key={lead.id} className="flex items-center justify-between p-4 bg-stone-50 rounded-lg">
                                        <div>
                                            <div className="font-medium text-stone-800">{lead.couple_names}</div>
                                            <div className="text-sm text-stone-500 flex items-center gap-2 mt-1">
                                                <Calendar className="w-3 h-3" />
                                                {lead.wedding_date || 'Sin fecha'}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`inline-block px-2 py-1 rounded text-xs ${
                                                lead.status === 'nuevo' ? 'bg-green-100 text-green-700' :
                                                lead.status === 'contactado' ? 'bg-blue-100 text-blue-700' :
                                                'bg-stone-100 text-stone-700'
                                            }`}>
                                                {lead.status}
                                            </div>
                                            <div className="text-xs text-stone-400 mt-1">
                                                {new Date(lead.created_date).toLocaleDateString('es-ES')}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Quick Access to Public Site */}
                <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="font-medium text-stone-800 mb-1">Ver sitio web público</h3>
                            <p className="text-sm text-stone-600">Previsualiza cómo ven los usuarios tu web</p>
                        </div>
                        <Link to={createPageUrl('Home')}>
                            <Button className="bg-amber-600 hover:bg-amber-700">
                                <Eye className="w-4 h-4 mr-2" />
                                Ir a la web
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}