
function ArduinoBasicsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Proyecto Temporizador Automotriz con NE555 (Tipo Relé AEB370)
      </h1>

      {/* Lista de Materiales */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-blue-300 pb-2">
          Materiales Necesarios
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            <strong>NE555 (Circuito Integrado Temporizador):</strong> 1 unidad, encapsulado DIP-8.
          </li>
          <li>
            <strong>Relé Electromecánico 12V:</strong> 1 unidad, con contactos normalmente cerrados (NC) y bobina de 12 V, capaz de manejar la corriente de la bomba de gasolina.
          </li>
          <li>
            <strong>Resistencias:</strong>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>R1 (temporización): 100kΩ (puede ajustarse para cambiar el tiempo)</li>
              <li>R2 (pull-up): 10kΩ</li>
              <li>R3 (limitadora para LED, opcional): 470Ω</li>
              <li>Rbase (para transistor, si se usa): 1kΩ</li>
            </ul>
          </li>
          <li>
            <strong>Condensadores:</strong>
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>C1 (temporización): 100 µF electrolítico (polarizado)</li>
              <li>C2 (desacoplo, opcional): 0.1 µF cerámico</li>
            </ul>
          </li>
          <li>
            <strong>Diodo de protección:</strong> 1N4001 o similar, para colocar en paralelo con la bobina del relé.
          </li>
          <li>
            <strong>Transistor NPN (opcional):</strong> 2N2222 o similar, para activar el relé si consume más corriente que el NE555 puede manejar.
          </li>
          <li>
            <strong>LED indicador (opcional):</strong> para mostrar el estado de salida.
          </li>
          <li>
            <strong>Fuente de alimentación:</strong> 12 V DC, con corriente suficiente para el relé y el circuito.
          </li>
          <li>
            <strong>Protoboard o PCB, cables y herramientas básicas:</strong> pinzas, soldador, multímetro, etc.
          </li>
        </ul>
      </section>

      {/* Instrucciones paso a paso */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-blue-300 pb-2">
          Instrucciones de Construcción Paso a Paso
        </h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-800">
          <li>
            <strong>Conectar alimentación al NE555:</strong> Pin 8 (VCC) a +12 V, Pin 1 (GND) a tierra.
          </li>
          <li>
            <strong>Reset (Pin 4):</strong> Conectar a +12 V para evitar reinicios accidentales.
          </li>
          <li>
            <strong>Configuración del disparo (Pin 2):</strong> Conectar R2 (10kΩ) entre Pin 2 y +12 V. Colocar un botón pulsador entre Pin 2 y tierra para iniciar el temporizador.
          </li>
          <li>
            <strong>Configuración del tiempo de retardo:</strong> Conectar R1 (100kΩ) entre Pin 7 y +12 V. Conectar C1 (100 µF) entre Pin 6 y tierra. Unir Pin 6 y Pin 7. El tiempo aproximado de retardo es t = 1.1 × R1 × C1 (en segundos).
          </li>
          <li>
            <strong>Pin 5 (Control):</strong> Opcionalmente conectar C2 (0.1 µF) entre Pin 5 y tierra para estabilidad.
          </li>
          <li>
            <strong>Salida (Pin 3):</strong> Si el relé consume poca corriente, conectar directamente a la bobina del relé en serie con el diodo de protección (ánodo al colector, cátodo a +12 V). Si consume más corriente, usar un transistor NPN:
            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
              <li>Pin 3 a la base del transistor mediante Rbase (1kΩ).</li>
              <li>Emisor del transistor a tierra.</li>
              <li>Bobina del relé entre +12 V y colector del transistor.</li>
              <li>Diodo de protección en paralelo con la bobina (cátodo a +12 V, ánodo al colector).</li>
            </ul>
          </li>
          <li>
            <strong>LED indicador (opcional):</strong> Conectar el ánodo al Pin 3 a través de R3 (470Ω) y el cátodo a tierra para indicar estado activo.
          </li>
          <li>
            <strong>Conectar el circuito a controlar:</strong> La línea de 12 V hacia la bomba de gasolina debe pasar por los contactos COM y NC del relé, de modo que cuando el relé se active, corte la alimentación.
          </li>
          <li>
            <strong>Prueba final:</strong> Alimenta el circuito con 12 V, presiona el botón de disparo y verifica que el relé se active con el retardo configurado, cortando la señal a la bomba. El LED debe indicar el estado de salida si está instalado.
          </li>
        </ol>
      </section>

      {/* Observaciones y recomendaciones */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-blue-300 pb-2">
          Observaciones y Recomendaciones
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>
            El tiempo de retardo se puede ajustar cambiando el valor de R1 o C1. Por ejemplo, duplicar el capacitor o la resistencia duplica el tiempo.
          </li>
          <li>
            Usa un relé con contactos y bobina adecuados para la corriente y voltaje de la bomba de gasolina para evitar daños o fallos.
          </li>
          <li>
            El diodo de protección es fundamental para evitar picos de voltaje que dañen el NE555 o el transistor.
          </li>
          <li>
            Si el circuito se usa en ambiente automotriz, considera encapsularlo y protegerlo contra vibraciones, humedad y polvo.
          </li>
          <li>
            Verifica la polaridad de los condensadores electrolíticos para evitar daños.
          </li>
          <li>
            Para mayor estabilidad, usa condensadores de desacoplo cerca del NE555 y una fuente de alimentación regulada.
          </li>
          <li>
            Siempre prueba el circuito desconectado de la bomba inicialmente para verificar el funcionamiento seguro.
          </li>
        </ul>
      </section>
    </div>
  )
}

export default ArduinoBasicsPage