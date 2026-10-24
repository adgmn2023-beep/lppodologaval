import type { GbpPost } from "@/lib/gbp";
import { Carousel } from "./carousel";
import { ArrowUpRightIcon } from "./icons";
import { WhatsAppCta } from "./whatsapp-cta";
import { SectionHeading } from "./section-heading";

type PostsSectionProps = {
  posts: GbpPost[];
  isMock: boolean;
};

export function PostsSection({ posts, isMock }: PostsSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-white px-5 py-20 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Do meu espaço"
          title="Postagens recentes do Google"
          description="Informações e novidades do Studio Val para você acompanhar."
        />
        {isMock && <p className="-mt-8 mb-5 text-xs text-muted">Dados de exemplo — publicações demonstrativas.</p>}
        <Carousel label="Postagens recentes do Google">
          {posts.slice(0, 8).map((post) => (
            <article key={post.id} className="flex w-full min-w-0 flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              {post.image && <div className="aspect-[4/3] bg-ivory-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- Google supplies optional external media; native lazy loading is intentional. */}
                <img src={post.image} alt={post.imageAlt} width={800} height={600} loading="lazy" decoding="async" referrerPolicy="no-referrer" className="aspect-[4/3] h-full w-full object-cover" />
              </div>}
              <div className="p-6">
                <p className="mb-6 line-clamp-4 text-base leading-7 text-body">{post.text}</p>
                {post.searchUrl ? (
                  <a href={post.searchUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 font-semibold text-gold-deep underline underline-offset-4">
                    Ver no Google <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : post.ctaUrl === "whatsapp" ? (
                  <WhatsAppCta label={post.ctaLabel} className="inline-flex items-center gap-2 text-sm font-semibold text-heading underline decoration-line underline-offset-4 hover:text-accent" showIcon={false} />
                ) : post.ctaUrl ? (
                  <a href={post.ctaUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 font-semibold text-gold-deep underline decoration-line underline-offset-4">
                    {post.ctaLabel} <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
