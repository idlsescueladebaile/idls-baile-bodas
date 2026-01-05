import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Edit2, Trash2, Save, X, Eye, EyeOff } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

export default function AdminFAQs() {
    const [faqs, setFaqs] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFAQs();
    }, []);

    const loadFAQs = async () => {
        try {
            const data = await base44.entities.FAQItem.list('order');
            setFaqs(data);
        } catch (error) {
            console.error('Error:', error);
            setFaqs([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            if (editingItem.id) {
                await base44.entities.FAQItem.update(editingItem.id, editingItem);
            } else {
                await base44.entities.FAQItem.create(editingItem);
            }
            await loadFAQs();
            setEditingItem(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Eliminar esta pregunta?')) return;
        try {
            await base44.entities.FAQItem.delete(id);
            await loadFAQs();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleActive = async (item) => {
        try {
            await base44.entities.FAQItem.update(item.id, { is_active: !item.is_active });
            await loadFAQs();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const newFAQ = () => {
        setEditingItem({
            category: '',
            question: '',
            answer: '',
            order: faqs.length + 1,
            is_active: true
        });
    };

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-light text-stone-800 mb-2">
                            Gestión de <span className="font-serif italic text-amber-700">FAQs</span>
                        </h1>
                        <p className="text-stone-500">Administra las preguntas frecuentes</p>
                    </div>
                    <Button onClick={newFAQ} className="bg-amber-600 hover:bg-amber-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Nueva Pregunta
                    </Button>
                </div>

                {editingItem && (
                    <Card className="mb-8 border-amber-200">
                        <CardHeader className="bg-amber-50">
                            <CardTitle>{editingItem.id ? 'Editar' : 'Nueva'} Pregunta</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Categoría</label>
                                    <Input
                                        value={editingItem.category || ''}
                                        onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                                        placeholder="Antes de empezar, Durante el proceso..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Orden *</label>
                                    <Input
                                        type="number"
                                        value={editingItem.order}
                                        onChange={(e) => setEditingItem({...editingItem, order: parseInt(e.target.value)})}
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium mb-2">Pregunta *</label>
                                <Input
                                    value={editingItem.question}
                                    onChange={(e) => setEditingItem({...editingItem, question: e.target.value})}
                                    placeholder="¿Y si no sabemos bailar nada de nada?"
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block text-sm font-medium mb-2">Respuesta *</label>
                                <Textarea
                                    value={editingItem.answer}
                                    onChange={(e) => setEditingItem({...editingItem, answer: e.target.value})}
                                    placeholder="Escribe la respuesta..."
                                    rows={4}
                                />
                            </div>

                            <div className="mt-6">
                                <label className="flex items-center gap-2">
                                    <Switch
                                        checked={editingItem.is_active}
                                        onCheckedChange={(checked) => setEditingItem({...editingItem, is_active: checked})}
                                    />
                                    <span className="text-sm">Visible en FAQ</span>
                                </label>
                            </div>

                            <div className="flex gap-3 mt-6">
                                <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                                    <Save className="w-4 h-4 mr-2" />
                                    Guardar
                                </Button>
                                <Button onClick={() => setEditingItem(null)} variant="outline">
                                    <X className="w-4 h-4 mr-2" />
                                    Cancelar
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="grid gap-4">
                    {loading ? (
                        <div className="text-center py-12">Cargando...</div>
                    ) : faqs.length === 0 ? (
                        <Card>
                            <CardContent className="text-center py-12 text-stone-400">
                                No hay preguntas creadas
                            </CardContent>
                        </Card>
                    ) : (
                        faqs.map((item) => (
                            <Card key={item.id} className={!item.is_active ? 'opacity-50' : ''}>
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            {item.category && (
                                                <span className="inline-block px-2 py-1 bg-stone-100 text-stone-600 text-xs rounded mb-2">
                                                    {item.category}
                                                </span>
                                            )}
                                            <h3 className="text-lg font-medium text-stone-800 mb-2">
                                                {item.question}
                                            </h3>
                                            <p className="text-stone-600">{item.answer}</p>
                                        </div>
                                        <div className="flex gap-2 ml-4">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => toggleActive(item)}
                                            >
                                                {item.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                onClick={() => setEditingItem(item)}
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="text-red-600"
                                                onClick={() => handleDelete(item.id)}
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
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