import { useLanguage } from "../i18n/LanguageContext";

const WHATSAPP = "https://wa.me/41791234567?text=Hallo%20KSAG%20Insurance";

export function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      className="whatsapp-fab"
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappLabel}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 1 11.9 11.9 0 0 0 1.7 18.3L1 23l4.8-.7A11.9 11.9 0 0 0 12.05 23 11.9 11.9 0 0 0 24 11.1a11.7 11.7 0 0 0-3.5-7.6ZM12.05 21.1a9.9 9.9 0 0 1-5-1.4l-.36-.21-2.85.74.76-2.78-.23-.37a9.9 9.9 0 1 1 7.68 4.02Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.1 8.1 0 0 1-2.38-1.47 8.9 8.9 0 0 1-1.65-2.05c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.67-1.61-.91-2.2c-.24-.58-.48-.5-.67-.51h-.57a1.1 1.1 0 0 0-.8.37 3.34 3.34 0 0 0-1.04 2.48 5.8 5.8 0 0 0 1.22 3.08 13.2 13.2 0 0 0 5.06 4.5c.7.3 1.25.48 1.68.61a4 4 0 0 0 1.84.12 3.05 3.05 0 0 0 2-1.41 2.48 2.48 0 0 0 .17-1.41c-.07-.13-.27-.2-.57-.35Z" />
      </svg>
      <span>{t.whatsappLabel}</span>
    </a>
  );
}
