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
} from "@/components/ui/card";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Flame, Zap } from "lucide-react";

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: { packages: { "[+]": ["ams"] }, inlineMath: [['$', '$'], ['\\(', '\\)']]},
};

export default function TransistorPage() {
  return (
    <MathJaxContext config={config}>
      <div className="w-full max-w-4xl mx-auto px-4 py-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 flex items-center justify-center gap-2">
          <Zap className="text-yellow-500" />
          Transistor NPN 2N2222
        </h1>

        <Tabs defaultValue="funcionamiento" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
            <TabsTrigger value="funcionamiento">Funcionamiento</TabsTrigger>
            <TabsTrigger value="analisis">Análisis DC</TabsTrigger>
            <TabsTrigger value="calculos">Cálculo de polarización</TabsTrigger>
            <TabsTrigger value="caracteristicas">Características</TabsTrigger>
          </TabsList>

          <TabsContent value="funcionamiento">
            <Card>
              <CardHeader>
                <CardTitle>Funcionamiento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <p>
                  El transistor 2N2222 es un transistor NPN de propósito general. Puede
                  actuar como interruptor o amplificador dependiendo del circuito.
                </p>
                <p>
                  En configuración activa, la corriente de colector se relaciona con la de base mediante:
                </p>
                <MathJax>{"\\( I_C = \\beta I_B \\)"}</MathJax>
                <p>
                  La unión base-emisor debe estar polarizada directamente, mientras
                  que la unión colector-base debe estar en polarización inversa.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analisis">
            <Card>
              <CardHeader>
                <CardTitle>Análisis DC</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <p>Para un análisis de polarización en DC se consideran las siguientes aproximaciones:</p>
                <ul className="list-disc list-inside">
                  <li><MathJax inline>{"\\( V_{BE} \\approx 0.7\\,V \\)"}</MathJax></li>
                  <li>
                    <MathJax inline>{"\\( V_{CE} \\approx V_{CC} \\)"}</MathJax>
                    <p className="text-sm text-gray-500">(cuando el transistor está en saturación)</p>
                  </li>
                </ul>
                <MathJax>{"\\( I_C = \\beta I_B \\)"}</MathJax>
                <MathJax>{"\\( I_E = I_C + I_B \\)"}</MathJax>
                <MathJax>{"\\( V_{CE} = V_C - V_E \\)"}</MathJax>
                <p>Para que el transistor opere en región activa:</p>
                <MathJax>{"\\( V_{CE} > V_{BE} \\)"}</MathJax>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calculos">
            <Card>
              <CardHeader>
                <CardTitle>Cálculo de polarización (ejemplo real)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <p>Usando una resistencia de base de 1kΩ, alimentada con 12V desde el solenoide de gas:</p>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Voltaje en la base:</strong> <MathJax inline>{"\\( V_B = 12V \\)"}</MathJax>
                  </li>
                  <li>
                    <strong>Caída base-emisor:</strong> <MathJax inline>{"\\( V_{BE} = 0.7V \\)"}</MathJax>
                  </li>
                  <li>
                    <strong>Voltaje en la resistencia:</strong> <MathJax inline>{"\\( V_R = V_B - V_{BE} = 11.3V \\)"}</MathJax>
                  </li>
                  <li>
                    <strong>Corriente de base:</strong> <MathJax inline>{"\\( I_B = \\frac{V_R}{R_B} = \\frac{11.3V}{1k\\Omega} = 11.3\\,mA \\)"}</MathJax>
                  </li>
                  <li>
                    <strong>Si \( \beta = 100 \):</strong> <MathJax inline>{"\\( I_C = 100 \\times 11.3\\,mA = 1.13\\,A \\)"}</MathJax>
                    <p className="text-sm text-gray-500">(en la práctica el transistor saturará antes de alcanzar este valor)</p>
                  </li>
                </ul>
                <p>
                  Con esto, garantizamos que el transistor entra en saturación, activando correctamente el relé.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="caracteristicas">
            <Card>
              <CardHeader>
                <CardTitle>Características del 2N2222</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base leading-relaxed">
                <ul className="list-disc list-inside">
                  <li>Tipo: NPN</li>
                  <li>Corriente máxima de colector: 800 mA</li>
                  <li>Voltaje máximo colector-emisor: 40 V</li>
                  <li>Ganancia típica (<MathJax inline>{"\\( \\beta \\approx 100 - 300 \\)"}</MathJax>)</li>
                  <li>Frecuencia de transición: hasta 250 MHz</li>
                  <li>Encapsulado: TO-92</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center pt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
          <Flame className="text-orange-500 w-5 h-5" />
          Circuito diseñado para control automotriz, asegúrate de protegerlo contra humedad y vibración.
        </div>
      </div>
    </MathJaxContext>
  );
}
