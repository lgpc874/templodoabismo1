import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import LevelsSection from "@/components/levels-section";
import EntitiesSection from "@/components/entities-section";
import LibrarySection from "@/components/library-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-abyss text-foreground scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <LevelsSection />
        <EntitiesSection />
        <LibrarySection />
      </main>
      <Footer />
    </div>
  );
}
