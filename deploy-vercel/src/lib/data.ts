export const levels = [
  {
    id: 7,
    level: 7,
    name: "Adeptus Exemptus",
    title: "O Mestre dos Abismos",
    description: "O mais alto grau de realização, onde o iniciado transcende as limitações mortais e se torna um com as forças primordiais do universo.",
    requirements: ["Metamorfose Completa", "União com o Absoluto", "Maestria Total"],
    practices: ["Transmutação Espiritual", "Ascensão Final", "Sabedoria Suprema"],
    symbols: ["👑", "🔥", "⭐"],
    gradient: "from-yellow-600 to-yellow-400",
    borderColor: "border-yellow-500",
    textColor: "text-yellow-400"
  },
  {
    id: 6,
    level: 6,
    name: "Adeptus Major",
    title: "Senhor dos Elementos",
    description: "Domínio completo sobre as forças elementais e a capacidade de manifestar mudanças profundas na realidade através da vontade direcionada.",
    requirements: ["Alquimia Avançada", "Manifestação", "Domínio Elemental"],
    practices: ["Rituais de Transformação", "Magia Cerimonial", "Invocações Superiores"],
    symbols: ["🔥", "🌪️", "⚡"],
    gradient: "from-red-600 to-red-400",
    borderColor: "border-red-500",
    textColor: "text-red-400"
  },
  {
    id: 5,
    level: 5,
    name: "Adeptus Minor",
    title: "Guardião dos Segredos",
    description: "Acesso aos mistérios ocultos e desenvolvimento da visão espiritual para perceber as realidades além do véu material.",
    requirements: ["Clarividência", "Rituais Avançados", "Conhecimento Oculto"],
    practices: ["Trabalho com Sigils", "Invocação de Entidades", "Scrying"],
    symbols: ["👁️", "🔮", "🌙"],
    gradient: "from-purple-600 to-purple-400",
    borderColor: "border-purple-500",
    textColor: "text-purple-400"
  },
  {
    id: 4,
    level: 4,
    name: "Philosophus",
    title: "Buscador da Verdade",
    description: "Desenvolvimento da filosofia pessoal e compreensão dos princípios fundamentais.",
    requirements: ["Filosofia Lucifferiana", "Ética Pessoal", "Sabedoria Prática"],
    practices: ["Meditação Contemplativa", "Estudo Comparativo", "Reflexão Profunda"],
    symbols: ["📜", "⚖️", "🔍"],
    gradient: "from-indigo-600 to-indigo-400",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400"
  },
  {
    id: 3,
    level: 3,
    name: "Practicus",
    title: "Praticante Dedicado",
    description: "Aplicação prática dos ensinamentos através de rituais e exercícios espirituais.",
    requirements: ["Prática Regular", "Disciplina Ritual", "Autoconhecimento"],
    practices: ["Rituais Básicos", "Meditação Diária", "Trabalho Energético"],
    symbols: ["🕯️", "⭐", "🔻"],
    gradient: "from-blue-600 to-blue-400",
    borderColor: "border-blue-500",
    textColor: "text-blue-400"
  },
  {
    id: 2,
    level: 2,
    name: "Theoricus",
    title: "Estudante da Teoria",
    description: "Estudo aprofundado dos fundamentos teóricos e simbolismo sagrado.",
    requirements: ["Conhecimento Teórico", "Simbolismo", "História Ancestral"],
    practices: ["Estudo de Textos", "Análise de Símbolos", "Pesquisa Histórica"],
    symbols: ["📚", "🔺", "⚛️"],
    gradient: "from-green-600 to-green-400",
    borderColor: "border-green-500",
    textColor: "text-green-400"
  },
  {
    id: 1,
    level: 1,
    name: "Neophyte",
    title: "Iniciante do Caminho",
    description: "Primeiro contato com os ensinamentos e preparação para a jornada iniciática.",
    requirements: ["Abertura Mental", "Coragem", "Determinação"],
    practices: ["Introdução aos Conceitos", "Meditação Básica", "Leitura Fundamental"],
    symbols: ["🌟", "🚪", "🔑"],
    gradient: "from-gray-600 to-gray-400",
    borderColor: "border-gray-500",
    textColor: "text-gray-400"
  }
];

export const entities = [
  {
    id: 1,
    name: "Lúcifer",
    title: "Portador da Luz",
    description: "O primeiro entre os rebeldes, símbolo da iluminação através da rebelião contra limitações impostas, guardião do conhecimento proibido.",
    domain: "Conhecimento, Rebelião, Iluminação",
    element: "Fogo",
    color: "red",
    gradient: "from-red-900 to-red-700",
    borderColor: "border-red-500",
    textColor: "text-red-400",
    icon: "🔥"
  },
  {
    id: 2,
    name: "Lilith",
    title: "A Primeira Mulher",
    description: "Símbolo da feminilidade selvagem e indomável, representando a liberdade sexual e espiritual, mãe dos íncubos e súcubos.",
    domain: "Sexualidade, Liberdade, Noite",
    element: "Ar",
    color: "purple",
    gradient: "from-purple-900 to-purple-700",
    borderColor: "border-purple-500",
    textColor: "text-purple-400",
    icon: "🌙"
  },
  {
    id: 3,
    name: "Samael",
    title: "Anjo da Morte",
    description: "O destruidor necessário, anjo da morte e da transformação, guardião dos portais entre os mundos.",
    domain: "Morte, Transformação, Guerra",
    element: "Fogo",
    color: "orange",
    gradient: "from-orange-900 to-orange-700",
    borderColor: "border-orange-500",
    textColor: "text-orange-400",
    icon: "⚡"
  },
  {
    id: 4,
    name: "Hécate",
    title: "Rainha das Bruxas",
    description: "Deusa tripla da magia, encruzilhadas e mistérios, guardiã dos segredos da necromancia e transformação.",
    domain: "Magia, Encruzilhadas, Mistérios",
    element: "Terra",
    color: "indigo",
    gradient: "from-indigo-900 to-indigo-700",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-400",
    icon: "🗝️"
  }
];

export const knowledgeCategories = [
  {
    category: "fundamental",
    title: "Textos Fundamentais",
    color: "yellow",
    icon: "📚",
    items: [
      {
        title: "O Livro Negro de Satã",
        description: "Fundamentos da filosofia satânica moderna",
        levels: "Níveis I-III"
      },
      {
        title: "Azoëtia",
        description: "Grimório da tradição sabática",
        levels: "Níveis IV-VI"
      },
      {
        title: "Qliphoth",
        description: "Exploração da Árvore da Morte",
        levels: "Níveis V-VII"
      }
    ]
  },
  {
    category: "ritual",
    title: "Práticas Rituais",
    color: "red",
    icon: "🔥",
    items: [
      {
        title: "Rituais de Invocação",
        description: "Chamando as entidades primordiais",
        levels: "Níveis III-V"
      },
      {
        title: "Trabalho com Sigils",
        description: "Criação e ativação de símbolos de poder",
        levels: "Níveis II-IV"
      },
      {
        title: "Alquimia Sexual",
        description: "Transmutação através da energia kundalini",
        levels: "Níveis VI-VII"
      }
    ]
  },
  {
    category: "advanced",
    title: "Estudos Avançados",
    color: "purple",
    icon: "📜",
    items: [
      {
        title: "Cabala Qliphótica",
        description: "O lado sombrio da Árvore da Vida",
        levels: "Níveis V-VII"
      },
      {
        title: "Demonologia Comparada",
        description: "Estudo das hierarquias infernais",
        levels: "Níveis IV-VI"
      },
      {
        title: "Metamorfose Espiritual",
        description: "Transformação através da adversidade",
        levels: "Níveis VI-VII"
      }
    ]
  }
];
