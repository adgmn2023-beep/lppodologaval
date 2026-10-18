import Image from "next/image";
import type { GbpPost } from "@/lib/gbp";
import { site } from "@/config/site";
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
          title="Novidades e cuidado de perto"
          description="Informações e novidades do Studio Val para você acompanhar."
        />
        {isMock && <p className="-mt-8 mb-5 text-xs text-muted">Dados de exemplo — publicações demonstrativas.</p>}
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="overflow-hidden rounded-3xl border border-line bg-white shadow-card">
              <div className="relative aspect-[16/10] bg-ivory-2">
                <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="mb-3 text-xs text-muted">{post.relativeDate}</p>
                <p className="mb-6 text-sm leading-6 text-body">{post.text}</p>
                {post.ctaUrl === "whatsapp" ? (
                  <WhatsAppCta label={post.ctaLabel} className="inline-flex items-center gap-2 text-sm font-semibold text-heading underline decoration-line underline-offset-4 hover:text-accent" showIcon={false} />
                ) : (
                  <a href={post.ctaUrl || site.google.businessProfileUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-heading underline decoration-line underline-offset-4 hover:text-accent">
                    {post.ctaLabel} <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
