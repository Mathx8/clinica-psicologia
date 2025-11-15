"use client";
import { useState } from "react";
import { loginPaciente } from "@/services/api";
import CadastroPaciente from "./CadastroPaciente";

export default function LoginPaciente() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  const handleCadastroClick = () => setMostrarCadastro(true);

  async function handleLogin() {
    setErro("");
    setCarregando(true);
    try {
      const paciente = await loginPaciente(email, senha);
      localStorage.setItem("paciente", JSON.stringify(paciente));
      alert(`Bem-vindo(a), ${paciente.nome}!`);
      window.location.href = "/paciente"; // redireciona após login
    } catch (err) {
      console.error("Erro no login:", err);
      setErro(err.message);
    } finally {
      setCarregando(false);
    }
  }

  if (mostrarCadastro) return <CadastroPaciente />;

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-10 w-full items-center">
      <input
        className="w-full bg-[#E3FCFF] p-5 rounded-xl shadow-lg text-black placeholder:text-left"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full bg-[#E3FCFF] p-5 rounded-xl shadow-lg text-black"
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      {erro && <p className="text-red-600 text-sm">{erro}</p>}

      <a className="text-[#0A3A5A] self-start hover:underline transition-colors" href="#">
        Esqueceu a senha?
      </a>

      <button
        onClick={handleLogin}
        disabled={carregando}
        className="w-full text-white font-bold bg-[#0A3A5A] p-5 rounded-full shadow-lg cursor-pointer disabled:opacity-60 hover:bg-[#073057] transition-colors"
      >
        {carregando ? "Entrando..." : "ENTRAR"}
      </button>

      <p className="text-black dark:text-[#FDFBD4] text-sm">
        Não é cliente ainda?{" "}
        <button
          onClick={handleCadastroClick}
          className="text-[#0A3A5A] font-semibold hover:underline transition-colors"
        >
          Faça seu cadastro
        </button>
      </p>
    </div>
  );
}
