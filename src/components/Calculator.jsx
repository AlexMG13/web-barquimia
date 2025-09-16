import { useState } from "react";
import { Info } from "lucide-react";

function LabelConInfo({ children, descripcion }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <label className="text-base sm:text-lg font-semibold flex items-center gap-2 justify-center">
        {children}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-gray-500 hover:text-gray-700"
        >
          <Info size={18} />
        </button>
      </label>

      {open && (
        <div className="absolute top-full mt-2 p-3 bg-gray-100 text-gray-800 text-sm rounded-xl shadow-lg max-w-[90vw] text-center">
          {descripcion}
        </div>
      )}
    </div>
  );
}

export default function Calculator() {
  const [people, setPeople] = useState(50);
  const [duration, setDuration] = useState(5);
  const [eventType, setEventType] = useState("fiesta");
  const [ageGroup, setAgeGroup] = useState("adultos");
  const [includeNonAlcoholic, setIncludeNonAlcoholic] = useState(true);

  const calcular = () => {
    let bebidasPorPersona = duration;

    const factoresEvento = {
      informal: 1,
      fiesta: 1.8,
      formal: 0.8,
      corporativo: 0.7,
    };

    bebidasPorPersona *= factoresEvento[eventType] || 1;

    if (ageGroup === "jovenes") bebidasPorPersona *= 1.1;
    if (ageGroup === "mayores") bebidasPorPersona *= 0.7;

    const totalBebidas = Math.ceil(bebidasPorPersona * people);

    const cervezas = Math.ceil(totalBebidas * 0.4);
    const botellasVino = Math.ceil((totalBebidas * 0.3) / 3);
    const tragos = Math.ceil(totalBebidas * 0.3);
    const botellasDestilado = Math.ceil(tragos / 15);

    const litrosSinAlcohol = includeNonAlcoholic
      ? Math.ceil(people * 0.5)
      : 0;

    const hieloKg = Math.ceil(people * 1.8);

    return { cervezas, botellasVino, botellasDestilado, litrosSinAlcohol, hieloKg };
  };

  const resultado = calcular();

  return (
    <section
      id="calculadora"
      className="min-h-screen flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 py-6"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center">
        Calculadora de Insumos
      </h1>

      {/* Formulario */}
      <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 w-full max-w-2xl mx-auto flex flex-col items-center space-y-4">
        <div className="flex flex-col items-center w-full">
          <LabelConInfo descripcion="Número total de invitados que asistirán al evento.">
            Cantidad de personas
          </LabelConInfo>
          <input
            type="number"
            min={1}
            value={people}
            onChange={(e) => setPeople(Number(e.target.value))}
            className="border rounded-lg px-3 py-2 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none mx-auto w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <LabelConInfo descripcion="Duración estimada del evento en horas. A mayor duración, mayor consumo.">
            Duración (horas)
          </LabelConInfo>
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="border rounded-lg px-3 py-2 text-center focus:ring-2 focus:ring-blue-400 focus:outline-none mx-auto w-full max-w-xs"
          />
        </div>

        <div className="flex flex-col items-center w-full">
          <LabelConInfo descripcion="El tipo de evento afecta el consumo promedio: en fiestas suele consumirse más que en reuniones formales.">
            Tipo de evento
          </LabelConInfo>
          <select
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none mx-auto w-full max-w-xs text-center"
          >
            <option value="informal">Informal</option>
            <option value="fiesta">Fiesta</option>
            <option value="formal">Formal</option>
            <option value="corporativo">Corporativo</option>
          </select>
        </div>

        <div className="flex flex-col items-center w-full">
          <LabelConInfo descripcion="El rango de edad influye en el consumo: los jóvenes tienden a consumir más que los adultos mayores.">
            Rango etario predominante
          </LabelConInfo>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none mx-auto w-full max-w-xs text-center"
          >
            <option value="jovenes">Jóvenes (18-30)</option>
            <option value="adultos">Adultos (30-50)</option>
            <option value="mayores">Mayores (50+)</option>
          </select>
        </div>

        <div className="flex items-center gap-2 justify-center">
          <input
            type="checkbox"
            checked={includeNonAlcoholic}
            onChange={(e) => setIncludeNonAlcoholic(e.target.checked)}
            className="w-5 h-5"
          />
          <LabelConInfo descripcion="Incluye refrescos, jugos o agua en el cálculo. Se estima 500 ml por persona.">
            Incluir bebidas sin alcohol
          </LabelConInfo>
        </div>
      </div>

      {/* Resultados */}
      <div className="bg-gray-50 shadow-md rounded-2xl p-4 sm:p-6 w-full max-w-2xl mx-auto space-y-2 text-center text-base sm:text-lg">
        <p><strong>Cervezas:</strong> {resultado.cervezas} botellas/latas (≈ 330ml)</p>
        <p><strong>Vino:</strong> {resultado.botellasVino} botellas (750ml)</p>
        <p><strong>Destilados:</strong> {resultado.botellasDestilado} botellas (750ml)</p>
        {includeNonAlcoholic && (
          <p><strong>Bebidas sin alcohol:</strong> {resultado.litrosSinAlcohol} L</p>
        )}
        <p><strong>Hielo:</strong> {resultado.hieloKg} kg</p>
      </div>
    </section>
  );
}
