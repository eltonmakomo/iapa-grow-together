import type { Lang } from "./iapa-content";
import type { PageSlug } from "./iapa-pages";
import type { HeroKey, ImgKey } from "@/components/iapa/media";
import { BANNER } from "@/components/iapa/media";
import kwame from "@/assets/leadership/kwame.webp.asset.json";
import amina from "@/assets/leadership/amina.webp.asset.json";
import grace from "@/assets/leadership/grace.webp.asset.json";
import daniel from "@/assets/leadership/daniel.webp.asset.json";
import { assetUrl } from "@/lib/asset-url";

export type SampleKind = "podcast" | "webinar" | "multimedia" | "publication" | "testimonial" | "profile" | "opportunity";
export type SampleItem = {
  title: string;
  name?: string;
  portraitUrl?: string;
  location?: string;
  meta: string;
  text: string;
  byline?: string;
  date?: string;
  duration?: string;
  durationSec?: number;
  tag?: string;
  img?: ImgKey;
  highlights?: string[];
};
export type ChildCopy = {
  lead: string;
  heading?: string;
  body?: string[];
  points?: string[];
  sampleKind?: SampleKind;
  samples?: SampleItem[];
  note?: string;
};
export type ChildPageContent = { img: HeroKey; en: ChildCopy; fr: ChildCopy };

export const CHILD_UI = {
  en: {
    highlights: "What you'll find",
    browsePublications: "Browse publications",
    browseRecordings: "Browse recordings",
    browseMultimedia: "Explore multimedia",
    browsePodcasts: "Browse episodes",
    browseEvents: "Explore events",
    browseDocuments: "Browse key documents",
    browsePress: "Read press releases",
    sample: "Sample content",
    sampleNote: "Illustrative content for the page layout — not a live publication, testimonial or opportunity.",
  },
  fr: {
    highlights: "Ce que vous trouverez",
    browsePublications: "Explorer les publications",
    browseRecordings: "Explorer les enregistrements",
    browseMultimedia: "Explorer le multimédia",
    browsePodcasts: "Explorer les épisodes",
    browseEvents: "Explorer les événements",
    browseDocuments: "Consulter les documents",
    browsePress: "Lire les communiqués",
    sample: "Contenu fictif",
    sampleNote: "Contenu illustratif pour la mise en page — il ne s'agit pas d'une publication, d'un témoignage ou d'une offre réelle.",
  },
} as const;

export const CHILD_CONTENT: Record<PageSlug, Record<string, ChildPageContent>> = {
  "who-we-are": {
    about: {
      img: "aboutHandover",
      en: { lead: "The story, purpose and values behind Africa's professional home for agribusiness practitioners." },
      fr: { lead: "L'histoire, la mission et les valeurs de la maison professionnelle africaine des praticiens de l'agribusiness." },
    },
    "managing-board": {
      img: "boardStrategy",
      en: { lead: "The structures responsible for IAPA's strategic direction, oversight and day-to-day operations." },
      fr: { lead: "Les structures responsables de l'orientation stratégique, du contrôle et des opérations quotidiennes de l'IAPA." },
    },
    leadership: {
      img: "leadershipPresentation",
      en: {
        lead: "The officers who guide IAPA's mission and represent its members across the continent.",
        heading: "Leadership in service of the network",
        body: ["IAPA's officers coordinate the Board's work, safeguard its mission and create space for members across five regions to contribute.", "Each officer serves on behalf of the pan-African membership, balancing strategic oversight with hands-on practitioner representation."],
        points: ["Strategic direction and representation", "Accountability to the General Assembly", "Coordination across five regions"],
        sampleKind: "profile",
        samples: [
          { title: "President", name: "Dr. Kwame Mensah", portraitUrl: assetUrl(kwame.url), location: "Accra, Ghana", meta: "Board leadership", byline: "Pan-African representation · General Assembly", text: "Chairs the Board of Directors, represents IAPA with institutional partners and guides delivery of the 2026–2030 Strategic Plan.", highlights: ["Strategic partnerships", "Board governance", "Continental advocacy"] },
          { title: "Vice President", name: "Amina Diallo", portraitUrl: assetUrl(amina.url), location: "Dakar, Senegal", meta: "Board leadership", byline: "Regional liaison · Five African sub-regions", text: "Coordinates the five regional focal-point networks, supports bilingual alignment and deputises for the President on continental missions.", highlights: ["Regional coordination", "Member engagement", "Bilingual alignment"] },
          { title: "Treasurer", name: "Grace Ndlovu", portraitUrl: assetUrl(grace.url), location: "Lusaka, Zambia", meta: "Financial stewardship", byline: "Audit & resource oversight · Accra HQ", text: "Oversees annual budgets, transparent financial reporting to members and resource-mobilisation safeguards across donor-funded programmes.", highlights: ["Budget oversight", "Financial transparency", "Grant compliance"] },
          { title: "Executive Secretary", name: "Daniel Okafor", portraitUrl: assetUrl(daniel.url), location: "Accra, Ghana", meta: "Executive coordination", byline: "Executive Secretariat · Accra, Ghana", text: "Leads day-to-day operations, coordinates Master Trainer deployments and ensures Board resolutions translate into member services.", highlights: ["Secretariat operations", "Mission delivery", "Member services"] },
        ],
      },
      fr: {
        lead: "Les responsables qui portent la mission de l'IAPA et représentent ses membres sur le continent.",
        heading: "Un leadership au service du réseau",
        body: ["Les responsables de l'IAPA coordonnent les travaux du Conseil, protègent sa mission et permettent aux membres des cinq régions de contribuer.", "Chaque responsable agit au nom des membres panafricains, en articulant vision stratégique et représentation de terrain."],
        points: ["Orientation stratégique et représentation", "Redevabilité envers l'Assemblée générale", "Coordination dans cinq régions"],
        sampleKind: "profile",
        samples: [
          { title: "Président", name: "Dr. Kwame Mensah", portraitUrl: assetUrl(kwame.url), location: "Accra, Ghana", meta: "Direction du Conseil", byline: "Représentation panafricaine · Assemblée générale", text: "Préside le Conseil d'administration, représente l'IAPA auprès des partenaires institutionnels et veille à la mise en œuvre du Plan stratégique 2026–2030.", highlights: ["Partenariats stratégiques", "Gouvernance", "Plaidoyer continental"] },
          { title: "Vice-présidente", name: "Amina Diallo", portraitUrl: assetUrl(amina.url), location: "Dakar, Senegal", meta: "Direction du Conseil", byline: "Liaison régionale · Cinq sous-régions", text: "Coordonne les cinq réseaux de points focaux régionaux, renforce la cohésion bilingue et supplée le Président lors des missions continentales.", highlights: ["Coordination régionale", "Animation des membres", "Cohésion bilingue"] },
          { title: "Trésorière", name: "Grace Ndlovu", portraitUrl: assetUrl(grace.url), location: "Lusaka, Zambia", meta: "Gestion financière", byline: "Contrôle & ressources · Siège d'Accra", text: "Supervise les budgets annuels, la transparence financière envers les membres et la conformité des programmes financés par les partenaires.", highlights: ["Suivi budgétaire", "Transparence financière", "Conformité"] },
          { title: "Secrétaire exécutif", name: "Daniel Okafor", portraitUrl: assetUrl(daniel.url), location: "Accra, Ghana", meta: "Coordination exécutive", byline: "Secrétariat exécutif · Accra, Ghana", text: "Pilote les opérations quotidiennes, coordonne le déploiement des Maîtres Formateurs et traduit les décisions du Conseil en services aux membres.", highlights: ["Opérations", "Déploiement terrain", "Services aux membres"] },
        ],
      },
    },
    "iapa-team": {
      img: "teamAssociates",
      en: {
        lead: "The Secretariat and external associates who turn IAPA's strategy into practical services.",
        heading: "A multidisciplinary team behind every mission",
        body: ["IAPA combines its Executive Secretariat with specialist associates who contribute technical, operational and communication expertise.", "Together, they support curriculum adaptation, trainer quality assurance and multi-country mission coordination across English- and French-speaking Africa."],
        points: ["Programme and mission coordination", "Specialist technical expertise", "Quality, administration and communication"],
        sampleKind: "profile",
        samples: [
          { title: "Programme Coordinator", meta: "Executive Secretariat", byline: "Mission planning & partner liaison · Accra", text: "Coordinates Business School rollouts, trainer deployments, logistics and progress reporting for institutional and private-sector partners.", highlights: ["Mission logistics", "Partner reporting", "Trainer scheduling"] },
          { title: "Institutional Strategy Associate", meta: "External associate", byline: "Governance & organisational advisory", text: "Advises agribusiness associations, cooperatives and national extension bodies on institutional strengthening and strategic planning.", highlights: ["Organisational audits", "Cooperative governance", "Strategic plans"] },
          { title: "Learning & Certification Associate", meta: "External associate", byline: "Curriculum quality & accreditation", text: "Maintains training standards across FBS, PBS, CBS and ICF curricula, overseeing Master Trainer assessments and digital learning design.", highlights: ["Curriculum QA", "Certification pathways", "Blended learning"] },
        ],
      },
      fr: {
        lead: "Le Secrétariat et les associés externes qui transforment la stratégie de l'IAPA en services concrets.",
        heading: "Une équipe pluridisciplinaire derrière chaque mission",
        body: ["L'IAPA associe son Secrétariat exécutif à des spécialistes externes qui apportent une expertise technique, opérationnelle et communicationnelle.", "Ensemble, ils accompagnent l'adaptation des curricula, l'assurance qualité des formateurs et la coordination des missions en Afrique francophone et anglophone."],
        points: ["Coordination des programmes et missions", "Expertise technique spécialisée", "Qualité, administration et communication"],
        sampleKind: "profile",
        samples: [
          { title: "Coordination des programmes", meta: "Secrétariat exécutif", byline: "Planification & partenaires · Accra", text: "Coordonne les déploiements Business School, l'affectation des formateurs, la logistique et le suivi des missions auprès des partenaires.", highlights: ["Logistique terrain", "Suivi partenaires", "Planification"] },
          { title: "Associé en stratégie institutionnelle", meta: "Associé externe", byline: "Gouvernance & développement organisationnel", text: "Accompagne les associations professionnelles, coopératives et structures nationales de conseil dans leur renforcement institutionnel.", highlights: ["Audits organisationnels", "Gouvernance coopérative", "Plans stratégiques"] },
          { title: "Associé apprentissage et certification", meta: "Associé externe", byline: "Qualité pédagogique & accréditation", text: "Veille aux standards des curricula FBS, PBS, CBS et ICF, et supervise l'évaluation des Maîtres Formateurs ainsi que les parcours numériques.", highlights: ["Assurance qualité", "Certification", "Apprentissage hybride"] },
        ],
      },
    },
    partners: {
      img: "ghana",
      en: { lead: "The organisations whose funding, expertise and collaboration strengthen IAPA's pan-African network." },
      fr: { lead: "Les organisations dont le financement, l'expertise et la collaboration renforcent le réseau panafricain de l'IAPA." },
    },
    offices: {
      img: "regionalNetwork",
      en: { lead: "Our Accra headquarters and five regional focal-point networks connecting practitioners in 20+ African countries." },
      fr: { lead: "Notre siège à Accra et cinq réseaux de points focaux régionaux reliant les praticiens de plus de 20 pays africains." },
    },
  },
  "our-work": {
    "impact-map": {
      img: "seedling",
      en: { lead: "Explore the five regions and countries where IAPA focal points coordinate local action." },
      fr: { lead: "Explorez les cinq régions et pays où les points focaux de l'IAPA coordonnent l'action locale." },
    },
    "iapa-in-numbers": {
      img: "resultsCertificates",
      en: { lead: "A transparent view of IAPA's own network, shared ABF-GIZ results and ambitions for 2030." },
      fr: { lead: "Une lecture transparente du réseau propre à l'IAPA, des résultats partagés avec ABF-GIZ et des ambitions 2030." },
    },
    testimonials: {
      img: "farmerVoices",
      en: {
        lead: "Perspectives from the people who learn, partner and work with IAPA.",
        heading: "Voices from training and partnership",
        body: ["Practitioners, partner institutions and certified trainers share how IAPA's hands-on Business School approaches change day-to-day agribusiness decisions.", "These perspectives highlight the value of adapted exercises, structured supervision and peer learning across African value chains."],
        points: ["Participant learning experiences", "Partner perspectives on collaboration", "Trainer reflections on quality and inclusion"],
        sampleKind: "testimonial",
        samples: [
          { title: "“Calculating real margins in the classroom changed how our cooperative plans each harvest.”", meta: "Farmer Business School · Coffee value chain", byline: "Cooperative Training Participant, Central Africa", date: "2026", text: "Working through seasonal cash-flow calendars and input cost sheets made farm economics concrete for every producer in the group." },
          { title: "“Co-designing the curriculum kept our women processors and local market realities at the centre.”", meta: "Processor Business School · Institutional Partner", byline: "Value Chain Programme Lead, West Africa", date: "2026", text: "IAPA Master Trainers worked closely with our field officers to test every exercise before scaling the training nationally." },
          { title: "“Post-training coaching and field observation gave me the confidence to lead sessions independently.”", meta: "Training of Trainers · Certified Facilitator", byline: "Agribusiness Trainer, Sahel Region", date: "2026", text: "Structured feedback during live farmer sessions helped refine adult-learning facilitation and keep women and youth actively engaged." },
        ],
      },
      fr: {
        lead: "Les points de vue des personnes qui apprennent, collaborent et travaillent avec l'IAPA.",
        heading: "Des voix issues de la formation et du partenariat",
        body: ["Praticiens, partenaires institutionnels et formateurs certifiés partagent la manière dont les approches Business School transforment la prise de décision au quotidien.", "Leurs retours soulignent l'importance des exercices adaptés, de la supervision terrain et de l'apprentissage entre pairs."],
        points: ["Expériences d'apprentissage des participants", "Points de vue des partenaires", "Réflexions des formateurs sur la qualité et l'inclusion"],
        sampleKind: "testimonial",
        samples: [
          { title: "« Calculer nos vraies marges en atelier a transformé la façon dont notre coopérative prépare chaque campagne. »", meta: "Farmer Business School · Filière café", byline: "Participant de coopérative, Afrique centrale", date: "2026", text: "Les calendriers de trésorerie saisonniers et les fiches de coûts d'intrants ont rendu l'économie agricole concrète pour chaque producteur." },
          { title: "« La co-conception du curriculum a placé nos transformatrices et les réalités du marché local au centre. »", meta: "Processor Business School · Partenaire institutionnel", byline: "Responsable programme filières, Afrique de l'Ouest", date: "2026", text: "Les Maîtres Formateurs de l'IAPA ont testé chaque exercice avec nos équipes terrain avant le déploiement à l'échelle nationale." },
          { title: "« La supervision post-formation m'a donné l'assurance nécessaire pour animer mes sessions en autonomie. »", meta: "Formation de formateurs · Animateur certifié", byline: "Formateur en agribusiness, Région Sahel", date: "2026", text: "Les retours structurés en situation réelle ont renforcé l'animation participative et l'implication active des femmes et des jeunes." },
        ],
      },
    },
  },
  training: {
    fbs: {
      img: "farmerBusinessSchool",
      en: {
        lead: "Practical business skills that help farmers run their farms as profitable, resilient enterprises.",
        heading: "From farm production to farm business",
        body: ["Farmer Business School helps participants examine their farm as an enterprise, understand income and costs, and make better production and investment decisions.", "IAPA Master Trainers adapt practical exercises to the selected value chain, with adult-centred learning, inclusion, climate-smart practices and links to markets and finance."],
        points: ["Farm enterprise analysis", "Costs, income and profitability", "Market-oriented and climate-smart decisions"],
      },
      fr: {
        lead: "Des compétences pratiques pour aider les producteurs à gérer leur exploitation comme une entreprise rentable et résiliente.",
        heading: "De la production agricole à l'entreprise agricole",
        body: ["La Farmer Business School aide les participants à analyser leur exploitation comme une entreprise, à comprendre les revenus et les coûts, et à prendre de meilleures décisions de production et d'investissement.", "Les Maîtres Formateurs de l'IAPA adaptent les exercices pratiques à la filière choisie, avec une pédagogie pour adultes, l'inclusion, les pratiques climato-intelligentes et des liens avec les marchés et la finance."],
        points: ["Analyse de l'entreprise agricole", "Coûts, revenus et rentabilité", "Décisions orientées marché et climat"],
      },
    },
    cbs: {
      img: "cooperativeCertificates",
      en: {
        lead: "Business, governance and financial skills for stronger, member-owned cooperatives.",
        heading: "Stronger cooperatives start with informed members",
        body: ["Cooperative Business School strengthens the entrepreneurial and organisational capabilities of cooperative leaders, managers and members.", "Practical sessions connect governance and financial management with member services, collective marketing and long-term business planning."],
        points: ["Democratic governance and accountability", "Financial management and record keeping", "Member services and collective marketing"],
      },
      fr: {
        lead: "Des compétences en affaires, gouvernance et finance pour des coopératives plus solides, portées par leurs membres.",
        heading: "Des coopératives plus fortes grâce à des membres mieux informés",
        body: ["La Cooperative Business School renforce les capacités entrepreneuriales et organisationnelles des dirigeants, gestionnaires et membres de coopératives.", "Les sessions pratiques relient la gouvernance et la gestion financière aux services aux membres, à la commercialisation collective et à la planification à long terme."],
        points: ["Gouvernance démocratique et redevabilité", "Gestion financière et tenue des registres", "Services aux membres et commercialisation collective"],
      },
    },
    pbs: {
      img: "mauritania",
      en: {
        lead: "Business capabilities for processors seeking better operations, product quality and market connections.",
        heading: "Turn processing into a sustainable business",
        body: ["Processor Business School supports agro-processors as they organise production, manage resources and evaluate the profitability of their activities.", "Participants work through practical decisions on costs, records, product quality, marketing and business relationships in their processing value chain."],
        points: ["Production and resource planning", "Costing, records and profitability", "Product quality and market relationships"],
      },
      fr: {
        lead: "Des capacités entrepreneuriales pour les transformateurs qui veulent améliorer leurs opérations, la qualité et l'accès aux marchés.",
        heading: "Faire de la transformation une entreprise durable",
        body: ["La Processor Business School accompagne les agro-transformateurs dans l'organisation de la production, la gestion des ressources et l'analyse de la rentabilité de leurs activités.", "Les participants travaillent sur des décisions concrètes concernant les coûts, les registres, la qualité des produits, la commercialisation et les relations d'affaires dans leur filière."],
        points: ["Planification de la production et des ressources", "Coûts, registres et rentabilité", "Qualité des produits et relations commerciales"],
      },
    },
    abs: {
      img: "aquacultureProcessing",
      en: {
        lead: "Entrepreneurial and technical skills for profitable, environmentally responsible aquaculture.",
        heading: "Managing aquaculture as a business",
        body: ["Aquaculture Business School connects production knowledge with the business decisions needed to run a sustainable fish-farming enterprise.", "The approach brings together planning, enterprise records, input management, market awareness and responsible use of natural resources."],
        points: ["Production-cycle and enterprise planning", "Input costs, feeding and financial records", "Markets and responsible resource management"],
      },
      fr: {
        lead: "Des compétences entrepreneuriales et techniques pour une aquaculture rentable et respectueuse de l'environnement.",
        heading: "Gérer l'aquaculture comme une entreprise",
        body: ["L'Aquaculture Business School relie les connaissances de production aux décisions entrepreneuriales nécessaires pour gérer durablement une entreprise piscicole.", "L'approche associe planification, registres de l'entreprise, gestion des intrants, connaissance des marchés et usage responsable des ressources naturelles."],
        points: ["Planification du cycle de production et de l'entreprise", "Coûts des intrants, alimentation et registres financiers", "Marchés et gestion responsable des ressources"],
      },
    },
    cf: {
      img: "contractFarming",
      en: {
        lead: "Fair, transparent and reliable business relationships between agricultural producers and buyers.",
        heading: "Building agreements that work for both sides",
        body: ["Inclusive Contract Farming helps producers and buyers clarify expectations, responsibilities and the terms of their commercial relationship.", "IAPA's approach places smallholder inclusion, transparent communication, product quality and dependable delivery at the centre of market coordination."],
        points: ["Clear agreements and shared responsibilities", "Quality, delivery and communication", "Smallholder inclusion and market access"],
      },
      fr: {
        lead: "Des relations commerciales équitables, transparentes et fiables entre producteurs agricoles et acheteurs.",
        heading: "Construire des accords utiles aux deux parties",
        body: ["L'agriculture contractuelle inclusive aide les producteurs et acheteurs à clarifier les attentes, les responsabilités et les conditions de leur relation commerciale.", "L'approche de l'IAPA place l'inclusion des petits producteurs, la communication transparente, la qualité et la fiabilité des livraisons au centre de la coordination des marchés."],
        points: ["Accords clairs et responsabilités partagées", "Qualité, livraison et communication", "Inclusion des petits producteurs et accès aux marchés"],
      },
    },
    gap: {
      img: "fieldPractices",
      en: {
        lead: "Practical on-farm methods for safer, more sustainable and climate-resilient agricultural production.",
        heading: "Good practices applied in the field",
        body: ["Good Agricultural Practices help producers make informed choices about soil, water, inputs, crop care, harvesting and responsible resource use.", "IAPA integrates climate-smart practices into its business approaches so environmental decisions are discussed alongside productivity and profitability."],
        points: ["Soil, water and responsible input use", "Safe production and post-harvest handling", "Climate-smart and resource-efficient practices"],
      },
      fr: {
        lead: "Des méthodes pratiques pour une production agricole plus sûre, durable et résiliente au climat.",
        heading: "Les bonnes pratiques appliquées sur le terrain",
        body: ["Les Bonnes Pratiques Agricoles aident les producteurs à faire des choix éclairés concernant le sol, l'eau, les intrants, l'entretien des cultures, la récolte et l'usage responsable des ressources.", "L'IAPA intègre les pratiques climato-intelligentes à ses approches entrepreneuriales afin de relier les décisions environnementales à la productivité et à la rentabilité."],
        points: ["Sol, eau et usage responsable des intrants", "Production sûre et gestion post-récolte", "Pratiques climato-intelligentes et économes en ressources"],
      },
    },
    online: {
      img: "onlineLearning",
      en: {
        lead: "Flexible virtual learning that connects practitioners beyond geographic boundaries.",
        heading: "Learn from anywhere, keep practice at the centre",
        body: ["Online courses can combine live virtual exchanges with self-paced learning resources and practical assignments.", "IAPA's adult-centred approach uses discussion, real-life scenarios and digital tools to keep remote learning active and relevant."],
        points: ["Live and self-paced learning activities", "Practical assignments and digital tools", "Peer exchange across countries"],
      },
      fr: {
        lead: "Un apprentissage virtuel flexible qui relie les praticiens au-delà des frontières géographiques.",
        heading: "Apprendre où que l'on soit, sans perdre la pratique",
        body: ["Les cours en ligne peuvent combiner des échanges virtuels en direct, des ressources en autonomie et des exercices pratiques.", "L'approche andragogique de l'IAPA utilise la discussion, des situations réelles et des outils numériques pour rendre l'apprentissage à distance actif et pertinent."],
        points: ["Activités en direct et en autonomie", "Exercices pratiques et outils numériques", "Échanges entre pairs de plusieurs pays"],
      },
    },
    residential: {
      img: "residentialClassroom",
      en: {
        lead: "Immersive in-person programmes combining focused learning, field practice and peer exchange.",
        heading: "Time dedicated to learning together",
        body: ["Residential programmes bring participants together for intensive sessions led by experienced trainers.", "The format creates room for practical exercises, field observation, feedback and professional relationships that continue after the programme."],
        points: ["Intensive face-to-face facilitation", "Practical exercises and field observation", "Feedback and professional networking"],
      },
      fr: {
        lead: "Des programmes immersifs en présentiel combinant apprentissage intensif, pratique de terrain et échanges entre pairs.",
        heading: "Du temps dédié à l'apprentissage collectif",
        body: ["Les programmes résidentiels réunissent les participants pour des sessions intensives animées par des formateurs expérimentés.", "Ce format laisse une place aux exercices pratiques, à l'observation sur le terrain, à la rétroaction et aux relations professionnelles qui se poursuivent après le programme."],
        points: ["Animation intensive en présentiel", "Exercices pratiques et observation de terrain", "Rétroaction et réseautage professionnel"],
      },
    },
    blended: {
      img: "blendedWorkshop",
      en: {
        lead: "Online preparation combined with the practice, feedback and connection of in-person sessions.",
        heading: "The strengths of two learning formats",
        body: ["Blended courses use virtual learning to introduce concepts and prepare participants before bringing them together for practical application.", "Follow-up activities help trainers and participants consolidate learning, exchange feedback and apply new skills in their own context."],
        points: ["Virtual preparation and shared foundations", "In-person practice and coaching", "Follow-up application in the workplace"],
      },
      fr: {
        lead: "Une préparation en ligne associée à la pratique, à la rétroaction et aux échanges du présentiel.",
        heading: "Les atouts de deux formats d'apprentissage",
        body: ["Les cours hybrides utilisent l'apprentissage virtuel pour présenter les concepts et préparer les participants avant une rencontre consacrée à la pratique.", "Les activités de suivi aident les formateurs et participants à consolider les acquis, échanger des retours et appliquer les compétences dans leur contexte."],
        points: ["Préparation virtuelle et bases communes", "Pratique et coaching en présentiel", "Application et suivi dans le contexte professionnel"],
      },
    },
    "tailor-made": {
      img: "tailoredTraining",
      en: {
        lead: "Programmes designed around a partner's value chain, audience, operating context and objectives.",
        heading: "Training shaped around your reality",
        body: ["Tailor-made programmes begin with the partner's target group, chosen value chain and desired business outcome.", "IAPA adapts curricula, exercises, digital tools and delivery arrangements before piloting, trainer onboarding, supervision and reporting."],
        points: ["Value-chain and audience analysis", "Adapted curricula, exercises and tools", "Piloting, supervision and reporting"],
      },
      fr: {
        lead: "Des programmes conçus autour de la filière, du public, du contexte et des objectifs d'un partenaire.",
        heading: "Une formation adaptée à votre réalité",
        body: ["Les programmes sur mesure partent du public cible, de la filière choisie et du résultat entrepreneurial recherché par le partenaire.", "L'IAPA adapte les curricula, exercices, outils numériques et modalités avant la formation pilote, l'intégration des formateurs, la supervision et le rapportage."],
        points: ["Analyse de la filière et du public", "Curricula, exercices et outils adaptés", "Formation pilote, supervision et rapportage"],
      },
    },
  },
  "knowledge-hub": {},
  media: {
    events: {
      img: "kenya",
      en: { lead: "Workshops, assemblies, evaluation missions and partnership meetings from IAPA's journey.", heading: "IAPA milestones & gatherings" },
      fr: { lead: "Ateliers, assemblées, missions d'évaluation et rencontres de partenariat qui marquent le parcours de l'IAPA.", heading: "Étapes et rencontres de l'IAPA" },
    },
    "key-documents": {
      img: "documentSigning",
      en: { lead: "The strategic and operational documents that guide IAPA's priorities and implementation.", heading: "Strategy & operational documents" },
      fr: { lead: "Les documents stratégiques et opérationnels qui guident les priorités et la mise en œuvre de l'IAPA.", heading: "Documents stratégiques et opérationnels" },
    },
    "newsletters": {
      img: "newsletters",
      en: { lead: "IAPA Pulse newsletter issues, readable online and downloadable as PDFs.", heading: "IAPA Pulse newsletter archive" },
      fr: { lead: "Les numéros de la lettre d'information IAPA Pulse, à lire en ligne et à télécharger en PDF.", heading: "Archives de la lettre d'information IAPA Pulse" },
    },
    "press-releases": {
      img: "signing",
      en: { lead: "Official announcements on IAPA's registration, legal milestones and institutional development.", heading: "Official IAPA announcements" },
      fr: { lead: "Les annonces officielles sur l'enregistrement, les étapes juridiques et le développement institutionnel de l'IAPA.", heading: "Annonces officielles de l'IAPA" },
    },
  },
  "join-us": {
    vacancies: {
      img: "careerGrowth",
      en: {
        lead: "Future staff and consultancy opportunities within Africa's agribusiness practitioner network.",
        heading: "Current & upcoming roles at IAPA",
        body: ["IAPA periodically recruits Secretariat staff and short-term Master Trainer consultants for missions across Africa. Expressions of interest are welcome ahead of upcoming calls."],
        sampleKind: "opportunity",
        samples: [
          { title: "Agribusiness Training Coordinator", meta: "Full-time", tag: "Staff role", date: "Roster open", byline: "Accra, Ghana · Hybrid", text: "Coordinates multi-country Business School calendars, trainer deployments, partner liaison and mission quality reporting.", highlights: ["5+ years coordinating agricultural training or value-chain projects", "Fluency in English and working knowledge of French", "Strong partner reporting and logistics skills"] },
          { title: "Bilingual Master Trainer — Consultancy", meta: "Consultancy", tag: "Short-term", date: "Rolling roster", byline: "Multi-country · West, Central & East Africa", text: "Adapts and delivers FBS, PBS, CBS and ICF curricula and supervises newly certified national trainers in the field.", highlights: ["Certified Master Trainer in Business School approaches", "Bilingual facilitation (English & French)", "Experience with value-chain curriculum adaptation"] },
          { title: "Communications & Membership Officer", meta: "Full-time", tag: "Staff role", date: "Upcoming", byline: "Accra, Ghana · Hybrid", text: "Leads member communications, IAPA Pulse editorial production, Knowledge Hub publishing and bilingual event visibility.", highlights: ["Bilingual editorial writing and digital publishing", "Experience with professional associations or rural development", "Event coordination and member engagement"] },
        ],
        note: "Interested practitioners may send an expression of interest to the Executive Secretariat to join the upcoming talent roster.",
      },
      fr: {
        lead: "Les futures opportunités d'emploi et de consultation au sein du réseau africain de praticiens de l'agribusiness.",
        heading: "Postes et missions à l'IAPA",
        body: ["L'IAPA recrute régulièrement des profils pour le Secrétariat exécutif ainsi que des Maîtres Formateurs consultants pour des missions sur le continent. Les manifestations d'intérêt sont bienvenues."],
        sampleKind: "opportunity",
        samples: [
          { title: "Coordinateur des formations en agribusiness", meta: "Temps plein", tag: "Poste salarié", date: "Vivier ouvert", byline: "Accra, Ghana · Hybride", text: "Coordonne les calendriers Business School multi-pays, l'affectation des formateurs, la liaison partenaires et les rapports qualité.", highlights: ["5+ ans en coordination de formations agricoles ou filières", "Maîtrise du français et de l'anglais professionnels", "Solide expérience en suivi logistique et reporting"] },
          { title: "Maître Formateur bilingue — Consultation", meta: "Consultation", tag: "Mission courte", date: "Vivier permanent", byline: "Multi-pays · Afrique de l'Ouest, centrale & Est", text: "Adapte et anime les curricula FBS, PBS, CBS et ICF et supervise les formateurs nationaux nouvellement certifiés sur le terrain.", highlights: ["Certification de Maître Formateur Business School", "Animation bilingue (français et anglais)", "Expérience en adaptation de curricula par filière"] },
          { title: "Chargé de communication et des membres", meta: "Temps plein", tag: "Poste salarié", date: "À venir", byline: "Accra, Ghana · Hybride", text: "Pilote la communication membres, la production d'IAPA Pulse, les publications du Centre de connaissances et la visibilité événementielle.", highlights: ["Rédaction éditoriale bilingue et édition numérique", "Expérience en réseau associatif ou développement rural", "Animation de communauté et communication d'événements"] },
        ],
        note: "Les praticiens intéressés peuvent adresser une manifestation d'intérêt au Secrétariat exécutif pour intégrer le vivier.",
      },
    },
    scholarships: {
      img: "scholarshipCertificate",
      en: {
        lead: "Future learning support for practitioners seeking to strengthen their agribusiness skills.",
        heading: "Learning grants & fellowships",
        body: ["IAPA works with partners to mobilise learning grants that widen access to Master Trainer certification, women's leadership coaching and digital agribusiness courses."],
        sampleKind: "opportunity",
        samples: [
          { title: "Master Trainer Programme Learning Grant", meta: "Professional grant", tag: "Certification", date: "Next cohort 2027", byline: "Open to IAPA member practitioners", text: "Co-funds tuition and field-supervision costs for experienced agricultural trainers entering IAPA's accredited Master Trainer pathway.", highlights: ["Covers up to 75% of residential and supervision fees", "Open to active trainers across all five African regions", "Requires institutional or cooperative endorsement"] },
          { title: "Women in Agribusiness Leadership Award", meta: "Leadership grant", tag: "Women Leaders", date: "Annual cycle", byline: "Pan-African · EN & FR tracks", text: "Supports women agribusiness facilitators and cooperative advisors advancing into senior training, governance and advisory leadership.", highlights: ["Tuition support plus 6 months of peer mentorship", "Dedicated francophone and anglophone cohorts", "Includes participation in an IAPA regional workshop"] },
          { title: "Digital Learning Access Stipend", meta: "Online support", tag: "e-Learning", date: "Rolling cohorts", byline: "Remote · Low-bandwidth regions", text: "Helps eligible rural practitioners cover data bundles and printable toolkits while completing IAPA online Business School modules.", highlights: ["Data allowance for live webinars and group exercises", "Downloadable offline training packs", "Priority for youth and remote-district extension officers"] },
        ],
        note: "Partner-funded scholarship windows are announced to members and via IAPA Pulse; write to the Secretariat to register interest.",
      },
      fr: {
        lead: "Les futurs appuis à l'apprentissage pour les praticiens souhaitant renforcer leurs compétences en agribusiness.",
        heading: "Bourses et appuis à la formation",
        body: ["L'IAPA mobilise des appuis avec ses partenaires pour élargir l'accès à la certification de Maître Formateur, au leadership féminin et aux parcours numériques en agribusiness."],
        sampleKind: "opportunity",
        samples: [
          { title: "Bourse du programme de Maître Formateur", meta: "Appui professionnel", tag: "Certification", date: "Cohorte 2027", byline: "Ouvert aux praticiens membres de l'IAPA", text: "Cofinance les frais de formation et de supervision terrain pour les formateurs agricoles expérimentés rejoignant le parcours accrédité.", highlights: ["Couvre jusqu'à 75 % des frais pédagogiques et de supervision", "Ouvert aux formateurs des cinq régions africaines", "Requiert l'appui d'une structure ou coopérative partenaire"] },
          { title: "Prix de leadership des femmes en agribusiness", meta: "Bourse leadership", tag: "Femmes leaders", date: "Cycle annuel", byline: "Panafricain · Parcours FR & EN", text: "Soutient les formatrices et conseillères agricoles qui souhaitent accéder à des responsabilités de leadership, gouvernance et conseil.", highlights: ["Prise en charge pédagogique et 6 mois de mentorat", "Cohortes francophones et anglophones dédiées", "Participation à un atelier régional de l'IAPA"] },
          { title: "Appui à l'accès à l'apprentissage numérique", meta: "Appui en ligne", tag: "e-Learning", date: "Sessions continues", byline: "À distance · Zones rurales", text: "Aide les praticiens en zone rurale à couvrir les forfaits internet et supports imprimés pour suivre les modules en ligne de l'IAPA.", highlights: ["Allocation data pour les webinaires et exercices en direct", "Packs de formation téléchargeables hors ligne", "Priorité aux jeunes conseillers en zones isolées"] },
        ],
        note: "Les fenêtres de bourses soutenues par nos partenaires sont annoncées aux membres et dans IAPA Pulse ; écrivez au Secrétariat pour manifester votre intérêt.",
      },
    },
  },
};

export function childContent(slug: PageSlug, child: string, lang: Lang): ChildCopy {
  const entry = CHILD_CONTENT[slug][child];
  if (!entry) throw new Error(`Missing child content for ${slug}/${child}`);
  return entry[lang];
}

export function childHero(slug: PageSlug, child: string): string {
  const entry = CHILD_CONTENT[slug][child];
  if (!entry) throw new Error(`Missing child hero for ${slug}/${child}`);
  // Prefer the page's own photograph; fall back to the shared library.
  return BANNER[child] ? child : entry.img;
}
