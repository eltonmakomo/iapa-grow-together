// Bilingual copy for the IAPA one-pager. Figures come from the uploaded IAPA documents.
export type Lang = "en" | "fr";

export const CONTACT = {
  email: "secretariatexecutif.iapa@gmail.com",
  phones: ["+237 67501 1100", "+226 66 59 77 77"],
  phoneHrefs: ["+237675011100", "+22666597777"],
  whatsapp: ["237675011100", "22666597777"],
  address: "THE ROMBUS, Plot 24, Tumu Street, Accra, Ghana",
};

// Placeholder profile URLs: swap each href for IAPA's live page once the accounts are confirmed.
export const SOCIALS = [
  { name: "Facebook", icon: "facebook", href: "https://www.facebook.com/IAPAAgribusiness" },
  { name: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/international-agribusiness-practitioners-association" },
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/iapa.agribusiness" },
  { name: "X", icon: "x", href: "https://x.com/IAPAAgribusiness" },
] as const;

export const SECTION_IDS = ["who-we-are", "our-work", "training", "knowledge-hub", "join-us"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

const en = {
  meta: {
    title: "IAPA — International Agribusiness Practitioners Association",
    description:
      "A pan-African network of certified agribusiness trainers and value chain experts building resilient, inclusive agricultural value chains.",
  },
  skip: "Skip to content",
  nav: { "who-we-are": "Who We Are", "our-work": "Our Work", training: "Training", "knowledge-hub": "Knowledge Hub", "join-us": "Join Us" } as Record<SectionId, string>,
  langLabel: "Version française",
  menu: "Menu",
  close: "Close menu",
  hero: {
    eyebrow: "Synergy · Inclusion · Solidarity",
    title: "Building resilient and inclusive agricultural value chains across Africa",
    lead: "IAPA connects certified Master Trainers and value chain experts from 20+ African countries to deliver high-quality agribusiness training and advisory services.",
    join: "Join IAPA",
    partner: "Partner with Us",
    photoAlt: "Lush green maize plants growing in a field",
  },
  who: {
    eyebrow: "Who we are",
    title: "Africa's professional home for agribusiness practitioners",
    body: [
      "IAPA is a membership-based pan-African association of Master Trainers, coordinators, trainers, consultants and agricultural value chain experts.",
      "Founded in September 2023 in Johannesburg and initiated under GIZ's AgriBusiness Facility for Africa (ABF), IAPA was officially registered in Accra, Ghana, in August 2026.",
    ],
    vision: "Vision",
    visionText: "Resilient, inclusive and sustainable agricultural value chains across the Global South.",
    mission: "Mission",
    missionText:
      "Through a strong community of agribusiness professionals, we improve the livelihoods of value chain actors and strengthen their climate resilience with inclusive, certified, high-quality training and advisory services.",
    regionsTitle: "5 regions, one network",
    regions: [
      ["North Africa", "Tunisia, Algeria"],
      ["Francophone West Africa", "Benin, Burkina Faso, Mali, Cabo Verde, Togo"],
      ["Anglophone West & Central Africa", "Ghana, Nigeria, Cameroon"],
      ["East Africa", "South Sudan, Ethiopia, Tanzania, Rwanda, Madagascar"],
      ["Southern Africa", "Namibia, Mozambique, Zambia, Malawi"],
    ],
    pillarsEyebrow: "Strategic Plan 2026–2030",
    pillarsTitle: "Three strategic pillars",
    pillars: [
      ["Institutional Capacity Strengthening", "A strong, fully functional IAPA; stronger technical skills and more business and career opportunities for members."],
      ["Inclusive Agribusiness Development", "Building capacity of value chain actors, including women, youth and persons with disabilities, while promoting climate resilience, market access and finance."],
      ["Partnerships & Networking", "Collaboration and knowledge sharing among members, partners and stakeholders across Africa."],
    ],
    values: ["Quality", "Teamwork", "Innovation", "Inclusion", "Transparency", "Andragogy"],
    valuesTitle: "Our values",
  },
  work: {
    eyebrow: "Our work",
    title: "What we offer",
    partnersLabel: "For partners",
    membersLabel: "For members",
    partnerServices: [
      ["Strategic agribusiness advisory", "We help you choose the right value chain and the best agribusiness solution to scale for your context."],
      ["Curriculum development & adaptation", "Training manuals, trainer guides, posters and Excel digital tools adapted to your value chain."],
      ["Quality training at scale", "Pilot trainings, training of trainers, supervision and reporting by IAPA Master Trainers."],
      ["Events & conferences", "Expert speakers, technical sessions and facilitation for results-oriented events."],
    ],
    memberServices: [
      ["Certification & capacity building", "Professional development and certification pathways for trainers and practitioners."],
      ["Coaching & mentorship", "Experienced Master Trainers mentor less-experienced members."],
      ["Visibility & opportunities", "Member profiles showcased to partners for consultancy and training assignments."],
    ],
    resultsTitle: "Results and ambitions",
    resultsNote: "We separate what IAPA has built, what IAPA members achieved with ABF-GIZ, and where we aim to be by 2030.",
    own: { label: "IAPA today", tag: "IAPA's own figures" },
    ownStats: [["20+", "African countries, each with a Country Focal Point"], ["5", "regions with a Regional Focal Point"], ["75+", "Master Trainers in our network"], ["63", "registered founding members"]],
    shared: { label: "Shared ABF-GIZ / IAPA results", tag: "Impact of the ABF-GIZ/IAPA approaches" },
    sharedStats: [["1.5M+", "smallholder farmers trained"], ["500+", "cooperatives and producer organisations supported"], ["85%", "beneficiary training satisfaction"], ["10+ yrs", "of ABF-GIZ experience behind our approaches"]],
    targets: { label: "Our 2030 targets", tag: "Future targets — not yet achieved" },
    targetStats: [["200", "partners using IAPA solutions"], ["860", "new trainers trained"], ["70", "inclusive agribusiness institutions strengthened"], ["370", "new members"], ["40", "countries reached"], ["1M+", "farmers and entrepreneurs trained"]],
    partnersTitle: "Partners and funders",
    partners: [
      ["ABF-GIZ", "Agri-Business Facility for Africa: funding, technical assistance and training"],
      ["GIZ & BMZ", "Programme funding and implementation"],
      ["European Union & OACPS", "Sponsors of the Agri-Business Facility"],
      ["ACBF", "African Capacity Building Foundation: strategic guidance and institutional strengthening"],
      ["MOVE", "Technical advisory and networking"],
    ],
    inViewTitle: "Partnerships in progress",
    inView: [
      ["Africa Agribusiness Academy", "Exploring collaboration on training and practitioner skills.", "https://aaa-kenya.org/"],
    ],
  },
  training: {
    eyebrow: "Training & approaches",
    title: "Proven, certified, adult-centred",
    lead: "Practical entrepreneurial approaches delivered by quality-assured Master Trainers, with inclusion of women, youth and persons with disabilities, climate-smart practices and links to markets and finance.",
    schoolsTitle: "The four Business Schools",
    schools: [
      ["FBS", "Farmer Business School", "Helps farmers run their farms as profitable businesses."],
      ["CBS", "Cooperative Business School", "Strengthens cooperative management and governance."],
      ["PBS", "Processor Business School", "Builds business skills of agro-processors."],
      ["ABS", "Aquaculture Business School", "Supports profitable, sustainable fish farming."],
    ],
    cfTitle: "Inclusive Contract Farming",
    cfText: "Builds fair, reliable business relationships between producers and buyers, opening market access for smallholders.",
    gap: "Plus Good Agricultural Practices (GAP), including climate-smart practices.",
    processTitle: "How we ensure quality",
    process: ["Pilot training", "Training of trainers", "Supervision", "Reporting & certification"],
    formats: "Formats: online, residential, blended and tailor-made programmes.",
  },
  hub: {
    eyebrow: "Knowledge hub",
    title: "IAPA Pulse newsletter",
    lead: "News from the network: milestones, partnerships and members in the field.",
    issues: [
      { key: "2", label: "Issue 2 · June 2026", title: "A strategic turning point", text: "Strategic workshop in Kenya, ACBF consultancy missions, the AAA partnership and new member opportunities." },
    ],
    download: "Download PDF",
    read: "Read online",
    size: "PDF, English",
  },
  join: {
    eyebrow: "Join us",
    title: "Grow with Africa's agribusiness professionals",
    member: {
      title: "Become a member",
      text: "For trainers, Master Trainers, coordinators and value chain experts. Membership follows participation in a Master Trainer Programme (MTP).",
      perks: ["Certification and professional development", "Coaching and mentorship", "Visibility to partners and consultancy opportunities"],
      cta: "Send a membership enquiry",
      subject: "Membership enquiry – IAPA",
    },
    partner: {
      title: "Partner with IAPA",
      text: "For governments, development partners, NGOs, universities and private companies looking to scale inclusive agribusiness solutions.",
      perks: ["Advisory on value chains and approaches", "Curriculum adaptation and training at scale", "Experts for projects and events"],
      cta: "Send a partnership enquiry",
      subject: "Partnership enquiry – IAPA",
    },
    contactTitle: "Contact the Executive Secretariat",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    hq: "Headquarters",
  },
  footer: {
    motto: "Synergy · Inclusion · Solidarity",
    rights: "International Agribusiness Practitioners Association.",
    backTop: "Back to top",
  },
};

export type Content = typeof en;

const fr: Content = {
  meta: {
    title: "IAPA — Association Internationale des Praticiens en Agribusiness",
    description:
      "Un réseau panafricain de formateurs certifiés et d'experts des chaînes de valeur pour des filières agricoles résilientes et inclusives.",
  },
  skip: "Aller au contenu",
  nav: { "who-we-are": "Qui sommes-nous", "our-work": "Nos actions", training: "Formation", "knowledge-hub": "Ressources", "join-us": "Nous rejoindre" },
  langLabel: "English version",
  menu: "Menu",
  close: "Fermer le menu",
  hero: {
    eyebrow: "Synergie · Inclusion · Solidarité",
    title: "Bâtir des chaînes de valeur agricoles résilientes et inclusives en Afrique",
    lead: "L'IAPA réunit des Maîtres Formateurs certifiés et des experts des chaînes de valeur de plus de 20 pays africains pour offrir des formations et des services-conseils en agribusiness de qualité.",
    join: "Rejoindre l'IAPA",
    partner: "Devenir partenaire",
    photoAlt: "Des plants de maïs verdoyants dans un champ",
  },
  who: {
    eyebrow: "Qui sommes-nous",
    title: "La maison professionnelle des praticiens de l'agribusiness en Afrique",
    body: [
      "L'IAPA est une association panafricaine de membres réunissant Maîtres Formateurs, coordinateurs, formateurs, consultants et experts des chaînes de valeur agricoles.",
      "Fondée en septembre 2023 à Johannesburg et initiée dans le cadre de l'AgriBusiness Facility for Africa (ABF) de la GIZ, l'IAPA a été officiellement enregistrée à Accra, au Ghana, en août 2026.",
    ],
    vision: "Vision",
    visionText: "Des chaînes de valeur agricoles résilientes, inclusives et durables dans les pays du Sud.",
    mission: "Mission",
    missionText:
      "Grâce à une communauté solide de professionnels, nous améliorons les moyens de subsistance des acteurs des chaînes de valeur et renforçons leur résilience climatique par des formations et des conseils inclusifs, certifiés et de qualité.",
    regionsTitle: "5 régions, un seul réseau",
    regions: [
      ["Afrique du Nord", "Tunisie, Algérie"],
      ["Afrique de l'Ouest francophone", "Bénin, Burkina Faso, Mali, Cabo Verde, Togo"],
      ["Afrique de l'Ouest anglophone et centrale", "Ghana, Nigeria, Cameroun"],
      ["Afrique de l'Est", "Soudan du Sud, Éthiopie, Tanzanie, Rwanda, Madagascar"],
      ["Afrique australe", "Namibie, Mozambique, Zambie, Malawi"],
    ],
    pillarsEyebrow: "Plan stratégique 2026–2030",
    pillarsTitle: "Trois piliers stratégiques",
    pillars: [
      ["Renforcement des capacités institutionnelles", "Une IAPA solide et pleinement fonctionnelle ; des compétences techniques renforcées et plus d'opportunités pour les membres."],
      ["Développement inclusif de l'agribusiness", "Renforcer les acteurs des chaînes de valeur, y compris les femmes, les jeunes et les personnes handicapées, tout en promouvant la résilience climatique, l'accès aux marchés et au financement."],
      ["Partenariats et réseautage", "Collaboration et partage de connaissances entre membres, partenaires et parties prenantes à travers l'Afrique."],
    ],
    values: ["Qualité", "Travail d'équipe", "Innovation", "Inclusion", "Transparence", "Andragogie"],
    valuesTitle: "Nos valeurs",
  },
  work: {
    eyebrow: "Nos actions",
    title: "Ce que nous offrons",
    partnersLabel: "Pour les partenaires",
    membersLabel: "Pour les membres",
    partnerServices: [
      ["Conseil stratégique en agribusiness", "Nous vous aidons à choisir la bonne chaîne de valeur et la meilleure solution à mettre à l'échelle selon votre contexte."],
      ["Développement et adaptation de curricula", "Manuels, guides du formateur, posters et outils numériques Excel adaptés à votre filière."],
      ["Formations de qualité à grande échelle", "Formations pilotes, formation de formateurs, supervision et rapportage par les Maîtres Formateurs IAPA."],
      ["Événements et conférences", "Intervenants experts, sessions techniques et facilitation pour des événements axés sur les résultats."],
    ],
    memberServices: [
      ["Certification et renforcement des capacités", "Développement professionnel et parcours de certification pour formateurs et praticiens."],
      ["Coaching et mentorat", "Des Maîtres Formateurs expérimentés accompagnent les membres moins expérimentés."],
      ["Visibilité et opportunités", "Profils des membres présentés aux partenaires pour des missions de conseil et de formation."],
    ],
    resultsTitle: "Résultats et ambitions",
    resultsNote: "Nous distinguons ce que l'IAPA a bâti, ce que les membres de l'IAPA ont accompli avec l'ABF-GIZ, et nos objectifs pour 2030.",
    own: { label: "L'IAPA aujourd'hui", tag: "Chiffres propres à l'IAPA" },
    ownStats: [["20+", "pays africains, chacun avec un point focal national"], ["5", "régions avec un point focal régional"], ["75+", "Maîtres Formateurs dans notre réseau"], ["63", "membres fondateurs enregistrés"]],
    shared: { label: "Résultats partagés ABF-GIZ / IAPA", tag: "Impact des approches ABF-GIZ/IAPA" },
    sharedStats: [["1,5 M+", "petits producteurs formés"], ["500+", "coopératives et organisations de producteurs accompagnées"], ["85 %", "de satisfaction des bénéficiaires"], ["10+ ans", "d'expérience ABF-GIZ derrière nos approches"]],
    targets: { label: "Nos objectifs 2030", tag: "Objectifs futurs — pas encore atteints" },
    targetStats: [["200", "partenaires utilisant les solutions IAPA"], ["860", "nouveaux formateurs formés"], ["70", "institutions inclusives renforcées"], ["370", "nouveaux membres"], ["40", "pays atteints"], ["1 M+", "producteurs et entrepreneurs formés"]],
    partnersTitle: "Partenaires et bailleurs",
    partners: [
      ["ABF-GIZ", "Agri-Business Facility for Africa : financement, assistance technique et formation"],
      ["GIZ et BMZ", "Financement et mise en œuvre de programmes"],
      ["Union européenne et OEACP", "Sponsors de l'Agri-Business Facility"],
      ["ACBF", "Fondation pour le renforcement des capacités en Afrique : orientation stratégique et renforcement institutionnel"],
      ["MOVE", "Conseil technique et réseautage"],
    ],
    inViewTitle: "Partenariats en cours",
    inView: [
      ["Africa Agribusiness Academy", "Exploration d'une collaboration sur la formation et les compétences des praticiens.", "https://aaa-kenya.org/"],
    ],
  },
  training: {
    eyebrow: "Formation et approches",
    title: "Éprouvées, certifiées, centrées sur l'adulte",
    lead: "Des approches entrepreneuriales pratiques, délivrées par des Maîtres Formateurs dont la qualité est assurée, intégrant les femmes, les jeunes et les personnes handicapées, les pratiques climato-intelligentes et l'accès aux marchés et au financement.",
    schoolsTitle: "Les quatre écoles d'entrepreneuriat",
    schools: [
      ["FBS", "Farmer Business School", "Aide les producteurs à gérer leur exploitation comme une entreprise rentable."],
      ["CBS", "Cooperative Business School", "Renforce la gestion et la gouvernance des coopératives."],
      ["PBS", "Processor Business School", "Développe les compétences entrepreneuriales des transformateurs."],
      ["ABS", "Aquaculture Business School", "Soutient une pisciculture rentable et durable."],
    ],
    cfTitle: "Agriculture contractuelle inclusive",
    cfText: "Établit des relations commerciales équitables et fiables entre producteurs et acheteurs, ouvrant l'accès aux marchés aux petits exploitants.",
    gap: "Ainsi que les Bonnes Pratiques Agricoles (BPA), y compris climato-intelligentes.",
    processTitle: "Comment nous garantissons la qualité",
    process: ["Formation pilote", "Formation de formateurs", "Supervision", "Rapportage et certification"],
    formats: "Formats : en ligne, résidentiel, hybride et programmes sur mesure.",
  },
  hub: {
    eyebrow: "Ressources",
    title: "Lettre d'information IAPA Pulse",
    lead: "Les nouvelles du réseau : étapes clés, partenariats et membres sur le terrain.",
    issues: [
      { key: "2", label: "Numéro 2 · Juin 2026", title: "Un tournant stratégique", text: "Atelier stratégique au Kenya, missions des consultants de l'ACBF, partenariat avec l'AAA et nouvelles opportunités pour les membres." },
    ],
    download: "Télécharger le PDF",
    read: "Lire en ligne",
    size: "PDF, en anglais",
  },
  join: {
    eyebrow: "Nous rejoindre",
    title: "Grandissez avec les professionnels de l'agribusiness en Afrique",
    member: {
      title: "Devenir membre",
      text: "Pour formateurs, Maîtres Formateurs, coordinateurs et experts des chaînes de valeur. L'adhésion fait suite à la participation à un programme de Maître Formateur (MTP).",
      perks: ["Certification et développement professionnel", "Coaching et mentorat", "Visibilité auprès des partenaires et missions de conseil"],
      cta: "Envoyer une demande d'adhésion",
      subject: "Demande d'adhésion – IAPA",
    },
    partner: {
      title: "Devenir partenaire",
      text: "Pour gouvernements, partenaires au développement, ONG, universités et entreprises souhaitant déployer des solutions d'agribusiness inclusives.",
      perks: ["Conseil sur les filières et les approches", "Adaptation de curricula et formation à grande échelle", "Experts pour projets et événements"],
      cta: "Envoyer une demande de partenariat",
      subject: "Demande de partenariat – IAPA",
    },
    contactTitle: "Contacter le Secrétariat exécutif",
    email: "E-mail",
    phone: "Téléphone",
    whatsapp: "WhatsApp",
    hq: "Siège",
  },
  footer: {
    motto: "Synergie · Inclusion · Solidarité",
    rights: "Association Internationale des Praticiens en Agribusiness.",
    backTop: "Haut de page",
  },
};

export const CONTENT: Record<Lang, Content> = { en, fr };
