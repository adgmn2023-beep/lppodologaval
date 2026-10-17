import type { GbpPost } from "@/lib/gbp/types";

// Fonte: ficha Google fornecida pela profissional. Datas das avaliações aproximadas.
export const gbpManual = {
  summary: { ratingAvg: 5.0, ratingCount: 161, asOf: "2026-10-17" },
  reviews: [
    {
      id: "ursula-m", authorName: "Ursula M.", rating: 5, date: "2026-10-16",
      text: "A Val é uma profissional excelente!! Ela transformou meus pés, saí da clínica pisando em nuvens. Super recomendo. Profissional com anos de experiência, muito atenciosa.",
    },
    {
      id: "rafael-p", authorName: "Rafael P.", rating: 5, date: "2026-09-26",
      text: "A Val é uma ótima profissional, cheguei com muita dor e incomodo no meu dedo, e ela muito atenciosa e prestativa realizou os procedimento com rapidez e sem dor, aliviando instantaneamente a dor latente que sentia, além de iniciar o procedimento de retirada de uma unha com sangue preso que necessitava de tratamento, e o melhor, Facilidade de pagamento com um preço justo pelo atendimento prestado, irei voltar para finalizar meu tratamento.",
    },
    {
      id: "claudia-l", authorName: "Claudia L.", rating: 5, date: "2026-09-19",
      text: "Ótimo atendimento, profissional atenciosa, ambiente limpo, me propôs um tratamento que estou muito satisfeita.",
    },
    {
      id: "rd-festas", authorName: "R&D Festas", rating: 5, date: "2026-06-20",
      text: "A experiência foi espetacular eu recomendo levei o meu filho ótimo atendimento ainda me deu o cafezinho",
    },
  ],
  posts: [] as GbpPost[],
};
