"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { MdCalendarMonth, MdChat, MdPerson, MdEventAvailable } from "react-icons/md";
import Logo from "@/public/logo.png";

export default function HeaderPaciente({ ativo, setAtivo, paciente }) {
  const [menuAberto, setMenuAberto] = useState(false);

  // pega paciente se não veio por props
  useEffect(() => {
    if (!paciente) {
      const dados = localStorage.getItem("paciente");
      if (dados) {
        try {
          // nada de setState extra aqui; page.jsx já guarda paciente,
          // este efeito só garante uso local se necessário
        } catch (e) {
          console.error("Erro ao ler paciente local:", e);
        }
      }
    }
  }, [paciente]);

  const nomeCurto = paciente?.nome ? paciente.nome.split(" ")[0] : null;

  const itens = [
    { id: "inicio", label: "Início", icon: <MdChat size={18} /> },
    { id: "agendar", label: "Agendar", icon: <MdEventAvailable size={18} /> },
    { id: "terapia", label: "Terapias", icon: <MdChat size={18} /> },
    { id: "perfil", label: "Perfil", icon: <MdPerson size={18} /> },
  ];

  return (
    <>
      <header className="w-full py-4 shadow-md" style={{ backgroundColor: "#D33865" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
          {/* esquerda: logo + nome da clínica */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-[2px]">
              <Image src={Logo} alt="Logo" width={44} height={44} style={{ objectFit: "cover" }} />
            </div>
            <div>
              <h1 className="text-lg font-semibold" style={{ color: "#F4EFEA" }}>Clínica Mente Viva</h1>
              <p className="text-xs" style={{ color: "#F4EFEA" }}>Cuidado em saúde mental</p>
            </div>
          </div>

          {/* nav desktop */}
          <nav className="hidden md:flex items-center gap-3">
            {itens.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setAtivo(id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200`}
                style={
                  ativo === id
                    ? { backgroundColor: "#38d3a6", color: "#073425" } // verde ativo
                    : { backgroundColor: "transparent", color: "#F4EFEA" } // texto off-white
                }
              >
                <span className="flex items-center">{icon}</span>
                <span>{label}</span>
              </button>
            ))}
          </nav>

          {/* saudação e menu mobile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-3 bg-[#2f6f57] px-3 py-2 rounded-full shadow-sm hover:scale-[1.02] transition-transform" title={paciente?.nome || "Paciente"}>
              {/* ícone do paciente - reaproveitando a logo em círculo */}
              <div className="w-8 h-8 rounded-full overflow-hidden bg-white p-[2px]">
                <Image src={Logo} alt="icone paciente" width={32} height={32} style={{ objectFit: "cover" }} />
              </div>
              <div className="text-left">
                <div style={{ color: "#FFFFFF" }} className="text-sm font-semibold">
                  {nomeCurto ? `Bem-vindo de volta, ${nomeCurto}!` : "Bem-vindo!"}
                </div>
                <div style={{ color: "#EDE8E4" }} className="text-xs">Sua saúde importa</div>
              </div>
            </div>

            {/* menu mobile - simplificado */}
            <button
              className="md:hidden px-3 py-2 rounded-full bg-white/10 text-white"
              onClick={() => setMenuAberto(!menuAberto)}
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* menu mobile dropdown */}
        {menuAberto && (
          <div className="md:hidden mt-2 px-6 pb-4">
            <div className="bg-white/10 rounded-xl p-3 flex flex-col gap-2">
              {itens.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => {
                    setAtivo(id);
                    setMenuAberto(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg font-medium`}
                  style={ativo === id ? { backgroundColor: "#38d3a6", color: "#073425" } : { color: "#F4EFEA" }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
