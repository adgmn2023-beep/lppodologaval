import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ServiceIcon({ kind, ...props }: IconProps & { kind: string }) {
  const paths: Record<string, string> = {
    nail: "M7 20V8a5 5 0 0 1 10 0v12M7 12h10M10 6v3m4-3v3",
    laser: "m4 20 9-9m-5 0 5 5m4-13v4m-2-2h4m-1 6 3 1M10 3l1 3",
    foot: "M10 4c-3 2-3 6-2 9l-3 4c-1 2 1 4 4 4h5c3 0 4-2 3-4l-2-5V5c0-2-4-3-5-1Zm0 10 4 3m-4 0 4-3",
    layers: "m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5M3 18l9 5 9-5",
    crack: "M7 3h10l3 9-3 9H7l-3-9 3-9Zm6 0-3 7 5 3-4 8",
    drop: "M12 3S5 11 5 15a7 7 0 0 0 14 0c0-4-7-12-7-12Zm-3 13a3 3 0 0 0 3 3",
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[kind] || paths.foot} /></svg>;
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20.5 11.7a8.4 8.4 0 0 1-12.4 7.4L3 20l.9-4.9a8.4 8.4 0 1 1 16.6-3.4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.7c-.2.2-.2.3-.1.5.5.9 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.8-.9c.2-.2.4-.3.6-.2l1.6.8c.2.1.4.2.4.4 0 .3-.2 1.3-.7 1.7-.5.5-1.2.7-2 .6-1-.1-2.2-.6-3.6-1.8-1.6-1.4-2.6-3.1-2.8-4.1-.3-1 .1-1.7.4-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
