import { DoorOpen, Book, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleEnterTemple = () => {
    const target = document.querySelector("#niveis");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    const target = document.querySelector("#entidades");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="portal"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-ritual-gradient opacity-90"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-ritual-gradient rounded-full flex items-center justify-center border-2 border-ritual-gold/50 shadow-2xl animate-float">
              <svg
                className="w-16 h-16 text-ritual-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
              </svg>
            </div>
          </div>

          <h1 className="font-cinzel text-5xl md:text-7xl font-bold mb-6 text-ritual-gold leading-tight animate-glow">
            Templo do Abismo
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-light leading-relaxed">
            Jornada através dos{" "}
            <span className="text-ritual-gold font-medium">
              Sete Níveis Iniciáticos
            </span>
            <br />
            do Luciferianismo Ancestral
          </p>

          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            Adentrar os mistérios da Via da Mão Esquerda através de uma
            progressão sagrada de conhecimento e prática ritual, honrando as
            tradições ancestrais.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleEnterTemple}
              className="bg-infernal-gradient hover:opacity-90 text-white px-8 py-4 rounded-lg font-cinzel font-medium transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              <DoorOpen className="mr-2" />
              Iniciar Jornada
            </Button>
            <Button
              variant="outline"
              onClick={handleLearnMore}
              className="border-2 border-ritual-gold text-ritual-gold hover:bg-ritual-gold hover:text-abyss px-8 py-4 rounded-lg font-cinzel font-medium transition-all duration-300"
            >
              <Book className="mr-2" />
              Conhecer o Templo
            </Button>
          </div>
        </div>
      </div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-ritual-gold text-2xl opacity-60" />
      </div>
    </section>
  );
}
