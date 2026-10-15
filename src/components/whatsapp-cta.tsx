import { site } from "@/config/site";
import { WhatsAppIcon } from "./icons";
import { WhatsAppLink } from "./tracked-links";

type WhatsAppCtaProps = {
  label?: string;
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppCta({
  label = "Agendar no WhatsApp",
  className = "",
  showIcon = true,
}: WhatsAppCtaProps) {
  return (
    <WhatsAppLink
      href={`https://wa.me/${site.whatsapp.phone.replace(/\D/g, "")}?text=${encodeURIComponent(site.whatsapp.message)}`}
      className={className}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}
      <span>{label}</span>
    </WhatsAppLink>
  );
}
