import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-textPrimary font-primary">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="text-lg mb-6">Desculpe, a página que você está procurando não existe.</p>
            <Link href="/">
                <span className="px-6 py-3 bg-highlight text-white rounded-md hover:bg-highlight-dark transition font-secondary">
                    Voltar para a página inicial
                </span>
            </Link>
        </div>
    );
}