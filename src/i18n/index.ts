import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { it } from "./it";
import type { Dictionary, Lang } from "./types";

export type { Dictionary, Lang, Product } from "./types";

export const langs: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "it", label: "IT" },
  { code: "en", label: "EN" },
];

export const dictionaries: Record<Lang, Dictionary> = { de, fr, it, en };
