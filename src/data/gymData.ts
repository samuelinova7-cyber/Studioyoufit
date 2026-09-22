export interface ClassSchedule {
  id: string;
  modalidade: string;
  dias: string[];
  horario: string;
  professor: string;
  categoria: 'funcional' | 'lutas' | 'danca' | 'musculacao';
  descricao: string;
  tags: string[];
}

export interface GymPlan {
  id: string;
  nome: string;
  preco: string;
  periodo: string;
  badge?: string;
  destaque?: boolean;
  beneficios: string[];
  ctaText: string;
  observacao?: string;
}

export interface ClassModalidade {
  id: string;
  nome: string;
  professor: string;
  categoria: string;
  descricao: string;
  destaqueBadge?: string;
  iconeName: string;
  imageUrl: string;
}

export interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
  categoria?: string;
}

export const GYM_INFO = {
  nome: "Studio You Fit",
  slogan: "Foco, Força e Resultado!",
  logoUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548149/IMG_4447.jpg",
  heroImages: [
    {
      url: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4448.jpg",
      titulo: "Estrutura & Equipamentos Modernos",
      legenda: "Ambiente 100% climatizado pronto para o seu melhor treino."
    },
    {
      url: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548155/IMG_4449.jpg",
      titulo: "Foco, Força e Alta Performance",
      legenda: "Acompanhamento profissional para alcançar seus objetivos em Barra Nova."
    }
  ],
  whatsapp: "+5582976049148",
  whatsappFormatted: "(82) 97604-9148",
  whatsappClean: "5582976049148",
  instagramHandle: "@studioyoufit_",
  instagramUrl: "https://www.instagram.com/studioyoufit_/",
  instagramVideos: [
    {
      id: "vid1",
      url: "https://res.cloudinary.com/xhuikt2k/video/upload/v1786552340/SnapInsta.to_AQOsxbBYTGL_uuEYa2Br-3qNP10Y2AoO87A1pTEiNEFmowe7fTef0qTAIA_FUv8ARJ2edAvK7L5q1JUGNesYXc7CFEY8W6xVqxt3F-w.mp4",
      titulo: "Dia a dia de Treinos & Energia na You Fit",
      legenda: "Acompanhe de perto a evolução dos nossos alunos e o ambiente climatizado da melhor academia de Barra Nova."
    },
    {
      id: "vid2",
      url: "https://res.cloudinary.com/xhuikt2k/video/upload/v1786552344/SnapInsta.to_AQOqL8XiCGW24_G0sFd5_7SycQFiLMyO7f-baSNpxLPGH9xQDikZfDQGJs6nwuTiCdDUr-iRsAm1mPeuUVzYCF9QaCwwLHnOBgR1aa4.mp4",
      titulo: "Aulas Coletivas & Foco no Resultado",
      legenda: "Energia lá em cima nas aulas de FitDance, Muay Thai, Hitbox e Funcional com nossos professores."
    }
  ],
  endereco: "R. João Argemiro Rosa, 867 - Barra Nova, Marechal Deodoro - AL, 57160-000",
  googleMapsUrl: "https://maps.google.com/?q=Rua+João+Argemiro+Rosa+867+Barra+Nova+Marechal+Deodoro+AL",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.473523730598!2d-35.808544!3d-9.712128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014605963b6555%3A0x868b418b76b2bf0!2sR.%20Jo%C3%A3o%20Argemiro%20Rosa%2C%20867%20-%20Barra%20Nova%2C%20Marechal%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr",
  avaliacao: 4.8,
  totalAvaliacoes: 124,
  convenios: [
    "Wellhub (antigo Gympass) - a partir do Silver+",
    "TotalPass - a partir do TP2"
  ],
  horarios: {
    semana: "Seg a Sex: 5h às 21:30h",
    sabado: "Sábado: 7h às 17h",
    domingo: "Domingo: 7h às 12h",
    feriados: "Feriados: Horários especiais",
    feriadosDetalhe: "Horários especiais divulgados no Instagram. Fechamos em datas comemorativas específicas como Natal, Ano Novo e Sexta-feira Santa."
  },
  taxaMatricula: "ISENÇÃO TOTAL (R$ 0,00)",
  diariaAvulsa: "R$ 40,00",
  avaliacaoFisica: "R$ 120,00",
  diferenciais: [
    "Estrutura 100% Climatizada",
    "Aberta TODOS OS DIAS",
    "Taxa de Matrícula R$ 0,00 (Isenção Total)",
    "Localizada no coração de Barra Nova - AL",
    "Professores qualificados e dedicados",
    "Aceita Wellhub (Silver+) & TotalPass (TP2)"
  ]
};

export const MODALIDADES: ClassModalidade[] = [
  {
    id: "musculacao",
    nome: "Musculação",
    professor: "Equipe You Fit",
    categoria: "Musculação",
    descricao: "Equipamentos modernos de ponta, ambiente 100% climatizado e instrutores sempre presentes para ganho de força, definição e hipertrofia.",
    destaqueBadge: "Acesso Livre",
    iconeName: "Dumbbell",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4451.jpg"
  },
  {
    id: "muay-thai",
    nome: "Muay Thai",
    professor: "Prof. Alan França",
    categoria: "Lutas",
    descricao: "Treino dinâmico de alto gasto calórico, agilidade e postura. Aprimore técnicas de golpes, defesa e condicionamento com acompanhamento técnico.",
    destaqueBadge: "Alta Intensidade",
    iconeName: "Flame",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4453.jpg"
  },
  {
    id: "fitdance",
    nome: "FitDance",
    professor: "Prof. Daniel Sales",
    categoria: "Dança",
    descricao: "Metodologia dinâmica para dançar, queimar calorias e se divertir com as coreografias mais tocadas do Brasil com o Prof. Daniel Sales.",
    destaqueBadge: "Diversão & Cardio",
    iconeName: "Music",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548962/IMG_4454.jpg"
  },
  {
    id: "funcional",
    nome: "Treino Funcional",
    professor: "Profs. Rogério, Moisés e Thallya",
    categoria: "Funcional",
    descricao: "Exercícios dinâmicos focados em flexibilidade, mobilidade, resistência cardiovascular e fortalecimento do core para o dia a dia.",
    destaqueBadge: "Para Todos os Níveis",
    iconeName: "Activity",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4455.jpg"
  },
  {
    id: "hitbox",
    nome: "Hitbox",
    professor: "Prof. Julian",
    categoria: "Dança & Treino",
    descricao: "Treino ritmado de alta queima calórica que une música e exercícios funcionais para acelerar o metabolismo e definir o corpo com muita energia.",
    destaqueBadge: "Queima Calórica",
    iconeName: "Zap",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548151/IMG_4450.jpg"
  }
];

export const HORARIOS_AULAS: ClassSchedule[] = [
  {
    id: "funcional-rog",
    modalidade: "Funcional",
    dias: ["Segunda", "Quarta"],
    horario: "06h às 07h",
    professor: "Prof. Rogério",
    categoria: "funcional",
    descricao: "Treino matinal para começar o dia com energia total e metabolismo acelerado.",
    tags: ["Manhã", "Seg/Qua"]
  },
  {
    id: "funcional-moi",
    modalidade: "Funcional",
    dias: ["Terça", "Quinta"],
    horario: "19h às 20h",
    professor: "Prof. Moisés",
    categoria: "funcional",
    descricao: "Treino noturno completo de resistência, postura e condicionamento físico.",
    tags: ["Noite", "Ter/Qui"]
  },
  {
    id: "funcional-tha",
    modalidade: "Funcional",
    dias: ["Quarta", "Sexta"],
    horario: "18h às 19h",
    professor: "Prof. Thallya",
    categoria: "funcional",
    descricao: "Aprimoramento funcional com foco em fortalecimento e mobilidade corporal.",
    tags: ["Noite", "Qua/Sex"]
  },
  {
    id: "hitbox-jul",
    modalidade: "Hitbox",
    dias: ["Segunda", "Sexta"],
    horario: "19h às 20h",
    professor: "Prof. Julian",
    categoria: "danca",
    descricao: "Treino ritmado de alta intensidade unindo música e condicionamento muscular.",
    tags: ["Noite", "Seg/Sex"]
  },
  {
    id: "fitdance-dan",
    modalidade: "FitDance",
    dias: ["Terça", "Quinta"],
    horario: "19h às 20h",
    professor: "Prof. Daniel Sales",
    categoria: "danca",
    descricao: "Aulas super animadas com coreografias das músicas mais populares do Brasil.",
    tags: ["Noite", "Ter/Qui"]
  },
  {
    id: "muaythai-alan",
    modalidade: "Muay Thai",
    dias: ["Segunda"],
    horario: "18h40 às 19h20",
    professor: "Prof. Alan França",
    categoria: "lutas",
    descricao: "Fundamentos e práticas de arte marcial tailandesa com foco em agilidade e postura.",
    tags: ["Noite", "Segunda"]
  }
];

export const PLANOS: GymPlan[] = [
  {
    id: "plano-essencial",
    nome: "Plano Anual Essencial",
    preco: "129,90",
    periodo: "mês",
    badge: "MAIS POPULAR",
    destaque: true,
    beneficios: [
      "Musculação livre todos os dias",
      "Estrutura 100% climatizada com equipamentos modernos",
      "Débito recorrente no cartão (sem travar limite)",
      "Acesso livre de Segunda a Domingo e Feriados",
      "Taxa de Matrícula GRÁTIS (Isenção Total)"
    ],
    ctaText: "Garantir Plano Essencial",
    observacao: "R$ 129,90/mês na modalidade recorrente anual."
  },
  {
    id: "plano-premium",
    nome: "Plano Anual Premium",
    preco: "149,90",
    periodo: "mês",
    badge: "ACESSO TOTAL",
    destaque: false,
    beneficios: [
      "Tudo do Plano Essencial (Musculação Livre)",
      "Acesso LIBERADO a TODAS as Aulas Coletivas",
      "Hitbox com Prof. Julian",
      "FitDance com Prof. Daniel Sales",
      "Muay Thai com Prof. Alan França",
      "Treinos Funcionais (Rogério, Moisés, Thallya)",
      "Taxa de Matrícula GRÁTIS (Isenção Total)"
    ],
    ctaText: "Quero Plano Premium",
    observacao: "Musculação + Todas as Aulas Coletivas Ilimitadas por R$ 149,90/mês."
  },
  {
    id: "plano-familia",
    nome: "Plano Família Essencial",
    preco: "100,00",
    periodo: "pessoa/mês",
    badge: "ECONOMIA FAMILIAR",
    destaque: false,
    beneficios: [
      "Válido a partir de 3 pessoas da mesma família",
      "R$ 100,00 por membro no plano recorrente",
      "Musculação completa e climatizada para todos",
      "Débito recorrente mensal individualizado",
      "Taxa de Matrícula GRÁTIS para toda a família"
    ],
    ctaText: "Ativar Plano Família",
    observacao: "Apenas R$ 100,00/mês por pessoa (mínimo de 3 membros)."
  },
  {
    id: "plano-casal",
    nome: "Plano Casal & Duplas de Amigos",
    preco: "Especial",
    periodo: "dupla/mês",
    badge: "TREINO EM DUPLA",
    destaque: false,
    beneficios: [
      "Válido para casais ou duplas de amigos",
      "Desconto especial progressivo na mensalidade",
      "Débito recorrente no cartão sem comprometer limite",
      "Opções flexíveis no PIX ou cartão",
      "Taxa de Matrícula GRÁTIS para a dupla"
    ],
    ctaText: "Consultar Desconto Dupla",
    observacao: "Treinem juntos com condições facilitadas de pagamento."
  }
];

export const SERVICOS_EXTRAS = [
  {
    id: "diaria",
    nome: "Diária Avulsa (Day Use)",
    preco: "40,00",
    descricao: "Ideal para visitantes, turistas ou quem quer fazer um treino avulso na nossa estrutura climatizada em Barra Nova.",
    cta: "Comprar Diária Avulsa"
  },
  {
    id: "avaliacao-fisica",
    nome: "Avaliação Física Completa",
    preco: "120,00",
    descricao: "Anamnese detalhada, bioimpedância, percentual de gordura, medidas corporais completas e direcionamento individual com profissional.",
    cta: "Agendar Avaliação Física"
  }
];

export const GOOGLE_REVIEWS = [
  {
    nome: "Marcelo Santos",
    local: "Barra Nova, AL",
    nota: 5,
    comentario: "Melhor academia de Barra Nova! Ar-condicionado trincando, equipamentos novos e instrutores sempre presentes ajudando nas fichas de treino."
  },
  {
    nome: "Juliana Silva",
    local: "Marechal Deodoro",
    nota: 5,
    comentario: "Faço as aulas de FitDance com o Prof. Daniel Sales e Funcional com a Thallya. Ambiente super respeitoso, limpo e animado. Super recomendo!"
  },
  {
    nome: "Renato Cavalcante",
    local: "Barra Nova, AL",
    nota: 5,
    comentario: "Preço justo no plano anual de R$ 129,90, e o fato de aceitarem Wellhub a partir do Silver+ facilitou demais minha vida. A aula de Muay Thai do Prof. Alan é nota 10."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    pergunta: "Onde fica localizada a Academia Studio You Fit?",
    resposta: "Estamos localizados na Rua João Argemiro Rosa, 867 - Barra Nova, Marechal Deodoro - AL (CEP 57160-000), na rua principal de Barra Nova, com fácil acesso e estacionamento.",
    categoria: "Localização"
  },
  {
    id: 2,
    pergunta: "A academia é totalmente climatizada?",
    resposta: "Sim! Toda a estrutura da Studio You Fit conta com ambiente 100% climatizado para garantir um treino fresco, agradável e de alta performance em qualquer horário.",
    categoria: "Estrutura"
  },
  {
    id: 3,
    pergunta: "Quais são os dias e horários de funcionamento da You Fit?",
    resposta: "Funcionamos de Segunda a Sexta das 5h às 21:30h; aos Sábados das 7h às 17h; aos Domingos das 7h às 12h; e em Feriados com Horários Especiais previamente divulgados no nosso Instagram (@studioyoufit_). Fechamos apenas em datas comemorativas específicas como Natal (25/12), Ano Novo (01/01) e Sexta-feira Santa.",
    categoria: "Horários"
  },
  {
    id: 4,
    pergunta: "Qual a diferença entre o Plano Essencial (R$ 129,90) e o Plano Premium (R$ 149,90)?",
    resposta: "O Plano Essencial (R$ 129,90/mês) dá acesso livre à Musculação completa 100% climatizada todos os dias. O Plano Premium (R$ 149,90/mês) inclui tudo da Musculação MAIS acesso livre e ilimitado a TODAS as aulas coletivas (Hitbox, FitDance, Muay Thai e Treinos Funcionais), sem limite de aulas por semana.",
    categoria: "Planos & Preços"
  },
  {
    id: 5,
    pergunta: "Como funciona o Plano Família Essencial de R$ 100,00/cada?",
    resposta: "O Plano Família é uma modalidade recorrente exclusiva para grupos a partir de 3 pessoas da mesma família. Cada membro paga apenas R$ 100,00/mês para treinar na musculação completa e climatizada, com matrícula 100% grátis.",
    categoria: "Planos & Preços"
  },
  {
    id: 6,
    pergunta: "O Plano Casal também pode ser feito para Dupla de Amigos?",
    resposta: "Sim! O plano em dupla é válido tanto para casais quanto para duplas de amigos que se matriculam juntos. Oferecemos condições especiais de pagamento no débito recorrente sem travar limite, desconto na mensalidade e isenção total da taxa de matrícula.",
    categoria: "Planos & Preços"
  },
  {
    id: 7,
    pergunta: "Quais convênios corporativos a You Fit aceita e quais os planos mínimos?",
    resposta: "Aceitamos Wellhub (antigo Gympass) a partir do plano Silver+, e TotalPass a partir do plano TP2. Basta fazer o check-in no aplicativo oficial na nossa recepção.",
    categoria: "Convênios"
  },
  {
    id: 8,
    pergunta: "Preciso pagar taxa de matrícula ou taxa de adesão?",
    resposta: "NÃO! A taxa de matrícula é R$ 0,00 (ISENÇÃO TOTAL) independente do plano escolhido na Studio You Fit.",
    categoria: "Matrícula"
  },
  {
    id: 9,
    pergunta: "Vocês oferecem diária avulsa e serviço de avaliação física?",
    resposta: "Sim! Oferecemos Diária Avulsa (Day Use) por R$ 40,00 para quem deseja treinar apenas um dia. E também temos o serviço de Avaliação Física Completa (com bioimpedância, anamnese e medidas) por R$ 120,00.",
    categoria: "Serviços Avulsos"
  },
  {
    id: 10,
    pergunta: "Como faço minha matrícula ou tiro mais dúvidas agora?",
    resposta: "É só clicar no botão do WhatsApp aqui no site ou mandar mensagem direta para (82) 97604-9148. Nossa equipe está pronta para te atender!",
    categoria: "Atendimento"
  }
];
