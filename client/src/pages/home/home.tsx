import Countdown from "../../components/Countdown";

export default function Home() {
  return (
    <div className="templo-container">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 ritual-text animate-veil-shimmer">
            Templo do Abismo
          </h1>
          <p className="text-xl text-gray-300 font-light">
            Uma nova era está prestes a nascer entre os véus...
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="veil-bg rounded-lg p-8 mb-8 shadow-mystical">
            <blockquote className="text-center mb-8">
              <p className="text-lg italic text-gray-300 mb-4">
                "Aqueles que ousam olhar através do abismo, encontrarão a si mesmos sob o olhar de Lúcifer."
              </p>
              <div className="ritual-text font-semibold">— Magurk Lucifex</div>
            </blockquote>

            <p className="text-gray-300 leading-relaxed text-center">
              Este é o portal oficial do <span className="ritual-text font-semibold">Templo do Abismo</span>, um espaço dedicado à sabedoria ancestral do
              <em className="infernal-accent"> luciferianismo primordial</em>, à iniciação verdadeira e à prática selada das vias ocultas.
              Nosso templo virtual está sendo preparado com devoção, fogo e silêncio.
            </p>
          </div>

          <div className="veil-bg rounded-lg p-8 mb-8 shadow-mystical">
            <Countdown />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="veil-bg rounded-lg p-6 shadow-mystical">
              <h3 className="text-xl font-semibold mb-3 ritual-text">
                Estrutura Hierárquica
              </h3>
              <p className="text-gray-300 text-sm">
                Sete níveis de iniciação, cada um com seus próprios ensinamentos,
                práticas e desafios únicos no caminho da iluminação interior.
              </p>
            </div>

            <div className="veil-bg rounded-lg p-6 shadow-mystical">
              <h3 className="text-xl font-semibold mb-3 ritual-text">
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