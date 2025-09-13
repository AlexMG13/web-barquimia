import { useState } from "react";
import { motion } from "framer-motion";

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
  const estimatedAlcohol = (people * 0.15).toFixed(1); // 150ml por persona
  const estimatedMixers = (people * 0.25).toFixed(1); // 250ml por persona

  // Recomendación de cócteles
  const recommended = cocktails.filter((c) => c.flavor === selectedFlavor);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-center mb-6">🍸 Servicio de Coctelería</h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Calcula lo que necesitas para tu evento y descubre qué cócteles van con
        tus gustos.
      </p>

      {/* Calculadora */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
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
      </motion.div>

      {/* Recomendador */}
      <motion.div
        className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
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
      </motion.div>
    </div>
  );
}
