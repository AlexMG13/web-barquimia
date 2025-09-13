import { useState } from "react";

const cocktails = [
  { name: "Margarita", flavor: "citrico", strength: "medio" },
  { name: "Negroni", flavor: "amargo", strength: "fuerte" },
  { name: "Daiquiri", flavor: "dulce", strength: "suave" },
  { name: "Caipirinha", flavor: "citrico", strength: "medio" },
];

export default function Recomendation() {
  const [selectedFlavor, setSelectedFlavor] = useState("citrico");
  const recommended = cocktails.filter((c) => c.flavor === selectedFlavor);

  return (
    <div id="recomendaciones" className="min-h-screen flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-semibold mb-4">Recomendador de cócteles</h2>

      <select
        value={selectedFlavor}
        onChange={(e) => setSelectedFlavor(e.target.value)}
        className="border border-gray-300 rounded-xl p-2 w-full max-w-xs mb-4 shadow-sm"
      >
        <option value="citrico">Cítricos</option>
        <option value="dulce">Dulces</option>
        <option value="amargo">Amargos</option>
      </select>

      <ul className="list-disc pl-5">
        {recommended.map((c) => (
          <li key={c.name} className="text-lg">{c.name}</li>
        ))}
      </ul>
    </div>
  );
}
