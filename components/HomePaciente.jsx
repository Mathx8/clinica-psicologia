"use client";

export default function HomePaciente({ paciente, onAgendar }) {
  const primeiraSessao = !paciente?.ultimaConsulta;

  return (
    <section
      className="max-w-3xl mx-auto bg-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
    >
      <h2 className="text-2xl font-bold mb-3 text-[#F4EFEA] drop-shadow-md">
        {paciente?.nome ? `Olá, ${paciente.nome.split(" ")[0]}!` : "Olá!"}
      </h2>

      {primeiraSessao ? (
        <>
          <p className="mb-6 text-base text-[#F4EFEA]/90 leading-relaxed">
            Seja bem-vindo(a) à <strong>Clínica Mente Viva</strong>. Aqui você
            encontra profissionais qualificados e pode agendar suas sessões
            com facilidade.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onAgendar && onAgendar()}
              className="px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#38d3a6", color: "#063226" }}
            >
              Agendar primeira sessão
            </button>

            <button
              onClick={() => alert('Saber mais sobre a clínica')}
              className="px-5 py-3 rounded-full font-semibold shadow-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#F4EFEA",
                borderColor: "rgba(244,239,234,0.2)",
              }}
            >
              Sobre a Clínica
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-4 text-base text-[#F4EFEA]/90 leading-relaxed">
            Sua próxima sessão está marcada para:{" "}
            <strong>{paciente.proximaConsulta || "—"}</strong>
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => alert('Ir para minhas consultas')}
              className="px-5 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#38d3a6", color: "#063226" }}
            >
              Ver minhas consultas
            </button>

            <button
              onClick={() => alert('Reagendar / cancelar')}
              className="px-5 py-3 rounded-full font-semibold shadow-lg border transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "#F4EFEA",
                borderColor: "rgba(244,239,234,0.2)",
              }}
            >
              Reagendar
            </button>
          </div>
        </>
      )}
    </section>
  );
}
