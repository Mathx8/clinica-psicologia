"use client";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Perfil({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-[#FDFBD4] dark:bg-[#121212] text-[#D33865] p-6 rounded-2xl shadow-xl w-[90%] md:w-[400px]">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="relative">
            <Image
              src={Logo}
              alt="Foto de perfil do Dr. Tiago"
              width={80}
              height={80}
              className="rounded-full border-4 border-[#D33865]/50 shadow-inner"
            />
          </div>
          <h4 className="mt-3 text-xl font-semibold text-[#D33865] dark:text-[#FDFBD4]">
            Dr. Tiago
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Psicólogo Clínico
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p>
            <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
              E-mail:
            </span>{" "}
            dr.tiago@exemplo.com
          </p>
          <p>
            <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
              Telefone:
            </span>{" "}
            (31) 99999-9999
          </p>
          <p>
            <span className="font-semibold text-[#b12c54] dark:text-[#f9c9d9]">
              CRM:
            </span>{" "}
            12345-MG
          </p>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2 rounded-full bg-[#D33865] text-[#FDFBD4] hover:opacity-90 transition-all cursor-pointer"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
