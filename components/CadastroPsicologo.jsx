"use client";
import { useState } from "react";
import LoginPaciente from "./LoginPaciente";
import apiClient from "@/services/api"; // <- IMPORTANTE: mesmo client usado no login

export default function CadastroPaciente() {
    const [mostrarLogin, setMostrarLogin] = useState(false);

    // Estados dos inputs
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [genero, setGenero] = useState("");

    // Estado para mensagens
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");

    const handleVoltarLogin = () => setMostrarLogin(true);

    // Função de envio para API
    const handleCadastro = async () => {
        setErro("");
        setSucesso("");

        if (!nome || !email || !senha || !genero) {
            setErro("Preencha todos os campos.");
            return;
        }

        try {
            const response = await apiClient.post("/pacientes", {
                nome,
                email,
                senha,
                genero,
            });

            setSucesso("Cadastro realizado com sucesso!");
            setTimeout(() => setMostrarLogin(true), 1500);

        } catch (error) {
            console.log("Erro no cadastro:", error);

            const msg =
                error.response?.data?.erro ||
                error.response?.data?.mensagem ||
                "Erro ao realizar cadastro.";

            setErro(msg);
        }
    };

    if (mostrarLogin) return <LoginPaciente />;

    return (
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-10 w-full items-center">

            {/* CAMPOS */}
            <input
                className="w-full bg-[#E3FCFF] p-3 rounded-xl shadow-lg text-black placeholder:text-left"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                className="w-full bg-[#E3FCFF] p-3 rounded-xl shadow-lg text-black placeholder:text-left"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="w-full bg-[#E3FCFF] p-3 rounded-xl shadow-lg text-black"
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <select
                className="w-full bg-[#E3FCFF] p-3 rounded-xl shadow-lg text-black"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
            >
                <option value="">--Selecione seu gênero--</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>

            {/* BOTÃO */}
            <button
                onClick={handleCadastro}
                className="w-full text-black font-bold bg-[#38d3a6] p-5 rounded-full shadow-lg cursor-pointer hover:opacity-90 transition"
            >
                CADASTRE-SE
            </button>

            {/* MENSAGENS */}
            {erro && <p className="text-red-600 font-semibold">{erro}</p>}
            {sucesso && <p className="text-green-600 font-semibold">{sucesso}</p>}

            {/* VOLTAR PARA LOGIN */}
            <p className="text-black dark:text-[#FDFBD4] text-sm">
                Já tem uma conta?{" "}
                <button
                    onClick={handleVoltarLogin}
                    className="text-[#38d3a6] font-semibold hover:underline transition"
                >
                    Faça Login
                </button>
            </p>
        </div>
    );
}
