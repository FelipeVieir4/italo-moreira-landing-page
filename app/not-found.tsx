import Link from 'next/link';

export default function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textPrimary font-primary">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="text-lg mb-6">Não há nada por aqui!!!</p>
            <div className="flex items-center justify-center mb-6">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-32 h-32 text-highlight"
                >
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
            </div>
            <Link href="/">
                <span className="px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight-dark transition font-secondary">
                    Voltar para a página inicial
                </span>
            </Link>
        </div>
    );
}