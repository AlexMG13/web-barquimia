import { useState } from "react";

const cocktails = [
  { name: "Margarita", flavor: "citrico", strength: "medio" },
  { name: "Negroni", flavor: "amargo", strength: "fuerte" },
  { name: "Daiquiri", flavor: "dulce", strength: "suave" },
  { name: "Caipirinha", flavor: "citrico", strength: "medio" },
];

export default function CocteleriaLanding() {
  const [people, setPeople] = useState(10);
  const [selectedFlavor, setSelectedFlavor] = useState("citrico");

  // Cálculo simple de ingredientes
  const estimatedAlcohol = (people * 0.18).toFixed(1); // 180ml por persona
  const estimatedMixers = (people * 0.30).toFixed(1); // 300ml por persona

  // Recomendación de cócteles
  const recommended = cocktails.filter((c) => c.flavor === selectedFlavor);

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🍸 Servicio de Coctelería</h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Calcula lo que necesitas para tu evento y descubre qué cócteles van con
        tus gustos.
      </p>

      {/* Calculadora */}
        <h2 className="text-2xl font-semibold mb-4">Calculadora de insumos</h2>
        <input
          type="number"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          className="border rounded-xl p-2 w-full mb-4"
          min={1}
        />
        <p>🍾 Alcohol estimado: <strong>{estimatedAlcohol} L</strong></p>
        <p>🥤 Mixers estimados: <strong>{estimatedMixers} L</strong></p>

      {/* Recomendador */}
        <h2 className="text-2xl font-semibold mb-4">Recomendador de cócteles</h2>
        <select
          value={selectedFlavor}
          onChange={(e) => setSelectedFlavor(e.target.value)}
          className="border rounded-xl p-2 w-full mb-4"
        >
          <option value="citrico">Cítricos</option>
          <option value="dulce">Dulces</option>
          <option value="amargo">Amargos</option>
        </select>

        <ul className="list-disc pl-5">
          {recommended.map((c) => (
            <li key={c.name}>{c.name}</li>
          ))}
        </ul>
    </div>
  );
}
