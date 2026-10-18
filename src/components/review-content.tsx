"use client";

import { useEffect, useId, useRef, useState } from "react";
import { formatReviewDate } from "@/lib/relative-date";

export function ReviewDate({ date, fallback }: { date: string; fallback: string }) {
  const [label, setLabel] = useState(fallback);
  useEffect(() => {
    const update = () => setLabel(formatReviewDate(date));
    const frame = requestAnimationFrame(update);
    const interval = setInterval(update, 60_000);
    return () => { cancelAnimationFrame(frame); clearInterval(interval); };
  }, [date]);
  return <time dateTime={date}>{label}</time>;
}

export function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const paragraph = useRef<HTMLParagraphElement>(null);
  const id = useId();

  useEffect(() => {
    const element = paragraph.current;
    if (!element || expanded) return;
    const measure = () => setOverflows(element.scrollHeight > element.clientHeight + 1);
    let active = true;
    void document.fonts.ready.then(() => { if (active) measure(); });
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => { active = false; observer.disconnect(); };
  }, [expanded, text]);

  return (
    <div className="mb-5 text-base leading-7 text-body">
      <p ref={paragraph} id={id} className={expanded ? "" : "line-clamp-5"}>{text}</p>
      {(expanded || overflows) && (
        <button type="button" aria-expanded={expanded} aria-controls={id} onClick={() => setExpanded(!expanded)} className="mt-2 flex min-h-12 cursor-pointer items-center rounded-sm font-semibold text-accent underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2">
          {expanded ? "Ler menos" : "Ler mais"}
        </button>
      )}
    </div>
  );
}
