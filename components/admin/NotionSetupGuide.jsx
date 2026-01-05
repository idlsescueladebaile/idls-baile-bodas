import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ExternalLink, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function NotionSetupGuide() {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Guía: Conectar Notion con IDLS Baile Bodas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Paso 1 */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                1
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Crear una Integración en Notion</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>Ve a <a href="https://www.notion.so/my-integrations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                                        notion.so/my-integrations <ExternalLink className="w-3 h-3" />
                                    </a></li>
                                    <li>Haz clic en <strong>"+ New integration"</strong></li>
                                    <li>Nombre: <code className="bg-stone-100 px-2 py-0.5 rounded">IDLS Baile Bodas</code></li>
                                    <li>Workspace: Selecciona tu workspace</li>
                                    <li>Tipo: <strong>Internal Integration</strong></li>
                                    <li>Capabilities: Deja <strong>"Read content", "Update content", "Insert content"</strong> activados</li>
                                    <li>Haz clic en <strong>"Submit"</strong></li>
                                    <li>Copia el <strong>"Internal Integration Token"</strong> (empieza con <code>secret_...</code>)</li>
                                </ol>
                                <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
                                    <strong>⚠️ Importante:</strong> Guarda este token en un lugar seguro. Lo necesitarás en el paso 4.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 2 */}
                    <div className="space-y-3 pt-6 border-t">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                2
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Crear la Base de Datos en Notion</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>Abre Notion y crea una nueva página</li>
                                    <li>Nombra la página: <code className="bg-stone-100 px-2 py-0.5 rounded">Leads – IDLS Baile Bodas</code></li>
                                    <li>Escribe <code>/database</code> y selecciona <strong>"Database - Inline"</strong></li>
                                    <li>Configura las siguientes propiedades (columnas):</li>
                                </ol>
                                
                                <div className="mt-4 space-y-2">
                                    <table className="w-full text-sm border rounded-lg overflow-hidden">
                                        <thead className="bg-stone-100">
                                            <tr>
                                                <th className="text-left p-2 border-b">Nombre Propiedad</th>
                                                <th className="text-left p-2 border-b">Tipo</th>
                                                <th className="text-left p-2 border-b">Configuración</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Nombre</strong></td>
                                                <td className="p-2 border-b">Title</td>
                                                <td className="p-2 border-b text-stone-500">Por defecto</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Fecha Boda</strong></td>
                                                <td className="p-2 border-b">Date</td>
                                                <td className="p-2 border-b text-stone-500">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Ciudad</strong></td>
                                                <td className="p-2 border-b">Rich text</td>
                                                <td className="p-2 border-b text-stone-500">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Teléfono</strong></td>
                                                <td className="p-2 border-b">Phone</td>
                                                <td className="p-2 border-b text-stone-500">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Email</strong></td>
                                                <td className="p-2 border-b">Email</td>
                                                <td className="p-2 border-b text-stone-500">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Mensaje</strong></td>
                                                <td className="p-2 border-b">Rich text</td>
                                                <td className="p-2 border-b text-stone-500">-</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Origen</strong></td>
                                                <td className="p-2 border-b">Select</td>
                                                <td className="p-2 border-b text-stone-500">Añadir opción: "Web"</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 border-b"><strong>Estado</strong></td>
                                                <td className="p-2 border-b">Select</td>
                                                <td className="p-2 border-b text-stone-500">Opciones: Nuevo, Contactado, En proceso, Convertido, Descartado</td>
                                            </tr>
                                            <tr>
                                                <td className="p-2"><strong>Fecha Entrada</strong></td>
                                                <td className="p-2">Date</td>
                                                <td className="p-2 text-stone-500">-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                                    <strong>💡 Tip:</strong> Los nombres de las propiedades deben ser exactos. Respeta mayúsculas y tildes.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 3 */}
                    <div className="space-y-3 pt-6 border-t">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                3
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Compartir la Base de Datos con la Integración</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>En la página de la base de datos, haz clic en los <strong>tres puntos (···)</strong> arriba a la derecha</li>
                                    <li>Selecciona <strong>"Add connections"</strong></li>
                                    <li>Busca y selecciona <strong>"IDLS Baile Bodas"</strong> (tu integración)</li>
                                    <li>Haz clic en <strong>"Confirm"</strong></li>
                                </ol>
                                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-800">
                                    <strong>⚠️ Crítico:</strong> Si no haces este paso, la integración no podrá acceder a la base de datos.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 4 */}
                    <div className="space-y-3 pt-6 border-t">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                4
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Obtener el Database ID</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>En tu base de datos de Notion, copia la URL del navegador</li>
                                    <li>La URL tiene este formato:</li>
                                </ol>
                                <div className="mt-2 p-3 bg-stone-100 rounded-lg font-mono text-xs break-all">
                                    https://www.notion.so/<strong className="bg-yellow-200">a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6</strong>?v=...
                                </div>
                                <p className="text-sm text-stone-600 mt-2">
                                    El <strong>Database ID</strong> es la parte destacada (32 caracteres alfanuméricos).
                                </p>
                                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                                    <strong>✓ Ejemplo:</strong> Si tu URL es <code className="text-xs">notion.so/abc123def456?v=xyz</code>, el Database ID es <code className="text-xs">abc123def456</code>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paso 5 */}
                    <div className="space-y-3 pt-6 border-t">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                5
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Configurar en el Panel de Admin</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>Ve a <strong>Admin → Ajustes</strong> en esta web</li>
                                    <li>Baja hasta la sección <strong>"Integración con Notion (CRM)"</strong></li>
                                    <li>Activa el switch <strong>"Activar envío automático a Notion"</strong></li>
                                    <li>Pega el <strong>Database ID</strong> (del paso 4)</li>
                                    <li>Pega el <strong>Integration Token</strong> (del paso 1, empieza con <code>secret_</code>)</li>
                                    <li>Haz clic en <strong>"Guardar Cambios"</strong></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Prueba */}
                    <div className="space-y-3 pt-6 border-t">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                ✓
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg mb-2">Probar la Integración</h3>
                                <ol className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                                    <li>Ve a tu página de <strong>Contacto</strong> en la web pública</li>
                                    <li>Rellena y envía el formulario de prueba</li>
                                    <li>Verifica que aparezca en:
                                        <ul className="list-disc list-inside ml-6 mt-1">
                                            <li>Panel Admin → Leads</li>
                                            <li>Tu bandeja de email</li>
                                            <li>Tu base de datos de Notion</li>
                                        </ul>
                                    </li>
                                </ol>
                                <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                                    <strong>🎉 ¡Listo!</strong> Cada nueva solicitud se sincronizará automáticamente con Notion.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div className="space-y-3 pt-6 border-t">
                        <h3 className="font-semibold text-lg mb-3">🔧 Solución de Problemas</h3>
                        <div className="space-y-3 text-sm">
                            <div className="p-3 bg-stone-50 rounded-lg">
                                <strong className="text-red-600">Error: "Configuración incompleta"</strong>
                                <p className="text-stone-600 mt-1">Verifica que hayas introducido tanto el Database ID como el Token.</p>
                            </div>
                            <div className="p-3 bg-stone-50 rounded-lg">
                                <strong className="text-red-600">Error: "Database not found"</strong>
                                <p className="text-stone-600 mt-1">Asegúrate de haber compartido la base de datos con la integración (Paso 3).</p>
                            </div>
                            <div className="p-3 bg-stone-50 rounded-lg">
                                <strong className="text-red-600">Error: "Invalid properties"</strong>
                                <p className="text-stone-600 mt-1">Revisa que los nombres de las propiedades sean exactos (mayúsculas, tildes).</p>
                            </div>
                            <div className="p-3 bg-stone-50 rounded-lg">
                                <strong className="text-red-600">No llega nada a Notion</strong>
                                <p className="text-stone-600 mt-1">Verifica que el switch de Notion esté activado en Ajustes y que hayas guardado los cambios.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}