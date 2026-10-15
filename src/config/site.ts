export const site = {
  name: "Studio Val",
  descriptor: "Podologia Campo Grande",
  professionalName: "Cláudia Val",
  title: "Podologia clínica em Campo Grande, Rio de Janeiro | Studio Val",
  description:
    "Atendimento de podologia clínica em Campo Grande, Rio de Janeiro. Conheça os serviços e fale comigo pelo WhatsApp.",
  locale: "pt_BR",
  whatsapp: {
    phone: "", // TODO: preencher com DDI + DDD + número, somente dígitos.
    message: "Olá, Val! Gostaria de saber mais sobre o atendimento de podologia.",
  },
  phone: "", // TODO: preencher com telefone público, incluindo DDI e DDD.
  google: {
    businessProfileUrl: "", // TODO: preencher com o link da ficha oficial no Google.
    reviewsUrl: "", // TODO: preencher com o link para ver todas as avaliações.
    writeReviewUrl: "", // TODO: preencher com o link para deixar uma avaliação.
    directionsUrl: "", // TODO: preencher com o link de rotas do Google Maps.
    mapEmbedUrl: "", // TODO: preencher com a URL de incorporação do mapa.
  },
  address: {
    streetAddress: "", // TODO: preencher com logradouro e número.
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "", // TODO: preencher com CEP.
    neighborhood: "Campo Grande",
    country: "BR",
    latitude: null as number | null, // TODO: preencher com latitude confirmada.
    longitude: null as number | null, // TODO: preencher com longitude confirmada.
  },
  openingHours: [] as OpeningHour[], // TODO: preencher apenas os horários reais de atendimento.
  sameAs: [] as string[], // TODO: incluir somente perfis oficiais confirmados.
  services: [
    {
      title: "Unha encravada",
      description:
        "Avaliação e cuidado podológico para unhas encravadas, com atenção ao conforto e à saúde dos pés.",
      icon: "01",
    },
    {
      title: "Calos e calosidades",
      description:
        "Cuidado especializado para calos e áreas de pressão, com orientação para o dia a dia.",
      icon: "02",
    },
    {
      title: "Saúde das unhas",
      description:
        "Avaliação de alterações nas unhas, como suspeita de micose, e orientação sobre os próximos cuidados.",
      icon: "03",
    },
    {
      title: "Pé diabético",
      description:
        "Cuidado preventivo e atento para os pés de pessoas com diabetes, respeitando cada necessidade.",
      icon: "04",
    },
    {
      title: "Cuidado podológico",
      description:
        "Atendimento cuidadoso para manter unhas e pés bem cuidados em cada etapa da vida.",
      icon: "05",
    },
  ],
  about: {
    photoSrc: "/images/portrait-placeholder.svg", // TODO: substituir pela foto profissional autorizada da Val.
    photoAlt: "Ilustração provisória para substituir pela foto profissional da Cláudia Val",
    education: "", // TODO: informar formação e instituição.
    experience: "", // TODO: informar tempo de experiência verificável.
    paragraphs: [
      "Eu sou Cláudia Val, podóloga clínica em Campo Grande, no Rio de Janeiro. Meu trabalho é cuidar da saúde dos pés com atenção, escuta e respeito à história de cada pessoa.",
      "No meu consultório, cada atendimento começa com uma conversa e uma avaliação cuidadosa. Eu explico as possibilidades de cuidado com clareza e, quando necessário, oriento a procurar outros profissionais de saúde.",
    ],
  },
  process: [
    {
      title: "Você me conta",
      description: "Me chama no WhatsApp e conta o que está sentindo ou buscando.",
    },
    {
      title: "Eu entendo seu caso",
      description: "Eu converso com você sobre suas necessidades e esclareço suas dúvidas.",
    },
    {
      title: "Combinamos o horário",
      description: "Eu confirmo a disponibilidade e as informações para sua visita.",
    },
    {
      title: "Atendimento com cuidado",
      description: "No consultório, faço uma avaliação e explico cada etapa do atendimento.",
    },
  ],
  faq: [
    {
      question: "Como faço para agendar uma avaliação?",
      answer:
        "Você pode me chamar pelo WhatsApp. Eu converso com você, esclareço suas dúvidas e confirmo os horários disponíveis.",
    },
    {
      question: "Quais cuidados podológicos você realiza?",
      answer:
        "Atendo questões como unhas encravadas, calosidades, alterações nas unhas e cuidado preventivo dos pés. Eu converso com você sobre o seu caso para entender se o atendimento é adequado.",
    },
    {
      question: "Você atende pessoas com diabetes?",
      answer:
        "Sim, o cuidado dos pés de pessoas com diabetes requer atenção individualizada. Me conte sobre seu caso antes do agendamento para conversarmos sobre suas necessidades.",
    },
    {
      question: "Podologia trata micose?",
      answer:
        "Eu posso avaliar alterações nas unhas e orientar sobre os cuidados podológicos. A confirmação de um diagnóstico e a indicação de tratamento podem exigir avaliação médica.",
    },
    {
      question: "Onde fica o consultório?",
      answer:
        "Meu consultório fica em Campo Grande, no Rio de Janeiro. Eu compartilho o endereço completo e as orientações de chegada quando você entra em contato.",
    },
    {
      question: "Quanto custa o atendimento?",
      answer:
        "O valor depende do atendimento indicado para cada caso. Me chame pelo WhatsApp para conversar sobre a sua necessidade e consultar os valores atualizados.",
    },
  ],
  privacyPath: "/privacidade",
} as const;

export type OpeningHour = {
  dayOfWeek: string;
  opens: string;
  closes: string;
};
