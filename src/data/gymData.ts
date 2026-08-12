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
  whatsapp: "+5582996237489",
  whatsappFormatted: "(82) 99623-7489",
  whatsappClean: "5582996237489",
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
      legenda: "Energia lá em cima nas aulas de FitDance, Muay Thai, Jiu-Jitsu e Funcional com nossos professores."
    }
  ],
  endereco: "R. João Argemiro Rosa, 867 - Barra Nova, Marechal Deodoro - AL, 57160-000",
  googleMapsUrl: "https://maps.google.com/?q=Rua+João+Argemiro+Rosa+867+Barra+Nova+Marechal+Deodoro+AL",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.039011709667!2d-35.8080!3d-9.7120!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7014605963b6555%3A0x868b418b76b2bf0!2sR.%20Jo%C3%A3o%20Argemiro%20Rosa%2C%20867%20-%20Barra%20Nova%2C%20Marechal%20Deodoro%20-%20AL%2C%2057160-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  avaliacao: 4.8,
  totalAvaliacoes: 124,
  convenios: ["Wellhub (antigo Gympass)", "TotalPass"],
  diferenciais: [
    "Estrutura 100% Climatizada",
    "Aberta TODOS OS DIAS",
    "Localizada no coração de Barra Nova - AL",
    "Professores qualificados e dedicados",
    "Ambiente climatizado, moderno e seguro",
    "Aceita Wellhub & TotalPass"
  ]
};

export const MODALIDADES: ClassModalidade[] = [
  {
    id: "musculacao",
    nome: "Musculação",
    professor: "Equipe You Fit",
    categoria: "Musculação",
    descricao: "Equipamentos modernos de ponta, ambiente 100% climatizado e suporte com instrutores para alcançar seus objetivos de força, hipertrofia e emagrecimento.",
    destaqueBadge: "Acesso Livre",
    iconeName: "Dumbbell",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4451.jpg"
  },
  {
    id: "jiu-jitsu",
    nome: "Jiu-Jitsu",
    professor: "Prof. Wesley Rosa",
    categoria: "Lutas",
    descricao: "Arte suave focada em defesa pessoal, disciplina, condicionamento e técnica. Incluso no Plano Premium ou solicite sua 1ª aula experimental grátis!",
    destaqueBadge: "1ª Aula Grátis",
    iconeName: "Shield",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4452.jpg"
  },
  {
    id: "muay-thai",
    nome: "Muay Thai",
    professor: "Prof. Alan França",
    categoria: "Lutas",
    descricao: "Treino de alto gasto calórico, agilidade e força. Aprimore técnicas de golpes com supervisão técnica e segurança.",
    destaqueBadge: "Alta Intensidade",
    iconeName: "Flame",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548961/IMG_4453.jpg"
  },
  {
    id: "fitdance",
    nome: "FitDance",
    professor: "Prof. Dan Sollys",
    categoria: "Dança",
    descricao: "Meta dançar, queimar calorias e se divertir com os hits mais estourados do momento em uma aula cheia de energia e ritmo.",
    destaqueBadge: "Diversão & Cardio",
    iconeName: "Music",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548962/IMG_4454.jpg"
  },
  {
    id: "funcional",
    nome: "Treino Funcional",
    professor: "Profs. Rogério, Moisés e Thallya",
    categoria: "Funcional",
    descricao: "Exercícios dinâmicos focados em flexibilidade, mobilidade, resistência e fortalecimento do core para o dia a dia.",
    destaqueBadge: "Para Todos os Níveis",
    iconeName: "Activity",
    imageUrl: "https://res.cloudinary.com/xhuikt2k/image/upload/v1786548958/IMG_4455.jpg"
  },
  {
    id: "ritbox",
    nome: "Ritbox",
    professor: "Prof. Julian",
    categoria: "Dança",
    descricao: "Treino ritmado unindo música e exercícios funcionais para acelerar o metabolismo, definir músculos e queimar gordura de forma empolgante.",
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
    id: "ritbox-jul",
    modalidade: "Ritbox",
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
    professor: "Prof. Dan Sollys",
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
  },
  {
    id: "jiujitsu-wes",
    modalidade: "Jiu-Jitsu",
    dias: ["Segunda", "Quarta"],
    horario: "17h às 18h",
    professor: "Prof. Wesley Rosa",
    categoria: "lutas",
    descricao: "Aulas de Jiu-Jitsu para iniciantes e avançados. Técnica, defesa e disciplina.",
    tags: ["Tarde", "Seg/Qua"]
  }
];

export const PLANOS: GymPlan[] = [
  {
    id: "plano-anual",
    nome: "Plano Anual Recorrente",
    preco: "110,00",
    periodo: "mês",
    badge: "MAIS POPULAR",
    destaque: true,
    beneficios: [
      "Musculação livre todos os dias",
      "Estrutura 100% climatizada",
      "Débito automático no cartão (sem prender limite)",
      "Avaliação física e orientação inicial",
      "Acesso livre de Segunda a Domingo"
    ],
    ctaText: "Garantir Plano Anual",
    observacao: "A partir de R$ 110,00/mês na modalidade recorrente."
  },
  {
    id: "plano-premium",
    nome: "Plano Premium",
    preco: "140,00",
    periodo: "mês",
    badge: "COMPLETO",
    destaque: false,
    beneficios: [
      "Tudo do Plano Musculação",
      "Acesso LIBERADO às Aulas Coletivas",
      "Jiu-Jitsu com Prof. Wesley Rosa",
      "Muay Thai com Prof. Alan França",
      "FitDance, Ritbox e Treinos Funcionais",
      "Atendimento prioritário com professores"
    ],
    ctaText: "Quero Plano Premium",
    observacao: "O plano mais completo para acelerar seus resultados."
  },
  {
    id: "plano-casal",
    nome: "Plano Casal & Duplas",
    preco: "Especial",
    periodo: "dupla/mês",
    badge: "CONDIÇÃO ESPECIAL",
    destaque: false,
    beneficios: [
      "Desconto exclusivo para treino em dupla",
      "Treinem juntos e evoluam juntos!",
      "Acesso completo à estrutura climatizada",
      "Incentivo mútuo para manter a rotina",
      "Condições diferenciadas de pagamento"
    ],
    ctaText: "Consultar Desconto Casal",
    observacao: "Válido para casais ou duplas de amigos."
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
    comentario: "Faço as aulas de FitDance com o Prof. Dan e Funcional com a Thallya. Ambiente super respeitoso, limpo e animado. Super recomendo!"
  },
  {
    nome: "Renato Cavalcante",
    local: "Barra Nova, AL",
    nota: 5,
    comentario: "Preço justo no plano anual, e o fato de aceitarem Wellhub facilitou demais minha vida. A aula de Jiu do Prof. Wesley é nota 10."
  }
];

export interface FaqItem {
  id: number;
  pergunta: string;
  resposta: string;
  categoria?: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    pergunta: "Onde fica localizada a Academia Studio You Fit?",
    resposta: "Estamos localizados na Rua João Argemiro Rosa, 867 - Barra Nova, Marechal Deodoro - AL (CEP 57160-000), no coração da Barra Nova, com fácil acesso e estacionamento nas proximidades.",
    categoria: "Localização"
  },
  {
    id: 2,
    pergunta: "A academia é totalmente climatizada?",
    resposta: "Sim! Toda a estrutura da Studio You Fit conta com ambiente 100% climatizado em pleno funcionamento para garantir um treino agradável, fresco e muito mais confortável em qualquer horário do dia.",
    categoria: "Estrutura"
  },
  {
    id: 3,
    pergunta: "Quais são os dias e horários de funcionamento da You Fit?",
    resposta: "Funcionamos TODOS OS DIAS! De Segunda a Sexta-feira das 05h às 22h sem fechar para o almoço; aos Sábados das 07h às 13h; e aos Domingos e Feriados em horários especiais previamente divulgados.",
    categoria: "Horários"
  },
  {
    id: 4,
    pergunta: "Como funciona o Plano Anual Recorrente de R$ 110,00/mês?",
    resposta: "No Plano Recorrente, o valor de R$ 110,00 é debitado mensalmente no seu cartão de crédito mês a mês, sem comprometer o limite total do seu cartão. Você garante a mensalidade promocional com compromisso anual.",
    categoria: "Planos & Preços"
  },
  {
    id: 5,
    pergunta: "Quais modalidades de aulas coletivas são oferecidas?",
    resposta: "Oferecemos Musculação completa, Treino Funcional (Profs. Rogério, Moisés e Thallya), FitDance (Prof. Dan Sollys), Ritbox (Prof. Julian), Muay Thai (Prof. Alan França) e Jiu-Jitsu (Prof. Wesley Rosa).",
    categoria: "Modalidades"
  },
  {
    id: 6,
    pergunta: "A You Fit aceita convênios corporativos como Wellhub (Gympass) e TotalPass?",
    resposta: "Sim! Aceitamos Wellhub (antigo Gympass) e TotalPass. Basta validar o seu check-in diário pelo aplicativo oficial na recepção antes de iniciar o seu treino.",
    categoria: "Convênios"
  },
  {
    id: 7,
    pergunta: "Existe desconto especial para Casais e Duplas?",
    resposta: "Sim! Oferecemos condição especial com desconto na mensalidade para casais ou duplas de amigos que realizam a matrícula juntos, incentivando o foco e a constância na rotina de treinos.",
    categoria: "Planos & Preços"
  },
  {
    id: 8,
    pergunta: "Posso fazer uma aula experimental grátis antes de me matricular?",
    resposta: "Com certeza! Você pode agendar uma 1ª aula experimental grátis em modalidades como Jiu-Jitsu, Muay Thai ou FitDance, além de conhecer pessoalmente a nossa estrutura de musculação climatizada.",
    categoria: "Matrícula"
  },
  {
    id: 9,
    pergunta: "Preciso pagar taxa de adesão ou taxa de matrícula?",
    resposta: "Consulte nossas campanhas promocionais vigentes! Frequentemente oferecemos isenção total de taxa de matrícula na adesão aos Planos Anual e Semestral no cartão ou PIX.",
    categoria: "Planos & Preços"
  },
  {
    id: 10,
    pergunta: "Como faço minha matrícula ou tiro mais dúvidas agora?",
    resposta: "É muito simples! Clique em qualquer botão 'Matricule-se Agora' ou 'Falar no WhatsApp' aqui no site para ser atendido diretamente pela nossa equipe pelo WhatsApp (82) 99623-7489.",
    categoria: "Atendimento"
  }
];
