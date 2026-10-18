export type OpeningHour = {
  dayOfWeek: string;
  dayIndex: number;
  label: string;
  opens: string;
  closes: string;
};

export type ServicePrice = { service: string; from: number };

const prices: ServicePrice[] = [];
const fullAddress = "R. Augusto de Vasconcelos, nº 914, Sala 302, Campo Grande, Rio de Janeiro - RJ, CEP 23045-120";
const businessName = "Podologia Campo Grande - Cláudia Val Podóloga";
const geo = { lat: -22.9099895, lng: -43.563208 };
const mapsQuery = encodeURIComponent(`${businessName}, R. Augusto de Vasconcelos, 914, sala 302, Campo Grande, Rio de Janeiro`);

export const site = {
  geo,
  images: {
    hero: {
      src: "/images/consultorio-recepcao.webp",
      alt: "Recepção do consultório de podologia da Cláudia Val em Campo Grande, RJ",
      width: 1086,
      height: 1448,
    },
    about: {
      src: "/images/podologa-claudia-val.webp",
      alt: "Cláudia Val, podóloga, atendendo com touca, máscara e jaleco",
      width: 616,
      height: 770,
    },
  },
  name: businessName,
  brand: "Studio Val",
  descriptor: "Podologia Campo Grande",
  professionalName: "Cláudia Val",
  title: "Podologia em Campo Grande, RJ | Podóloga Cláudia Val",
  description: "Podóloga em Campo Grande, RJ: unha encravada, micose de unha a laser, calos, frieiras e pé diabético. Agende sua avaliação pelo WhatsApp.",
  locale: "pt_BR",
  whatsapp: {
    phone: "5521980666002",
    message: "Olá, Val! Vim pelo site e gostaria de agendar uma avaliação.",
  },
  phone: "+5521980666002",
  phoneDisplay: "(21) 98066-6002",
  google: {
    businessProfileUrl: "", // TODO: URL da ficha oficial.
    reviewsUrl: "", // TODO: URL para ver todas as avaliações.
    writeReviewUrl: "", // TODO: URL para deixar avaliação.
    placeId: "", // TODO: confirmar placeId.
    mapEmbedUrl: "", // TODO: src do iframe de "Incorporar um mapa" da ficha.
    mapsShareUrl: "https://maps.app.goo.gl/NbS6hcnnHvjgb3qu7",
    get directionsUrl(): string {
      return `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}${this.placeId ? `&destination_place_id=${encodeURIComponent(this.placeId)}` : ""}`;
    },
    get resolvedMapEmbedUrl(): string {
      return this.mapEmbedUrl || `https://www.google.com/maps?q=${mapsQuery}&ll=${geo.lat},${geo.lng}&z=17&output=embed`;
    },
    get mapUrl(): string {
      return this.mapsShareUrl || `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
    },
  },
  address: {
    streetAddress: "R. Augusto de Vasconcelos, nº 914, Sala 302",
    addressLocality: "Rio de Janeiro",
    addressRegion: "RJ",
    postalCode: "23045-120",
    neighborhood: "Campo Grande",
    country: "BR",
    full: fullAddress,
    reference: "ao lado do Rocha Faria, no mesmo prédio da clínica CEMAV",
    latitude: geo.lat,
    longitude: geo.lng,
  },
  openingHours: [
    { dayOfWeek: "Monday", dayIndex: 1, label: "Segunda", opens: "08:30", closes: "18:30" },
    { dayOfWeek: "Tuesday", dayIndex: 2, label: "Terça", opens: "08:30", closes: "18:30" },
    { dayOfWeek: "Wednesday", dayIndex: 3, label: "Quarta", opens: "08:30", closes: "18:30" },
    { dayOfWeek: "Thursday", dayIndex: 4, label: "Quinta", opens: "08:30", closes: "18:30" },
    { dayOfWeek: "Friday", dayIndex: 5, label: "Sexta", opens: "08:30", closes: "18:30" },
    { dayOfWeek: "Saturday", dayIndex: 6, label: "Sábado", opens: "08:00", closes: "12:00" },
  ] satisfies OpeningHour[],
  hoursLabel: "Seg–sex 08:30–18:30 · sáb 08:00–12:00 · dom fechado",
  sameAs: ["https://www.instagram.com/podologa.val/"],
  paymentAccepted: ["Cartão de crédito", "Cartão de débito", "Pagamento por aproximação"],
  accessibility: "Assento e banheiro acessíveis",
  parking: "Estacionamento pago na rua",
  appointmentRequired: true,
  prices,
  confirmed: { diabeticFoot: true, nailFungusLaser: true, anyRegion: true },
  optionalServices: [
    { title: "Avaliação online gratuita", confirmed: false, description: "Converse comigo para saber mais sobre a avaliação online." },
    { title: "Vela terapia", confirmed: false, description: "Converse comigo para saber mais sobre esse atendimento." },
  ],
  services: [
    { title: "Unhas encravadas", icon: "nail", description: "Cuido da unha do pé encravada com atenção ao seu conforto." },
    { title: "Tratamento de micoses", icon: "laser", description: "Faço tratamento a laser quando indicado para micose de unha (onicomicose)." },
    { title: "Pé diabético", icon: "foot", description: "Faço cuidado preventivo e atento dos pés, em conjunto com o acompanhamento do seu médico." },
    { title: "Calos e calosidades", icon: "layers", description: "Cuido dos calos e calosidades e oriento como reduzir a pressão nos pés." },
    { title: "Rachadura nos pés", icon: "crack", description: "Avalio as rachaduras nos pés e oriento os cuidados para a sua pele." },
    { title: "Tratamento de frieiras", icon: "drop", description: "Avalio as frieiras e cuido da pele com atenção, orientando os cuidados para o dia a dia." },
  ],
  additionalServices: ["Hidratação dos pés", "Unhas infectadas", "Reflexologia", "Argiloterapia", "Tratamento de lesões cutâneas", "Órtese"],
  region: {
    title: "Atendo quem vem de qualquer lugar",
    neighborhoods: ["Campo Grande", "Inhoaíba", "Cosmos", "Santa Cruz", "Sepetiba", "Guaratiba", "Bangu", "Recreio dos Bandeirantes"],
    description: "Meu consultório fica em Campo Grande e recebo pacientes de toda a região (Inhoaíba, Cosmos, Santa Cruz, Sepetiba, Guaratiba, Bangu, Recreio dos Bandeirantes) e de outros bairros e cidades. Se você puder vir até o consultório, será muito bem-vindo.",
  },
  about: {
    registration: "", // TODO: registro profissional.
    education: "", // TODO: formação e instituição.
    experience: "", // TODO: anos de experiência verificáveis.
    paragraphs: [
      "Olá, eu sou a Val, podóloga com mais de 15 anos de experiência, dedicada ao cuidado e à saúde dos pés em Campo Grande, no Rio de Janeiro.",
      "Sou apaixonada pela podologia e acredito que cuidar dos pés vai muito além de uma questão estética: é também cuidar do bem-estar, do conforto e da qualidade de vida de cada pessoa.",
      "Ao longo da minha trajetória, participei de eventos nacionais e internacionais da área, como a PodoActiva e o CIAP, ampliando meus conhecimentos e acompanhando de perto as novidades e os avanços da podologia. Acredito que a excelência no atendimento começa com o compromisso de aprender continuamente e aplicar esse conhecimento com responsabilidade, atenção e dedicação.",
      "No meu consultório, cada atendimento é único. Tudo começa com uma conversa e uma avaliação cuidadosa, para que eu possa compreender suas necessidades, esclarecer suas dúvidas e explicar cada etapa do procedimento com transparência. Acompanho cada caso de perto, buscando oferecer um atendimento individualizado, humanizado e focado na saúde dos seus pés.",
      "Meu propósito é fazer com que você se sinta acolhido, seguro e bem cuidado em cada visita, com a atenção e o respeito que seus pés merecem.",
      "Será um prazer cuidar de você!",
    ],
  },
  process: [
    { title: "Você me conta", description: "Me chama no WhatsApp e conta o que está sentindo ou buscando." },
    { title: "Eu entendo seu caso", description: "Eu converso com você sobre suas necessidades e esclareço suas dúvidas." },
    { title: "Eu combino o horário", description: "Eu confirmo a disponibilidade e as informações para sua visita." },
    { title: "Atendimento com cuidado", description: "No consultório, faço uma avaliação e explico cada etapa do atendimento." },
  ],
  faq: [
    {
      question: "Quanto custa uma consulta de podologia em Campo Grande?",
      answer: prices.length
        ? `Meus valores: ${prices.map(({ service, from }) => `${service} a partir de ${from.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`).join("; ")}. Me chame no WhatsApp para eu avaliar o que você precisa e confirmar o horário.`
        : "O valor depende do que você precisa. Me chame no WhatsApp, envio os valores e confirmo o horário.",
    },
    { question: "Onde fica o consultório?", answer: `Meu consultório fica na ${fullAddress}, ao lado do Rocha Faria, no mesmo prédio da clínica CEMAV. Há estacionamento pago na rua.` },
    { question: "Preciso agendar?", answer: "Sim, atendo com hora marcada, de segunda a sexta, das 08:30 às 18:30, e aos sábados, das 08:00 às 12:00. Me chame no WhatsApp para eu confirmar um horário. Aos domingos, o consultório fica fechado." },
    { question: "Quais formas de pagamento?", answer: "Aceito cartão de crédito, débito e pagamento por aproximação." },
    { question: "Como funciona o tratamento de micose de unha? Você faz laser?", answer: "Primeiro avalio a unha para entender o caso. Faço tratamento a laser quando é indicado e oriento os cuidados em casa. Em alguns casos, a confirmação do diagnóstico pode exigir exames, e eu explico isso na avaliação." },
    { question: "Você atende pessoas com diabetes?", answer: "Sim. Atendo com cuidado e atenção redobrados aos pés de quem tem diabetes. Me conte sobre o seu caso pelo WhatsApp. Trabalho em conjunto com o acompanhamento do seu médico." },
    { question: "Tem acessibilidade?", answer: "No meu consultório, tenho assento e banheiro acessíveis." },
    { question: "Como faço para agendar?", answer: "Me chame no WhatsApp (21) 98066-6002. Eu converso com você, esclareço suas dúvidas e confirmo o horário para o atendimento no consultório." },
  ],
  privacyPath: "/privacidade",
} as const;
