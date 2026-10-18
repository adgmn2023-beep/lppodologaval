"use client";

import { useEffect, useState } from "react";
import { PinIcon } from "./icons";
import { TrackedLink } from "./tracked-links";

export function ResponsiveMap({ embedUrl, mapsUrl, address }: { embedUrl: string; mapsUrl: string; address: string }) {
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const query = matchMedia("(min-width: 768px)");
    const update = () => setDesktop(query.matches);
    const frame = requestAnimationFrame(update);
    query.addEventListener("change", update);
    return () => { cancelAnimationFrame(frame); query.removeEventListener("change", update); };
  }, []);
  return (
    <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-line bg-white md:min-h-[420px]">
      {desktop ? (
        <iframe title="Mapa com a localização do consultório da Cláudia Val" src={embedUrl} width={600} height={420} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 h-full w-full border-0" />
      ) : (
        <div className="flex min-h-[320px] flex-col items-center justify-center gap-5 p-6 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink"><PinIcon className="h-8 w-8 text-gold" /></span>
          <p className="text-base leading-6 text-heading">{address}</p>
          <TrackedLink href={mapsUrl} action="directions" external className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink px-6 font-semibold text-ink hover:bg-ivory-2">Abrir no Maps</TrackedLink>
        </div>
      )}
    </div>
  );
}
