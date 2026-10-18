"use client";

import { useEffect, useState } from "react";
import type { OpeningHour } from "@/config/site";
import { getOpeningStatus } from "@/lib/opening-status";

export function OpeningStatus({ hours, hoursLabel }: { hours: readonly OpeningHour[]; hoursLabel: string }) {
  const [status, setStatus] = useState(hoursLabel);
  useEffect(() => {
    const update = () => setStatus(getOpeningStatus(new Date(), hours));
    const frame = requestAnimationFrame(update);
    const interval = setInterval(update, 30_000);
    return () => { cancelAnimationFrame(frame); clearInterval(interval); };
  }, [hours]);
  const isOpen = status.startsWith("Aberto agora");
  return <p className="flex min-h-12 items-start gap-2 text-sm font-semibold leading-6 text-muted" aria-live="polite"><span aria-hidden="true" className={`mt-2 h-2 w-2 shrink-0 rounded-full ${isOpen ? "bg-gold-deep" : "bg-muted"}`} /><span>{status}</span></p>;
}
