// Photo captions (EN/FR). Confirmed captions come from IAPA Pulse; unconfirmed ones carry a TBC tag.
import type { Lang } from "./iapa-content";

export type CaptionEntry = Record<Lang, string> & { tbc?: boolean };
export const CAPTION_TBC: Record<Lang, string> = { en: "[Caption TBC]", fr: "[Légende à confirmer]" };

export const CAPTIONS: Record<string, CaptionEntry> = {
  ghana: { en: "IAPA members, Ghana", fr: "Membres de l'IAPA, Ghana", tbc: true },
  kenya: { en: "Strategic workshop with ABF-GIZ and ACBF, Kenya, May 2026", fr: "Atelier stratégique avec l'ABF-GIZ et l'ACBF, Kenya, mai 2026" },
  signing: { en: "Signing IAPA's registration documents, 2026", fr: "Signature des documents d'enregistrement de l'IAPA, 2026" },
  evaluation: { en: "IAPA representatives on the ABF-GIZ evaluation committee, Accra", fr: "Représentants de l'IAPA au comité d'évaluation ABF-GIZ, Accra" },
  robusta: { en: "FBS Robusta Coffee pilot training, Abong Mbang, Cameroon", fr: "Formation pilote FBS Café Robusta, Abong Mbang, Cameroun" },
  chadSup: { en: "Supervising FBS sessions in the field, Chad", fr: "Supervision de sessions FBS sur le terrain, Tchad" },
  mali: { en: "FBS training for rice producer supervisors, Mali", fr: "Formation FBS des encadreurs de riziculteurs, Mali" },
  burkinaSession: { en: "PBS pilot training, Bobo-Dioulasso, Burkina Faso", fr: "Formation pilote PBS, Bobo-Dioulasso, Burkina Faso" },
  burkinaMaize: { en: "PBS training of trainers, Burkina Faso", fr: "Formation de formateurs PBS, Burkina Faso" },
  civ: { en: "FBS Coffee training of trainers, Côte d'Ivoire", fr: "Formation de formateurs FBS Café, Côte d'Ivoire" },
  spirulina: { en: "Farmer Business School training session", fr: "Session de formation Farmer Business School", tbc: true },
  cameroon: { en: "FBS Coffee trainers, Cameroon", fr: "Formateurs FBS Café, Cameroun", tbc: true },
  mauritania: { en: "Processor Business School training session", fr: "Session de formation Processor Business School", tbc: true },
  morocco: { en: "Pilot FBS Milk training, Morocco", fr: "Formation pilote FBS Lait, Maroc" },
  burkina: { en: "Farmer Business School training session", fr: "Session de formation Farmer Business School", tbc: true },
};

export const GALLERY_TITLE: Record<Lang, string> = { en: "IAPA in action", fr: "L'IAPA en action" };
export const TRAINING_GALLERY_TITLE: Record<Lang, string> = { en: "Our trainings in the field", fr: "Nos formations sur le terrain" };
export const MEDIA_GALLERY_TITLE: Record<Lang, string> = { en: "Photo gallery", fr: "Galerie photos" };
