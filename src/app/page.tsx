import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { BusinessJsonLd } from "@/components/business-json-ld";
import { FaqJsonLd, FaqSection } from "@/components/faq-section";
import { ArrowUpRightIcon, PinIcon, ServiceIcon } from "@/components/icons";
import { OpeningStatus } from "@/components/opening-status";
import { PostsSection } from "@/components/posts-section";
import { ResponsiveMap } from "@/components/responsive-map";
import { ReviewsSection } from "@/components/reviews-section";
import { SectionHeading } from "@/components/section-heading";
import { TrackedLink, WhatsAppLink } from "@/components/tracked-links";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { site } from "@/config/site";
import { gbpProvider, isMockGbpProvider } from "@/lib/gbp";

function RatingBadge({ averageRating, totalReviews }: { averageRating: number; totalReviews: number }) {
  return (
    <span className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[13px] font-semibold text-body">
      <span aria-hidden="true" className="text-gold-deep">★</span>
      <span>{averageRating.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} · {totalReviews} avaliações no Google</span>
      {isMockGbpProvider && <span className="rounded-full bg-ivory-2 px-2 text-[13px] text-muted">exemplo</span>}
    </span>
  );
}

function LocationSection() {
  return (
    <section id="localizacao" className="bg-ivory px-5 py-14 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Onde me encontrar" title="Meu consultório em Campo Grande" description="Recebo você com hora marcada, de segunda a sábado." />
          <div className="space-y-6 text-base leading-7 text-muted">
            <div className="flex gap-3">
              <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-2"><PinIcon className="h-6 w-6 text-gold-deep" /></span>
              <div>
                <p className="font-semibold text-heading">{site.address.full}</p>
                <p className="mt-2">Fico {site.address.reference}.</p>
                <p className="mt-2">{site.parking}.</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-heading">Meus horários</p>
              <p>{site.hoursLabel}</p>
            </div>
            <div>
              <p>Aceito cartão de crédito, débito e pagamento por aproximação.</p>
              <p className="mt-2">No meu consultório, tenho assento e banheiro acessíveis.</p>
            </div>
          </div>
          <TrackedLink href={site.google.directionsUrl} action="directions" external className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-deep px-6 font-semibold text-gold-deep transition hover:bg-ivory-2">
            Como chegar <ArrowUpRightIcon className="h-5 w-5" />
          </TrackedLink>
        </div>
        <ResponsiveMap embedUrl={site.google.resolvedMapEmbedUrl} mapsUrl={site.google.mapUrl} address={site.address.full} />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="surface-dark bg-ink px-5 py-14 sm:px-8 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-gold-light">Fale comigo</p>
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">Seu próximo passo pode começar com uma conversa.</h2>
          <p className="mt-4 text-lg leading-7 text-on-ink/85">Me conte o que você precisa. Eu respondo pelo WhatsApp.</p>
        </div>
        <WhatsAppCta className="inline-flex min-h-14 w-full shrink-0 items-center justify-center gap-3 rounded-full bg-gold px-7 font-semibold text-ink transition hover:bg-gold-light md:w-auto" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="surface-dark border-t border-gold/25 bg-ink px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <Image src="/images/studio-val-logo.webp" alt="Studio Val Podologia" width={900} height={508} sizes="200px" className="mb-5 h-auto w-[200px]" />
          <p className="font-display text-2xl text-muted-on-ink">{site.name}</p>
          <p className="mt-2 text-base text-muted-on-ink">{site.address.full}</p>
          <p className="mt-2 text-base text-muted-on-ink">{site.hoursLabel}</p>
          <p className="mt-3 text-[13px] leading-6 text-muted-on-ink">© {new Date().getFullYear()} {site.name}. Conteúdo informativo.</p>
        </div>
        <div className="flex flex-wrap gap-2 text-base text-muted-on-ink">
          <TrackedLink href={`tel:${site.phone}`} action="phone" className="inline-flex min-h-12 items-center px-2 hover:text-white">{site.phoneDisplay}</TrackedLink>
          <a href={site.sameAs[0]} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center px-2 hover:text-white">Instagram</a>
          {site.google.businessProfileUrl && <a href={site.google.businessProfileUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center px-2 hover:text-white">Ficha no Google</a>}
          <a href={site.privacyPath} className="inline-flex min-h-12 items-center px-2 hover:text-white">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}

export default async function HomePage() {
  const [summary, allReviews, posts] = await Promise.all([
    gbpProvider.getSummary(), gbpProvider.getReviews(), gbpProvider.getPosts(),
  ]);
  const mediaExists = (src: string) => existsSync(path.join(process.cwd(), "public", src));
  const hasHero = mediaExists(site.images.hero.src);
  const hasAbout = mediaExists(site.images.about.src);
  const configuredMinStars = Number.parseInt(process.env.GBP_MIN_STARS || "4", 10);
  const minStars = Number.isFinite(configuredMinStars) ? Math.min(5, Math.max(1, configuredMinStars)) : 4;
  const reviews = allReviews.filter((review) => review.rating >= minStars);
  const optionalServices = site.optionalServices.filter((service) => service.confirmed);
  const heroSizes = "(min-width: 1280px) 480px, (min-width: 1024px) calc(46vw - 55.2px), (min-width: 640px) min(calc(100vw - 64px), 48svh), min(calc(100vw - 40px), 48svh)";

  return (
    <>
      <BusinessJsonLd />
      <FaqJsonLd />
      <header className="surface-dark sticky top-0 z-40 border-b border-gold/25 bg-ink px-5 sm:px-8">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 md:h-[72px]">
          <a href="#inicio" className="flex min-h-12 items-center gap-2" aria-label={`${site.brand} Podologia, início`}>
            <Image src="/images/studio-val-logo.webp" alt="Studio Val Podologia" width={900} height={508} priority sizes="(min-width: 768px) 93px, 78px" className="h-11 w-auto md:h-[52px]" />
          </a>
          <WhatsAppCta label="Agendar" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 text-base font-semibold text-ink transition hover:bg-gold-light" />
        </div>
      </header>
      <main>
        <section id="inicio" className="overflow-hidden bg-ivory px-5 pb-14 pt-5 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-gold-deep bg-transparent px-3 py-1 text-[13px] font-semibold text-gold-deep">Campo Grande, Rio de Janeiro</p>
              <h1 className="max-w-2xl font-display text-[2rem] font-semibold leading-[1.12] tracking-tight text-heading sm:text-5xl lg:text-[3.25rem]">
                Podóloga em Campo Grande, RJ
                <span className="mt-2 block text-[1.5rem] font-normal leading-tight text-gold-deep sm:text-3xl lg:text-4xl">cuidado atencioso para os seus pés</span>
              </h1>
              <p className="mt-3 max-w-xl text-lg leading-[1.5] text-body lg:mt-5 lg:leading-8">
                Sou a Cláudia Val e atendo unha encravada, micose de unha (inclusive a laser), calos, frieiras, rachaduras e o cuidado dos pés de quem tem diabetes. Atendimento com hora marcada, de segunda a sábado.
              </p>
              <WhatsAppCta className="mt-5 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-ink/10 bg-gold px-5 text-base font-semibold text-ink transition hover:bg-gold-light lg:w-auto lg:px-7" />
              <div className="mt-3" data-hero-address>
                <p className="flex items-start gap-2 text-base leading-6 text-muted"><PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" /><span>{site.address.streetAddress} · Campo Grande, RJ</span></p>
                <OpeningStatus hours={site.openingHours} hoursLabel={site.hoursLabel} />
              </div>
              <div className="mt-2 flex flex-wrap gap-2" aria-label="Sobre meu atendimento">
                {summary && <RatingBadge averageRating={summary.averageRating} totalReviews={summary.totalReviews} />}
                <span className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-3 py-1 text-[13px] text-body">Aceito cartões</span>
                <span className="inline-flex min-h-9 items-center rounded-full border border-line bg-white px-3 py-1 text-[13px] text-body">Atendimento com hora marcada</span>
              </div>
            </div>
            {hasHero && (
              <div className="mx-auto aspect-[4/5] w-full max-w-[min(100%,48svh)] overflow-hidden rounded-2xl border border-line bg-white shadow-card lg:max-w-[480px]">
                <Image {...site.images.hero} alt={site.images.hero.alt} quality={75} preload fetchPriority="high" sizes={heroSizes} className="hero-photo aspect-[4/5] h-full w-full object-cover" />
              </div>
            )}
          </div>
        </section>

        <section id="servicos" className="bg-white px-5 py-14 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="Como posso ajudar" title="Cuidado podológico para diferentes necessidades" description="Eu avalio cada situação com atenção e explico as possibilidades de cuidado de forma clara." />
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {site.services.map((service) => (
                <article key={service.title} className="rounded-3xl border border-line bg-white transition hover:shadow-card">
                  <WhatsAppLink href={`https://wa.me/${site.whatsapp.phone}?text=${encodeURIComponent(`Olá, Val! Vim pelo site e gostaria de saber sobre ${service.title}.`)}`} className="grid h-full grid-cols-[44px_minmax(0,1fr)] items-center gap-x-3 gap-y-2 rounded-3xl p-4 focus-visible:outline-2 focus-visible:outline-gold-deep md:flex md:flex-col md:items-start md:gap-3 md:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ivory-2 text-gold-deep"><ServiceIcon kind={service.icon} className="h-6 w-6" /></span>
                    <h3 className="font-display text-xl font-semibold text-heading md:text-2xl">{service.title}</h3>
                    <p className="col-span-2 text-base leading-6 text-muted">{service.description}</p>
                  </WhatsAppLink>
                </article>
              ))}
              {optionalServices.map((service) => <article key={service.title} className="rounded-3xl border border-line p-5"><h3 className="font-display text-xl text-heading">{service.title}</h3><p className="mt-2 text-base text-muted">{service.description}</p></article>)}
            </div>
            <div className="mt-7"><p className="mb-3 font-semibold text-heading">Também atendo:</p><ul className="flex flex-wrap gap-2">{site.additionalServices.map((service) => <li key={service} className="rounded-full border border-gold-deep/30 bg-ivory-2 px-3 py-2 text-[13px] text-body">{service}</li>)}</ul></div>
            {site.prices.length > 0 && <ul className="mt-7 space-y-2 text-base text-heading">{site.prices.map((price) => <li key={price.service}>{price.service}: a partir de {price.from.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</li>)}</ul>}
            <p className="mt-6 text-[13px] leading-6 text-muted">Entre em contato para mais informações.</p>
            <div className="mt-7 text-center"><WhatsAppCta className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-gold px-6 font-semibold text-ink transition hover:bg-gold-light sm:w-auto" /></div>
          </div>
        </section>

        <section id="sobre" className="bg-ivory-2 px-5 py-14 sm:px-8 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
            {hasAbout && <figure className="mx-auto w-full max-w-md"><Image {...site.images.about} alt={site.images.about.alt} loading="lazy" sizes="(min-width: 1280px) 448px, (min-width: 768px) 40vw, 90vw" className="aspect-[4/5] w-full rounded-2xl border border-line object-cover" /><figcaption className="mt-3 text-center text-[13px] leading-5 text-muted">Cláudia Val, podóloga</figcaption></figure>}
            <div>
              <SectionHeading eyebrow={`Prazer, eu sou ${site.professionalName}`} title="Cuidado que começa pela escuta" />
              <div className="space-y-4 text-lg leading-8 text-muted">{site.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {(site.about.education || site.about.experience || site.about.registration) && <div className="mt-6 space-y-3 text-base text-heading">{site.about.education && <p>Minha formação: {site.about.education}</p>}{site.about.experience && <p>Minha experiência: {site.about.experience}</p>}{site.about.registration && <p>Meu registro profissional: {site.about.registration}</p>}</div>}
              <WhatsAppCta className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold-deep px-6 font-semibold text-gold-deep transition hover:bg-white" />
            </div>
          </div>
        </section>

        <section className="bg-ivory px-5 py-14 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Sem complicação" title="Como funciona o atendimento" centered /><ol className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{site.process.map((step, index) => <li key={step.title}><span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ivory-2 font-display text-xl text-gold-deep">{index + 1}</span><h3 className="font-display text-xl text-heading">{step.title}</h3><p className="mt-2 text-base leading-7 text-muted">{step.description}</p></li>)}</ol></div>
        </section>
        <ReviewsSection reviews={reviews} isMock={isMockGbpProvider} />
        <PostsSection posts={posts} isMock={isMockGbpProvider} />
        {site.confirmed.anyRegion && <section className="bg-white px-5 py-14 sm:px-8 md:py-24"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Minha região" title={site.region.title} /><p className="text-lg leading-8 text-muted">{site.region.description}</p></div></section>}
        <LocationSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppCta label="" ariaLabel="Agendar no WhatsApp" className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-xl md:flex" />
      <nav aria-label="Contato rápido" className="mobile-contact fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white md:hidden">
        <div className="mx-auto grid h-[55px] max-w-lg grid-cols-[minmax(0,1fr)_48px_88px] items-center gap-2 px-2">
          <WhatsAppCta showIcon={false} className="flex min-h-12 items-center justify-center rounded-full bg-gold px-2 text-[13px] font-semibold text-ink" />
          <TrackedLink href={`tel:${site.phone}`} action="phone" className="flex min-h-12 items-center justify-center rounded-full border border-gold-deep text-[13px] font-semibold text-gold-deep">Ligar</TrackedLink>
          <TrackedLink href={site.google.directionsUrl} action="directions" external className="flex min-h-12 items-center justify-center rounded-full border border-gold-deep text-[13px] font-semibold text-gold-deep">Como chegar</TrackedLink>
        </div>
      </nav>
    </>
  );
}
