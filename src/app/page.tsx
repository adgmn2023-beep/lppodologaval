import Image from "next/image";
import { BusinessJsonLd } from "@/components/business-json-ld";
import { FaqJsonLd, FaqSection } from "@/components/faq-section";
import { ArrowUpRightIcon, PinIcon } from "@/components/icons";
import { PostsSection } from "@/components/posts-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink } from "@/components/tracked-links";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { site } from "@/config/site";
import { gbpProvider, isMockGbpProvider } from "@/lib/gbp";

function RatingBadge({ averageRating, totalReviews }: { averageRating: number; totalReviews: number }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-sage bg-white/80 px-4 py-2 shadow-sm">
      <span className="text-lg leading-none text-[#b48330]" aria-label={`${averageRating} de 5 estrelas`}>★</span>
      <span className="text-sm font-bold text-forest">{averageRating}</span>
      <span className="h-4 w-px bg-sage" />
      <span className="text-xs text-muted">{totalReviews} avaliações no Google</span>
      {isMockGbpProvider && <span className="rounded-full bg-cream px-2 py-1 text-[10px] text-muted">exemplo</span>}
    </div>
  );
}

function LocationSection() {
  const hasAddress = Boolean(site.address.streetAddress);
  const hasHours = site.openingHours.length > 0;

  return (
    <section id="localizacao" className="bg-white px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Onde me encontrar"
            title="Podologia perto de você, em Campo Grande"
            description="Um espaço pensado para receber você com cuidado. Me chame para confirmar o endereço e combinar sua visita."
          />
          <div className="space-y-5">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-forest">
                <PinIcon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-forest">Endereço</p>
                <p className="mt-1 text-sm leading-6 text-muted">
                  {hasAddress
                    ? `${site.address.streetAddress}, ${site.address.neighborhood}, ${site.address.addressLocality} - ${site.address.addressRegion}`
                    : `Campo Grande, ${site.address.addressLocality} - ${site.address.addressRegion}. Endereço completo sob consulta.`}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sage text-forest">◷</span>
              <div>
                <p className="font-semibold text-forest">Horários</p>
                {hasHours ? (
                  <ul className="mt-1 space-y-1 text-sm text-muted">
                    {site.openingHours.map((hour) => (
                      <li key={hour.dayOfWeek}>{hour.dayOfWeek}: {hour.opens}–{hour.closes}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-1 text-sm text-muted">Consulte os horários disponíveis pelo WhatsApp.</p>
                )}
              </div>
            </div>
          </div>
          {site.google.directionsUrl ? (
            <TrackedLink
              href={site.google.directionsUrl}
              action="directions"
              external
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest px-6 text-sm font-semibold text-forest transition hover:bg-sage"
            >
              Como chegar <ArrowUpRightIcon className="h-4 w-4" />
            </TrackedLink>
          ) : (
            <p className="mt-8 text-xs text-muted">O link de rota será publicado quando o endereço estiver confirmado.</p>
          )}
        </div>
        <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] bg-sage md:min-h-[420px]">
          {site.google.mapEmbedUrl ? (
            <iframe
              title={`Mapa do consultório ${site.name} em Campo Grande`}
              src={site.google.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_40%,#fff_0,#e7eee8_48%,#d7e5da_100%)] p-8 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-leaf shadow-sm">
                <PinIcon className="h-8 w-8" />
              </div>
              <p className="font-display text-2xl text-forest">Campo Grande, Rio de Janeiro</p>
              <p className="mt-2 max-w-xs text-sm leading-6 text-muted">O mapa será exibido após a confirmação do endereço da clínica.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="bg-forest px-5 py-16 text-white sm:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b8d5c3]">Vamos conversar?</p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Seu próximo passo pode começar com uma conversa.</h2>
          <p className="mt-4 text-sm leading-6 text-white/75">Me conte o que você precisa. Eu respondo pelo WhatsApp.</p>
        </div>
        <WhatsAppCta className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-white px-7 font-semibold text-forest transition hover:bg-sage md:w-auto" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#19382f] px-5 pb-28 pt-10 text-white sm:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-white/65">{site.descriptor}</p>
          <p className="mt-3 text-xs text-white/55">© {new Date().getFullYear()} {site.name}. Conteúdo informativo, não substitui avaliação profissional.</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80">
          {site.phone && (
            <TrackedLink href={`tel:${site.phone}`} action="phone" className="hover:text-white">
              Telefone: {site.phone}
            </TrackedLink>
          )}
          {site.google.businessProfileUrl && (
            <a href={site.google.businessProfileUrl} target="_blank" rel="noreferrer" className="hover:text-white">
              Ficha no Google
            </a>
          )}
          <a href={site.privacyPath} className="hover:text-white">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default async function HomePage() {
  const [summary, allReviews, posts] = await Promise.all([
    gbpProvider.getSummary(),
    gbpProvider.getReviews(),
    gbpProvider.getPosts(),
  ]);
  const configuredMinStars = Number.parseInt(process.env.GBP_MIN_STARS || "4", 10);
  const minStars = Number.isFinite(configuredMinStars)
    ? Math.min(5, Math.max(1, configuredMinStars))
    : 4;
  const reviews = allReviews.filter((review) => review.rating >= minStars);

  return (
    <>
      <BusinessJsonLd summary={summary} includeAggregateRating={!isMockGbpProvider} />
      <FaqJsonLd />
      <header className="sticky top-0 z-40 border-b border-sage/70 bg-white/95 px-5 backdrop-blur sm:px-8">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3" aria-label={`${site.name}, início`}>
            <Image src="/images/logo-mark.svg" alt="" width={40} height={40} priority />
            <span>
              <span className="block font-display text-lg leading-tight text-forest">{site.name}</span>
              <span className="block text-[10px] uppercase tracking-[0.14em] text-muted">{site.descriptor}</span>
            </span>
          </a>
          <WhatsAppCta className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-forest px-4 text-xs font-semibold text-white transition hover:bg-leaf sm:px-5 sm:text-sm" />
        </div>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-cream px-5 pb-20 pt-12 sm:px-8 md:pb-28 md:pt-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div className="relative z-10">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-sage px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-forest">
                Podologia clínica · Campo Grande, RJ
              </p>
              <h1 className="max-w-2xl font-display text-[2.65rem] leading-[1.08] tracking-tight text-forest sm:text-5xl md:text-6xl">
                Unha encravada, calos ou mudanças nas unhas? Eu posso orientar você.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
                Unha encravada, calos, alterações nas unhas ou cuidado com o pé diabético? Eu sou a Val e posso conversar com você sobre podologia clínica, com atenção e respeito ao seu momento.
              </p>
              <div className="mt-8 flex flex-col items-start gap-5">
                <WhatsAppCta className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-forest px-7 text-base font-semibold text-white shadow-lg shadow-forest/15 transition hover:-translate-y-0.5 hover:bg-leaf sm:w-auto" />
                <RatingBadge averageRating={summary.averageRating} totalReviews={summary.totalReviews} />
              </div>
              <p className="mt-3 text-xs text-muted">Informações sobre avaliação exibidas conforme a camada de dados.</p>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="absolute -inset-3 rounded-[2.5rem] bg-[#dce9df]" />
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[2.2rem] bg-sage">
                <Image
                  src="/images/hero-care.svg"
                  alt="Ilustração acolhedora sobre cuidados com os pés"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              {isMockGbpProvider && (
                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] text-muted shadow-sm">
                  Ilustração demonstrativa
                </span>
              )}
            </div>
          </div>
        </section>

        <section id="servicos" className="bg-white px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Como posso ajudar"
              title="Cuidado podológico para diferentes necessidades"
              description="Eu avalio cada situação com atenção e explico as possibilidades de cuidado de forma clara."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {site.services.map((service) => (
                <article key={service.title} className="group rounded-3xl border border-sage/80 bg-white p-6 transition hover:-translate-y-1 hover:shadow-card sm:p-7">
                  <span className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sage font-display text-lg text-forest">{service.icon}</span>
                  <h3 className="font-display text-2xl text-forest">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                </article>
              ))}
            </div>
            <p className="mt-7 text-xs leading-5 text-muted">O atendimento é definido após avaliação. Em caso de sinais de infecção, dor intensa ou agravamento, procure um serviço de saúde.</p>
          </div>
        </section>

        <section id="sobre" className="bg-sage/50 px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative mx-auto aspect-[4/4.5] w-full max-w-md overflow-hidden rounded-[2rem] bg-sage">
              <Image src={site.about.photoSrc} alt={site.about.photoAlt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] text-muted shadow-sm">Ilustração provisória · substituir pela foto da Val</span>
            </div>
            <div>
              <SectionHeading eyebrow={`Prazer, eu sou ${site.professionalName}`} title="Cuidado que começa pela escuta" />
              <div className="space-y-4 text-sm leading-7 text-muted md:text-base">
                {site.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {(site.about.education || site.about.experience) && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {site.about.education && (
                    <div className="rounded-2xl border border-sage bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-leaf">Formação</p>
                      <p className="mt-2 text-sm font-semibold text-forest">{site.about.education}</p>
                    </div>
                  )}
                  {site.about.experience && (
                    <div className="rounded-2xl border border-sage bg-white p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-leaf">Experiência</p>
                      <p className="mt-2 text-sm font-semibold text-forest">{site.about.experience}</p>
                    </div>
                  )}
                </div>
              )}
              <WhatsAppCta className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest px-6 text-sm font-semibold text-forest transition hover:bg-sage" />
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 sm:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Sem complicação" title="Como funciona o atendimento" centered />
            <ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {site.process.map((step, index) => (
                <li key={step.title} className="relative">
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-display text-xl text-forest">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="font-display text-xl text-forest">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ReviewsSection reviews={reviews} isMock={isMockGbpProvider} />
        <PostsSection posts={posts} isMock={isMockGbpProvider} />
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppCta
        label=""
        className="fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1e7651] text-white shadow-xl shadow-forest/25 transition hover:scale-105 md:hidden"
        aria-label="Agendar pelo WhatsApp"
      />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sage bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <WhatsAppCta className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-forest px-5 text-sm font-semibold text-white" />
      </div>
    </>
  );
}
