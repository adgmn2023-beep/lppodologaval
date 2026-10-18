import type { GbpReview } from "@/lib/gbp";
import { site } from "@/config/site";
import { SectionHeading } from "./section-heading";
import { ArrowUpRightIcon } from "./icons";
import { ReviewDate, ReviewText } from "./review-content";

type ReviewsSectionProps = {
  reviews: GbpReview[];
  isMock: boolean;
};

export function ReviewsSection({ reviews, isMock }: ReviewsSectionProps) {
  if (reviews.length < 3) return null;

  return (
    <section id="avaliacoes" className="min-w-0 overflow-hidden bg-ivory-2 px-5 py-14 sm:px-8 md:py-24">
      <div className="mx-auto min-w-0 max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Quem já veio"
            title="Palavras de quem confia no meu cuidado"
            description="Cada experiência é única. Veja alguns relatos compartilhados por quem já passou pelo meu consultório."
          />
          <div className="flex flex-wrap gap-2 md:mb-14">
            {site.google.reviewsUrl && (
              <a className="inline-flex min-h-12 items-center gap-2 text-base font-semibold text-heading underline decoration-line underline-offset-4 hover:text-accent" href={site.google.reviewsUrl} target="_blank" rel="noreferrer">
                Ver todas no Google <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
            {site.google.writeReviewUrl && (
              <a className="inline-flex min-h-12 items-center gap-2 text-base font-semibold text-heading underline decoration-line underline-offset-4 hover:text-accent" href={site.google.writeReviewUrl} target="_blank" rel="noreferrer">
                Deixar sua avaliação <ArrowUpRightIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
        {isMock && <p className="mb-5 text-[13px] text-muted">Dados de exemplo — avaliações demonstrativas.</p>}
        <div className={`relative flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5 md:grid md:snap-none md:grid-cols-2 md:overflow-visible ${reviews.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`} tabIndex={0} aria-label="Avaliações de pacientes">
          {reviews.map((review) => (
            <article key={review.id} className="flex w-[85%] shrink-0 snap-start flex-col rounded-3xl border border-line bg-white p-5 shadow-card md:w-auto md:min-w-0 md:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="text-lg tracking-[0.12em] text-gold-deep" aria-label={`${review.rating} de 5 estrelas`}>
                  {"★".repeat(review.rating)}
                </span>
                <span className="text-[13px] text-muted">{review.date ? <ReviewDate date={review.date} fallback={review.relativeDate} /> : review.relativeDate}</span>
              </div>
              <ReviewText text={review.text} />
              {review.ownerReply && (
                <div className="mb-5 rounded-2xl bg-ivory-2 p-4">
                  <p className="mb-1 text-[13px] font-bold text-heading">Minha resposta</p>
                  <p className="text-base leading-6 text-muted">{review.ownerReply}</p>
                </div>
              )}
              <p className="mt-auto border-t border-line pt-4 text-base font-semibold text-heading">{review.authorName}</p>
            </article>
          ))}
        </div>
        {reviews.some((review) => review.dateApproximate) && <p className="mt-3 text-[13px] leading-6 text-muted">Datas aproximadas a partir das indicações de tempo do Google.</p>}
      </div>
    </section>
  );
}
