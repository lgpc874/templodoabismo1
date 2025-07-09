import { levels } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Flame, Eye, ScrollText, BookOpen, Star, Key } from "lucide-react";

const iconMap = {
  7: Crown,
  6: Flame,
  5: Eye,
  4: ScrollText,
  3: BookOpen,
  2: Star,
  1: Key,
};

export default function LevelsSection() {
  const topLevels = levels.slice(0, 3); // VII, VI, V
  const lowerLevels = levels.slice(3); // IV, III, II, I

  return (
    <section id="niveis" className="py-20 bg-ritual-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-ritual-gold mb-6">
            Os Sete Níveis Iniciáticos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma progressão sagrada através dos mistérios, onde cada nível revela
            conhecimentos mais profundos da tradição ancestral.
          </p>
        </div>

        <div className="space-y-8">
          {/* Top 3 levels - detailed cards */}
          {topLevels.map((level) => {
            const IconComponent = iconMap[level.level as keyof typeof iconMap];
            return (
              <Card
                key={level.id}
                className="group relative overflow-hidden border-ritual-gold/30 hover:border-ritual-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-ritual-gold/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-infernal/20 to-ritual-black/80"></div>
                <CardContent className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-sacred-gradient rounded-full flex items-center justify-center text-abyss text-2xl font-bold font-cinzel">
                        {level.level === 7 ? "VII" : level.level === 6 ? "VI" : "V"}
                      </div>
                      <div>
                        <h3 className="font-cinzel text-2xl font-bold text-ritual-gold">
                          {level.name}
                        </h3>
                        <p className="text-gray-300">{level.title}</p>
                      </div>
                    </div>
                    <div className="text-ritual-gold text-3xl">
                      <IconComponent />
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {level.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {level.requirements.map((req, index) => (
                      <span
                        key={index}
                        className="bg-ritual-gold/20 text-ritual-gold px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          {/* Lower 4 levels - grid format */}
          <div className="grid md:grid-cols-2 gap-6">
            {lowerLevels.map((level) => {
              const IconComponent = iconMap[level.level as keyof typeof iconMap];
              return (
                <Card
                  key={level.id}
                  className="bg-obsidian/60 border-gray-600/30 hover:border-gray-500/50 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold font-cinzel">
                        {level.level === 4 ? "IV" : level.level === 3 ? "III" : level.level === 2 ? "II" : "I"}
                      </div>
                      <div>
                        <h4 className="font-cinzel text-lg font-bold text-gray-200">
                          {level.name}
                        </h4>
                        <p className="text-gray-400 text-sm">{level.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {level.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
