import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
    Users, UserPlus, Shield, User as UserIcon, Mail, Calendar,
    Search, Filter, AlertCircle, CheckCircle2
} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Alert,
    AlertDescription,
} from "@/components/ui/alert";

export default function AdminUsers() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [showInviteDialog, setShowInviteDialog] = useState(false);

    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        filterUsers();
    }, [users, searchTerm, roleFilter]);

    const loadUsers = async () => {
        try {
            const usersList = await base44.asServiceRole.entities.User.list();
            setUsers(usersList);
        } catch (error) {
            console.error('Error cargando usuarios:', error);
        } finally {
            setLoading(false);
        }
    };

    const filterUsers = () => {
        let filtered = [...users];

        if (searchTerm) {
            filtered = filtered.filter(user =>
                user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (roleFilter !== 'all') {
            filtered = filtered.filter(user => user.role === roleFilter);
        }

        setFilteredUsers(filtered);
    };

    const updateUserRole = async (userId, newRole) => {
        try {
            await base44.asServiceRole.entities.User.update(userId, { role: newRole });
            await loadUsers();
        } catch (error) {
            console.error('Error actualizando rol:', error);
            alert('Error al actualizar el rol del usuario');
        }
    };

    const stats = {
        total: users.length,
        admins: users.filter(u => u.role === 'admin').length,
        users: users.filter(u => u.role === 'user').length,
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
                </div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="p-6 space-y-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-stone-800">Gestión de Usuarios</h1>
                        <p className="text-stone-500 mt-1">
                            Control de acceso y permisos del panel de administración
                        </p>
                    </div>
                    <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
                        <DialogTrigger asChild>
                            <Button className="bg-amber-600 hover:bg-amber-700">
                                <UserPlus className="w-4 h-4 mr-2" />
                                Invitar Usuario
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Invitar Nuevo Usuario</DialogTitle>
                                <DialogDescription>
                                    Los usuarios deben ser invitados desde el panel principal de Base44.
                                </DialogDescription>
                            </DialogHeader>
                            <Alert>
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription>
                                    <strong>Para invitar usuarios:</strong>
                                    <ol className="list-decimal list-inside mt-2 space-y-1 text-sm">
                                        <li>Ve al dashboard principal de Base44</li>
                                        <li>Accede a la sección "Usuarios" o "Team"</li>
                                        <li>Haz clic en "Invitar usuario"</li>
                                        <li>Introduce el email y selecciona el rol (admin/user)</li>
                                        <li>El usuario recibirá un email para completar el registro</li>
                                    </ol>
                                    <p className="mt-3 text-xs text-stone-500">
                                        Una vez invitado, aparecerá automáticamente en esta lista.
                                    </p>
                                </AlertDescription>
                            </Alert>
                            <Button onClick={() => setShowInviteDialog(false)}>
                                Entendido
                            </Button>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-stone-500">Total Usuarios</p>
                                    <p className="text-3xl font-bold text-stone-800">{stats.total}</p>
                                </div>
                                <Users className="w-10 h-10 text-stone-300" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-stone-500">Administradores</p>
                                    <p className="text-3xl font-bold text-amber-600">{stats.admins}</p>
                                </div>
                                <Shield className="w-10 h-10 text-amber-200" />
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-stone-500">Usuarios Estándar</p>
                                    <p className="text-3xl font-bold text-blue-600">{stats.users}</p>
                                </div>
                                <UserIcon className="w-10 h-10 text-blue-200" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-stone-400" />
                                <Input
                                    placeholder="Buscar por nombre o email..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Filter className="w-4 h-4 text-stone-400" />
                                <Select value={roleFilter} onValueChange={setRoleFilter}>
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Filtrar por rol" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Todos los roles</SelectItem>
                                        <SelectItem value="admin">Administradores</SelectItem>
                                        <SelectItem value="user">Usuarios</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Users List */}
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Usuarios Registrados ({filteredUsers.length})
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {filteredUsers.length === 0 ? (
                            <div className="text-center py-12">
                                <Users className="w-16 h-16 text-stone-300 mx-auto mb-4" />
                                <p className="text-stone-500">
                                    {searchTerm || roleFilter !== 'all'
                                        ? 'No se encontraron usuarios con esos filtros'
                                        : 'No hay usuarios registrados'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredUsers.map((user) => (
                                    <div
                                        key={user.id}
                                        className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-stone-50 rounded-lg border border-stone-200 hover:border-amber-300 transition-colors"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold text-lg flex-shrink-0">
                                                {user.full_name?.charAt(0) || 'U'}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-stone-800 truncate">
                                                    {user.full_name || 'Sin nombre'}
                                                </h3>
                                                <div className="flex items-center gap-2 mt-1 text-sm text-stone-500">
                                                    <Mail className="w-3 h-3" />
                                                    {user.email}
                                                </div>
                                                <div className="flex items-center gap-2 mt-1 text-xs text-stone-400">
                                                    <Calendar className="w-3 h-3" />
                                                    Registrado: {new Date(user.created_date).toLocaleDateString('es-ES')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <Select
                                                value={user.role}
                                                onValueChange={(newRole) => updateUserRole(user.id, newRole)}
                                            >
                                                <SelectTrigger className="w-40">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="admin">
                                                        <div className="flex items-center gap-2">
                                                            <Shield className="w-4 h-4 text-amber-600" />
                                                            Administrador
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="user">
                                                        <div className="flex items-center gap-2">
                                                            <UserIcon className="w-4 h-4 text-blue-600" />
                                                            Usuario
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>

                                            <Badge
                                                variant={user.role === 'admin' ? 'default' : 'secondary'}
                                                className={
                                                    user.role === 'admin'
                                                        ? 'bg-amber-100 text-amber-700 border-amber-300'
                                                        : 'bg-blue-100 text-blue-700 border-blue-300'
                                                }
                                            >
                                                {user.role === 'admin' ? (
                                                    <Shield className="w-3 h-3 mr-1" />
                                                ) : (
                                                    <UserIcon className="w-3 h-3 mr-1" />
                                                )}
                                                {user.role === 'admin' ? 'Admin' : 'Usuario'}
                                            </Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Security Info */}
                <Alert>
                    <CheckCircle2 className="h-4 w-4" />
                    <AlertDescription>
                        <strong>Seguridad implementada:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                            <li>Login requerido para acceder al panel de administración</li>
                            <li>Rol "admin" necesario para ver el panel completo</li>
                            <li>Usuarios sin permisos son redirigidos automáticamente</li>
                            <li>Contraseñas gestionadas de forma segura por Base44</li>
                            <li>Sesiones con expiración automática</li>
                        </ul>
                    </AlertDescription>
                </Alert>
            </div>
        </AdminLayout>
    );
}