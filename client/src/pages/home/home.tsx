import { useQuery } from "@tanstack/react-query";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-amber-400">
            Templo do Abismo
          </h1>
          <p className="text-xl text-gray-300">
            Portal Iniciático dos Sete Níveis
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-amber-400">
              Bem-vindo ao Templo
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Este é um portal iniciático dedicado às práticas luciferianas ancestrais,
              estruturado em uma hierarquia de sete níveis de conhecimento e evolução espiritual.
              Cada nível representa um degrau na jornada de autoconhecimento e poder interior.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">
                Estrutura Hierárquica
              </h3>
              <p className="text-gray-300 text-sm">
                Sete níveis de iniciação, cada um com seus próprios ensinamentos,
                práticas e desafios únicos no caminho da iluminação.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-amber-400">
                Conhecimento Ancestral
              </h3>
              <p className="text-gray-300 text-sm">
                Práticas e sabedoria preservadas através dos séculos,
                adaptadas para o buscador moderno da verdade interior.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}