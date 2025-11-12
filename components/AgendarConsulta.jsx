"use client";
import { useState } from "react";
import ListaPsicologos from "@/components/ListaPsicologos";

export default function AgendarConsulta({ paciente }) {
  const [psicologoSelecionado, setPsicologoSelecionado] = useState(null);

  return (
    <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-6 shadow-lg">
      {!psicologoSelecionado ? (
        <>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#F4EFEA" }}>Escolha um psicólogo</h3>
          <ListaPsicologos onSelect={(p) => setPsicologoSelecionado(p)} />
        </>
      ) : (
        <>
          <h3 className="text-lg font-semibold mb-4" style={{ color: "#F4EFEA" }}>{psicologoSelecionado.nome}</h3>
          <p className="mb-4" style={{ color: "#F4EFEA" }}>Aqui você verá disponibilidade (integração com API).</p>
          <button
            onClick={() => alert("Chamar endpoint POST /consultas com os dados")}
            className="px-5 py-3 rounded-full font-semibold"
            style={{ backgroundColor: "#38d3a6", color: "#063226" }}
          >
            Confirmar agendamento (exemplo)
          </button>

          <div className="mt-4">
            <button onClick={() => setPsicologoSelecionado(null)} className="text-sm underline" style={{ color: "#F4EFEA" }}>
              Voltar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
