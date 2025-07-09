import { useRoute } from "wouter";
import { levels } from "@/lib/data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Flame, Star } from "lucide-react";
import { Link } from "wouter";

export default function LevelDetail() {
  const [match, params] = useRoute("/level/:id");
  
  if (!match || !params?.id) {
    return <div>Level not found</div>;
  }

  const level = levels.find(l => l.id === parseInt(params.id));

  if (!level) {
    return (
      <div className="min-h-screen bg-abyss flex items-center justify-center">
        <Card className="max-w-md mx-4">
          <CardContent className="p-8 text-center">
            <h1 className="font-cinzel text-2xl font-bold text-ritual-gold mb-4">
              Nível Não Encontrado
            </h1>
            <p className="text-gray-400 mb-6">
              O nível solicitado não existe ou foi removido.
            </p>
            <Link href="/">
              <Button className="bg-ritual-gold text-abyss hover:opacity-90">
                <ArrowLeft className="mr-2" />
                Voltar ao Templo
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];

  return (
    <div className="min-h-screen bg-abyss text-foreground">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="border-ritual-gold text-ritual-gold hover:bg-ritual-gold hover:text-abyss">
                <ArrowLeft className="mr-2" />
                Voltar ao Templo
              </Button>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Level Header */}
            <div className="text-center mb-12">
              <div className="w-32 h-32 mx-auto mb-6 bg-ritual-gradient rounded-full flex items-center justify-center border-2 border-ritual-gold/50 shadow-2xl">
                <span className="font-cinzel text-4xl font-bold text-ritual-gold">
                  {romanNumerals[level.level - 1]}
                </span>
              </div>
              
              <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-ritual-gold mb-4">
                {level.name}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">{level.title}</p>
              
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {level.description}
              </p>
            </div>

            {/* Level Content */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Requirements */}
              <Card className="bg-ritual-black/80 border-ritual-gold/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-ritual-gold rounded-lg flex items-center justify-center mr-4">
                      <Star className="text-abyss" />
                    </div>
                    <h3 className="font-cinzel text-2xl font-bold text-ritual-gold">
                      Requisitos
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {level.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-ritual-gold rounded-full"></div>
                        <span className="text-gray-300">{req}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Practices */}
              <Card className="bg-ritual-black/80 border-crimson/30">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-crimson rounded-lg flex items-center justify-center mr-4">
                      <Flame className="text-white" />
                    </div>
                    <h3 className="font-cinzel text-2xl font-bold text-crimson">
                      Práticas
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {level.practices.map((practice, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-crimson rounded-full"></div>
                        <span className="text-gray-300">{practice}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation to Adjacent Levels */}
            <div className="flex justify-between items-center">
              {level.level > 1 && (
                <Link href={`/level/${level.id + 1}`}>
                  <Button variant="outline" className="border-gray-500 text-gray-400 hover:border-gray-400 hover:text-gray-300">
                    <ArrowLeft className="mr-2" />
                    Nível {romanNumerals[level.level - 2]}
                  </Button>
                </Link>
              )}
              
              <div className="flex-1"></div>
              
              {level.level < 7 && (
                <Link href={`/level/${level.id - 1}`}>
                  <Button variant="outline" className="border-gray-500 text-gray-400 hover:border-gray-400 hover:text-gray-300">
                    Nível {romanNumerals[level.level]}
                    <ArrowLeft className="ml-2 rotate-180" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
