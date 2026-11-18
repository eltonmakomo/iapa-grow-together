// Photo captions (EN/FR). Photos come from IAPA Pulse issues 2 and 3.
import type { Lang } from "./iapa-content";

type Cap = Record<Lang, string>;
export const CAPTIONS: Record<string, Cap> = {
  ghana: { en: "IAPA Ghana team receives IAPA's legal documents from ABF, Oct 2026", fr: "L'équipe IAPA Ghana reçoit les documents juridiques de l'ABF, oct. 2026" },
  kenya: { en: "Strategic workshop with ABF-GIZ and ACBF, Kenya, May 2026", fr: "Atelier stratégique avec l'ABF-GIZ et l'ACBF, Kenya, mai 2026" },
  signing: { en: "Signing IAPA's registration documents, 2026", fr: "Signature des documents d'enregistrement de l'IAPA, 2026" },
  evaluation: { en: "IAPA representatives on the ABF-GIZ evaluation committee, Accra", fr: "Représentants de l'IAPA au comité d'évaluation ABF-GIZ, Accra" },
  robusta: { en: "FBS Robusta Coffee pilot training, Abong Mbang, Cameroon", fr: "Formation pilote FBS Café Robusta, Abong Mbang, Cameroun" },
  chadSup: { en: "Supervising FBS sessions in the field, Chad", fr: "Supervision de sessions FBS sur le terrain, Tchad" },
  mali: { en: "FBS training for rice producer supervisors, Mali", fr: "Formation FBS des encadreurs de riziculteurs, Mali" },
  burkinaSession: { en: "PBS pilot training, Bobo-Dioulasso, Burkina Faso", fr: "Formation pilote PBS, Bobo-Dioulasso, Burkina Faso" },
  burkinaMaize: { en: "PBS Maize training of trainers, Burkina Faso", fr: "Formation de formateurs PBS Maïs, Burkina Faso" },
  civ: { en: "FBS Coffee ToT for Nestlé agents and partners, Côte d'Ivoire", fr: "Formation de formateurs FBS Café pour Nestlé et ses partenaires, Côte d'Ivoire" },
  spirulina: { en: "FBS spirulina training of trainers, Chad, Oct 2026", fr: "Formation de formateurs FBS spiruline, Tchad, oct. 2026" },
  cameroon: { en: "Certified FBS Coffee trainers, Cameroon", fr: "Formateurs FBS Café certifiés, Cameroun" },
  mauritania: { en: "PBS pilot with women fish processors, Ndiago, Mauritania", fr: "Pilote PBS avec des transformatrices de poisson, Ndiago, Mauritanie" },
  morocco: { en: "Pilot FBS Milk training, Morocco", fr: "Formation pilote FBS Lait, Maroc" },
  burkina: { en: "Working through FBS tools, Burkina Faso", fr: "Exercices avec les outils FBS, Burkina Faso" },
};

export const GALLERY_TITLE: Record<Lang, string> = { en: "IAPA in action", fr: "L'IAPA en action" };
export const TRAINING_GALLERY_TITLE: Record<Lang, string> = { en: "Our trainings in the field", fr: "Nos formations sur le terrain" };
export const MEDIA_GALLERY_TITLE: Record<Lang, string> = { en: "Photo gallery", fr: "Galerie photos" };
