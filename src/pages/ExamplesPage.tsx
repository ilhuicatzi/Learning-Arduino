import { CheckCircle, AlertCircle, Zap, Flame } from "lucide-react";

export default function ExamplesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-2xl space-y-6">
      <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
        <Zap className="text-yellow-500" />
        Corte automático de bomba de gasolina con 2N2222
      </h1>

      <section>
        <h2 className="text-2xl font-semibold">🎯 Objetivo</h2>
        <p className="mt-2 text-lg">
          Desactivar la bomba de gasolina automáticamente cuando el vehículo
          opera con gas, usando un transistor <strong>2N2222</strong> y un relé
          automotriz de 5 patas.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">🧰 Materiales</h2>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>
            <CheckCircle className="inline text-green-500" /> 1x Transistor{" "}
            <strong>2N2222</strong> (NPN)
          </li>
          <li>
            <CheckCircle className="inline text-green-500" /> 1x Resistencia de{" "}
            <strong>1kΩ</strong>
          </li>
          <li>
            <CheckCircle className="inline text-green-500" /> 1x Diodo{" "}
            <strong>1N4007</strong>
          </li>
          <li>
            <CheckCircle className="inline text-green-500" /> 1x Relé automotriz
            de <strong>5 patas</strong> (30, 85, 86, 87, 87a)
          </li>
          <li>
            <CheckCircle className="inline text-green-500" /> Cables,
            terminales, cinta termocontraíble
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">⚡ Conexiones del circuito</h2>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>
            Conecta la señal de 12V del <strong>solenoide de gas</strong> a una{" "}
            <strong>resistencia de 1kΩ</strong>, luego a la{" "}
            <strong>base del 2N2222</strong>.
          </li>
          <li>
            El <strong>emisor</strong> va a masa (GND).
          </li>
          <li>
            El <strong>colector</strong> se conecta al pin{" "}
            <strong>85 del relé</strong>.
          </li>
          <li>
            El pin <strong>86 del relé</strong> va a{" "}
            <strong>+12V post-contacto</strong>.
          </li>
          <li>
            Coloca un diodo <strong>1N4007</strong> entre pines 85 y 86 del relé
            (cátodo al 86).
          </li>
          <li>Corta el cable positivo de la bomba de gasolina.</li>
          <li>
            El cable de entrada se conecta al pin <strong>30</strong>, y la
            salida al pin <strong>87a</strong> del relé.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold"> 🔌 Conexiones del circuito</h2>
        <img 
          src="/images/circuito_bomba_relay.png"
          alt="Diagrama de conexiones del circuito"
          className="w-96 h-auto mt-4 rounded-lg shadow-lg"
        />
        <p className="mt-2 text-lg">
          El diagrama muestra cómo conectar el transistor, el relé y la bomba de
          gasolina. Asegúrate de seguir las conexiones correctamente para evitar
          daños.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">🔁 Funcionamiento esperado</h2>
        <p className="mt-2 text-lg">
          Cuando el solenoide de gas está activo, el transistor se activa,
          conmuta el relé, y corta la alimentación a la bomba. Al volver a
          gasolina, el relé se desactiva y reestablece la corriente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">⚠️ Advertencias</h2>
        <p className="mt-2 text-lg">
          Este circuito es para uso experimental. No se recomienda su uso en
          vehículos de producción sin pruebas exhaustivas.
        </p>
        <p className="mt-2 text-lg">
          El transistor <strong>2N2222</strong> puede calentarse si se usa en
          condiciones inadecuadas. Asegúrate de que el relé y el transistor sean
          adecuados para la corriente de la bomba.
        </p>
        <p className="mt-2 text-lg">
          El diodo <strong>1N4007</strong> protege el transistor de picos de
          voltaje. Asegúrate de que esté correctamente orientado (cátodo al
          positivo).
        </p>
        <p className="mt-2 text-lg">
          El relé debe ser capaz de manejar la corriente de la bomba. Verifica
          las especificaciones del relé y la bomba antes de conectar.
        </p>
        <p className="mt-2 text-lg">
          Si no estás seguro de cómo realizar estas conexiones, consulta a un
          profesional o técnico calificado.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-red-600 flex items-center gap-2">
          <AlertCircle className="text-red-500" />
          ¡Precaución!
        </h2>
        <ul className="list-disc list-inside space-y-1 mt-2 text-red-700">
          <li>
            No dejar la bomba desactivada por mucho tiempo sin supervisión si se
            encuentra sumergida en gasolina (puede recalentarse).
          </li>
          <li>
            Encapsula el circuito para evitar humedad y polvo del entorno
            automotriz.
          </li>
          <li>Verifica la polaridad y conexiones antes de alimentar.</li>
        </ul>
      </section>

      <div className="text-center pt-4">
        <Flame className="mx-auto text-orange-500 w-8 h-8" />
        <p className="text-sm text-gray-500">
          Este sistema está diseñado para uso experimental o profesional con
          conocimiento técnico. Verifica compatibilidad con tu vehículo.
        </p>
      </div>
    </div>
  );
}
