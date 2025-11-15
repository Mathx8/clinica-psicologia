"use client";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdFingerprint } from "react-icons/md";
import LoginPsicologo from "./LoginPsicologo";
import LoginPaciente from "./LoginPaciente";

export default function TelaInicial() {
    const [loginSelecionado, setLoginSelecionado] = useState(null);
    const [hover, setHover] = useState(false);

    return (
        <div 
            className="
                min-h-screen 
                flex items-stretch justify-evenly 
                bg-gradient-to-t 
                from-[#1493D1] 
                to-[#ccf0f6] 
                relative
            "
        >
            <div 
                className="
                    flex md:flex hidden
                    flex-[1.3]
                    min-h-full
                    bg-[#1493D1]
                    bg-[url('/teste.png')]
                    bg-contain
                    bg-center
                    bg-no-repeat
                    relative
                "
            >
                <div className="absolute top-0 right-0 h-full w-[4px] bg-gradient-to-b from-[#001f3f] via-[#1493D1] to-[#001f3f] animate-borderMove" />
            </div>

            {loginSelecionado && (
                <button
                    onClick={() => setLoginSelecionado(null)}
                    className={`group absolute right-0 top-1/5 transform -translate-y-1/2 px-1 py-2 rounded-l-full cursor-pointer font-semibold hover:opacity-90 transition flex items-center justify-center ${
                        loginSelecionado === "psicologo"
                            ? "bg-[#001f3f] text-white"
                            : loginSelecionado === "paciente"
                                ? "bg-[#38d3a6] text-black"
                                : ""
                    }`}
                >
                    <MdKeyboardArrowLeft size={24} />
                    <span className="p-0 m-0 flex text-[0px] overflow-hidden transition-all duration-300 group-hover:text-xs">
                        VOLTAR
                    </span>
                </button>
            )}

            <div className="min-h-screen flex flex-col justify-between items-center p-8 w-full md:flex-[0.7]">
                <div className="flex items-center w-full gap-4 mb-8">
                    <h1 className="flex-1 text-center font-extrabold md:text-5xl text-4xl leading-snug">
                        <span className={`block text-[#1493D1] ${loginSelecionado === "psicologo" ? "text-black" : ""}`}>
                            CLÍNICA MIUDESA
                        </span>
                        <span className="block mt-1 text-[#0A3A5A] text-lg md:text-xl italic">
                            CUIDADO QUE NASCE NO DETALHE
                        </span>
                    </h1>
                </div>

                {loginSelecionado === "psicologo" ? (
                    <LoginPsicologo />
                ) : loginSelecionado === "paciente" ? (
                    <LoginPaciente />
                ) : (
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`relative flex items-center justify-center transition-all duration-500 rounded-full shadow-xl cursor-pointer overflow-hidden
                            ${hover ? "w-72 h-72" : "w-24 h-24"}
                            ${hover ? "bg-[#0A3A5A] dark:bg-[#FDFBD4]" : "bg-[#0A3A5A] dark:bg-[#eae9c3]"}
                        `}
                    >
                        {!hover && (
                            <span className="text-xl font-bold text-[#FDFBD4] dark:text-black transition-all duration-300">
                                <MdFingerprint size={100} />
                            </span>
                        )}

                        {hover && (
                            <div className="flex w-full h-full">
                                <button
                                    onClick={() => setLoginSelecionado("psicologo")}
                                    className="w-1/2 h-full bg-[#001f3f] text-white text-xl font-bold flex items-center justify-center hover:scale-110 transition-transform duration-300 rounded-l-full cursor-pointer"
                                >
                                    PSICÓLOGO
                                </button>

                                <button
                                    onClick={() => setLoginSelecionado("paciente")}
                                    className="w-1/2 h-full text-[#001f3f] text-xl font-bold flex items-center justify-center hover:scale-110 transition-transform duration-300 rounded-r-full cursor-pointer"
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
