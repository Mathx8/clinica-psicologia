export default function Header() {
    return(
        <header className="flex h-15 min-w-screen items-center justify-between px-15 bg-blue-600 font-sans">
            <h1 className="text-xl font-bold">Cliníca</h1>
            <nav className="flex gap-5">
                <a className="hover:text-white" href="">Pacientes</a>
                <a className="hover:text-white" href="">Calendário</a>
            </nav>
        </header>
    );
}