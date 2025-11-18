"use client";
import { useState } from "react";
import apiClient from "@/services/api";

export default function CadastroPaciente() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [idade, setIdade] = useState("");
    const [genero, setGenero] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleCadastro = async () => {
        try {
            const response = await apiClient.post("/pacientes", {
                nome,
                idade: Number(idade),
                genero,
                telefone,
                email,
                senha_bash: senha
            });

            alert("Paciente cadastrado!");
            console.log(response.data);

        } catch (error) {
            console.error("Erro ao cadastrar paciente:", error);

            const msg = error.response?.data?.erros?.[0] || "Erro desconhecido.";
            alert(msg);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full items-center">
            
            <input
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />

            <input
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                placeholder="Senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />

            <input
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                placeholder="Idade"
                type="number"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />

            <input
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
            />

            <select
                className="w-full p-3 rounded-xl bg-[#E3FCFF] shadow-md text-black"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
            >
                <option value="">--Selecione o gênero--</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
            </select>

            <button
                onClick={handleCadastro}
                className="w-full bg-[#38d3a6] p-4 rounded-full font-bold shadow-lg hover:opacity-90 transition"
            >
                CADASTRAR
            </button>
        </div>
    );
}
