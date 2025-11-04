"use client";
import { createContext, useContext, useState, useEffect } from "react";

const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
    const [idioma, setIdioma] = useState("pt");

    useEffect(() => {
        const idiomaSalvo = localStorage.getItem("idioma");
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (idiomaSalvo) setIdioma(idiomaSalvo);
    }, []);

    useEffect(() => {
        localStorage.setItem("idioma", idioma);
    }, [idioma]);

    return (
        <IdiomaContext.Provider value={{ idioma, setIdioma }}>
            {children}
        </IdiomaContext.Provider>
    );
}

export function useIdioma() {
    return useContext(IdiomaContext);
}