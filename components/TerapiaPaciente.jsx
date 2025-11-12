"use client";

export default function TerapiaPaciente({ paciente }) {
  // futuramente: buscar consultas do paciente via API
  return (
    <div className="max-w-3xl mx-auto bg-white/5 rounded-2xl p-6 shadow-lg" style={{ color: "#F4EFEA" }}>
      <h3 className="text-lg font-semibold mb-4">Minhas Sessões</h3>
      <p>Você ainda não tem sessões registradas aqui. Assim que marcar, elas aparecerão nesta lista.</p>
    </div>
  );
}
