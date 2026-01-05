
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Phone, Settings } from 'lucide-react';
import { Button } from "@/components/ui/button";
import WhatsAppButton from '@/components/shared/WhatsAppButton';

export default function Layout({ children, currentPageName }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'El Baile', page: 'ElBaile' },
        { name: 'Cómo Trabajamos', page: 'ComoTrabajamos' },
        { name: 'Packs', page: 'Packs' },
        { name: 'Opiniones', page: 'Opiniones' },
        { name: 'Galería', page: 'Galeria' },
        { name: 'FAQ', page: 'FAQ' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        checkAdmin();
    }, []);

    const checkAdmin = async () => {
        try {
            const user = await base44.auth.me();
            setIsAdmin(user.role === 'admin');
        } catch (error) {
            setIsAdmin(false);
        }
    };

    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

    const isHomePage = currentPageName === 'Home';
    const isGraciasPage = currentPageName === 'Gracias';

    // Hide header on Gracias page
    if (isGraciasPage) {
        return (
            <div className="min-h-screen">
                {children}
                <WhatsAppButton />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Header */}
            <header 
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                    isScrolled || !isHomePage
                        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link 
                            to={createPageUrl('Home')}
                            className="flex items-center gap-2"
                        >
                            <Heart className={`w-6 h-6 transition-colors ${
                                isScrolled || !isHomePage ? 'text-amber-500' : 'text-white'
                            }`} />
                            <span className={`text-xl font-light tracking-wide transition-colors ${
                                isScrolled || !isHomePage ? 'text-stone-800' : 'text-white'
                            }`}>
                                IDLS <span className="font-serif italic">Baile Bodas</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.page}
                                    to={createPageUrl(item.page)}
                                    className={`px-4 py-2 rounded-full text-sm transition-all hover:scale-105 ${
                                        currentPageName === item.page
                                            ? isScrolled || !isHomePage
                                                ? 'bg-amber-100 text-amber-700'
                                                : 'bg-white/20 text-white'
                                            : isScrolled || !isHomePage
                                                ? 'text-stone-600 hover:text-amber-600'
                                                : 'text-white/80 hover:text-white'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            {isAdmin && (
                                <Link to={createPageUrl('Admin')}>
                                    <Button 
                                        variant="outline"
                                        className={`rounded-full px-4 transition-all ${
                                            isScrolled || !isHomePage
                                                ? 'border-stone-300 text-stone-700 hover:bg-stone-50'
                                                : 'border-white/30 text-white hover:bg-white/10'
                                        }`}
                                    >
                                        <Settings className="w-4 h-4" />
                                    </Button>
                                </Link>
                            )}
                            <Link to={createPageUrl('Contacto')}>
                                <Button 
                                    className={`rounded-full px-6 transition-all ${
                                        isScrolled || !isHomePage
                                            ? 'bg-amber-600 hover:bg-amber-700 text-white'
                                            : 'bg-white text-amber-700 hover:bg-amber-50'
                                    }`}
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Contactar
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-full transition-colors ${
                                isScrolled || !isHomePage 
                                    ? 'text-stone-800 hover:bg-stone-100' 
                                    : 'text-white hover:bg-white/10'
                            }`}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white border-t border-stone-100 overflow-hidden"
                        >
                            <nav className="max-w-7xl mx-auto px-4 py-6 space-y-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.page}
                                        to={createPageUrl(item.page)}
                                        className={`block px-4 py-3 rounded-xl transition-colors ${
                                            currentPageName === item.page
                                                ? 'bg-amber-50 text-amber-700'
                                                : 'text-stone-600 hover:bg-stone-50'
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                {isAdmin && (
                                    <Link
                                        to={createPageUrl('Admin')}
                                        className="block px-4 py-3 rounded-xl text-stone-600 hover:bg-stone-50 border-t border-stone-100 mt-2 pt-4"
                                    >
                                        <Settings className="w-4 h-4 inline mr-2" />
                                        Panel Admin
                                    </Link>
                                )}
                                <Link
                                    to={createPageUrl('Contacto')}
                                    className="block"
                                >
                                    <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 rounded-xl py-6">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Contactar
                                    </Button>
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Main Content */}
            <main className={isHomePage ? '' : 'pt-20'}>
                {children}
            </main>

            {/* WhatsApp Button (not on Home, as it's already included there) */}
            {!isHomePage && <WhatsAppButton />}

            {/* Footer */}
            <footer className="bg-stone-900 text-white">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Heart className="w-6 h-6 text-amber-400" />
                                <span className="text-xl font-light">
                                    IDLS <span className="font-serif italic">Baile Bodas</span>
                                </span>
                            </div>
                            <p className="text-stone-400 leading-relaxed mb-6">
                                Creamos el baile perfecto para vuestra boda. 
                                Sin estrés, sin complicaciones, solo magia.
                            </p>
                            <p className="text-sm text-stone-500">
                                Servicio ofrecido por IDLS Escuela de Baile
                                <br />
                                Más de 20 años de experiencia
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h3 className="font-medium mb-4">Navegación</h3>
                            <div className="space-y-2">
                                {navItems.slice(0, 4).map((item) => (
                                    <Link
                                        key={item.page}
                                        to={createPageUrl(item.page)}
                                        className="block text-stone-400 hover:text-amber-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="font-medium mb-4">Contacto</h3>
                            <div className="space-y-2 text-stone-400">
                                <p>Madrid, España</p>
                                <p>+34 600 000 000</p>
                                <p>bodas@idls.es</p>
                            </div>
                            <Link to={createPageUrl('Contacto')}>
                                <Button 
                                    className="mt-6 bg-amber-600 hover:bg-amber-700 rounded-full"
                                >
                                    Solicitar información
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-stone-500 text-sm">
                            © 2024 IDLS Baile Bodas. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6 text-sm text-stone-500">
                            <Link to={createPageUrl('PoliticaPrivacidad')} className="hover:text-amber-400 transition-colors">
                                Política de privacidad
                            </Link>
                            <Link to={createPageUrl('AvisoLegal')} className="hover:text-amber-400 transition-colors">
                                Aviso legal
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
