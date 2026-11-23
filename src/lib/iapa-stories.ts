import type { Lang } from "./iapa-content";
import type { ImgKey } from "@/components/iapa/media";

export type StoryId = "cameroon" | "mauritania" | "morocco" | "burkina" | "civ" | "spirulina";

export interface StoryLocale {
  place: string;
  date: string;
  approach: string;
  title: string;
  lead: string;
  location: string;
  team: string;
  partners: string;
  highlights: ReadonlyArray<readonly [string, string]>;
  body: readonly string[];
}

export interface StoryDetail {
  id: StoryId;
  img: ImgKey;
  gallery: readonly ImgKey[];
  issue: "2" | "3";
  en: StoryLocale;
  fr: StoryLocale;
}

export const STORY_UI: Record<Lang, {
  back: string;
  date: string;
  location: string;
  approach: string;
  team: string;
  partners: string;
  highlights: string;
  sourceTitle: string;
  sourceNote: string;
  download: string;
  readStory: string;
  moreStories: string;
}> = {
  en: {
    back: "All stories",
    date: "Date",
    location: "Location",
    approach: "Approach",
    team: "Led by",
    partners: "Partners",
    highlights: "Key outcomes",
    sourceTitle: "Reported in IAPA Pulse",
    sourceNote: "Download the full newsletter issue for the original report and network updates.",
    download: "Download PDF",
    readStory: "Read story",
    moreStories: "More stories from the field",
  },
  fr: {
    back: "Toutes les histoires",
    date: "Date",
    location: "Lieu",
    approach: "Approche",
    team: "Animé par",
    partners: "Partenaires",
    highlights: "Résultats clés",
    sourceTitle: "Publié dans IAPA Pulse",
    sourceNote: "Téléchargez le numéro complet de la lettre d'information pour le rapport original et les actualités du réseau.",
    download: "Télécharger le PDF",
    readStory: "Lire l'histoire",
    moreStories: "Autres histoires de terrain",
  },
};

export const STORIES: readonly StoryDetail[] = [
  {
    id: "cameroon",
    img: "cameroon",
    gallery: ["robusta"],
    issue: "3",
    en: {
      place: "Cameroon",
      date: "April & July 2026",
      approach: "Farmer Business School (FBS) — Hybrid ToT",
      title: "FBS Coffee: 21 trainers certified",
      lead: "21 FBS Coffee trainers certified (8 women, 6 youth) and 414 producers trained, with GIZ/SAFE and the National Cocoa and Coffee Office.",
      location: "Kribi, Abong Mbang, Moungo & Menoua, Cameroon",
      team: "Jude Kawzu, Caroline Gassi & Mbahe Rigobert (ABF support: Mbosso Philomene Charlie)",
      partners: "GIZ/SAFE, National Cocoa and Coffee Office (ONCC), PARF Coffee (MINADER), ABF",
      highlights: [
        ["21", "FBS Coffee trainers certified (8 women, 6 youth)"],
        ["414", "producers trained (93 women, 51 youth; 260 in coffee)"],
        ["EN / FR", "training manuals adapted in both languages"],
      ],
      body: [
        "From 6 to 17 July 2026, a bilingual French and English training on the Robusta and Arabica coffee value chain was held in Kribi. Following an April pilot in Abong Mbang, the session tested the new hybrid FBS Training of Trainers programme adopted by agribusiness Master Trainers in Ghana in October 2025.",
        "Organised by the GIZ/SAFE project with the National Cocoa and Coffee Office (ONCC) and the Coffee Sector Revival Support Project (PARF Coffee), the programme adapted training manuals into both languages and certified 21 trainers — including 8 women and 6 youth.",
        "Classroom sessions were followed by field supervision across coffee-producing areas, including Moungo and Menoua. In total, 414 producers were trained, among them a participant with reduced mobility — underscoring the inclusive design of IAPA's training delivery.",
      ],
    },
    fr: {
      place: "Cameroun",
      date: "Avril et juillet 2026",
      approach: "Farmer Business School (FBS) — FdF hybride",
      title: "FBS Café : 21 formateurs certifiés",
      lead: "21 formateurs FBS Café certifiés (8 femmes, 6 jeunes) et 414 producteurs formés, avec GIZ/SAFE et l'Office National du Cacao et du Café.",
      location: "Kribi, Abong Mbang, Moungo et Menoua, Cameroun",
      team: "Jude Kawzu, Caroline Gassi et Mbahe Rigobert (appui ABF : Mbosso Philomene Charlie)",
      partners: "GIZ/SAFE, Office National du Cacao et du Café (ONCC), PARF Café (MINADER), ABF",
      highlights: [
        ["21", "formateurs FBS Café certifiés (8 femmes, 6 jeunes)"],
        ["414", "producteurs formés (93 femmes, 51 jeunes ; 260 dans le café)"],
        ["FR / EN", "manuels de formation adaptés dans les deux langues"],
      ],
      body: [
        "Du 6 au 17 juillet 2026, une formation bilingue français-anglais sur la chaîne de valeur du café Robusta et Arabica s'est tenue à Kribi. Après un pilote mené en avril à Abong Mbang, la session a testé le nouveau programme hybride de formation de formateurs FBS adopté au Ghana en octobre 2025.",
        "Organisé par le projet GIZ/SAFE en collaboration avec l'Office National du Cacao et du Café (ONCC) et le Projet d'Appui à la Relance de la Filière Café (PARF Café), le programme a adapté les manuels en français et en anglais et certifié 21 formateurs, dont 8 femmes et 6 jeunes.",
        "La formation en salle a été suivie d'une supervision sur le terrain dans les bassins caféiers, notamment le Moungo et la Menoua. Au total, 414 producteurs ont été formés, y compris une personne à mobilité réduite — illustrant l'approche inclusive de l'IAPA.",
      ],
    },
  },
  {
    id: "mauritania",
    img: "mauritania",
    gallery: [],
    issue: "3",
    en: {
      place: "Mauritania",
      date: "4–6 August 2026",
      approach: "Processor Business School (PBS) — Pilot",
      title: "PBS for women fish processors",
      lead: "A pilot in Ndiago (4–6 Aug 2026) tested the Processor Business School with women in fish processing, with GIZ-ProGRH and ABF.",
      location: "Ndiago, Mauritania",
      team: "Henri Jolibeau",
      partners: "GIZ-ProGRH Mauritania, ABF, private sector partners",
      highlights: [
        ["3 days", "pilot training session in Ndiago (4–6 August 2026)"],
        ["PBS", "entrepreneurial curriculum tailored to fish processing"],
        ["Women-led", "strengthening women stakeholders in coastal fisheries"],
      ],
      body: [
        "GIZ-ProGRH Mauritania, in cooperation with the Agri-Business Facility for Africa (ABF), partnered with IAPA to strengthen the entrepreneurial and business skills of women active in fish processing.",
        "Held in Ndiago from 4 to 6 August 2026 and facilitated by Henri Jolibeau, the pilot session tested the Processor Business School (PBS) approach in the fisheries value chain, equipping participants with practical tools for costing, planning and enterprise management.",
        "The initiative forms part of GIZ-ProGRH's commitment — alongside private sector partners — to support Mauritania in the sustainable management of fisheries resources and improved availability of fish for local consumption.",
      ],
    },
    fr: {
      place: "Mauritanie",
      date: "4–6 août 2026",
      approach: "Processor Business School (PBS) — Pilote",
      title: "La PBS pour les transformatrices de poisson",
      lead: "Une formation pilote à Ndiago (4–6 août 2026) a testé l'approche PBS avec des femmes de la transformation halieutique, avec GIZ-ProGRH et l'ABF.",
      location: "Ndiago, Mauritanie",
      team: "Henri Jolibeau",
      partners: "GIZ-ProGRH Mauritanie, ABF, partenaires du secteur privé",
      highlights: [
        ["3 jours", "session pilote à Ndiago (4–6 août 2026)"],
        ["PBS", "curriculum entrepreneurial adapté à la transformation halieutique"],
        ["Femmes", "renforcement des compétences des actrices de la filière"],
      ],
      body: [
        "GIZ-ProGRH Mauritanie, en coopération avec l'Agri-Business Facility for Africa (ABF), poursuit ses efforts pour promouvoir les compétences entrepreneuriales des femmes engagées dans la transformation du poisson.",
        "Animée par Henri Jolibeau du 4 au 6 août 2026 à Ndiago, la formation pilote a permis de tester l'approche Processor Business School (PBS) dans le secteur halieutique, en dotant les participantes d'outils concrets de gestion et de calcul de rentabilité.",
        "Cette initiative s'inscrit dans l'engagement de GIZ-ProGRH, en partenariat avec le secteur privé, pour soutenir la Mauritanie dans la gestion durable des ressources halieutiques et l'amélioration de la disponibilité du poisson pour la consommation locale.",
      ],
    },
  },
  {
    id: "morocco",
    img: "morocco",
    gallery: [],
    issue: "2",
    en: {
      place: "Morocco",
      date: "April 2026",
      approach: "Farmer Business School (FBS) — Dairy Pilot",
      title: "Pilot FBS Milk training",
      lead: "Dalila Delhoumi led the pilot FBS Milk training, paving the way for a better-structured dairy sector.",
      location: "Morocco",
      team: "Dalila Delhoumi",
      partners: "IAPA North Africa network & ABF-GIZ",
      highlights: [
        ["April 2026", "pilot delivery in the dairy value chain"],
        ["FBS Milk", "adapted business tools for dairy producers"],
        ["North Africa", "expanding IAPA's practical approaches in the region"],
      ],
      body: [
        "In April 2026, IAPA Master Trainer Dalila Delhoumi led a pilot Farmer Business School (FBS) Milk training in Morocco to test business-oriented learning tools tailored to dairy producers.",
        "The pilot focused on helping milk producers analyse farm income, manage feed and herd costs, and plan investments systematically — laying the groundwork for a better-structured and more resilient dairy value chain.",
        "Highlighted in IAPA Pulse Issue 2, the mission illustrates how IAPA practitioners adapt proven agribusiness methodologies to regional value chains across North Africa.",
      ],
    },
    fr: {
      place: "Maroc",
      date: "Avril 2026",
      approach: "Farmer Business School (FBS) — Pilote Lait",
      title: "Formation pilote FBS Lait",
      lead: "Dalila Delhoumi a animé la formation pilote FBS Lait, ouvrant la voie à une meilleure structuration de la filière laitière.",
      location: "Maroc",
      team: "Dalila Delhoumi",
      partners: "Réseau IAPA Afrique du Nord et ABF-GIZ",
      highlights: [
        ["Avril 2026", "mise en œuvre pilote dans la filière laitière"],
        ["FBS Lait", "outils de gestion adaptés aux producteurs laitiers"],
        ["Afrique du Nord", "déploiement des approches pratiques de l'IAPA"],
      ],
      body: [
        "En avril 2026, la Maître Formatrice IAPA Dalila Delhoumi a animé une formation pilote Farmer Business School (FBS) Lait au Maroc afin de tester des outils pédagogiques adaptés aux réalités des producteurs laitiers.",
        "Le pilote a aidé les éleveurs à analyser leurs revenus, maîtriser les coûts d'alimentation et de gestion du troupeau, et planifier leurs investissements — ouvrant la voie à une filière laitière mieux structurée.",
        "Présentée dans le numéro 2 d'IAPA Pulse, cette mission illustre la capacité des praticiens de l'IAPA à adapter les approches entrepreneuriales aux filières clés d'Afrique du Nord.",
      ],
    },
  },
  {
    id: "burkina",
    img: "burkina",
    gallery: ["burkinaSession", "burkinaMaize"],
    issue: "3",
    en: {
      place: "Burkina Faso",
      date: "June & September 2026",
      approach: "Processor Business School (PBS) — Maize",
      title: "PBS launched in Bobo-Dioulasso",
      lead: "With Lonnya Consult and Baitoul Maal under the MGF project, followed by a PBS training of trainers in June 2026.",
      location: "Bobo-Dioulasso, Burkina Faso",
      team: "IMT Henri Jolibeau (FBS maize supervision: Ouedraogo Boureima & Sankara Adama)",
      partners: "Lonnya Consult, Baitoul Maal, MGF project, GDI Partners",
      highlights: [
        ["15–22 June", "PBS Training of Trainers following the Bobo-Dioulasso pilot"],
        ["Sept 2026", "PBS Maize ToT covering post-harvest and marketing"],
        ["Media", "featured in Le Journal du Maïs"],
      ],
      body: [
        "Under the MGF project, IAPA partnered with Lonnya Consult and Baitoul Maal to officially launch the Processor Business School (PBS) in Bobo-Dioulasso through a pilot led by Henri Jolibeau.",
        "Building directly on that launch, a PBS Training of Trainers was held from 15 to 22 June 2026 to build a pool of local trainers able to cascade practical business skills to communities. Alongside this, Ouedraogo Boureima and Sankara Adama supervised FBS sessions for maize producers supplying GDI Partners.",
        "In September 2026, IMT Henri Jolibeau led a PBS Maize Training of Trainers focused on production practices, post-harvest management and marketing — earning media coverage from Le Journal du Maïs.",
      ],
    },
    fr: {
      place: "Burkina Faso",
      date: "Juin et septembre 2026",
      approach: "Processor Business School (PBS) — Maïs",
      title: "Lancement de la PBS à Bobo-Dioulasso",
      lead: "Avec Lonnya Consult et Baitoul Maal dans le cadre du projet MGF, suivi d'une formation de formateurs PBS en juin 2026.",
      location: "Bobo-Dioulasso, Burkina Faso",
      team: "IMT Henri Jolibeau (supervision FBS maïs : Ouedraogo Boureima et Sankara Adama)",
      partners: "Lonnya Consult, Baitoul Maal, projet MGF, GDI Partners",
      highlights: [
        ["15–22 juin", "formation de formateurs PBS après le pilote à Bobo-Dioulasso"],
        ["Sept. 2026", "FdF PBS Maïs sur le post-récolte et la commercialisation"],
        ["Médias", "couverture par Le Journal du Maïs"],
      ],
      body: [
        "Dans le cadre du projet MGF, l'IAPA, en partenariat avec Lonnya Consult et Baitoul Maal, a officiellement lancé la Processor Business School (PBS) à Bobo-Dioulasso avec une formation pilote animée par Henri Jolibeau.",
        "Dans la continuité de ce lancement, une formation de formateurs PBS s'est tenue du 15 au 22 juin 2026 afin de multiplier les relais locaux. En parallèle, Ouedraogo Boureima et Sankara Adama ont supervisé plusieurs sessions FBS pour des producteurs de maïs fournisseurs de GDI Partners.",
        "En septembre 2026, l'IMT Henri Jolibeau a conduit une formation de formateurs PBS Maïs axée sur les pratiques agricoles, la gestion post-récolte et la commercialisation, relayée par Le Journal du Maïs.",
      ],
    },
  },
  {
    id: "civ",
    img: "civ",
    gallery: [],
    issue: "3",
    en: {
      place: "Côte d'Ivoire",
      date: "2026",
      approach: "Farmer Business School (FBS) — Coffee ToT",
      title: "FBS Coffee for Nestlé and partners",
      lead: "KOUAKOU Djé Robert led an FBS Café training of trainers for Nestlé employees and partners, in a public-private collaboration.",
      location: "Côte d'Ivoire",
      team: "KOUAKOU Djé Robert & Abdu Kader",
      partners: "Nestlé and coffee value chain partners",
      highlights: [
        ["Public-private", "collaboration promoting responsible, profitable coffee farming"],
        ["Coaching", "follow-up trainer coaching led by Djé Robert Kouakou & Abdu Kader"],
        ["Quality", "standardised producer support across the coffee value chain"],
      ],
      body: [
        "Under the leadership of IAPA Master Trainer KOUAKOU Djé Robert, an FBS Café Training of Trainers was organised in Côte d'Ivoire for Nestlé employees and value chain partners, followed by hands-on trainer coaching with Abdu Kader.",
        "Part of a public-private collaboration, the initiative aims to promote responsible and profitable coffee farming while strengthening the resilience of farms against environmental and economic shocks.",
        "The training helped standardise how producers are supported on the ground, raise coffee quality, and build stronger working links between actors across the value chain.",
      ],
    },
    fr: {
      place: "Côte d'Ivoire",
      date: "2026",
      approach: "Farmer Business School (FBS) — FdF Café",
      title: "FBS Café pour Nestlé et ses partenaires",
      lead: "KOUAKOU Djé Robert a animé une formation de formateurs FBS Café pour des employés de Nestlé et leurs partenaires, dans une collaboration public-privé.",
      location: "Côte d'Ivoire",
      team: "KOUAKOU Djé Robert et Abdu Kader",
      partners: "Nestlé et partenaires de la filière café",
      highlights: [
        ["Public-privé", "collaboration pour une caféiculture responsable et rentable"],
        ["Coaching", "suivi des formateurs par Djé Robert Kouakou et Abdu Kader"],
        ["Qualité", "harmonisation de l'accompagnement des producteurs"],
      ],
      body: [
        "Sous la conduite du Maître Formateur IAPA KOUAKOU Djé Robert, une formation de formateurs FBS Café a été organisée en Côte d'Ivoire au profit d'employés de Nestlé et de leurs partenaires, prolongée par une phase de coaching avec Abdu Kader.",
        "Inscrite dans une dynamique de partenariat public-privé, l'initiative vise à promouvoir des pratiques agricoles responsables et rentables tout en renforçant la résilience des exploitations face aux aléas climatiques et économiques.",
        "Cette intervention a permis d'harmoniser les méthodes d'accompagnement des producteurs, d'améliorer la qualité du café produit et de renforcer les liens entre les acteurs de la filière.",
      ],
    },
  },
  {
    id: "spirulina",
    img: "spirulina",
    gallery: ["chadSup"],
    issue: "3",
    en: {
      place: "Chad",
      date: "14–16 October 2026",
      approach: "Farmer Business School (FBS) — Hybrid Spirulina ToT",
      title: "17 trainers, 300 spirulina producers",
      lead: "With GIZ PEA-PAMELOT and Dorsch Impact, Jude Kawzu trained 17 trainers (2 women) and 300 producers, 203 of them women.",
      location: "Lac, Kanem & Hadjer-Lamis provinces, Chad",
      team: "Jude Kawzu (with Yaya Irah Ogal, Togbe Fulbert, Koguingar Ariane & Pascal)",
      partners: "GIZ PEA-PAMELOT, Dorsch Impact",
      highlights: [
        ["17", "trainers trained (including 2 women)"],
        ["300", "spirulina producers and collectors trained"],
        ["203", "women producers reached (over two-thirds of participants)"],
      ],
      body: [
        "As part of GIZ's PEA-PAMELOT programme in Chad, IAPA Master Trainer Jude Kawzu delivered a Farmer Business School (FBS) Training of Trainers on the spirulina value chain from 14 to 16 October 2026, in partnership with Dorsch Impact across Lac, Kanem and Hadjer-Lamis provinces.",
        "Building on the 2025 spirulina curriculum adaptation and pilot training, this edition rolled out a new hybrid training format supported on the ground by the Dorsch Impact and PEA-PAMELOT teams.",
        "The mission trained 17 trainers (including 2 women) and reached 300 spirulina producers and collectors — 203 of them women — strengthening business skills and economic opportunities in a high-nutrition local value chain.",
      ],
    },
    fr: {
      place: "Tchad",
      date: "14–16 octobre 2026",
      approach: "Farmer Business School (FBS) — FdF hybride Spiruline",
      title: "17 formateurs, 300 producteurs de spiruline",
      lead: "Avec le programme GIZ PEA-PAMELOT et Dorsch Impact, Jude Kawzu a formé 17 formateurs (dont 2 femmes) et 300 producteurs, dont 203 femmes.",
      location: "Provinces du Lac, du Kanem et de Hadjer-Lamis, Tchad",
      team: "Jude Kawzu (avec Yaya Irah Ogal, Togbe Fulbert, Koguingar Ariane et Pascal)",
      partners: "GIZ PEA-PAMELOT, Dorsch Impact",
      highlights: [
        ["17", "formateurs formés (dont 2 femmes)"],
        ["300", "producteurs et collecteurs de spiruline formés"],
        ["203", "femmes productrices accompagnées (plus des deux tiers)"],
      ],
      body: [
        "Dans le cadre du programme PEA-PAMELOT de la GIZ au Tchad, le Maître Formateur IAPA Jude Kawzu a conduit du 14 au 16 octobre 2026 une formation de formateurs FBS sur la filière spiruline, en partenariat avec Dorsch Impact dans les provinces du Lac, du Kanem et de Hadjer-Lamis.",
        "Cette intervention s'inscrit dans la continuité de l'adaptation du curriculum spiruline et de la formation pilote menée en 2025, avec la mise en œuvre d'un nouveau format de formation hybride.",
        "Grâce à l'appui des équipes de Dorsch Impact et du programme PEA-PAMELOT, la mission a permis de former 17 formateurs (dont 2 femmes) et 300 producteurs et collecteurs de spiruline, dont 203 femmes.",
      ],
    },
  },
];

export function getStory(id: string): StoryDetail | undefined {
  return STORIES.find((s) => s.id === id);
}