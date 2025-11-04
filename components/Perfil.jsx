"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { updatePsicologo } from "@/services/api";

export default function Perfil({ onClose }) {
  const [psicologo, setPsicologo] = useState(null);
  const [editando, setEditando] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    idade: "",
    email: "",
  });
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("psicologo");
    if (dados) {
      try {
        const parsed = JSON.parse(dados);
        setPsicologo(parsed);
        setForm({
          nome: parsed.nome || "",
          telefone: parsed.telefone || "",
          idade: parsed.idade || "",
          email: parsed.email || "",
        });
      } catch (e) {
        console.error("Erro ao ler dados do psicólogo:", e);
      }
    }
  }, []);

  async function handleSalvar() {
    setCarregando(true);
    setErro("");
    try {
      const { data } = await updatePsicologo(psicologo.id, form);
      const atualizado = data.psicologo || form;
      localStorage.setItem("psicologo", JSON.stringify(atualizado));
      setPsicologo(atualizado);
      setEditando(false);
    } catch (err) {
      setErro(err.message || "Erro ao salvar dados.");
    } finally {
      setCarregando(false);
    }
  }

  function handleLogout() {
    localStorage.removeItem("psicologo");
    window.location.href = "/";
  }

  if (!psicologo) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
        <div className="bg-[#FDFBD4] dark:bg-[#121212] p-6 rounded-2xl shadow-xl text-center">
          <p className="text-[#D33865]">Carregando informações...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-[#FDFBD4] dark:bg-[#121212] text-[#D33865] p-6 rounded-2xl shadow-xl w-[90%] md:w-[400px]">
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            src={Logo}
            alt={`Foto de perfil de ${psicologo.nome}`}
            width={80}
            height={80}
            className="rounded-full border-4 border-[#D33865]/50 shadow-inner"
          />
          <h4 className="mt-3 text-xl font-semibold text-[#D33865] dark:text-[#FDFBD4]">
            {psicologo.nome}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {psicologo.especializacao || "Psicólogo(a)"}
          </p>
        </div>

        {!editando ? (
          <>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
                  E-mail:
                </span>{" "}
                {psicologo.email}
              </p>
              <p>
                <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
                  Telefone:
                </span>{" "}
                {psicologo.telefone}
              </p>
              <p>
                <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
                  CRP:
                </span>{" "}
                {psicologo.crp}
              </p>
              <p>
                <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
                  Idade:
                </span>{" "}
                {psicologo.idade} anos
              </p>
            </div>

            <div className="w-full flex flex-col gap-2 mt-6">
              <button
                onClick={() => setEditando(true)}
                className="w-full py-2 rounded-full bg-[#D33865] text-[#FDFBD4] hover:opacity-90 transition-all cursor-pointer"
              >
                Editar Dados
              </button>
              <button
                onClick={handleLogout}
                className="w-full py-2 rounded-full bg-[#b12c54] text-[#FDFBD4] hover:opacity-90 transition-all cursor-pointer"
              >
                Logout
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 rounded-full bg-gray-400 text-white hover:opacity-90 transition-all cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Nome"
                className="w-full bg-[#FFE3EB] p-3 rounded-xl shadow-inner text-black"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="E-mail"
                className="w-full bg-[#FFE3EB] p-3 rounded-xl shadow-inner text-black"
              />
              <input
                type="text"
                value={form.telefone}
                onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                placeholder="Telefone"
                className="w-full bg-[#FFE3EB] p-3 rounded-xl shadow-inner text-black"
              />
              <input
                type="number"
                value={form.idade}
                onChange={(e) => setForm({ ...form, idade: e.target.value })}
                placeholder="Idade"
                className="w-full bg-[#FFE3EB] p-3 rounded-xl shadow-inner text-black"
              />
            </div>

            {erro && <p className="text-red-600 text-sm mt-2">{erro}</p>}

            <div className="flex flex-col gap-2 mt-6">
              <button
                onClick={handleSalvar}
                disabled={carregando}
                className="w-full py-2 rounded-full bg-[#D33865] text-[#FDFBD4] hover:opacity-90 transition-all cursor-pointer disabled:opacity-60"
              >
                {carregando ? "Salvando..." : "Salvar"}
              </button>
              <button
                onClick={() => setEditando(false)}
                className="w-full py-2 rounded-full bg-gray-400 text-white hover:opacity-90 transition-all cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
