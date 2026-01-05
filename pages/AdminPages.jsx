import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Eye, AlertCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function AdminPages() {
    const pages = [
        { 
            name: 'Home', 
            page: 'Home',
            description: 'Página principal con hero, beneficios, proceso, testimonios y CTAs',
            sections: ['Hero', 'Problema/Solución', 'Servicios', 'Proceso', 'Beneficios', 'Quiénes Somos', 'Testimonios', 'CTAs']
        },
        { 
            name: 'El Baile', 
            page: 'ElBaile',
            description: 'Tipos de baile y adaptaciones personalizadas',
            sections: ['Hero', 'Tipos de baile', 'Adaptaciones', 'CTA']
        },
        { 
            name: 'Cómo Trabajamos', 
            page: 'ComoTrabajamos',
            description: 'Proceso paso a paso del servicio',
            sections: ['Hero', 'Pasos del proceso', 'Timeline', 'CTA']
        },
        { 
            name: 'Packs', 
            page: 'Packs',
            description: 'Paquetes de servicios y precios',
            sections: ['Hero', 'Lista de packs', 'FAQs de packs', 'CTA']
        },
        { 
            name: 'Opiniones', 
            page: 'Opiniones',
            description: 'Testimonios de clientes y formulario',
            sections: ['Hero', 'Stats', 'Grid de testimonios', 'Vídeos', 'Formulario', 'CTA']
        },
        { 
            name: 'Galería', 
            page: 'Galeria',
            description: 'Galería de imágenes de bodas',
            sections: ['Hero', 'Grid de imágenes', 'Lightbox', 'CTA']
        },
        { 
            name: 'FAQ', 
            page: 'FAQ',
            description: 'Preguntas frecuentes organizadas por categorías',
            sections: ['Hero', 'Acordeones por categoría', 'CTA']
        },
        { 
            name: 'Contacto', 
            page: 'Contacto',
            description: 'Formulario de contacto e información',
            sections: ['Hero', 'Formulario', 'Info de contacto', 'Mapa/Social']
        },
    ];

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-light text-stone-800 mb-2">
                        Gestión de <span className="font-serif italic text-amber-700">Páginas</span>
                    </h1>
                    <p className="text-stone-500">Administra el contenido de todas las páginas del sitio</p>
                </div>

                <Card className="mb-6 border-blue-200 bg-blue-50">
                    <CardContent className="p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-blue-800">
                            <strong>Funcionalidad en desarrollo:</strong> Esta sección permitirá editar el contenido 
                            de cada página mediante un constructor visual de bloques. Los textos, imágenes y orden de 
                            secciones se guardarán en la entidad PageContent para gestión completa sin código.
                        </div>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    {pages.map((pageInfo) => (
                        <Card key={pageInfo.page} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <CardTitle className="flex items-center gap-2 mb-2">
                                            <FileText className="w-5 h-5 text-amber-600" />
                                            {pageInfo.name}
                                        </CardTitle>
                                        <p className="text-sm text-stone-500">{pageInfo.description}</p>
                                    </div>
                                    <Link to={createPageUrl(pageInfo.page)} target="_blank">
                                        <Button size="sm" variant="outline">
                                            <Eye className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-medium text-stone-500 mb-2">Secciones:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {pageInfo.sections.map((section, idx) => (
                                                <span 
                                                    key={idx}
                                                    className="px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded"
                                                >
                                                    {section}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-stone-100">
                                        <Button 
                                            className="w-full" 
                                            variant="outline"
                                            disabled
                                        >
                                            Editar Contenido (Próximamente)
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Roadmap */}
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Próximas Funcionalidades</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm text-stone-600">
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600">→</span>
                                <span>Constructor visual drag & drop para reordenar secciones</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600">→</span>
                                <span>Editor de textos con preview en tiempo real</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600">→</span>
                                <span>Gestión de imágenes con upload y optimización automática</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600">→</span>
                                <span>Sistema de borradores y publicación programada</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-amber-600">→</span>
                                <span>Activar/desactivar secciones individuales por página</span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}