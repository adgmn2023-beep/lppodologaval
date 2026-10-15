import type { GbpReview } from "@/lib/gbp";
import { site } from "@/config/site";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon } from "./icons";

type ReviewsSectionProps = {
  reviews: GbpReview[];
  isMock: boolean;
};

export function ReviewsSection({ reviews, isMock }: ReviewsSectionProps) {
  if (reviews.length === 0) return null;

  return (
    <section id="avaliacoes" className="bg-cream px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Quem já veio"
            title="Palavras de quem confia no meu cuidado"
            description="Cada experiência é única. Veja alguns relatos compartilhados por quem já passou pelo meu consultório."
          />
          <div className="mb-10 flex flex-wrap gap-3 md:mb-14">
            {site.google.reviewsUrl && (
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-sage underline-offset-4 hover:text-leaf" href={site.google.reviewsUrl} target="_blank" rel="noreferrer">
                Ver todas no Google <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
            {site.google.writeReviewUrl && (
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-forest underline decoration-sage underline-offset-4 hover:text-leaf" href={site.google.writeReviewUrl} target="_blank" rel="noreferrer">
                Deixar sua avaliação <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        {isMock && <p className="mb-5 text-xs text-muted">Dados de exemplo — avaliações demonstrativas.</p>}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.id} className="flex flex-col rounded-3xl border border-sage/70 bg-white p-6 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-lg tracking-[0.12em] text-[#b48330]" aria-label={`${review.rating} de 5 estrelas`}>
                  {"★".repeat(review.rating)}
                  <span className="sr-only"> {review.rating} de 5 estrelas</span>
                </span>
                <span className="text-xs text-muted">{review.relativeDate}</span>
              </div>
              {review.text.length > 180 ? (
                <details className="mb-5 text-sm leading-6 text-ink">
                  <summary className="cursor-pointer list-none marker:hidden">
                    {review.text.slice(0, 160).trimEnd()}…{" "}
                    <span className="font-semibold text-leaf underline underline-offset-2">Ler avaliação completa</span>
                  </summary>
                  <p className="mt-2">{review.text}</p>
                </details>
              ) : (
                <p className="mb-5 text-sm leading-6 text-ink">{review.text}</p>
              )}
              {review.ownerReply && (
                <div className="mb-5 rounded-2xl bg-sage/60 p-4">
                  <p className="mb-1 text-xs font-bold text-forest">Resposta da Val</p>
                  <p className="text-sm leading-5 text-muted">{review.ownerReply}</p>
                </div>
              )}
              <p className="mt-auto border-t border-sage pt-4 text-sm font-semibold text-forest">{review.authorName}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
