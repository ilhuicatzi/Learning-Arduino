import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Flame, Zap } from "lucide-react";

export default function TransistorPage() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-10 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary flex items-center justify-center gap-2">
          <Zap className="text-yellow-500" />
          Transistor NPN 2N2222
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Guía completa sobre uno de los transistores más utilizados en electrónica
        </p>
      </header>

      <Tabs defaultValue="descripcion" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6 w-full">
          <TabsTrigger value="descripcion" className="flex items-center gap-1">
            Descripción General
          </TabsTrigger>
          <TabsTrigger value="caracteristicas" className="flex items-center gap-1">
            Características
          </TabsTrigger>
          <TabsTrigger value="funcionamiento" className="flex items-center gap-1"> 
            Funcionamiento
          </TabsTrigger>
          <TabsTrigger value="aplicaciones" className="flex items-center gap-1">
            Aplicaciones
          </TabsTrigger>
        </TabsList>

        <TabsContent value="descripcion">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Descripción General</CardTitle>
                <CardDescription>Historia y características básicas del transistor 2N2222</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <p>
                  El 2N2222 es un transistor bipolar de unión (BJT) de tipo NPN de uso general, considerado uno de los transistores más populares y versátiles en la industria electrónica. Fue introducido por Motorola en 1962 y desde entonces ha sido fabricado por múltiples compañías, incluyendo Texas Instruments, ON Semiconductor y otros fabricantes destacados.
                </p>
                <p>
                  Este transistor está diseñado para manejar corrientes bajas a medias (hasta 800 mA) y operar a velocidades moderadamente altas (250-300 MHz), lo que lo hace adecuado para una amplia gama de aplicaciones electrónicas, desde circuitos de conmutación simples hasta amplificadores de señal.
                </p>
                <p>
                  Su popularidad se debe principalmente a su bajo costo, amplia disponibilidad, robustez y características técnicas equilibradas que lo hacen ideal para proyectos educativos, prototipado y aplicaciones industriales ligeras.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Estructura Física</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                {/* SVG representación del transistor */}
                <div className="w-full">
                  <svg viewBox="0 0 200 250" className="w-full">
                    {/* Encapsulado TO-92 */}
                    <path d="M80,40 C60,60 60,190 80,210 L120,210 C140,190 140,60 120,40 Z" fill="#333" stroke="#000" strokeWidth="2" />
                    
                    {/* Pines */}
                    <line x1="90" y1="210" x2="90" y2="240" stroke="#666" strokeWidth="3" />
                    <line x1="100" y1="210" x2="100" y2="240" stroke="#666" strokeWidth="3" />
                    <line x1="110" y1="210" x2="110" y2="240" stroke="#666" strokeWidth="3" />
                    
                    {/* Etiquetas */}
                    <text x="85" y="250" fontSize="12" textAnchor="middle">E</text>
                    <text x="100" y="250" fontSize="12" textAnchor="middle">B</text>
                    <text x="115" y="250" fontSize="12" textAnchor="middle">C</text>
                    
                    {/* Etiqueta principal */}
                    <text x="100" y="125" fontSize="14" fill="white" textAnchor="middle">2N2222</text>
                  </svg>
                </div>
                <div className="text-center text-sm">
                  <p className="font-medium">Encapsulado TO-92</p>
                  <p>E: Emisor | B: Base | C: Colector</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="caracteristicas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Características Eléctricas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <ul className="list-disc list-inside space-y-2">
                  <li>Tipo: NPN (Negativo-Positivo-Negativo)</li>
                  <li>Corriente máxima de colector (I<sub>C</sub>): 800 mA</li>
                  <li>Voltaje máximo colector-emisor (V<sub>CEO</sub>): 40 V</li>
                  <li>Voltaje máximo colector-base (V<sub>CBO</sub>): 75 V</li>
                  <li>Voltaje máximo emisor-base (V<sub>EBO</sub>): 6 V</li>
                  <li>Ganancia típica (h<sub>FE</sub> o β): β ≈ 100 - 300 a I<sub>C</sub> = 10mA</li>
                  <li>Frecuencia de transición (f<sub>T</sub>): hasta 250-300 MHz</li>
                  <li>Potencia máxima de disipación: 500 mW (sin disipador)</li>
                  <li>Temperatura de operación: -65°C a +175°C</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Características Físicas y Variantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Encapsulado</h3>
                    <ul className="list-disc list-inside">
                      <li>TO-92 (más común para uso general)</li>
                      <li>TO-18 (metálico, para aplicaciones militares/industriales)</li>
                      <li>SOT-23 (montaje superficial, denominado MMBT2222)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Variantes Comunes</h3>
                    <ul className="list-disc list-inside">
                      <li>2N2222A: Versión mejorada con mayor voltaje de ruptura</li>
                      <li>P2N2222A: Versión de mayor calidad/fiabilidad</li>
                      <li>PN2222: Versión de plástico más económica</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Dimensiones Típicas (TO-92)</h3>
                    <ul className="list-disc list-inside">
                      <li>Altura: ~4.5 mm</li>
                      <li>Diámetro: ~4.8 mm</li>
                      <li>Espaciado de pines: 1.27 mm (estándar)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="funcionamiento">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Principios de Funcionamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base leading-relaxed">
                <p>
                  El transistor 2N2222 funciona mediante el control de la corriente que fluye entre el colector y el emisor (I<sub>C</sub>) a través de una corriente más pequeña aplicada a la base (I<sub>B</sub>). Esta propiedad permite su uso como amplificador o interruptor.
                </p>
                
                <div>
                  <h3 className="font-semibold mb-2">Modos de Operación</h3>
                  <div className="pl-4 space-y-3">
                    <div>
                      <h4 className="font-medium">Modo de Corte (OFF)</h4>
                      <p className="text-gray-700">Cuando no hay corriente en la base (I<sub>B</sub> ≈ 0), el transistor está en estado de corte y no conduce corriente entre colector y emisor (I<sub>C</sub> ≈ 0). Actúa como un interruptor abierto.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Modo de Saturación (ON)</h4>
                      <p className="text-gray-700">Al aplicar suficiente corriente en la base, el transistor entra en saturación y permite el máximo flujo de corriente entre colector y emisor, con una caída de tensión V<sub>CE</sub> mínima (≈0.2V). Actúa como un interruptor cerrado.</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium">Modo Activo (Amplificación)</h4>
                      <p className="text-gray-700">Con una polarización adecuada, el transistor opera en su zona lineal donde la corriente de colector es proporcional a la corriente de base: I<sub>C</sub> = β × I<sub>B</sub>, donde β es la ganancia del transistor.</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Ecuaciones Fundamentales</h3>
                  <div className="pl-4 space-y-2">
                    <p>I<sub>C</sub> = β × I<sub>B</sub> (en modo activo)</p>
                    <p>I<sub>E</sub> = I<sub>C</sub> + I<sub>B</sub> (ley de Kirchhoff)</p>
                    <p>V<sub>BE</sub> ≈ 0.7V (caída de tensión base-emisor)</p>
                    <p>V<sub>CE(sat)</sub> ≈ 0.2V (en saturación)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Diagrama de Circuito Básico</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                {/* SVG del circuito básico */}
                <div className="w-full">
                  <svg viewBox="0 0 220 240" className="w-full">
                    {/* Polarización básica NPN */}
                    {/* Vcc */}
                    <line x1="110" y1="20" x2="110" y2="40" stroke="#000" strokeWidth="2" />
                    <circle cx="110" cy="20" r="3" fill="#000" />
                    <text x="125" y="25" fontSize="12">Vcc</text>
                    
                    {/* Resistencia de colector */}
                    <line x1="110" y1="40" x2="110" y2="60" stroke="#000" strokeWidth="2" />
                    <path d="M100,40 L120,40 L120,60 L100,60 Z" fill="none" stroke="#000" strokeWidth="2" />
                    <text x="85" y="50" fontSize="12">Rc</text>
                    
                    {/* Conexión colector */}
                    <line x1="110" y1="60" x2="110" y2="80" stroke="#000" strokeWidth="2" />
                    <circle cx="110" cy="80" r="2" fill="#000" />
                    
                    {/* Transistor símbolo */}
                    <line x1="110" y1="80" x2="110" y2="140" stroke="#000" strokeWidth="2" />
                    <line x1="70" y1="110" x2="110" y2="110" stroke="#000" strokeWidth="2" />
                    <polygon points="110,110 130,90 130,130" fill="none" stroke="#000" strokeWidth="2" />
                    <line x1="130" y1="90" x2="130" y2="130" stroke="#000" strokeWidth="2" />
                    <line x1="110" y1="140" x2="110" y2="160" stroke="#000" strokeWidth="2" />
                    
                    {/* Flecha de emisor */}
                    <line x1="117" y1="127" x2="130" y2="110" stroke="#000" strokeWidth="2" />
                    <polygon points="120,122 117,127 115,120" fill="#000" />
                    
                    {/* GND del emisor */}
                    <line x1="110" y1="160" x2="110" y2="180" stroke="#000" strokeWidth="2" />
                    <line x1="90" y1="180" x2="130" y2="180" stroke="#000" strokeWidth="2" />
                    <line x1="95" y1="185" x2="125" y2="185" stroke="#000" strokeWidth="2" />
                    <line x1="100" y1="190" x2="120" y2="190" stroke="#000" strokeWidth="2" />
                    <line x1="105" y1="195" x2="115" y2="195" stroke="#000" strokeWidth="2" />
                    
                    {/* Entrada */}
                    <text x="50" y="110" fontSize="12">Vin</text>
                    <circle cx="45" cy="110" r="3" fill="#000" />
                    <line x1="45" y1="110" x2="55" y2="110" stroke="#000" strokeWidth="2" />
                    
                    {/* Resistencia de base */}
                    <path d="M55,100 L55,120 L70,120 L70,100 Z" fill="none" stroke="#000" strokeWidth="2" />
                    <text x="62" y="98" fontSize="12">Rb</text>
                    
                    {/* Etiquetas */}
                    <text x="115" y="105" fontSize="10" textAnchor="start">C</text>
                    <text x="85" y="115" fontSize="10" textAnchor="end">B</text>
                    <text x="115" y="150" fontSize="10" textAnchor="start">E</text>
                    
                    {/* Salida */}
                    <circle cx="150" cy="110" r="3" fill="#000" />
                    <line x1="130" y1="110" x2="150" y2="110" stroke="#000" strokeWidth="2" />
                    <text x="160" y="110" fontSize="12">Vout</text>
                  </svg>
                </div>
                <div className="text-center text-sm space-y-1">
                  <p className="font-medium">Circuito básico de polarización</p>
                  <p>Rb: Resistencia de base</p>
                  <p>Rc: Resistencia de colector</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-3">
              <CardHeader>
                <CardTitle>Recomendaciones de Uso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Polarización Adecuada</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Usar resistencias limitadoras en la base para proteger el transistor</li>
                      <li>Dimensionar la resistencia de base: R<sub>B</sub> = (V<sub>in</sub> - 0.7V) / (I<sub>B</sub> necesaria)</li>
                      <li>Para saturación: I<sub>B</sub> ≥ I<sub>C</sub> / β<sub>min</sub> × 10 (factor de seguridad)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Protección y Consideraciones</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Usar diodos de protección para cargas inductivas</li>
                      <li>Considerar disipador térmico para corrientes {'>'}100mA</li>
                      <li>Evitar sobrepasar V<sub>CEO</sub> máximo (40V)</li>
                      <li>Tener en cuenta la deriva térmica (β aumenta con temperatura)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="aplicaciones">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Aplicaciones Principales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2">Aplicaciones de Conmutación</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Control de relés para automatización</li>
                    <li>Controladores de LEDs y displays</li>
                    <li>Interfaces digitales y drivers de nivel lógico</li>
                    <li>Interruptores electrónicos para cargas pequeñas</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Aplicaciones de Amplificación</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Preamplificadores de audio de baja señal</li>
                    <li>Amplificadores de pequeña señal para RF</li>
                    <li>Etapas buffer en circuitos analógicos</li>
                    <li>Amplificadores de corriente para sensores</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Osciladores y Temporizadores</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Circuitos astables multivibrador</li>
                    <li>Osciladores simples hasta 100MHz</li>
                    <li>Generadores de pulsos</li>
                    <li>Circuitos de temporización tipo RC</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Ejemplos de Circuitos Prácticos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-base leading-relaxed">
                <div>
                  <h3 className="font-semibold mb-2">Controlador LED con Sensor LDR</h3>
                  <p className="text-gray-700 mb-2">
                    Circuito simple que enciende un LED cuando la luz ambiental baja, usando un divisor de tensión con LDR y un 2N2222 como interruptor.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Componentes: LDR, resistencia 10kΩ, 2N2222, LED, resistencia 220Ω</li>
                    <li>Aplicación: Luces automáticas de bajo consumo</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Amplificador de Señal de Micrófono</h3>
                  <p className="text-gray-700 mb-2">
                    Preamplificador básico para micrófono electret usando el 2N2222 en configuración de emisor común.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Ganancia típica: 20-30dB</li>
                    <li>Ancho de banda: 20Hz a 20kHz</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Interfaz para Microcontrolador</h3>
                  <p className="text-gray-700 mb-2">
                    Uso del 2N2222 para controlar cargas de mayor corriente desde una salida digital de baja potencia (Arduino, ESP32, etc).
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Permite controlar relés, solenoides o motores pequeños</li>
                    <li>Protege los pines del microcontrolador de sobrecargas</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="text-center pt-6 text-gray-500 flex flex-col items-center justify-center gap-2">
        <div className="flex items-center bg-yellow-50 text-yellow-800 px-4 py-2 rounded-md border border-yellow-200 max-w-lg">
          <Flame className="text-orange-500 w-5 h-5 mr-2 flex-shrink-0" />
          <p className="text-sm">Circuito diseñado para control automotriz, asegúrate de protegerlo contra humedad y vibración. Considerar encapsulado y sellar conexiones para prolongar vida útil.</p>
        </div>
      </div>
    </div>
  );
}