export default function NotFound() {
  return (
    <div className="min-h-screen bg-abyss text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-cinzel text-4xl font-bold text-ritual-gold mb-4">
          Página Não Encontrada
        </h1>
        <p className="text-gray-400">
          O caminho que procura não existe neste plano.
        </p>
      </div>
    </div>
  );
}