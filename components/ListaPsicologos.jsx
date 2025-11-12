"use client";
import { useEffect, useState } from "react";

export default function ListaPsicologos({ onSelect }) {
  const [psicologos, setPsicologos] = useState([]);

  useEffect(() => {
    // Placeholder: futuramente fetch("/api/psicologos")
    setPsicologos([
      { id: 1, nome: "Dra. Ana Silva", especialidade: "Terapia cognitivo-comportamental" },
      { id: 2, nome: "Dr. Carlos Souza", especialidade: "Psicoterapia" },
    ]);
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4" style={{ color: "#F4EFEA" }}>Psicólogos disponíveis</h3>

      <ul className="space-y-3">
        {psicologos.map((p) => (
          <li key={p.id} className="p-3 rounded-lg flex justify-between items-center" style={{ background: "rgba(244,239,234,0.03)", color: "#F4EFEA" }}>
            <div>
              <div className="font-medium">{p.nome}</div>
              <div className="text-sm opacity-80">{p.especialidade}</div>
            </div>
            <button
              onClick={() => onSelect?.(p)}
              className="px-4 py-2 rounded-full font-semibold"
              style={{ backgroundColor: "#38d3a6", color: "#063226" }}
            >
              Selecionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
