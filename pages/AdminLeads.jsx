import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Mail, Phone, MapPin, Download, Search, Filter, MessageCircle } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function AdminLeads() {
    const [leads, setLeads] = useState([]);
    const [filteredLeads, setFilteredLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');

    useEffect(() => {
        loadLeads();
    }, []);

    useEffect(() => {
        filterLeads();
    }, [leads, searchTerm, statusFilter]);

    const loadLeads = async () => {
        try {
            const data = await base44.entities.ContactRequest.list('-created_date');
            setLeads(data);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterLeads = () => {
        let filtered = leads;

        if (statusFilter !== 'all') {
            filtered = filtered.filter(lead => lead.status === statusFilter);
        }

        if (searchTerm) {
            filtered = filtered.filter(lead =>
                lead.couple_names?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                lead.city?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredLeads(filtered);
    };

    const updateStatus = async (leadId, newStatus) => {
        try {
            await base44.entities.ContactRequest.update(leadId, { status: newStatus });
            await loadLeads();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const exportToCSV = () => {
        const headers = ['Pareja', 'Email', 'Teléfono', 'Fecha Boda', 'Ciudad', 'Estado', 'Fecha Contacto'];
        const rows = filteredLeads.map(lead => [
            lead.couple_names,
            lead.email,
            lead.phone,
            lead.wedding_date || '',
            lead.city || '',
            lead.status,
            new Date(lead.created_date).toLocaleDateString('es-ES')
        ]);

        const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leads_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const statusColors = {
        nuevo: 'bg-green-100 text-green-700',
        contactado: 'bg-blue-100 text-blue-700',
        en_proceso: 'bg-amber-100 text-amber-700',
        convertido: 'bg-purple-100 text-purple-700',
        descartado: 'bg-stone-100 text-stone-600'
    };

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-light text-stone-800 mb-2">
                            Gestión de <span className="font-serif italic text-amber-700">Leads</span>
                        </h1>
                        <p className="text-stone-500">{filteredLeads.length} solicitudes</p>
                    </div>
                    <Button onClick={exportToCSV} variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Exportar CSV
                    </Button>
                </div>

                {/* Filters */}
                <Card className="mb-6">
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                                <Input
                                    placeholder="Buscar por nombre, email o ciudad..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <Select value={statusFilter} onValueChange={setStatusFilter}>
                                <SelectTrigger>
                                    <Filter className="w-4 h-4 mr-2" />
                                    <SelectValue placeholder="Filtrar por estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Todos los estados</SelectItem>
                                    <SelectItem value="nuevo">Nuevos</SelectItem>
                                    <SelectItem value="contactado">Contactados</SelectItem>
                                    <SelectItem value="en_proceso">En proceso</SelectItem>
                                    <SelectItem value="convertido">Convertidos</SelectItem>
                                    <SelectItem value="descartado">Descartados</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Leads List */}
                <div className="grid gap-4">
                    {loading ? (
                        <div className="text-center py-12">Cargando...</div>
                    ) : filteredLeads.length === 0 ? (
                        <Card>
                            <CardContent className="text-center py-12 text-stone-400">
                                No hay leads que coincidan con los filtros
                            </CardContent>
                        </Card>
                    ) : (
                        filteredLeads.map((lead) => (
                            <Card key={lead.id}>
                                <CardContent className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h3 className="text-xl font-medium text-stone-800 mb-1">
                                                        {lead.couple_names}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-3 text-sm text-stone-600">
                                                        <span className="flex items-center gap-1">
                                                            <Mail className="w-4 h-4" />
                                                            {lead.email}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Phone className="w-4 h-4" />
                                                            {lead.phone}
                                                        </span>
                                                    </div>
                                                </div>
                                                <span className={`px-3 py-1 rounded-full text-xs ${statusColors[lead.status]}`}>
                                                    {lead.status}
                                                </span>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-2 text-sm text-stone-600 mb-3">
                                                {lead.wedding_date && (
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>Boda: {lead.wedding_date}</span>
                                                    </div>
                                                )}
                                                {lead.city && (
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4" />
                                                        <span>{lead.city}</span>
                                                    </div>
                                                )}
                                            </div>

                                            {lead.message && (
                                                <p className="text-sm text-stone-600 bg-stone-50 p-3 rounded-lg">
                                                    {lead.message}
                                                </p>
                                            )}

                                            <div className="text-xs text-stone-400 mt-3">
                                                Recibido: {new Date(lead.created_date).toLocaleString('es-ES')}
                                            </div>
                                        </div>

                                        <div className="lg:ml-6 space-y-2">
                                            <a
                                                href={`https://wa.me/${lead.phone?.replace(/\D/g, '')}?text=${encodeURIComponent(`Hola ${lead.couple_names}, somos IDLS Baile Bodas 😊\nHemos recibido vuestra solicitud para la boda del ${lead.wedding_date || ''}.\n¿Cuándo os viene bien hablar un momento?`)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full lg:w-48"
                                            >
                                                <Button className="w-full bg-green-600 hover:bg-green-700">
                                                    <MessageCircle className="w-4 h-4 mr-2" />
                                                    WhatsApp
                                                </Button>
                                            </a>
                                            <Select
                                                value={lead.status}
                                                onValueChange={(value) => updateStatus(lead.id, value)}
                                            >
                                                <SelectTrigger className="w-full lg:w-48">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="nuevo">Nuevo</SelectItem>
                                                    <SelectItem value="contactado">Contactado</SelectItem>
                                                    <SelectItem value="en_proceso">En proceso</SelectItem>
                                                    <SelectItem value="convertido">Convertido</SelectItem>
                                                    <SelectItem value="descartado">Descartado</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}