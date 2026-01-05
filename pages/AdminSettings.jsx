import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Save, Globe, Phone, Mail, MapPin, MessageCircle, BookOpen } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import NotionSetupGuide from '@/components/admin/NotionSetupGuide';

export default function AdminSettings() {
    const [settings, setSettings] = useState({
        site_name: 'IDLS Baile Bodas',
        contact_phone: '+34 600 000 000',
        contact_email: 'bodas@idls.es',
        contact_address: 'Madrid, España',
        whatsapp_number: '34600000000',
        whatsapp_enabled: true,
        whatsapp_message: 'Hola, quiero información sobre el baile de boda',
        google_analytics: '',
        google_tag_manager: '',
        meta_pixel: '',
        show_idls_logo: true,
        admin_email: 'bodas@idls.es',
        notifications_enabled: true,
        whatsapp_lead_message: 'Hola {{nombre}}, somos IDLS Baile Bodas 😊\nHemos recibido vuestra solicitud para la boda del {{fecha_boda}}.\n¿Cuándo os viene bien hablar un momento?',
        notion_enabled: false,
        notion_database_id: '',
        notion_token: ''
    });
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        try {
            const allSettings = await base44.entities.SiteSettings?.list().catch(() => []);
            const settingsObj = {};
            allSettings.forEach(setting => {
                let value = setting.setting_value;
                if (setting.setting_type === 'boolean') {
                    value = value === 'true';
                }
                settingsObj[setting.setting_key] = value;
            });
            setSettings(prev => ({ ...prev, ...settingsObj }));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            // Guardar cada ajuste
            for (const [key, value] of Object.entries(settings)) {
                const settingType = typeof value === 'boolean' ? 'boolean' : 'text';
                const settingValue = String(value);
                
                // Buscar si existe
                const existing = await base44.entities.SiteSettings?.filter({ setting_key: key }).catch(() => []);
                
                if (existing && existing.length > 0) {
                    await base44.entities.SiteSettings.update(existing[0].id, {
                        setting_value: settingValue,
                        setting_type: settingType
                    });
                } else {
                    await base44.entities.SiteSettings.create({
                        setting_key: key,
                        setting_value: settingValue,
                        setting_type: settingType,
                        description: key
                    });
                }
            }
            
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
        } catch (error) {
            console.error('Error guardando ajustes:', error);
        } finally {
            setSaving(false);
        }
    };

    return (
        <AdminLayout>
            <div className="p-6 lg:p-8 max-w-4xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-light text-stone-800 mb-2">
                        Ajustes <span className="font-serif italic text-amber-700">Generales</span>
                    </h1>
                    <p className="text-stone-500">Configuración global del sitio web</p>
                </div>

                <div className="space-y-6">
                    {/* Información de contacto */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Información de Contacto</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    <Globe className="w-4 h-4 inline mr-2" />
                                    Nombre del sitio
                                </label>
                                <Input
                                    value={settings.site_name}
                                    onChange={(e) => setSettings({...settings, site_name: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Teléfono
                                </label>
                                <Input
                                    value={settings.contact_phone}
                                    onChange={(e) => setSettings({...settings, contact_phone: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Email
                                </label>
                                <Input
                                    value={settings.contact_email}
                                    onChange={(e) => setSettings({...settings, contact_email: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    <MapPin className="w-4 h-4 inline mr-2" />
                                    Dirección
                                </label>
                                <Input
                                    value={settings.contact_address}
                                    onChange={(e) => setSettings({...settings, contact_address: e.target.value})}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* WhatsApp */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <MessageCircle className="w-5 h-5 inline mr-2" />
                                WhatsApp
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <label className="flex items-center gap-2">
                                <Switch
                                    checked={settings.whatsapp_enabled}
                                    onCheckedChange={(checked) => setSettings({...settings, whatsapp_enabled: checked})}
                                />
                                <span className="text-sm">Activar botón de WhatsApp</span>
                            </label>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Número (sin espacios ni +)
                                </label>
                                <Input
                                    value={settings.whatsapp_number}
                                    onChange={(e) => setSettings({...settings, whatsapp_number: e.target.value})}
                                    placeholder="34600000000"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mensaje predeterminado
                                </label>
                                <Input
                                    value={settings.whatsapp_message}
                                    onChange={(e) => setSettings({...settings, whatsapp_message: e.target.value})}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Analytics */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Integraciones de Marketing</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Google Analytics ID
                                </label>
                                <Input
                                    value={settings.google_analytics}
                                    onChange={(e) => setSettings({...settings, google_analytics: e.target.value})}
                                    placeholder="G-XXXXXXXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Google Tag Manager ID
                                </label>
                                <Input
                                    value={settings.google_tag_manager}
                                    onChange={(e) => setSettings({...settings, google_tag_manager: e.target.value})}
                                    placeholder="GTM-XXXXXXX"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Meta Pixel ID
                                </label>
                                <Input
                                    value={settings.meta_pixel}
                                    onChange={(e) => setSettings({...settings, meta_pixel: e.target.value})}
                                    placeholder="123456789"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Email Notifications */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <Mail className="w-5 h-5 inline mr-2" />
                                Notificaciones por Email
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <label className="flex items-center gap-2">
                                <Switch
                                    checked={settings.notifications_enabled}
                                    onCheckedChange={(checked) => setSettings({...settings, notifications_enabled: checked})}
                                />
                                <span className="text-sm">Activar notificaciones por email</span>
                            </label>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Email receptor (admin)
                                </label>
                                <Input
                                    type="email"
                                    value={settings.admin_email}
                                    onChange={(e) => setSettings({...settings, admin_email: e.target.value})}
                                    placeholder="admin@idls.es"
                                />
                                <p className="text-xs text-stone-500 mt-1">
                                    Recibirás un email cada vez que llegue una nueva solicitud
                                </p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Mensaje WhatsApp para leads
                                </label>
                                <Textarea
                                    value={settings.whatsapp_lead_message}
                                    onChange={(e) => setSettings({...settings, whatsapp_lead_message: e.target.value})}
                                    rows={4}
                                    placeholder="Usa {{nombre}} y {{fecha_boda}} como variables"
                                />
                                <p className="text-xs text-stone-500 mt-1">
                                    Variables disponibles: {'{'}nombre{'}'}, {'{'}fecha_boda{'}'}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Notion Integration */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Integración con Notion (CRM)</CardTitle>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <BookOpen className="w-4 h-4 mr-2" />
                                            Guía de configuración
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle>Conectar Notion con IDLS Baile Bodas</DialogTitle>
                                        </DialogHeader>
                                        <NotionSetupGuide />
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <label className="flex items-center gap-2">
                                <Switch
                                    checked={settings.notion_enabled}
                                    onCheckedChange={(checked) => setSettings({...settings, notion_enabled: checked})}
                                />
                                <span className="text-sm">Activar envío automático a Notion</span>
                            </label>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-sm text-green-800">
                                <strong>✓ Backend functions habilitadas</strong><br />
                                Configura tu base de datos de Notion para sincronizar automáticamente cada lead.
                            </div>
                            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-800 space-y-2">
                                <strong>Configuración de la Base de Datos Notion:</strong>
                                <p>La base de datos debe tener estas propiedades:</p>
                                <ul className="list-disc list-inside ml-2 space-y-1">
                                    <li><strong>Nombre</strong> (Title)</li>
                                    <li><strong>Fecha Boda</strong> (Date)</li>
                                    <li><strong>Ciudad</strong> (Rich text)</li>
                                    <li><strong>Teléfono</strong> (Phone)</li>
                                    <li><strong>Email</strong> (Email)</li>
                                    <li><strong>Mensaje</strong> (Rich text)</li>
                                    <li><strong>Origen</strong> (Select: Web)</li>
                                    <li><strong>Estado</strong> (Select: Nuevo, Contactado, En proceso, Convertido, Descartado)</li>
                                    <li><strong>Fecha Entrada</strong> (Date)</li>
                                </ul>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Notion Database ID
                                </label>
                                <Input
                                    value={settings.notion_database_id}
                                    onChange={(e) => setSettings({...settings, notion_database_id: e.target.value})}
                                    placeholder="abc123..."
                                    disabled={!settings.notion_enabled}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Notion Integration Token
                                </label>
                                <Input
                                    type="password"
                                    value={settings.notion_token}
                                    onChange={(e) => setSettings({...settings, notion_token: e.target.value})}
                                    placeholder="secret_..."
                                    disabled={!settings.notion_enabled}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Branding */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Branding</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <label className="flex items-center gap-2">
                                <Switch
                                    checked={settings.show_idls_logo}
                                    onCheckedChange={(checked) => setSettings({...settings, show_idls_logo: checked})}
                                />
                                <span className="text-sm">Mostrar logo IDLS en footer</span>
                            </label>
                        </CardContent>
                    </Card>

                    {/* Save Button */}
                    <div className="flex gap-3">
                        <Button 
                            onClick={handleSave} 
                            disabled={saving}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            {saving ? 'Guardando...' : 'Guardar Cambios'}
                        </Button>
                        {saved && (
                            <span className="text-green-600 flex items-center">
                                ✓ Guardado correctamente
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}