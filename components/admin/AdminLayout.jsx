import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { 
    LayoutDashboard, FileText, Box, Star, Image, HelpCircle, 
    Users, Settings, FileCheck, LogOut, Menu, X, Heart
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function AdminLayout({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            const currentUser = await base44.auth.me();
            if (currentUser.role !== 'admin') {
                window.location.href = '/';
                return;
            }
            setUser(currentUser);
        } catch (error) {
            base44.auth.redirectToLogin();
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        base44.auth.logout('/');
    };

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', page: 'Admin' },
        { icon: FileText, label: 'Páginas', page: 'AdminPages' },
        { icon: Box, label: 'Packs', page: 'AdminPacks' },
        { icon: Star, label: 'Testimonios', page: 'AdminTestimonials' },
        { icon: Image, label: 'Galería', page: 'AdminGallery' },
        { icon: HelpCircle, label: 'FAQs', page: 'AdminFAQs' },
        { icon: Users, label: 'Leads', page: 'AdminLeads' },
        { icon: Users, label: 'Usuarios', page: 'AdminUsers' },
        { icon: FileCheck, label: 'SEO', page: 'AdminSEO' },
        { icon: Settings, label: 'Ajustes', page: 'AdminSettings' },
    ];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-stone-50 flex">
            {/* Sidebar Desktop */}
            <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-stone-900 text-white">
                <div className="p-6 border-b border-stone-800">
                    <Link to={createPageUrl('Admin')} className="flex items-center gap-2">
                        <Heart className="w-6 h-6 text-amber-500" />
                        <div>
                            <div className="font-semibold">IDLS Admin</div>
                            <div className="text-xs text-stone-400">Panel de control</div>
                        </div>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {menuItems.map((item) => {
                        const isActive = location.pathname.includes(item.page);
                        return (
                            <Link
                                key={item.page}
                                to={createPageUrl(item.page)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                    isActive
                                        ? 'bg-amber-600 text-white'
                                        : 'text-stone-300 hover:bg-stone-800 hover:text-white'
                                }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-stone-800">
                    <div className="flex items-center gap-3 px-4 py-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-amber-600 flex items-center justify-center">
                            <span className="text-sm font-medium">
                                {user?.full_name?.charAt(0) || 'A'}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium truncate">{user?.full_name}</div>
                            <div className="text-xs text-stone-400">Administrador</div>
                        </div>
                    </div>
                    <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className="w-full justify-start text-stone-400 hover:text-white hover:bg-stone-800"
                    >
                        <LogOut className="w-4 h-4 mr-2" />
                        Cerrar sesión
                    </Button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-stone-200 z-50">
                <div className="flex items-center justify-between px-4 h-16">
                    <Link to={createPageUrl('Admin')} className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-amber-500" />
                        <span className="font-semibold">IDLS Admin</span>
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 bg-white border-b border-stone-200 max-h-[calc(100vh-4rem)] overflow-y-auto">
                        <nav className="p-4 space-y-1">
                            {menuItems.map((item) => {
                                const isActive = location.pathname.includes(item.page);
                                return (
                                    <Link
                                        key={item.page}
                                        to={createPageUrl(item.page)}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                                            isActive
                                                ? 'bg-amber-50 text-amber-700'
                                                : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                    >
                                        <item.icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </Link>
                                );
                            })}
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-3 text-stone-600 hover:bg-stone-50 rounded-lg"
                            >
                                <LogOut className="w-5 h-5" />
                                <span>Cerrar sesión</span>
                            </button>
                        </nav>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <main className="flex-1 lg:ml-0 mt-16 lg:mt-0">
                {children}
            </main>
        </div>
    );
}