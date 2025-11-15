"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdFingerprint } from "react-icons/md";
import LoginPsicologo from "./LoginPsicologo";
import LoginPaciente from "./LoginPaciente";

export default function TelaInicial() {
    const [loginSelecionado, setLoginSelecionado] = useState(null);
    const [hover, setHover] = useState(false);

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-gradient-to-t from-[#1493D1] to-[#ccf0f6] relative">

            {/* Lado esquerdo — imagem da clínica visível em qualquer tela */}
            <div className="flex flex-[0.5] md:flex-[1.3] min-h-[200px] md:min-h-full bg-[#1493D1] bg-[url('/teste.png')] bg-contain bg-center bg-no-repeat relative">
                <div className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-[#001f3f] via-[#1493D1] to-[#001f3f] animate-borderMove" />
            </div>

            {/* Botão voltar */}
            {loginSelecionado && (
                <button
                    onClick={() => setLoginSelecionado(null)}
                    className={`group absolute right-0 top-1/5 transform -translate-y-1/2 px-1 py-2 rounded-l-full cursor-pointer font-semibold hover:opacity-90 transition flex items-center justify-center ${
                        loginSelecionado === "psicologo" || loginSelecionado === "paciente"
                            ? "bg-[#001f3f] text-white"
                            : ""
                    }`}
                >
                    <MdKeyboardArrowLeft size={24} />
                    <span className="p-0 m-0 flex text-[0px] overflow-hidden transition-all duration-300 group-hover:text-xs">
                        VOLTAR
                    </span>
                </button>
            )}

            {/* Lado direito — login */}
            <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-8">
                <h1 className="text-center font-extrabold text-3xl sm:text-4xl md:text-5xl leading-snug mb-8">
                    <span className={`block text-[#1493D1] ${loginSelecionado === "psicologo" ? "text-black" : ""}`}>
                        CLÍNICA MIUDESA
                    </span>
                    <span className="block mt-1 text-[#0A3A5A] text-lg md:text-xl italic">
                        CUIDADO QUE NASCE NO DETALHE
                    </span>
                </h1>

                {/* Login */}
                {loginSelecionado === "psicologo" ? (
                    <LoginPsicologo />
                ) : loginSelecionado === "paciente" ? (
                    <LoginPaciente />
                ) : (
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`relative flex items-center justify-center transition-all duration-500 rounded-full shadow-xl cursor-pointer overflow-hidden
                            ${hover ? "w-60 h-60 sm:w-72 sm:h-72" : "w-20 h-20 sm:w-24 sm:h-24"}
                            ${hover ? "bg-[#0A3A5A]" : "bg-[#0A3A5A]"}
                        `}
                    >
                        {!hover && (
                            <span className="text-xl font-bold text-[#FDFBD4] transition-all duration-300">
                                <MdFingerprint size={80} className="sm:h-24 sm:w-24"/>
                            </span>
                        )}

                        {hover && (
                            <div className="flex w-full h-full">
                                <button
                                    onClick={() => setLoginSelecionado("psicologo")}
                                    className="w-1/2 h-full bg-[#001f3f] text-white text-lg sm:text-xl font-bold flex items-center justify-center hover:scale-110 transition-transform duration-300 rounded-l-full cursor-pointer"
                                >
                                    PSICÓLOGO
                                </button>

                                <button
                                    onClick={() => setLoginSelecionado("paciente")}
                                    className="w-1/2 h-full bg-white text-[#001f3f] text-lg sm:text-xl font-bold flex items-center justify-center hover:scale-110 transition-transform duration-300 rounded-r-full cursor-pointer"
                                >
                                    PACIENTE
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
