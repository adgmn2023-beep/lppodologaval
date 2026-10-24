import type { GbpPost } from "@/lib/gbp";
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
        <div className="grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post.id} className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              {post.image && <div className="aspect-[16/10] bg-ivory-2">
                {/* eslint-disable-next-line @next/next/no-img-element -- Google supplies optional external media; native lazy loading is intentional. */}
                <img src={post.image} alt={post.imageAlt} width={800} height={500} loading="lazy" referrerPolicy="no-referrer" className="aspect-[16/10] h-full w-full object-cover" />
              </div>}
              <div className="p-6">
                <p className="mb-3 text-[13px] text-muted">{post.date ? <time dateTime={post.date}>{post.relativeDate}</time> : post.relativeDate}</p>
                <p className="mb-6 text-base leading-7 text-body">{Array.from(post.text).length > 220 ? `${Array.from(post.text).slice(0, 219).join("").trimEnd()}…` : post.text}</p>
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
        </div>
      </div>
    </section>
  );
}
