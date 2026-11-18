import { useLanguage } from "../i18n/LanguageContext";

const MAP_QUERY = "KSAG Insurance GmbH, Industriestrasse 14, 8305 Dietlikon, Switzerland";
const MAP_CENTER = "47.414908,8.622453";

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

type OfficeMapProps = {
  className?: string;
  showPlaceCard?: boolean;
};

export function OfficeMap({ className = "office-map-frame", showPlaceCard = false }: OfficeMapProps) {
  const { t, lang } = useLanguage();
  const src = showPlaceCard
    ? `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=${lang}&z=16&output=embed`
    : `https://maps.google.com/maps?ll=${MAP_CENTER}&z=16&hl=${lang}&output=embed`;

  return (
    <div className={className}>
      <iframe
        title={t.contact.mapTitle}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      {showPlaceCard ? null : <span className="map-pin" aria-hidden="true" />}
    </div>
  );
}
