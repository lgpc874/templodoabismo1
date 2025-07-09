import { knowledgeCategories, levels } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Flame, ScrollText } from "lucide-react";

const iconMap = {
  "📚": BookOpen,
  "🔥": Flame,
  "📜": ScrollText,
};

export default function LibrarySection() {
  return (
    <section id="biblioteca" className="py-20 bg-ritual-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-ritual-gold mb-6">
            Biblioteca do Conhecimento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Textos sagrados, rituais e ensinamentos organizados por nível
            iniciático, preservando a sabedoria ancestral.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {knowledgeCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const colorMap = {
              yellow: {
                bg: "bg-ritual-gold",
                text: "text-ritual-gold",
                border: "border-ritual-gold/20 hover:border-ritual-gold/40",
              },
              red: {
                bg: "bg-crimson",
                text: "text-crimson",
                border: "border-crimson/20 hover:border-crimson/40",
              },
              purple: {
                bg: "bg-purple-600",
                text: "text-purple-400",
                border: "border-purple-500/20 hover:border-purple-500/40",
              },
            };

            const colors = colorMap[category.color as keyof typeof colorMap];

            return (
              <Card
                key={category.category}
                className={`bg-obsidian/80 ${colors.border} transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="text-abyss text-xl" />
                    </div>
                    <h3 className={`font-cinzel text-2xl font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div
                        key={index}
                        className={`border-l-4 ${colors.border.split(' ')[0]} pl-4 py-2`}
                      >
                        <h4 className="font-medium text-gray-200 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                        <span className={`text-xs ${colors.text}`}>
                          {item.levels}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Access Navigation */}
        <Card className="mt-12 bg-ritual-gradient border-ritual-gold/30">
          <CardContent className="p-8">
            <h3 className="font-cinzel text-2xl font-bold text-ritual-gold mb-6 text-center">
              Acesso Rápido por Nível
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {levels.map((level) => {
                const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII"];
                return (
                  <Button
                    key={level.id}
                    variant="outline"
                    className="bg-obsidian/60 hover:bg-obsidian border-ritual-gold/20 hover:border-ritual-gold/50 p-4 h-auto transition-all duration-300 text-center group flex-col"
                  >
                    <div className="text-2xl font-bold text-ritual-gold mb-2 font-cinzel">
                      {romanNumerals[level.level - 1]}
                    </div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300">
                      {level.name}
                    </div>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
