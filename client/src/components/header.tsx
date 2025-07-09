import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Flame } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#portal", label: "Portal" },
    { href: "#niveis", label: "Níveis" },
    { href: "#entidades", label: "Entidades" },
    { href: "#biblioteca", label: "Biblioteca" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-ritual-black/95 backdrop-blur-sm" : "bg-transparent"
      } border-b border-ritual-gold/20`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-12 h-12 bg-ritual-gradient rounded-full flex items-center justify-center border border-ritual-gold/30 group-hover:border-ritual-gold/60 transition-colors">
              <Flame className="text-ritual-gold text-xl" />
            </div>
            <div>
              <h1 className="font-cinzel text-xl font-bold text-ritual-gold">
                Templo do Abismo
              </h1>
              <p className="text-sm text-gray-400">Via da Mão Esquerda</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-ritual-gold transition-colors font-cormorant"
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
            ))}
          </div>

          <button
            className="md:hidden text-ritual-gold"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-ritual-black/95 rounded-lg border border-ritual-gold/20">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-ritual-gold transition-colors font-cormorant"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
