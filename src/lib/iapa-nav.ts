// Site structure from "IAPA Website Architecture.docx": main menu pages and their child pages.
// Each child id is the final segment of its own bilingual page URL.
import type { Lang } from "./iapa-content";
import type { PageSlug } from "./iapa-pages";
import type { ImgKey } from "@/components/iapa/media";

type L = Record<Lang, string>;
export type NavChild = { id: string; label: L };
export type NavGroup = { title: L; items: NavChild[] };
export type NavPage = { slug: PageSlug; blurb: L; img: ImgKey; groups: NavGroup[] };

const c = (id: string, en: string, fr: string): NavChild => ({ id, label: { en, fr } });

export const NAV: NavPage[] = [
  {
    slug: "who-we-are", img: "ghana",
    blurb: { en: "A pan-African professional body of agribusiness practitioners from 20+ countries.", fr: "Un organisme professionnel panafricain de praticiens de l'agribusiness dans plus de 20 pays." },
    groups: [
      { title: { en: "About", fr: "À propos" }, items: [c("about", "About IAPA", "À propos de l'IAPA"), c("managing-board", "Managing Board", "Conseil de gestion"), c("leadership", "Leadership", "Direction")] },
      { title: { en: "Network", fr: "Réseau" }, items: [c("asr-team", "ASR Team & External Associates", "Équipe ASR et associés externes"), c("partners", "Partners & Funders", "Partenaires et bailleurs"), c("offices", "Our Offices", "Nos bureaux")] },
    ],
  },
  {
    slug: "our-work", img: "cameroon",
    blurb: { en: "Where we work, what we have achieved and the people behind the results.", fr: "Où nous travaillons, nos résultats et les personnes qui les portent." },
    groups: [
      { title: { en: "Impact", fr: "Impact" }, items: [c("impact-map", "Impact Map", "Carte d'impact"), c("asr-numbers", "ASR in Numbers", "L'ASR en chiffres")] },
      { title: { en: "Voices", fr: "Témoignages" }, items: [c("stories", "Stories", "Histoires"), c("testimonials", "Testimonials", "Témoignages")] },
    ],
  },
  {
    slug: "training", img: "burkinaSession",
    blurb: { en: "Certified, practical and adult-centred approaches delivered by Master Trainers.", fr: "Des approches certifiées, pratiques et centrées sur l'adulte, portées par des Maîtres Formateurs." },
    groups: [
      { title: { en: "Our approaches", fr: "Nos approches" }, items: [c("fbs", "Farmer Business School (FBS)", "École d'entrepreneuriat agricole (FBS)"), c("cbs", "Cooperative Business School (CBS)", "École d'entrepreneuriat coopératif (CBS)"), c("pbs", "Processor Business School (PBS)", "École des transformateurs (PBS)"), c("abs", "Aquaculture Business School (ABS)", "École d'entrepreneuriat aquacole (ABS)"), c("cf", "Inclusive Contract Farming (CF)", "Agriculture contractuelle inclusive (CF)"), c("gap", "Good Agricultural Practices (GAP)", "Bonnes Pratiques Agricoles (BPA)")] },
      { title: { en: "Formats", fr: "Formats" }, items: [c("online", "Online Courses", "Cours en ligne"), c("residential", "Residential Programmes", "Programmes résidentiels"), c("blended", "Blended Courses", "Cours hybrides"), c("tailor-made", "Tailor-made Programmes", "Programmes sur mesure")] },
    ],
  },
  {
    slug: "knowledge-hub", img: "mali",
    blurb: { en: "Newsletters, publications and learning resources from the IAPA network.", fr: "Lettres, publications et ressources d'apprentissage du réseau IAPA." },
    groups: [
      { title: { en: "Read", fr: "Lire" }, items: [c("publications", "Publications", "Publications"), c("policy-briefs", "Policy Briefs", "Notes de politique"), c("research-papers", "Research Papers", "Articles de recherche"), c("case-studies", "Case Studies", "Études de cas")] },
      { title: { en: "Watch & listen", fr: "Voir et écouter" }, items: [c("webinars", "Webinars & Recordings", "Webinaires et enregistrements"), c("multimedia", "Multimedia", "Multimédia"), c("podcasts", "Podcasts", "Podcasts")] },
    ],
  },
  {
    slug: "media", img: "evaluation",
    blurb: { en: "Milestones, events and official news from IAPA.", fr: "Étapes clés, événements et actualités officielles de l'IAPA." },
    groups: [
      { title: { en: "Media", fr: "Médias" }, items: [c("events", "Events", "Événements"), c("key-documents", "Key ASR Documents", "Documents clés de l'ASR"), c("press-releases", "Press Releases", "Communiqués de presse")] },
    ],
  },
  {
    slug: "join-us", img: "civ",
    blurb: { en: "Grow your career with Africa's agribusiness professionals.", fr: "Développez votre carrière avec les professionnels africains de l'agribusiness." },
    groups: [
      { title: { en: "Opportunities", fr: "Opportunités" }, items: [c("vacancies", "Vacancies", "Offres d'emploi"), c("scholarships", "Scholarships", "Bourses")] },
    ],
  },
];

export const navPage = (slug: PageSlug) => NAV.find((n) => n.slug === slug)!;
/** Label of a child page, for use in navigation and page headings. */
export const childLabel = (slug: PageSlug, id: string, lang: Lang) =>
  navPage(slug).groups.flatMap((g) => g.items).find((i) => i.id === id)?.label[lang] ?? id;
