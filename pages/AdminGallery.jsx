import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit2, Trash2, Save, X, Upload, Eye, EyeOff } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

export default function AdminGallery() {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadGallery();
    }, []);

    const loadGallery = async () => {
        try {
            const data = await base44.entities.GalleryItem.list('order');
            setItems(data);
        } catch (error) {
            console.error('Error:', error);
            setItems([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        try {
            if (editingItem.id) {
                await base44.entities.GalleryItem.update(editingItem.id, editingItem);
            } else {
                await base44.entities.GalleryItem.create(editingItem);
            }
            await loadGallery();
            setEditingItem(null);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('¿Eliminar esta imagen?')) return;
        try {
            await base44.entities.GalleryItem.delete(id);
            await loadGallery();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleActive = async (item) => {
        try {
            await base44.entities.GalleryItem.update(item.id, { is_active: !item.is_active });
            await loadGallery();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const newItem = () => {
        setEditingItem({
            image_url: '',
            alt_text: '',
            category: '',
            order: items.length + 1,
            is_active: true
        });
    };

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-light text-stone-800 mb-2">
                            Gestión de <span className="font-serif italic text-amber-700">Galería</span>
                        </h1>
                        <p className="text-stone-500">Administra las imágenes de la galería</p>
                    </div>
                    <Button onClick={newItem} className="bg-amber-600 hover:bg-amber-700">
                        <Plus className="w-4 h-4 mr-2" />
                        Nueva Imagen
                    </Button>
                </div>

                {editingItem && (
                    <Card className="mb-8 border-amber-200">
                        <CardHeader className="bg-amber-50">
                            <CardTitle>{editingItem.id ? 'Editar' : 'Nueva'} Imagen</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium mb-2">URL Imagen *</label>
                                    <Input
                                        value={editingItem.image_url}
                                        onChange={(e) => setEditingItem({...editingItem, image_url: e.target.value})}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">Texto Alt (SEO) *</label>
                                    <Input
                                        value={editingItem.alt_text}
                                        onChange={(e) => setEditingItem({...editingItem, alt_text: e.target.value})}
                                        placeholder="Descripción de la imagen"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Categoría</label>
                                    <Input
                                        value={editingItem.category || ''}
                                        onChange={(e) => setEditingItem({...editingItem, category: e.target.value})}
                                        placeholder="Baile clásico, Vals, etc."
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

                            {editingItem.image_url && (
                                <div className="mt-4">
                                    <label className="block text-sm font-medium mb-2">Preview</label>
                                    <img 
                                        src={editingItem.image_url} 
                                        alt="Preview" 
                                        className="w-full max-w-md h-48 object-cover rounded-lg"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}

                            <div className="mt-6">
                                <label className="flex items-center gap-2">
                                    <Switch
                                        checked={editingItem.is_active}
                                        onCheckedChange={(checked) => setEditingItem({...editingItem, is_active: checked})}
                                    />
                                    <span className="text-sm">Visible en galería</span>
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {loading ? (
                        <div className="col-span-full text-center py-12">Cargando...</div>
                    ) : items.length === 0 ? (
                        <Card className="col-span-full">
                            <CardContent className="text-center py-12 text-stone-400">
                                No hay imágenes en la galería
                            </CardContent>
                        </Card>
                    ) : (
                        items.map((item) => (
                            <Card key={item.id} className={!item.is_active ? 'opacity-50' : ''}>
                                <CardContent className="p-4">
                                    <img 
                                        src={item.image_url} 
                                        alt={item.alt_text}
                                        className="w-full h-48 object-cover rounded-lg mb-3"
                                    />
                                    <p className="text-sm text-stone-600 mb-2 truncate">{item.alt_text}</p>
                                    {item.category && (
                                        <span className="inline-block px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded mb-3">
                                            {item.category}
                                        </span>
                                    )}
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="flex-1"
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
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}