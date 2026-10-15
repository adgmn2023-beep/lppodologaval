import { site } from "@/config/site";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Respostas para você chegar com tranquilidade"
          centered
        />
        <div className="divide-y divide-sage border-y border-sage">
          {site.faq.map((item, index) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold text-forest marker:hidden">
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-xl font-normal text-leaf transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-4 text-sm leading-6 text-muted">{item.answer}</p>
              <span className="sr-only">Pergunta {index + 1}</span>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}
