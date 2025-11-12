"use client";

export default function PerfilPaciente({ paciente }) {
  return (
    <section className="max-w-md mx-auto bg-white/5 rounded-2xl p-8 shadow-lg">
      <h2 className="text-xl font-semibold mb-4" style={{ color: "#F4EFEA" }}>Meu Perfil</h2>

      <div className="space-y-2 text-sm" style={{ color: "#F4EFEA" }}>
        <p><strong>Nome:</strong> {paciente?.nome || "—"}</p>
        <p><strong>Email:</strong> {paciente?.email || "—"}</p>
        <p><strong>Telefone:</strong> {paciente?.telefone || "—"}</p>
        <p><strong>Data de nascimento:</strong> {paciente?.data_nascimento || "—"}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => alert("Editar perfil (a implementar)")}
          className="px-4 py-2 rounded-full font-medium"
          style={{ backgroundColor: "#38d3a6", color: "#063226" }}
        >
          Editar
        </button>
        <button
          onClick={() => {
            localStorage.removeItem("paciente");
            window.location.href = "/"; // volta pra página inicial
          }}
          className="px-4 py-2 rounded-full font-medium border"
          style={{ color: "#F4EFEA", borderColor: "rgba(244,239,234,0.12)" }}
        >
          Sair
        </button>
      </div>
    </section>
  );
}
