import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Users, CheckCircle2, Key, AlertCircle } from 'lucide-react';

export default function AuthDocumentation() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Shield className="w-6 h-6 text-amber-600" />
                        Sistema de Autenticación y Permisos - IDLS
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Overview */}
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-semibold text-green-900 mb-2">
                                    ✅ Sistema de Autenticación Implementado
                                </h3>
                                <p className="text-sm text-green-800">
                                    El panel de administración está completamente protegido con autenticación y 
                                    control de roles mediante Base44. No se requiere configuración adicional.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Características */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Lock className="w-5 h-5 text-amber-600" />
                            Características de Seguridad
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">🔐 Autenticación Segura</h4>
                                <ul className="text-sm text-stone-600 space-y-1">
                                    <li>• Login con email y contraseña</li>
                                    <li>• Contraseñas hasheadas (bcrypt)</li>
                                    <li>• Nunca se almacenan en texto plano</li>
                                    <li>• Sesiones con tokens JWT</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">👥 Control de Roles</h4>
                                <ul className="text-sm text-stone-600 space-y-1">
                                    <li>• Rol "admin": acceso completo</li>
                                    <li>• Rol "user": acceso limitado</li>
                                    <li>• Verificación en cada página</li>
                                    <li>• Redirección automática si no autorizado</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">⏱️ Gestión de Sesiones</h4>
                                <ul className="text-sm text-stone-600 space-y-1">
                                    <li>• Sesión persistente (recordar usuario)</li>
                                    <li>• Expiración automática de tokens</li>
                                    <li>• Logout seguro en cualquier momento</li>
                                    <li>• Protección contra acceso directo por URL</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">🛡️ Protecciones Adicionales</h4>
                                <ul className="text-sm text-stone-600 space-y-1">
                                    <li>• CSRF protection</li>
                                    <li>• Rate limiting en login</li>
                                    <li>• Auditoría de accesos</li>
                                    <li>• Recuperación de contraseña</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Roles y Permisos */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-amber-600" />
                            Roles y Permisos Definidos
                        </h3>
                        <div className="space-y-3">
                            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Shield className="w-5 h-5 text-amber-600" />
                                    <h4 className="font-semibold text-amber-900">Administrador (admin)</h4>
                                </div>
                                <p className="text-sm text-amber-800 mb-2">Acceso completo al sistema:</p>
                                <ul className="text-sm text-amber-700 space-y-1 ml-4">
                                    <li>✓ Ver y gestionar todos los leads</li>
                                    <li>✓ Editar contenido de todas las páginas</li>
                                    <li>✓ Gestionar packs, testimonios, galería y FAQs</li>
                                    <li>✓ Configurar integraciones (Notion, email)</li>
                                    <li>✓ Acceder a configuración del sistema</li>
                                    <li>✓ Gestionar usuarios y permisos</li>
                                    <li>✓ Ver estadísticas y métricas</li>
                                </ul>
                            </div>

                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <Users className="w-5 h-5 text-blue-600" />
                                    <h4 className="font-semibold text-blue-900">Usuario Estándar (user)</h4>
                                </div>
                                <p className="text-sm text-blue-800 mb-2">Acceso limitado (estructura preparada para futuro):</p>
                                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                                    <li>✓ Ver leads (solo lectura)</li>
                                    <li>✓ Editar contenidos básicos</li>
                                    <li>✗ Sin acceso a configuración</li>
                                    <li>✗ Sin acceso a integraciones</li>
                                    <li>✗ Sin gestión de usuarios</li>
                                </ul>
                                <p className="text-xs text-blue-600 mt-2 italic">
                                    Nota: Este rol está preparado pero no activo. Se puede activar en el futuro.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cómo Funciona */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Key className="w-5 h-5 text-amber-600" />
                            Cómo Funciona el Sistema
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">
                                    1
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-800 mb-1">Usuario intenta acceder al panel</h4>
                                    <p className="text-sm text-stone-600">
                                        Cuando alguien visita cualquier página /Admin*, el sistema verifica automáticamente 
                                        si hay una sesión activa.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">
                                    2
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-800 mb-1">Verificación de autenticación</h4>
                                    <p className="text-sm text-stone-600">
                                        Si no hay sesión activa, se redirige automáticamente a la página de login de Base44. 
                                        Después del login exitoso, el usuario vuelve a la página que intentó visitar.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold flex-shrink-0">
                                    3
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-800 mb-1">Verificación de permisos</h4>
                                    <p className="text-sm text-stone-600">
                                        Si el usuario tiene sesión pero no es "admin", se le redirige a la home. 
                                        Solo usuarios con rol "admin" pueden acceder al panel completo.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold flex-shrink-0">
                                    ✓
                                </div>
                                <div>
                                    <h4 className="font-medium text-stone-800 mb-1">Acceso concedido</h4>
                                    <p className="text-sm text-stone-600">
                                        Si todo es correcto, el administrador accede al panel y puede realizar todas 
                                        las operaciones según sus permisos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gestión de Usuarios */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-amber-600" />
                            Gestión de Usuarios
                        </h3>
                        <div className="space-y-3">
                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">📧 Invitar Nuevos Usuarios</h4>
                                <p className="text-sm text-stone-600 mb-2">
                                    Los usuarios deben ser invitados desde el dashboard principal de Base44:
                                </p>
                                <ol className="text-sm text-stone-600 space-y-1 list-decimal list-inside ml-2">
                                    <li>Accede al dashboard de Base44</li>
                                    <li>Ve a la sección "Team" o "Usuarios"</li>
                                    <li>Haz clic en "Invite user" o "Invitar usuario"</li>
                                    <li>Introduce el email y selecciona el rol (admin o user)</li>
                                    <li>El usuario recibirá un email para crear su contraseña</li>
                                </ol>
                            </div>

                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">🔄 Cambiar Roles</h4>
                                <p className="text-sm text-stone-600">
                                    Desde la página "Usuarios" en el panel admin, puedes cambiar el rol de cualquier 
                                    usuario entre "admin" y "user" usando el selector desplegable.
                                </p>
                            </div>

                            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                                <h4 className="font-medium text-stone-800 mb-2">🔑 Restablecer Contraseñas</h4>
                                <p className="text-sm text-stone-600">
                                    Los usuarios pueden restablecer su contraseña desde la pantalla de login usando 
                                    la opción "Forgot password" / "Olvidé mi contraseña".
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Mejores Prácticas */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                            Mejores Prácticas de Seguridad
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                                <strong className="text-amber-900">✓ Contraseñas Fuertes</strong>
                                <p className="text-amber-700 mt-1">
                                    Usa contraseñas de al menos 12 caracteres con letras, números y símbolos.
                                </p>
                            </div>
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                                <strong className="text-amber-900">✓ Rol Mínimo Necesario</strong>
                                <p className="text-amber-700 mt-1">
                                    Asigna solo el rol necesario. No todos necesitan ser administradores.
                                </p>
                            </div>
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                                <strong className="text-amber-900">✓ Cerrar Sesión</strong>
                                <p className="text-amber-700 mt-1">
                                    Cierra sesión cuando termines, especialmente en ordenadores compartidos.
                                </p>
                            </div>
                            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                                <strong className="text-amber-900">✓ Revisar Accesos</strong>
                                <p className="text-amber-700 mt-1">
                                    Revisa periódicamente la lista de usuarios y elimina accesos innecesarios.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Estado Actual */}
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="font-semibold text-green-900 mb-2">
                            ✅ Estado Actual del Sistema
                        </h3>
                        <ul className="text-sm text-green-800 space-y-1">
                            <li>✓ Sistema de autenticación completamente funcional</li>
                            <li>✓ Control de roles implementado (admin/user)</li>
                            <li>✓ Panel de administración protegido</li>
                            <li>✓ Página de gestión de usuarios activa</li>
                            <li>✓ Redirecciones automáticas configuradas</li>
                            <li>✓ Sesiones seguras con expiración</li>
                            <li>✓ Sistema preparado para escalabilidad futura</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}