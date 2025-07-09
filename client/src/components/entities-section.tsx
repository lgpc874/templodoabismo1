import { entities } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, Moon, Zap, Key } from "lucide-react";

const iconMap = {
  "🔥": Flame,
  "🌙": Moon,
  "⚡": Zap,
  "🗝️": Key,
};

export default function EntitiesSection() {
  return (
    <section id="entidades" className="py-20 bg-abyss">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-ritual-gold mb-6">
            Entidades Centrais
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Os seres primordiais que guiam e inspiram nossa jornada através dos
            mistérios da Via da Mão Esquerda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {entities.map((entity) => {
            const IconComponent = iconMap[entity.icon as keyof typeof iconMap];
            return (
              <Card
                key={entity.id}
                className={`group relative overflow-hidden bg-gradient-to-b ${entity.gradient} border ${entity.borderColor}/40 hover:${entity.borderColor}/80 transition-all duration-500 hover:shadow-2xl hover:shadow-${entity.color}-500/30 text-center h-full`}
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-15 rounded-2xl"></div>
                <CardContent className="relative p-8">
                  <div className="mb-6">
                    <div className={`w-20 h-20 mx-auto bg-ritual-black rounded-full flex items-center justify-center border-2 ${entity.borderColor} mb-4`}>
                      <IconComponent className={`${entity.textColor} text-3xl`} />
                    </div>
                    <h3 className="font-cinzel text-2xl font-bold text-white mb-2">
                      {entity.name}
                    </h3>
                    <p className={`${entity.textColor} text-sm`}>{entity.title}</p>
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {entity.description}
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-ritual-black/30 rounded-lg p-2">
                      <span className={`${entity.textColor} font-medium`}>
                        Domínio:
                      </span>{" "}
                      {entity.domain}
                    </div>
                    <div className="bg-ritual-black/30 rounded-lg p-2">
                      <span className={`${entity.textColor} font-medium`}>
                        Elemento:
                      </span>{" "}
                      {entity.element}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
