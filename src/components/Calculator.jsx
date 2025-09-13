import { useState } from "react";

export default function Calculator() {
    const [people, setPeople] = useState(10);

    const estimatedAlcohol = (people * 0.18).toFixed(1);
    const estimatedIce = (people * 2).toFixed(1);
    return (
        <div id='calculadora' className="min-h-screen flex flex-col items-center justify-center px-6">
            <p className="text-lg text-center max-w-lg mb-8">
                Calcula lo que necesitas para tu evento
            </p>
            <h2 className="text-2xl font-semibold mb-4">Calculadora de insumos</h2>
            <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full h-10 max-w-sm rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-xl text-center shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                min={1}
            />
            <p>Alcohol estimado: <strong>{estimatedAlcohol} L</strong></p>
            <p>Hielo estimado: <strong>{estimatedIce} L</strong></p>
        </div>
    );
}