import type { Lang } from "./iapa-content";
import type { ImgKey } from "@/components/iapa/media";
import { assetUrl } from "@/lib/asset-url";
import kwame from "@/assets/leadership/kwame.webp.asset.json";
import amina from "@/assets/leadership/amina.webp.asset.json";
import grace from "@/assets/leadership/grace.webp.asset.json";
import daniel from "@/assets/leadership/daniel.webp.asset.json";

export type DetailEntry = {
  slug: string;
  img: ImgKey;
  audience?: "partner" | "member";
  en: { eyebrow: string; title: string; lead: string; body: string[]; highlights: string[] };
  fr: { eyebrow: string; title: string; lead: string; body: string[]; highlights: string[] };
};

/** Seven "What we do" cards from Home (4 partner services + 3 member services). */
export const WHAT_WE_DO_DETAILS: readonly DetailEntry[] = [
  {
    slug: "strategic-advisory",
    img: "boardStrategy",
    audience: "partner",
    en: {
      eyebrow: "For partners",
      title: "Strategic agribusiness advisory",
      lead: "We help you choose the right value chain and the best agribusiness solution to scale for your context.",
      body: [
        "Partners designing agricultural programmes often face complex decisions around which value chains offer the strongest potential for income growth, youth employment and women's economic empowerment.",
        "IAPA's senior Master Trainers and value chain specialists conduct rapid feasibility reviews, map local market actors and match institutional goals with proven Business School or Inclusive Contract Farming solutions.",
        "Every advisory assignment produces a clear implementation roadmap grounded in field realities across English- and French-speaking Africa.",
      ],
      highlights: ["Value-chain selection and market diagnostics", "Matching goals to FBS, CBS, PBS, ABS or ICF", "Practical scaling roadmaps for national and regional partners"],
    },
    fr: {
      eyebrow: "Pour les partenaires",
      title: "Conseil stratégique en agribusiness",
      lead: "Nous vous aidons à choisir la bonne chaîne de valeur et la meilleure solution à mettre à l'échelle selon votre contexte.",
      body: [
        "Les partenaires qui conçoivent des programmes agricoles doivent souvent arbitrer entre plusieurs filières pour maximiser la création de revenus, l'emploi des jeunes et l'autonomisation des femmes.",
        "Les Maîtres Formateurs seniors et spécialistes des filières de l'IAPA réalisent des diagnostics rapides, cartographient les acteurs locaux et recommandent l'approche Business School ou d'agriculture contractuelle la mieux adaptée.",
        "Chaque mission débouche sur une feuille de route opérationnelle ancrée dans les réalités du terrain en Afrique francophone et anglophone.",
      ],
      highlights: ["Sélection des filières et diagnostics de marché", "Choix ciblé entre FBS, CBS, PBS, ABS et agriculture contractuelle", "Feuilles de route de mise à l'échelle pour les partenaires"],
    },
  },
  {
    slug: "curriculum-adaptation",
    img: "caseStudySession",
    audience: "partner",
    en: {
      eyebrow: "For partners",
      title: "Curriculum development & adaptation",
      lead: "Training manuals, trainer guides, posters and Excel digital tools adapted to your value chain.",
      body: [
        "Generic training materials rarely reflect local crop calendars, unit prices or processing realities. IAPA adapts proven Business School curricula to the exact crops, livestock, fisheries or agro-processing chains your programme targets.",
        "Our teams co-develop illustrated participant workbooks, step-by-step facilitator guides, classroom posters and automated Excel gross-margin tools in English, French and local working languages.",
        "Every adapted manual is field-tested during a pilot session before large-scale printing or digital rollout.",
      ],
      highlights: ["Value-chain-specific crop and enterprise budgets", "Trainer guides, visual posters and Excel tools", "Pilot-tested before national or regional rollout"],
    },
    fr: {
      eyebrow: "Pour les partenaires",
      title: "Développement et adaptation de curricula",
      lead: "Manuels, guides du formateur, posters et outils numériques Excel adaptés à votre filière.",
      body: [
        "Les supports génériques reflètent rarement les calendriers culturaux, les prix unitaires ou les contraintes locales de transformation. L'IAPA adapte ses curricula Business School aux filières exactes visées par votre programme.",
        "Nos équipes conçoivent des cahiers illustrés pour les participants, des guides détaillés pour les formateurs, des posters pédagogiques et des outils Excel de calcul de marges en français, en anglais et en langues locales.",
        "Chaque manuel adapté est testé sur le terrain lors d'une session pilote avant son déploiement à grande échelle.",
      ],
      highlights: ["Budgets d'exploitation calibrés sur la filière", "Guides du formateur, posters visuels et outils Excel", "Validation par formation pilote avant généralisation"],
    },
  },
  {
    slug: "training-at-scale",
    img: "burkinaSession",
    audience: "partner",
    en: {
      eyebrow: "For partners",
      title: "Quality training at scale",
      lead: "Pilot trainings, training of trainers, supervision and reporting by IAPA Master Trainers.",
      body: [
        "Scaling agribusiness training across hundreds of communities requires rigorous quality assurance at every step. IAPA deploys certified Master Trainers across 20+ African countries to run the full four-stage delivery cycle.",
        "We start with a supervised pilot, train and certify national trainers through Training of Trainers (ToT), observe live field delivery with structured coaching rubrics, and deliver clear monitoring and certification reports.",
        "Inclusion of women, youth and persons with disabilities is built into scheduling, classroom facilitation and reporting.",
      ],
      highlights: ["Four-step cycle: pilot, ToT, supervision and reporting", "75+ certified Master Trainers across 5 African regions", "Inclusive, adult-centred facilitation and quality scoring"],
    },
    fr: {
      eyebrow: "Pour les partenaires",
      title: "Formations de qualité à grande échelle",
      lead: "Formations pilotes, formation de formateurs, supervision et rapportage par les Maîtres Formateurs IAPA.",
      body: [
        "Déployer des formations entrepreneuriales dans des centaines de communautés exige une assurance qualité rigoureuse à chaque étape. L'IAPA mobilise des Maîtres Formateurs certifiés dans plus de 20 pays africains.",
        "Nous conduisons le cycle complet : formation pilote, formation de formateurs (FdF), supervision sur le terrain avec grilles d'observation et rapportage final avec certification.",
        "L'inclusion des femmes, des jeunes et des personnes handicapées est intégrée dès la planification et jusqu'au suivi.",
      ],
      highlights: ["Cycle en 4 étapes : pilote, FdF, supervision et rapportage", "Plus de 75 Maîtres Formateurs certifiés dans 5 régions", "Animation inclusive centrée sur l'adulte et contrôle qualité"],
    },
  },
  {
    slug: "events-conferences",
    img: "kenya",
    audience: "partner",
    en: {
      eyebrow: "For partners",
      title: "Events & conferences",
      lead: "Expert speakers, technical sessions and facilitation for results-oriented events.",
      body: [
        "IAPA contributes practitioner voices, panel speakers and skilled bilingual facilitators to continental conferences, policy dialogues, value-chain roundtables and donor learning workshops.",
        "Our facilitators design interactive sessions that move beyond slide presentations toward concrete agreements, peer learning and actionable next steps.",
        "Whether convening ministries, cooperatives, private buyers or development agencies, IAPA brings field-tested credibility to the room.",
      ],
      highlights: ["Keynote speakers and technical panellists", "Bilingual EN/FR workshop and roundtable facilitation", "Synthesis reports and actionable follow-up"],
    },
    fr: {
      eyebrow: "Pour les partenaires",
      title: "Événements et conférences",
      lead: "Intervenants experts, sessions techniques et facilitation pour des événements axés sur les résultats.",
      body: [
        "L'IAPA mobilise des praticiens reconnus, des panélistes et des facilitateurs bilingues pour les conférences continentales, dialogues politiques, tables rondes de filières et ateliers d'apprentissage.",
        "Nos animateurs conçoivent des sessions participatives orientées vers des engagements concrets, le partage d'expériences et des plans d'action clairs.",
        "Qu'il s'agisse de réunir des ministères, coopératives, acheteurs privés ou bailleurs, l'IAPA apporte une crédibilité issue du terrain.",
      ],
      highlights: ["Intervenants et panélistes techniques", "Facilitation bilingue français/anglais", "Synthèses et feuilles de route opérationnelles"],
    },
  },
  {
    slug: "certification-capacity",
    img: "cooperativeCertificates",
    audience: "member",
    en: {
      eyebrow: "For members",
      title: "Certification & capacity building",
      lead: "Professional development and certification pathways for trainers and practitioners.",
      body: [
        "IAPA is building Africa's first practitioner-led professional certification system for agribusiness trainers and value chain advisors.",
        "Members gain access to structured Master Trainer Programmes (MTP), refresher workshops on new Business School modules, and transparent peer-reviewed certification that partners recognise across borders.",
        "Continuous learning keeps members up to date on climate-smart agriculture, digital tools and inclusive facilitation.",
      ],
      highlights: ["Recognised trainer and Master Trainer certification", "Refresher modules on FBS, CBS, PBS, ABS and ICF", "Peer-reviewed quality standards across Africa"],
    },
    fr: {
      eyebrow: "Pour les membres",
      title: "Certification et renforcement des capacités",
      lead: "Développement professionnel et parcours de certification pour formateurs et praticiens.",
      body: [
        "L'IAPA bâtit le premier système africain de certification professionnelle porté par les praticiens pour les formateurs et conseillers en agribusiness.",
        "Les membres accèdent aux programmes de Maîtres Formateurs (MTP), aux ateliers de mise à niveau sur les nouveaux modules Business School et à une certification reconnue par les partenaires.",
        "La formation continue intègre les pratiques climato-intelligentes, les outils numériques et l'animation inclusive.",
      ],
      highlights: ["Certification reconnue des formateurs et Maîtres Formateurs", "Modules de perfectionnement FBS, CBS, PBS, ABS et ICF", "Normes qualité évaluées par les pairs sur tout le continent"],
    },
  },
  {
    slug: "coaching-mentorship",
    img: "chadSup",
    audience: "member",
    en: {
      eyebrow: "For members",
      title: "Coaching & mentorship",
      lead: "Experienced Master Trainers mentor less-experienced members.",
      body: [
        "Transitioning from a newly trained facilitator to a confident lead trainer takes hands-on guidance. Through IAPA's mentorship network, seasoned Master Trainers pair with emerging practitioners across regions.",
        "Mentors review session plans, co-facilitate early workshops and provide structured post-session feedback on adult learning, inclusion and enterprise exercises.",
        "This solidarity-driven model strengthens individual careers while protecting the quality of every training delivered under the IAPA banner.",
      ],
      highlights: ["One-to-one pairing with senior Master Trainers", "Live observation and constructive facilitation feedback", "Cross-country peer learning in English and French"],
    },
    fr: {
      eyebrow: "Pour les membres",
      title: "Coaching et mentorat",
      lead: "Des Maîtres Formateurs expérimentés accompagnent les membres moins expérimentés.",
      body: [
        "Passer de formateur débutant à animateur aguerri nécessite un accompagnement pratique. Grâce au réseau de mentorat de l'IAPA, des Maîtres Formateurs chevronnés parrainent les praticiens émergents.",
        "Les mentors relisent les plans de session, co-animent les premiers ateliers et formulent des retours structurés sur l'andragogie, l'inclusion et les exercices d'entreprise.",
        "Ce modèle fondé sur la solidarité accélère les carrières tout en garantissant l'excellence des formations IAPA.",
      ],
      highlights: ["Binômes avec des Maîtres Formateurs expérimentés", "Observation en salle et retours constructifs", "Apprentissage entre pairs bilingue à l'échelle régionale"],
    },
  },
  {
    slug: "visibility-opportunities",
    img: "careerGrowth",
    audience: "member",
    en: {
      eyebrow: "For members",
      title: "Visibility & opportunities",
      lead: "Member profiles showcased to partners for consultancy and training assignments.",
      body: [
        "Development partners, NGOs, governments and agribusiness companies regularly seek vetted, bilingual local experts who can deliver Business School training and value chain advisory.",
        "IAPA's expert database and member directory showcase certified practitioners by country, language and value chain specialisation, opening doors to regional consultancy, coaching and mentoring missions.",
        "For example, five IAPA Master Trainers from Nigeria, Ghana and Ethiopia were selected to coach agribusiness competition winners under the Agribusiness E-Academy mentoring programme.",
      ],
      highlights: ["Inclusion in IAPA's pan-African expert database", "Alerts on partner consultancy and training assignments", "Regional and continental networking visibility"],
    },
    fr: {
      eyebrow: "Pour les membres",
      title: "Visibilité et opportunités",
      lead: "Profils des membres présentés aux partenaires pour des missions de conseil et de formation.",
      body: [
        "Les partenaires au développement, ONG, gouvernements et entreprises agroalimentaires recherchent régulièrement des experts locaux certifiés et bilingues pour déployer leurs programmes.",
        "La base d'experts et l'annuaire de l'IAPA mettent en valeur les praticiens certifiés par pays, langue et filière, facilitant l'accès aux missions de conseil, de formation et de mentorat.",
        "Cinq Maîtres Formateurs de l'IAPA originaires du Nigeria, du Ghana et d'Éthiopie ont ainsi été sélectionnés pour accompagner des lauréats dans le cadre du programme de mentorat de l'Agribusiness E-Academy.",
      ],
      highlights: ["Référencement dans la base panafricaine d'experts", "Diffusion d'opportunités de conseil et de formation", "Visibilité accrue auprès des partenaires régionaux"],
    },
  },
];

export type EventDetail = {
  slug: string;
  img: ImgKey;
  upcoming?: boolean;
  en: { date: string; location: string; title: string; summary: string; body: string[]; highlights: string[] };
  fr: { date: string; location: string; title: string; summary: string; body: string[]; highlights: string[] };
};

/** Six Media events (1 upcoming + 5 past), aligned with PAGES[lang].media.events. */
export const EVENT_DETAILS: readonly EventDetail[] = [
  {
    slug: "general-meeting-2026",
    img: "ghana",
    upcoming: true,
    en: {
      date: "Nov 2026",
      location: "Accra, Ghana & Online (Hybrid)",
      title: "General meeting of members",
      summary: "Planned in IAPA's roadmap.",
      body: [
        "The November 2026 General Meeting of Members convenes registered IAPA members, Regional Focal Points and Country Focal Points to review first-year operationalisation milestones following IAPA's official registration in Accra.",
        "Sessions cover the 2026–2030 Strategic Plan rollout, certification standards, regional action plans across all five African sub-regions, and upcoming partner training assignments.",
        "Members and prospective partners can register below to receive the final agenda and hybrid connection details from the Executive Secretariat.",
      ],
      highlights: ["Review of 2026 legalisation and operational milestones", "Regional focal-point updates across 5 African regions", "Hybrid participation: Accra HQ and online"],
    },
    fr: {
      date: "Nov. 2026",
      location: "Accra, Ghana et en ligne (Hybride)",
      title: "Réunion générale des membres",
      summary: "Prévue dans la feuille de route de l'IAPA.",
      body: [
        "La réunion générale des membres de novembre 2026 rassemble les membres enregistrés de l'IAPA, les points focaux régionaux et nationaux pour faire le point sur la mise en œuvre opérationnelle après l'enregistrement officiel à Accra.",
        "L'ordre du jour porte sur le déploiement du Plan stratégique 2026–2030, les standards de certification, les plans d'action des cinq sous-régions africaines et les prochaines missions de formation.",
        "Les membres et partenaires intéressés peuvent s'inscrire ci-dessous pour recevoir l'ordre du jour détaillé et le lien de connexion.",
      ],
      highlights: ["Bilan des étapes de légalisation et de déploiement 2026", "Points d'avancement des 5 régions africaines", "Format hybride : siège d'Accra et participation en ligne"],
    },
  },
  {
    slug: "evaluation-committee-accra",
    img: "evaluation",
    en: {
      date: "15–19 Jun 2026",
      location: "Accra, Ghana",
      title: "ABF-GIZ Independent Evaluation Committee, Accra",
      summary: "Dr. Codjoe Francis, Kum Jude Kawzu and Ouedraogo Boureima represented IAPA.",
      body: [
        "From 15 to 19 June 2026 in Accra, IAPA delegates Dr. Codjoe Francis, Kum Jude Kawzu and Ouedraogo Boureima participated in the ABF-GIZ Independent Evaluation Committee.",
        "The delegation contributed practitioner perspectives on the long-term sustainability of Farmer, Cooperative, Processor and Aquaculture Business Schools and how IAPA anchors certified training capacity across African partner countries.",
        "Discussions reinforced the transition from project-based support toward an independent, practitioner-owned continental association.",
      ],
      highlights: ["IAPA represented by three senior practitioners", "Assessment of Business School quality and sustainability", "Strengthened alignment with ABF-GIZ partners"],
    },
    fr: {
      date: "15–19 juin 2026",
      location: "Accra, Ghana",
      title: "Comité d'évaluation indépendant ABF-GIZ, Accra",
      summary: "Dr Codjoe Francis, Kum Jude Kawzu et Ouedraogo Boureima ont représenté l'IAPA.",
      body: [
        "Du 15 au 19 juin 2026 à Accra, Dr Codjoe Francis, Kum Jude Kawzu et Ouedraogo Boureima ont représenté l'IAPA au Comité d'évaluation indépendant de l'ABF-GIZ.",
        "La délégation a partagé l'expérience des praticiens sur la pérennisation des approches Business School et le rôle de l'IAPA pour garantir une capacité de formation certifiée dans les pays partenaires.",
        "Les échanges ont confirmé l'importance d'une association professionnelle autonome portée par ses membres.",
      ],
      highlights: ["Trois représentants de l'IAPA mobilisés à Accra", "Évaluation de la qualité et de la durabilité des approches", "Alignement renforcé avec les partenaires ABF-GIZ"],
    },
  },
  {
    slug: "strategic-workshop-kenya",
    img: "kenya",
    en: {
      date: "26–28 May 2026",
      location: "Kenya",
      title: "Strategic workshop, Kenya",
      summary: "Organised by ABF-GIZ with ACBF on governance, business model and roadmap.",
      body: [
        "Held from 26 to 28 May 2026 in Kenya, this pivotal workshop was organised by ABF-GIZ together with the African Capacity Building Foundation (ACBF).",
        "IAPA leaders and technical advisors worked intensively on governance frameworks, a sustainable service-based business model and the 2026–2030 Strategic Plan.",
        "The workshop laid the foundation for IAPA's first 12-month operationalisation roadmap and its institutional strengthening partnership with ACBF.",
      ],
      highlights: ["Co-organised by ABF-GIZ and ACBF", "Defined IAPA's governance and business model", "Produced the 2026–2030 strategic roadmap"],
    },
    fr: {
      date: "26–28 mai 2026",
      location: "Kenya",
      title: "Atelier stratégique, Kenya",
      summary: "Organisé par ABF-GIZ avec l'ACBF sur la gouvernance, le modèle économique et la feuille de route.",
      body: [
        "Tenu du 26 au 28 mai 2026 au Kenya, cet atelier décisif a été organisé par l'ABF-GIZ avec la Fondation pour le renforcement des capacités en Afrique (ACBF).",
        "Les dirigeants de l'IAPA et les conseillers techniques ont travaillé sur les mécanismes de gouvernance, le modèle économique de services et le Plan stratégique 2026–2030.",
        "Les conclusions ont directement structuré le plan d'opérationnalisation des 12 premiers mois.",
      ],
      highlights: ["Co-organisé par l'ABF-GIZ et l'ACBF", "Définition de la gouvernance et du modèle économique", "Élaboration de la feuille de route 2026–2030"],
    },
  },
  {
    slug: "aaa-meeting-nairobi",
    img: "policyDialogue",
    en: {
      date: "28 May 2026",
      location: "Nairobi, Kenya",
      title: "Meeting with Africa Agribusiness Academy, Nairobi",
      summary: "Exploring cooperation on training and practitioner skills.",
      body: [
        "On 28 May 2026 in Nairobi, IAPA representatives met with the Africa Agribusiness Academy (AAA) to explore practical avenues for collaboration.",
        "Talks centred on connecting IAPA's certified Master Trainer network with AAA's entrepreneur community, co-delivering agribusiness training and expanding mentorship opportunities for African SMEs.",
        "Both institutions agreed to continue technical exchanges toward a structured partnership.",
      ],
      highlights: ["Exploratory partnership dialogue in Nairobi", "Focus on practitioner skills and SME mentorship", "Shared commitment to inclusive agribusiness growth"],
    },
    fr: {
      date: "28 mai 2026",
      location: "Nairobi, Kenya",
      title: "Rencontre avec l'Africa Agribusiness Academy, Nairobi",
      summary: "Exploration d'une coopération sur la formation et les compétences des praticiens.",
      body: [
        "Le 28 mai 2026 à Nairobi, les représentants de l'IAPA ont rencontré l'Africa Agribusiness Academy (AAA) pour explorer des pistes concrètes de coopération.",
        "Les discussions ont porté sur la mise en relation du réseau de Maîtres Formateurs de l'IAPA avec les entrepreneurs accompagnés par l'AAA, ainsi que sur le mentorat et la formation conjointe.",
        "Les deux organisations poursuivent leurs échanges techniques en vue d'un partenariat structuré.",
      ],
      highlights: ["Dialogue de partenariat à Nairobi", "Synergies sur les compétences et le mentorat des PME", "Vision partagée d'un agribusiness africain inclusif"],
    },
  },
  {
    slug: "ordinary-general-assembly-2025",
    img: "aboutHandover",
    en: {
      date: "2025",
      location: "Aburi, Ghana",
      title: "Ordinary General Assembly, Aburi, Ghana",
      summary: "Annual gathering of members reviewing statutes, governance and continental rollout.",
      body: [
        "In 2025, IAPA members convened in Aburi, Ghana for the Ordinary General Assembly following the 2024 Constituent General Assembly.",
        "Delegates reviewed progress on legal registration in Ghana, validated operational priorities for the five regional focal-point networks and strengthened bilingual collaboration between Anglophone and Francophone chapters.",
        "The Aburi Assembly confirmed Accra as IAPA's headquarters and accelerated preparations for full legalisation in 2026.",
      ],
      highlights: ["Held in Aburi, Ghana with pan-African delegates", "Validated regional priorities and bilingual coordination", "Prepared the 2026 legal registration in Accra"],
    },
    fr: {
      date: "2025",
      location: "Aburi, Ghana",
      title: "Assemblée générale ordinaire, Aburi, Ghana",
      summary: "Réunion annuelle des membres consacrée à la gouvernance et au déploiement continental.",
      body: [
        "En 2025, les membres de l'IAPA se sont réunis à Aburi, au Ghana, pour l'Assemblée générale ordinaire, dans la continuité de l'Assemblée constitutive de 2024.",
        "Les délégués ont fait le point sur l'enregistrement légal au Ghana, validé les priorités des cinq réseaux régionaux et renforcé la collaboration bilingue.",
        "L'Assemblée d'Aburi a confirmé le siège d'Accra et préparé la légalisation officielle intervenue en 2026.",
      ],
      highlights: ["Réunion panafricaine à Aburi, Ghana", "Validation des priorités régionales et bilingues", "Préparation de l'enregistrement légal à Accra"],
    },
  },
  {
    slug: "founding-conference-johannesburg",
    img: "signing",
    en: {
      date: "Sep 2023",
      location: "Johannesburg, South Africa",
      title: "Master Trainer Network Conference, Johannesburg",
      summary: "Where IAPA was founded.",
      body: [
        "In September 2023, agribusiness Master Trainers from across Africa gathered in Johannesburg under GIZ's Agri-Business Facility for Africa (ABF) for the Master Trainer Network Conference.",
        "Participants resolved to create a permanent, membership-based pan-African professional association — the International Agribusiness Practitioners Association (IAPA) — and elected an interim steering team to draft its founding statutes.",
        "This milestone marked the beginning of IAPA's journey from national trainer networks to a unified continental body.",
      ],
      highlights: ["Founding conference of the IAPA network", "Interim steering team mandated to draft statutes", "Connected Master Trainers from 20+ African countries"],
    },
    fr: {
      date: "Sept. 2023",
      location: "Johannesburg, Afrique du Sud",
      title: "Conférence du réseau des Master Trainers, Johannesburg",
      summary: "Là où l'IAPA a été fondée.",
      body: [
        "En septembre 2023, des Maîtres Formateurs venus de toute l'Afrique se sont réunis à Johannesburg dans le cadre de l'Agri-Business Facility for Africa (ABF) de la GIZ.",
        "Les participants ont décidé de créer une association professionnelle panafricaine permanente — l'IAPA — et ont mis en place un comité de pilotage intérimaire chargé d'élaborer les statuts.",
        "Cette conférence fondatrice a lancé la dynamique conduisant à la légalisation et au déploiement continental de l'association.",
      ],
      highlights: ["Conférence fondatrice du réseau IAPA", "Mandat confié au comité de pilotage pour les statuts", "Réseau rassemblant des praticiens de plus de 20 pays"],
    },
  },
];

export type PressDetail = {
  slug: string;
  img: ImgKey;
  en: { date: string; location: string; title: string; summary: string; body: string[]; highlights: string[] };
  fr: { date: string; location: string; title: string; summary: string; body: string[]; highlights: string[] };
};

export const PRESS_DETAILS: readonly PressDetail[] = [
  {
    slug: "iapa-officially-recognised",
    img: "signing",
    en: {
      date: "Aug 2026",
      location: "Accra, Ghana",
      title: "IAPA is officially recognised",
      summary: "IAPA was officially registered in Accra, Ghana, opening new opportunities for funding, collaboration and impact.",
      body: [
        "In August 2026, the International Agribusiness Practitioners Association (IAPA) completed its official legal registration in Accra, Ghana, establishing its continental headquarters at THE ROMBUS, Plot 24, Tumu Street.",
        "Initiated in September 2023 in Johannesburg under GIZ's Agri-Business Facility for Africa (ABF) and built by 63 registered founding members across more than 20 African countries, IAPA now operates as an autonomous, legally recognised pan-African professional body.",
        "Official registration enables IAPA to enter direct service and grant agreements with governments, development partners, NGOs, financial institutions and private sector actors — scaling certified Business School training and advisory services across all five African regions.",
      ],
      highlights: ["Officially registered in Accra, Ghana (August 2026)", "63 registered founding members across 20+ countries", "Opens direct partnerships, funding and service contracts"],
    },
    fr: {
      date: "Août 2026",
      location: "Accra, Ghana",
      title: "L'IAPA est officiellement reconnue",
      summary: "L'IAPA a été officiellement enregistrée à Accra, au Ghana, ouvrant de nouvelles opportunités de financement, de collaboration et d'impact.",
      body: [
        "En août 2026, l'Association Internationale des Praticiens en Agribusiness (IAPA) a achevé son enregistrement légal officiel à Accra, au Ghana, où est établi son siège continental à THE ROMBUS, Plot 24, Tumu Street.",
        "Initiée en septembre 2023 à Johannesburg dans le cadre de l'Agri-Business Facility for Africa (ABF) de la GIZ et portée par 63 membres fondateurs enregistrés dans plus de 20 pays africains, l'IAPA agit désormais comme un organisme professionnel panafricain autonome.",
        "Cette reconnaissance officielle permet à l'IAPA de conclure directement des accords de partenariat, de financement et de prestation avec les gouvernements, bailleurs, ONG et entreprises privées à travers les cinq régions d'Afrique.",
      ],
      highlights: ["Enregistrement légal officiel à Accra, Ghana (août 2026)", "63 membres fondateurs enregistrés dans plus de 20 pays", "Accès direct aux partenariats, financements et contrats"],
    },
  },
];

export type LeadershipProfileDetail = {
  slug: string;
  portraitUrl: string;
  location: string;
  en: { role: string; name: string; meta: string; byline: string; lead: string; body: string[]; highlights: string[] };
  fr: { role: string; name: string; meta: string; byline: string; lead: string; body: string[]; highlights: string[] };
};

export const LEADERSHIP_PROFILES: readonly LeadershipProfileDetail[] = [
  {
    slug: "kwame-mensah",
    portraitUrl: assetUrl(kwame.url),
    location: "Accra, Ghana",
    en: {
      role: "President",
      name: "Dr. Kwame Mensah",
      meta: "Board leadership",
      byline: "Pan-African representation · General Assembly",
      lead: "Chairs the Board of Directors, represents IAPA with institutional partners and guides delivery of the 2026–2030 Strategic Plan.",
      body: [
        "As President of the Board of Directors, Dr. Kwame Mensah provides strategic leadership for IAPA's pan-African network of certified agribusiness practitioners across more than 20 countries.",
        "He represents the association in high-level dialogues with regional institutions, development partners and private sector alliances, championing practitioner-led quality assurance and inclusive agricultural value chains.",
        "Working closely with the Vice President, Treasurer, Executive Secretary and five Regional Focal Points, he oversees the implementation of IAPA's three strategic pillars.",
      ],
      highlights: ["Strategic partnerships", "Board governance", "Continental advocacy"],
    },
    fr: {
      role: "Président",
      name: "Dr. Kwame Mensah",
      meta: "Direction du Conseil",
      byline: "Représentation panafricaine · Assemblée générale",
      lead: "Préside le Conseil d'administration, représente l'IAPA auprès des partenaires institutionnels et veille à la mise en œuvre du Plan stratégique 2026–2030.",
      body: [
        "En tant que Président du Conseil d'administration, le Dr Kwame Mensah assure la direction stratégique du réseau panafricain de praticiens certifiés de l'IAPA dans plus de 20 pays.",
        "Il représente l'association lors des dialogues de haut niveau avec les institutions régionales, les partenaires techniques et financiers et le secteur privé.",
        "En étroite collaboration avec le Conseil et les cinq points focaux régionaux, il veille à la mise en œuvre des trois piliers stratégiques de l'association.",
      ],
      highlights: ["Partenariats stratégiques", "Gouvernance", "Plaidoyer continental"],
    },
  },
  {
    slug: "amina-diallo",
    portraitUrl: assetUrl(amina.url),
    location: "Dakar, Senegal",
    en: {
      role: "Vice President",
      name: "Amina Diallo",
      meta: "Board leadership",
      byline: "Regional liaison · Five African sub-regions",
      lead: "Coordinates the five regional focal-point networks, supports bilingual alignment and deputises for the President on continental missions.",
      body: [
        "Amina Diallo bridges IAPA's five regional networks — North Africa, Francophone West Africa, Anglophone West & Central Africa, East Africa and Southern Africa — ensuring every country chapter has a voice in governance.",
        "She champions bilingual English-French collaboration so curricula, case studies and peer coaching flow smoothly across linguistic boundaries.",
        "She deputises for the President on continental missions and leads member engagement initiatives promoting women and youth leadership.",
      ],
      highlights: ["Regional coordination", "Member engagement", "Bilingual alignment"],
    },
    fr: {
      role: "Vice-présidente",
      name: "Amina Diallo",
      meta: "Direction du Conseil",
      byline: "Liaison régionale · Cinq sous-régions",
      lead: "Coordonne les cinq réseaux de points focaux régionaux, renforce la cohésion bilingue et supplée le Président lors des missions continentales.",
      body: [
        "Amina Diallo assure la liaison entre les cinq régions de l'IAPA — Afrique du Nord, Afrique de l'Ouest francophone, Afrique de l'Ouest anglophone et centrale, Afrique de l'Est et Afrique australe.",
        "Elle pilote la cohésion bilingue français-anglais afin que les curricula, études de cas et programmes de mentorat circulent efficacement dans tout le réseau.",
        "Elle supplée le Président lors des missions continentales et soutient l'engagement des femmes et des jeunes praticiens.",
      ],
      highlights: ["Coordination régionale", "Animation des membres", "Cohésion bilingue"],
    },
  },
  {
    slug: "grace-ndlovu",
    portraitUrl: assetUrl(grace.url),
    location: "Lusaka, Zambia",
    en: {
      role: "Treasurer",
      name: "Grace Ndlovu",
      meta: "Financial stewardship",
      byline: "Audit & resource oversight · Accra HQ",
      lead: "Oversees annual budgets, transparent financial reporting to members and resource-mobilisation safeguards across donor-funded programmes.",
      body: [
        "Grace Ndlovu leads financial stewardship across IAPA, ensuring that membership contributions, partner grants and service contracts are managed with full transparency and accountability.",
        "She works closely with the Supervisory Board and the Administration & Finance department on annual budgeting, financial statements and donor compliance standards.",
        "Her oversight supports IAPA's transition toward a resilient, self-sustaining pan-African institution.",
      ],
      highlights: ["Budget oversight", "Financial transparency", "Grant compliance"],
    },
    fr: {
      role: "Trésorière",
      name: "Grace Ndlovu",
      meta: "Gestion financière",
      byline: "Contrôle & ressources · Siège d'Accra",
      lead: "Supervise les budgets annuels, la transparence financière envers les membres et la conformité des programmes financés par les partenaires.",
      body: [
        "Grace Ndlovu supervise la gestion financière de l'IAPA et veille à ce que les cotisations, subventions et contrats de services soient gérés avec rigueur et transparence.",
        "Elle collabore étroitement avec le Conseil de surveillance et le département Administration et finances sur les budgets annuels, les états financiers et les règles de conformité.",
        "Son action consolide la viabilité financière à long terme de l'association.",
      ],
      highlights: ["Suivi budgétaire", "Transparence financière", "Conformité"],
    },
  },
  {
    slug: "daniel-okafor",
    portraitUrl: assetUrl(daniel.url),
    location: "Accra, Ghana",
    en: {
      role: "Executive Secretary",
      name: "Daniel Okafor",
      meta: "Executive coordination",
      byline: "Executive Secretariat · Accra, Ghana",
      lead: "Leads day-to-day operations, coordinates Master Trainer deployments and ensures Board resolutions translate into member services.",
      body: [
        "Based at IAPA's Accra headquarters, Daniel Okafor coordinates the five operational departments of the Executive Secretariat: Secretary General, Administration & Finance, Marketing & Communication, Career Development, and Quality Assurance & Control.",
        "He oversees Master Trainer deployments for partner assignments, manages official documentation and ensures members receive timely certification and career support.",
        "He serves as the primary operational point of contact for institutional partners and member focal points across Africa.",
      ],
      highlights: ["Secretariat operations", "Mission delivery", "Member services"],
    },
    fr: {
      role: "Secrétaire exécutif",
      name: "Daniel Okafor",
      meta: "Coordination exécutive",
      byline: "Secrétariat exécutif · Accra, Ghana",
      lead: "Pilote les opérations quotidiennes, coordonne le déploiement des Maîtres Formateurs et traduit les décisions du Conseil en services aux membres.",
      body: [
        "Basé au siège d'Accra, Daniel Okafor coordonne les cinq départements opérationnels du Secrétariat exécutif : Secrétariat général, Administration et finances, Marketing et communication, Développement de carrière et Assurance qualité.",
        "Il supervise le déploiement des Maîtres Formateurs sur les missions partenaires, la documentation officielle et l'accompagnement des membres.",
        "Il constitue le point de contact opérationnel principal pour les partenaires et les points focaux nationaux.",
      ],
      highlights: ["Opérations", "Déploiement terrain", "Services aux membres"],
    },
  },
];

export const PULSE_ISSUE_1_READER: Record<Lang, { title: string; subtitle: string; sections: { heading: string; text: string }[]; note: string }> = {
  en: {
    title: "IAPA Pulse — Issue 1 (January 2026)",
    subtitle: "Foundations of a pan-African network",
    sections: [
      { heading: "From Johannesburg to Aburi", text: "Tracing how agribusiness Master Trainers from more than 20 countries moved from the September 2023 founding conference in Johannesburg and the July 2024 Constituent General Assembly to the 2025 Ordinary General Assembly in Aburi, Ghana." },
      { heading: "Five regions, one practitioner network", text: "Introducing IAPA's five regional focal-point networks — North Africa, Francophone West Africa, Anglophone West & Central Africa, East Africa and Southern Africa — uniting 63 registered founding members and 75+ Master Trainers." },
      { heading: "Setting the 2026–2030 Strategic Plan in motion", text: "Previewing IAPA's three strategic pillars: Institutional Capacity Strengthening, Inclusive Agribusiness Development, and Partnerships & Networking, alongside preparations for legal registration in Accra." },
    ],
    note: "Online edition summary. Upload the Issue 1 PDF anytime to enable direct PDF download alongside Issue 2.",
  },
  fr: {
    title: "IAPA Pulse — Numéro 1 (Janvier 2026)",
    subtitle: "Les fondations d'un réseau panafricain",
    sections: [
      { heading: "De Johannesburg à Aburi", text: "Retour sur le parcours des Maîtres Formateurs de plus de 20 pays, de la conférence fondatrice de septembre 2023 à Johannesburg et l'Assemblée constitutive de juillet 2024 jusqu'à l'Assemblée générale ordinaire 2025 à Aburi, au Ghana." },
      { heading: "Cinq régions, un réseau de praticiens", text: "Présentation des cinq réseaux de points focaux régionaux — Afrique du Nord, Afrique de l'Ouest francophone, Afrique de l'Ouest anglophone et centrale, Afrique de l'Est et Afrique australe — réunissant 63 membres fondateurs et plus de 75 Maîtres Formateurs." },
      { heading: "Lancement du Plan stratégique 2026–2030", text: "Aperçu des trois piliers stratégiques de l'IAPA : renforcement institutionnel, développement inclusif de l'agribusiness et partenariats, en préparation de l'enregistrement légal à Accra." },
    ],
    note: "Synthèse de l'édition en ligne. Le PDF du numéro 1 pourra être ajouté dès qu'il sera transmis, aux côtés du numéro 2.",
  },
};

export const getWhatWeDo = (slug: string) => WHAT_WE_DO_DETAILS.find((d) => d.slug === slug);
export const getEventDetail = (slug: string) => EVENT_DETAILS.find((e) => e.slug === slug);
export const getPressDetail = (slug: string) => PRESS_DETAILS.find((p) => p.slug === slug);
export const getLeadershipProfile = (slug: string) => LEADERSHIP_PROFILES.find((p) => p.slug === slug);