import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacidade | ${site.name}`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-16 sm:px-8">
      <article className="mx-auto max-w-2xl rounded-3xl bg-white p-7 shadow-card sm:p-10">
        <Link href="/" className="inline-flex min-h-12 items-center text-base font-semibold text-leaf hover:text-forest">← Voltar para o início</Link>
        <h1 className="mt-8 font-display text-4xl text-forest">Privacidade</h1>
        <p className="mt-5 leading-7 text-muted">
          Uso as informações que você fornece voluntariamente ao iniciar uma conversa pelo WhatsApp para responder ao seu contato e tratar do agendamento. Peço que não envie dados de saúde sensíveis por canais públicos.
        </p>
        <p className="mt-4 leading-7 text-muted">
          Uso ferramentas de mensuração do Google Ads e Google Analytics 4 somente quando configuro seus respectivos identificadores no site. Atendo a conversa no WhatsApp conforme a política de privacidade do próprio serviço.
        </p>
        <p className="mt-4 leading-7 text-muted">
          Para dúvidas sobre privacidade ou solicitações relacionadas aos seus dados, fale comigo pelo WhatsApp.
        </p>
      </article>
    </main>
  );
}
