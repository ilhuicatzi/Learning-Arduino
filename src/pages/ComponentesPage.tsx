import { MathJax, MathJaxContext } from 'better-react-mathjax'
import { useState } from 'react'

function ComponentesPage() {
  const [activeTab, setActiveTab] = useState('funcionamiento');

  return (
    <div className=" py-8">
        <MathJaxContext>

      <div className="container mx-auto px-4 max-w-4xl">
        <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-full p-6 rounded-lg shadow-md">
          <header className="mb-8 border-b pb-4">
            <h1 className="text-3xl font-bold mb-4 text-blue-800">
              El Transistor 2N2222: Un Interruptor Electrónico a Profundidad
            </h1>
            <p className="text-gray-600 font-light italic">
              Componente clave en nuestro proyecto de corte automático de bomba de gasolina
            </p>
          </header>

          <div className="leading-relaxed">
            <p className="leading-relaxed ">
              En el mundo de la electrónica, los transistores son componentes fundamentales que actúan como interruptores o amplificadores de señales eléctricas. El 2N2222 es un transistor NPN de propósito general ampliamente utilizado en diversas aplicaciones, incluyendo nuestro proyecto de corte automático de la bomba de gasolina.
            </p>

            {/* Navegación por pestañas */}
            <div className="my-6 border-b">
              <nav className="flex space-x-4">
                <button
                  className={`py-2 px-4 ${activeTab === 'anatomia' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('anatomia')}
                >
                  Anatomía
                </button>
                <button
                  className={`py-2 px-4 ${activeTab === 'funcionamiento' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('funcionamiento')}
                >
                  Funcionamiento
                </button>
                <button
                  className={`py-2 px-4 ${activeTab === 'resistencia' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('resistencia')}
                >
                  La Resistencia
                </button>
                <button
                  className={`py-2 px-4 ${activeTab === 'especificaciones' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  onClick={() => setActiveTab('especificaciones')}
                >
                  Especificaciones
                </button>
              </nav>
            </div>

            {activeTab === 'anatomia' && (
              <>
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-700">
                  Anatomía del Transistor 2N2222
                </h2>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <p className="leading-relaxed">
                      El 2N2222 es un transistor bipolar de unión (BJT, por sus siglas en inglés). Posee tres terminales clave:
                    </p>

                    <ul className="list-disc list-inside leading-relaxed pl-4 mt-4">
                      <li className="mb-2">
                        <strong className="font-semibold text-blue-600">Base (B):</strong> Actúa como la terminal de control. Una pequeña corriente aplicada a la base controla una corriente mucho mayor que fluye entre las otras dos terminales.
                      </li>
                      <li className="mb-2">
                        <strong className="font-semibold text-blue-600">Colector (C):</strong> Es la terminal por donde, convencionalmente, "sale" la corriente principal cuando el transistor está activado.
                      </li>
                      <li className="mb-2">
                        <strong className="font-semibold text-blue-600">Emisor (E):</strong> Es la terminal por donde, convencionalmente, "entra" la corriente principal cuando el transistor está activado.
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex-1  p-4 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4">
                        {/* Aquí iría una imagen o diagrama del transistor */}
                        <div className=" p-4 rounded-lg inline-block">
                          <p className="text-sm text-gray-500 mb-2">Diagrama del transistor 2N2222</p>
                          <div className="w-48 h-48 mx-auto bg-gray-400 flex items-center justify-center">
                            <p>Imagen del transistor</p>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        <em>Vista esquemática del transistor 2N2222 mostrando sus tres terminales: Base, Colector y Emisor.</em>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed mt-4">
                  Internamente, un transistor NPN está formado por tres capas de material semiconductor dopado: una capa delgada de tipo P (la base) intercalada entre dos capas de tipo N (el emisor y el colector). Dos uniones <MathJax inline>{String.raw`$PN$`}</MathJax> se forman en estas interfaces.
                </p>
              </>
            )}

            {activeTab === 'funcionamiento' && (
              <>
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-700">
                  Funcionamiento del Transistor como Interruptor
                </h2>

                <p className="leading-relaxed">
                  En nuestro circuito de corte de la bomba de gasolina, el 2N2222 se utiliza como un interruptor electrónico controlado por la señal del solenoide de gas. Su funcionamiento se basa en la modulación de la corriente entre el colector (<MathJax inline>{String.raw`$I_C$`}</MathJax>) y el emisor (<MathJax inline>{String.raw`$I_E$`}</MathJax>) mediante una pequeña corriente aplicada a la base (<MathJax inline>{String.raw`$I_B$`}</MathJax>).
                </p>

                <div className=" p-6 rounded-lg my-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Estados de Operación</h3>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1  p-4 rounded-lg shadow">
                      <h4 className="text-lg font-medium mb-2 text-red-600">Estado de Corte (Off)</h4>
                      <p className="">
                        Cuando no se aplica suficiente corriente a la base (<MathJax inline>{String.raw`$I_B \approx 0$`}</MathJax>), las uniones <MathJax inline>{String.raw`$PN$`}</MathJax> entre la base y el emisor, y la base y el colector, están polarizadas inversamente. Esto impide el flujo de una corriente significativa entre el colector y el emisor (<MathJax inline>{String.raw`$I_C \approx 0$`}</MathJax>). El transistor se comporta como un interruptor abierto.
                      </p>
                    </div>
                    
                    <div className="flex-1  p-4 rounded-lg shadow">
                      <h4 className="text-lg font-medium mb-2 text-green-600">Estado de Saturación (On)</h4>
                      <p className="">
                        Cuando se aplica una corriente suficiente a la base (<MathJax inline>{String.raw`$I_B > I_{B(min)}$`}</MathJax>), la unión base-emisor se polariza directamente. Esto permite que una corriente significativa fluya desde el colector hacia el emisor, pasando a través de la base (<MathJax inline>{String.raw`$I_C \approx I_{C(sat)}$`}</MathJax>). El transistor se comporta como un interruptor cerrado, permitiendo el paso de la corriente a través de la bobina del relé.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="leading-relaxed">
                  Es importante señalar que aunque hablamos de corriente "entrando" y "saliendo" según la convención de corriente, el flujo real de electrones es en sentido contrario, del emisor al colector en un transistor NPN cuando está conduciendo.
                </p>
              </>
            )}

            {activeTab === 'resistencia' && (
              <>
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-700">
                  El Rol Crucial de la Resistencia de 1kΩ
                </h2>

                <p className="leading-relaxed">
                  La resistencia de <MathJax inline>{String.raw`$1k\Omega$`}</MathJax> conectada entre la señal de 12V del solenoide de gas y la base del transistor cumple una función esencial para el correcto funcionamiento del circuito. Para entender su papel, debemos recurrir a la Ley de Ohm:
                </p>

                <div className="my-6 p-4  rounded-lg text-center">
                  <MathJax className="text-xl">{String.raw`$V = I \times R$`}</MathJax>
                </div>

                <p className="leading-relaxed">
                  Donde:
                </p>

                <ul className="list-disc list-inside leading-relaxed pl-4">
                  <li>
                    <MathJax inline>{String.raw`$V$`}</MathJax> es el voltaje (en voltios).
                  </li>
                  <li>
                    <MathJax inline>{String.raw`$I$`}</MathJax> es la corriente (en amperios).
                  </li>
                  <li>
                    <MathJax inline>{String.raw`$R$`}</MathJax> es la resistencia (en ohmios).
                  </li>
                </ul>

                <p className="leading-relaxed mt-4">
                  La unión base-emisor del transistor se comporta como un diodo cuando se polariza directamente, con una caída de voltaje directo (<MathJax inline>{String.raw`$V_{BE}$`}</MathJax>) de aproximadamente 0.7V. Sin una resistencia en serie, una pequeña variación en el voltaje aplicado podría resultar en un aumento drástico de la corriente de base (<MathJax inline>{String.raw`$I_B$`}</MathJax>), lo que podría dañar el transistor.
                </p>

                <div className=" border-l-4 border-yellow-500 p-4 my-6">
                  <p className="font-medium text-yellow-700">Punto importante</p>
                  <p className="">
                    La resistencia de <MathJax inline>{String.raw`$1k\Omega$`}</MathJax> limita la corriente que fluye hacia la base del transistor. Actúa como un "freno" para la corriente, asegurando que no exceda el valor máximo permitido por el fabricante del 2N2222.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-600">
                  Cálculo Aproximado
                </h3>

                <p className="leading-relaxed">
                  Asumiendo una caída de voltaje base-emisor de <MathJax inline>{"`V_{BE} approx 0.7V`"}</MathJax> y una señal del solenoide de <MathJax inline>{String.raw`$V_{solenoide} = 12V$`}</MathJax>, la tensión que cae a través de la resistencia (<MathJax inline>{String.raw`$R = 1000\Omega$`}</MathJax>) será:
                </p>

                <div className="my-6 p-4  rounded-lg text-center">
                  <MathJax>{String.raw`$V_{resistencia} = V_{solenoide} - V_{BE} = 12V - 0.7V = 11.3V$`}</MathJax>
                </div>

                <p className="leading-relaxed">
                  Usando la Ley de Ohm, podemos calcular la corriente de base (<MathJax inline>{String.raw`$I_B$`}</MathJax>) que fluye a través de la resistencia:
                </p>

                <div className="my-6 p-4  rounded-lg text-center">
                  <MathJax>{String.raw`$I_B = \frac{V_{resistencia}}{R} = \frac{11.3V}{1000\Omega} = 0.0113A = 11.3 \times 10^{-3}A = 11.3mA$`}</MathJax>
                </div>

                <p className="leading-relaxed">
                  Esta corriente de base (<MathJax inline>{`$I_B = 11.3mA$`}</MathJax>), limitada por la resistencia de <MathJax inline>{String.raw`$1k\Omega$`}</MathJax>, es suficiente para llevar al transistor a la saturación, permitiendo que una corriente mucho mayor fluya entre el colector y el emisor y energice la bobina del relé. Sin la resistencia, la corriente de base podría ser significativamente mayor y potencialmente dañar el transistor.
                </p>
              </>
            )}

            {activeTab === 'especificaciones' && (
              <>
                <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-700">
                  Especificaciones Técnicas del 2N2222
                </h2>

                <p className="leading-relaxed mb-4">
                  El transistor 2N2222 tiene características específicas que lo hacen ideal para muchas aplicaciones, incluido nuestro proyecto de corte de bomba de gasolina.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full  border  rounded-lg">
                    <thead>
                      <tr className="">
                        <th className="py-2 px-4 border-b">Parámetro</th>
                        <th className="py-2 px-4 border-b">Valor típico</th>
                        <th className="py-2 px-4 border-b">Valor máximo</th>
                        <th className="py-2 px-4 border-b">Unidad</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">Voltaje colector-emisor (VCEO)</td>
                        <td className="py-2 px-4 border-b text-center">-</td>
                        <td className="py-2 px-4 border-b text-center">40</td>
                        <td className="py-2 px-4 border-b">V</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 border-b">Voltaje colector-base (VCBO)</td>
                        <td className="py-2 px-4 border-b text-center">-</td>
                        <td className="py-2 px-4 border-b text-center">75</td>
                        <td className="py-2 px-4 border-b">V</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Corriente de colector (IC)</td>
                        <td className="py-2 px-4 border-b text-center">-</td>
                        <td className="py-2 px-4 border-b text-center">800</td>
                        <td className="py-2 px-4 border-b">mA</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 border-b">Ganancia de corriente (hFE) a IC=150mA</td>
                        <td className="py-2 px-4 border-b text-center">100</td>
                        <td className="py-2 px-4 border-b text-center">300</td>
                        <td className="py-2 px-4 border-b">-</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">Potencia de disipación</td>
                        <td className="py-2 px-4 border-b text-center">-</td>
                        <td className="py-2 px-4 border-b text-center">500</td>
                        <td className="py-2 px-4 border-b">mW</td>
                      </tr>
                      <tr className="">
                        <td className="py-2 px-4 border-b">Temperatura de operación</td>
                        <td className="py-2 px-4 border-b text-center">-55</td>
                        <td className="py-2 px-4 border-b text-center">150</td>
                        <td className="py-2 px-4 border-b">°C</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">
                    Aplicaciones Comunes
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Circuitos de conmutación
                    </li>
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Etapas de amplificación de señal
                    </li>
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Control de relés
                    </li>
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Proyectos con Arduino
                    </li>
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Circuitos osciladores
                    </li>
                    <li className=" p-3 rounded shadow-sm flex items-center">
                      <span className="w-3 h-3 rounded-full 0 mr-2"></span>
                      Reguladores de voltaje simples
                    </li>
                  </ul>
                </div>
              </>
            )}

            <h2 className="text-2xl font-semibold mt-8 mb-3 text-blue-700">
              Conclusión
            </h2>

            <p className="leading-relaxed">
              El transistor 2N2222, controlado por una pequeña corriente en su base (<MathJax inline>{String.raw`$I_B$`}</MathJax>) limitada por la resistencia de <MathJax inline>{String.raw`$1k\Omega$`}</MathJax>, actúa como un interruptor electrónico que activa el relé automotriz. Este relé, a su vez, interrumpe la alimentación de la bomba de gasolina cuando el sistema de gas está en funcionamiento. La correcta comprensión del funcionamiento del transistor y el papel de los componentes asociados, incluyendo las leyes de la física como la Ley de Ohm, es crucial para el diseño y la implementación exitosa de circuitos electrónicos.
            </p>

            <div className="mt-8 p-4  rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">¿Tienes preguntas o comentarios?</h3>
              <p>
                Si tienes dudas sobre el uso del transistor 2N2222 en este proyecto o necesitas más información, déjame un comentario abajo o contáctame directamente.
              </p>
            </div>

          </div>
          
        </article>
      </div>
        </MathJaxContext>
    </div>
  )
}

export default ComponentesPage