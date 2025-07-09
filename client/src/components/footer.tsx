import { Flame } from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { href: "#portal", label: "Portal de Entrada" },
    { href: "#niveis", label: "Níveis Iniciáticos" },
    { href: "#entidades", label: "Entidades Centrais" },
    { href: "#biblioteca", label: "Biblioteca" },
  ];

  const resourceLinks = [
    { href: "#", label: "Guia do Iniciante" },
    { href: "#", label: "Calendário Ritual" },
    { href: "#", label: "Fórum da Comunidade" },
    { href: "#", label: "Suporte" },
  ];

  return (
    <footer className="bg-abyss border-t border-ritual-gold/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-ritual-gradient rounded-full flex items-center justify-center border border-ritual-gold/30">
                <Flame className="text-ritual-gold" />
              </div>
              <div>
                <h3 className="font-cinzel text-xl font-bold text-ritual-gold">
                  Templo do Abismo
                </h3>
                <p className="text-sm text-gray-400">Via da Mão Esquerda</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Um santuário dedicado à preservação e transmissão dos ensinamentos
              ancestrais do Luciferianismo, oferecendo uma jornada estruturada
              através dos mistérios da Via da Mão Esquerda.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ritual-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ritual-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-.962 6.502-.378 1.431-.81 1.65-1.341 1.65-.217 0-.533-.081-.533-.081l-1.088-.426s-.25-.027-.33-.094c-.1-.084-.173-.228-.173-.228l-.516-1.531L12.39 10l-.3.914-.3.914-.533.853-.566 1.066s-.214 1.006-.36 1.058c-.145.053-.53-.008-.6-.173a15.494 15.494 0 0 1-.733-1.963l-.484-1.483a38.257 38.257 0 0 0-.3-.914s-.87.019-.87.019-.24-.027-.336-.094c-.09-.067-.168-.186-.168-.186l-3.31-10.257a1.047 1.047 0 0 1 .006-.54.509.509 0 0 1 .398-.297c.273-.05.7-.012.7-.012s.088 0 .128.056a.757.757 0 0 1 .09.145c.044.097.067.225.067.225l1.963 6.075.614 1.9.307.953.306-.953.614-1.9 1.963-6.075s.023-.128.067-.225a.757.757 0 0 1 .09-.145c.04-.056.128-.056.128-.056s.427-.038.7.012a.509.509 0 0 1 .398.297 1.047 1.047 0 0 1 .006.54l-3.31 10.257s-.078.119-.168.186c-.096.067-.336.094-.336.094s-.87-.019-.87-.019a38.257 38.257 0 0 0-.3.914l-.484 1.483a15.494 15.494 0 0 1-.733 1.963c-.07.165-.455.226-.6.173-.146-.052-.36-1.058-.36-1.058l-.566-1.066-.533-.853-.3-.914-.3-.914L11.61 10l1.221 3.757-.516 1.531s-.073.144-.173.228c-.08.067-.33.094-.33.094l-1.088.426s-.316.081-.533.081c-.531 0-.963-.219-1.341-1.65 0 0-.782-4.604-.962-6.502-.016-.166.004-.38.02-.472a.506.506 0 0 1 .171-.325c.144-.117.365-.142.465-.14z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ritual-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel font-bold text-ritual-gold mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ritual-gold transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cinzel font-bold text-ritual-gold mb-4">
              Recursos
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-ritual-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-ritual-gold/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Templo do Abismo. Preservando a tradição ancestral com
            respeito e sabedoria.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Desenvolvido com tecnologias modernas: Vite + React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
