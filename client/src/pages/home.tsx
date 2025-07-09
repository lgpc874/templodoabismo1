export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header do Templo */}
      <nav className="nav-templo">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="titulo">
              ⚡ Templo do Abismo
            </div>
            <div className="flex gap-4">
              <a href="#niveis" className="nav-link ativo">Níveis</a>
              <a href="#entidades" className="nav-link">Entidades</a>
              <a href="#biblioteca" className="nav-link">Biblioteca</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container">
        <div className="content-section text-center fade-in">
          <div className="titulo glow-effect mb-6">
            ⚡ Templo do Abismo ⚡
          </div>
          
          <div className="subtitulo mb-8">
            Portal Iniciático da Via da Mão Esquerda
          </div>
          
          <div className="citacao-impacto mb-8">
            "Melhor reinar no Inferno do que servir no Céu"
          </div>
          
          <div className="citacao-traducao mb-12">
            — John Milton, Paraíso Perdido
          </div>
          
          <div className="texto mb-8">
            Bem-vindo ao <em className="destaque">Templo do Abismo</em>, um santuário sagrado dedicado 
            aos ensinamentos ancestrais do <strong>Luciferianismo</strong> e da <strong>Via da Mão Esquerda</strong>. 
            Aqui, através de uma progressão cuidadosa por <span className="destaque">sete níveis iniciáticos</span>, 
            você descobrirá os mistérios profundos da transformação espiritual e da iluminação através da adversidade.
          </div>
          
          <div className="flex justify-center gap-4 mb-12">
            <button className="botao-primario">
              Iniciar Jornada
            </button>
            <button className="botao-secundario">
              Explorar Templo
            </button>
          </div>
        </div>
      </section>

      {/* Níveis Iniciáticos */}
      <section id="niveis" className="container">
        <div className="categoria-conhecimento">
          Os Sete Níveis da Iniciação
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Nível VII - Adeptus Exemptus */}
          <div className="nivel-iniciatico">
            <div className="numero-nivel">VII</div>
            <div className="entidade-nome">Adeptus Exemptus</div>
            <div className="entidade-titulo">O Mestre dos Abismos</div>
            <div className="texto">
              O mais alto grau de realização, onde o iniciado transcende as limitações 
              mortais e se torna um com as forças primordiais do universo.
            </div>
            <div className="simbolo-ritual">👑</div>
          </div>

          {/* Nível VI - Adeptus Major */}
          <div className="nivel-iniciatico">
            <div className="numero-nivel">VI</div>
            <div className="entidade-nome">Adeptus Major</div>
            <div className="entidade-titulo">Senhor dos Elementos</div>
            <div className="texto">
              Domínio completo sobre as forças elementais e a capacidade de manifestar 
              mudanças profundas na realidade através da vontade direcionada.
            </div>
            <div className="simbolo-ritual">🔥</div>
          </div>

          {/* Nível V - Adeptus Minor */}
          <div className="nivel-iniciatico">
            <div className="numero-nivel">V</div>
            <div className="entidade-nome">Adeptus Minor</div>
            <div className="entidade-titulo">Guardião dos Segredos</div>
            <div className="texto">
              Acesso aos mistérios ocultos e desenvolvimento da visão espiritual 
              para perceber as realidades além do véu material.
            </div>
            <div className="simbolo-ritual">👁️</div>
          </div>

          {/* Nível IV - Philosophus */}
          <div className="card-ritual">
            <div className="numero-nivel">IV</div>
            <div className="entidade-nome">Philosophus</div>
            <div className="entidade-titulo">Buscador da Verdade</div>
            <div className="texto">
              Desenvolvimento da filosofia pessoal e compreensão dos princípios fundamentais.
            </div>
          </div>

          {/* Nível III - Practicus */}
          <div className="card-ritual">
            <div className="numero-nivel">III</div>
            <div className="entidade-nome">Practicus</div>
            <div className="entidade-titulo">Praticante Dedicado</div>
            <div className="texto">
              Aplicação prática dos ensinamentos através de rituais e exercícios espirituais.
            </div>
          </div>

          {/* Nível II - Theoricus */}
          <div className="card-ritual">
            <div className="numero-nivel">II</div>
            <div className="entidade-nome">Theoricus</div>
            <div className="entidade-titulo">Estudante da Teoria</div>
            <div className="texto">
              Estudo aprofundado dos fundamentos teóricos e simbolismo sagrado.
            </div>
          </div>
        </div>
      </section>

      {/* Entidades Centrais */}
      <section id="entidades" className="container">
        <div className="linha-separadora"></div>
        
        <div className="categoria-conhecimento">
          Entidades Centrais do Panteão
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="entidade-card">
            <div className="simbolo-ritual">🔥</div>
            <div className="entidade-nome">Lúcifer</div>
            <div className="entidade-titulo">Portador da Luz</div>
            <div className="texto">
              O primeiro entre os rebeldes, símbolo da iluminação através da rebelião 
              contra limitações impostas, guardião do conhecimento proibido.
            </div>
          </div>

          <div className="entidade-card">
            <div className="simbolo-ritual">🌙</div>
            <div className="entidade-nome">Lilith</div>
            <div className="entidade-titulo">A Primeira Mulher</div>
            <div className="texto">
              Símbolo da feminilidade selvagem e indomável, representando a liberdade 
              sexual e espiritual, mãe dos íncubos e súcubos.
            </div>
          </div>

          <div className="entidade-card">
            <div className="simbolo-ritual">⚡</div>
            <div className="entidade-nome">Samael</div>
            <div className="entidade-titulo">Anjo da Morte</div>
            <div className="texto">
              O destruidor necessário, anjo da morte e da transformação, 
              guardião dos portais entre os mundos.
            </div>
          </div>

          <div className="entidade-card">
            <div className="simbolo-ritual">🗝️</div>
            <div className="entidade-nome">Hécate</div>
            <div className="entidade-titulo">Rainha das Bruxas</div>
            <div className="texto">
              Deusa tripla da magia, encruzilhadas e mistérios, guardiã dos 
              segredos da necromancia e transformação.
            </div>
          </div>
        </div>
      </section>

      {/* Biblioteca */}
      <section id="biblioteca" className="container">
        <div className="linha-separadora"></div>
        
        <div className="categoria-conhecimento">
          Biblioteca do Conhecimento Proibido
        </div>
        
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="livro-sagrado">
            <div className="entidade-nome">Textos Fundamentais</div>
            <div className="texto">
              • O Livro Negro de Satã<br/>
              • Azoëtia - Grimório Sabático<br/>
              • Qliphoth - Árvore da Morte
            </div>
          </div>

          <div className="livro-sagrado">
            <div className="entidade-nome">Práticas Rituais</div>
            <div className="texto">
              • Rituais de Invocação<br/>
              • Trabalho com Sigils<br/>
              • Alquimia Sexual
            </div>
          </div>

          <div className="livro-sagrado">
            <div className="entidade-nome">Estudos Avançados</div>
            <div className="texto">
              • Cabala Qliphótica<br/>
              • Demonologia Comparada<br/>
              • Metamorfose Espiritual
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container text-center py-12">
        <div className="linha-separadora"></div>
        <div className="citacao">
          "Ave Satanas, Ave Lucifer, Ave Astaroth"
        </div>
        <div className="texto">
          © 2025 Templo do Abismo - Preservando a tradição ancestral com respeito e sabedoria
        </div>
      </footer>
    </div>
  );
}