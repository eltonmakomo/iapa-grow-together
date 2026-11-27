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
  "knowledge-hub": {
    publications: {
      img: "knowledgeClassroom",
      en: { lead: "Read IAPA Pulse online or download issues for field stories, partnerships and network news.", heading: "Field stories and news from the IAPA network" },
      fr: { lead: "Lisez IAPA Pulse en ligne ou téléchargez les numéros pour suivre les histoires de terrain et les nouvelles du réseau.", heading: "Récits de terrain et actualités du réseau IAPA" },
    },
    "policy-briefs": {
      img: "policyDialogue",
      en: {
        lead: "Concise, evidence-informed reading on policies that shape inclusive agribusiness development.",
        heading: "Policy questions, explained clearly",
        body: ["IAPA Policy Briefs distil field learning and practitioner expertise into concise, action-oriented notes for ministries, donors, financial institutions and value-chain platforms."],
        sampleKind: "publication",
        samples: [
          { title: "Bridging the Finance Gap for Smallholder Value Chains", meta: "Policy Brief No. 01", tag: "Agri-Finance", date: "Sep 2026", byline: "IAPA Advisory & Finance Working Group", duration: "8 pages · 6 min read", img: "policyDialogue", text: "Practical recommendations on pairing Farmer Business School financial literacy with tailored seasonal credit, warehouse receipts and cooperative guarantees.", highlights: ["Financial record-keeping cuts perceived lending risk for rural microfinance institutions.", "Aligning loan disbursement with crop calendars reduces default rates across staple value chains.", "Blended technical assistance and credit readiness accelerate women-led enterprise borrowing."] },
          { title: "Designing Farmer & Processor Training That Works for Women and Youth", meta: "Policy Brief No. 02", tag: "Inclusion", date: "Aug 2026", byline: "IAPA Gender & Youth Practice", duration: "6 pages · 5 min read", img: "mauritania", text: "Evidence-informed guidance on scheduling, childcare-friendly venues, visual pedagogy and local-language facilitation to boost women and youth completion rates.", highlights: ["Modular half-day sessions increase attendance among women fish and grain processors.", "Visual accounting tools open Business School participation to learners with limited formal literacy.", "Mentoring young trainers builds durable rural advisory capacity."] },
          { title: "Embedding Climate-Smart Choices into Farm Business Decisions", meta: "Policy Brief No. 03", tag: "Climate Resilience", date: "Jul 2026", byline: "IAPA Climate & Value Chains Unit", duration: "10 pages · 7 min read", img: "burkinaMaize", text: "How extension services can frame soil restoration, drought-tolerant seed and water management as profitable farm-enterprise investments rather than abstract compliance.", highlights: ["Gross-margin comparisons help farmers weigh climate-smart investments against short-term input costs.", "Diversified crop calendars cushion household income during erratic rainfall seasons.", "Public extension and private off-takers achieve stronger adoption when sharing unified curricula."] },
        ],
      },
      fr: {
        lead: "Des lectures concises sur les politiques qui influencent le développement inclusif de l'agribusiness.",
        heading: "Des questions de politique expliquées clairement",
        body: ["Les notes d'orientation de l'IAPA synthétisent les acquis du terrain et l'expertise des praticiens en recommandations concrètes pour les ministères, bailleurs, institutions financières et interprofessions."],
        sampleKind: "publication",
        samples: [
          { title: "Combler le déficit de financement des chaînes de valeur inclusives", meta: "Note d'orientation n° 01", tag: "Finance agricole", date: "Sep 2026", byline: "Groupe de travail Conseil & Finance de l'IAPA", duration: "8 pages · 6 min de lecture", img: "policyDialogue", text: "Recommandations pratiques pour articuler l'éducation financière des Business Schools avec le crédit de campagne, le warrantage et les garanties coopératives.", highlights: ["La tenue de comptes simplifiée réduit le risque perçu par les institutions de microfinance.", "L'alignement des décaissements sur le calendrier cultural diminue les impayés.", "L'accompagnement technique couplé au crédit accélère l'accès des entreprises dirigées par des femmes."] },
          { title: "Rendre les formations agricoles accessibles aux femmes et aux jeunes", meta: "Note d'orientation n° 02", tag: "Inclusion", date: "Août 2026", byline: "Pratique Genre & Jeunesse de l'IAPA", duration: "6 pages · 5 min de lecture", img: "mauritania", text: "Pistes concrètes sur les horaires adaptés, la pédagogie visuelle et l'animation en langues locales pour renforcer la participation des femmes et des jeunes.", highlights: ["Des modules en demi-journée augmentent l'assiduité des transformatrices.", "Les supports visuels ouvrent les Business Schools aux publics peu alphabétisés.", "Le mentorat de jeunes formateurs consolide l'expertise locale."] },
          { title: "Intégrer les choix climato-intelligents dans la gestion d'exploitation", meta: "Note d'orientation n° 03", tag: "Résilience climatique", date: "Juil 2026", byline: "Unité Climat & Filières de l'IAPA", duration: "10 pages · 7 min de lecture", img: "burkinaMaize", text: "Comment les services de conseil peuvent présenter la restauration des sols et les semences résilientes comme des investissements rentables pour l'exploitation.", highlights: ["La comparaison des marges brutes aide les producteurs à évaluer la rentabilité climatique.", "La diversification des cultures amortit les aléas pluviométriques.", "L'harmonisation des curricula entre conseil public et acheteurs accélère l'adoption."] },
        ],
      },
    },
    "research-papers": {
      img: "researchMeeting",
      en: {
        lead: "Longer-form learning on training, professional practice and agricultural enterprise development.",
        heading: "From field experience to shared evidence",
        body: ["Working papers and practitioner studies examine training methodology, digital advisory models and cooperative performance across Africa's diverse agricultural value chains."],
        sampleKind: "publication",
        samples: [
          { title: "What Makes Farmer Business Training Stick? Evidence from Adult-Learning Pedagogy", meta: "Working Paper · WP-2026-01", tag: "Pedagogy", date: "Sep 2026", byline: "IAPA Learning & Quality Network", duration: "24 pages · 14 min read", img: "researchMeeting", text: "Examines how participatory cash-flow exercises, peer coaching and post-training field follow-up influence record-keeping and reinvestment six months after graduation.", highlights: ["Hands-on crop-budget simulations outperform lecture-based extension on retention.", "Refresher visits 90 days post-training double sustained bookkeeping adoption.", "Certified local Master Trainers strengthen language and cultural relevance."] },
          { title: "Blended & Digital Advisory Models in African Value Chains", meta: "Working Paper · WP-2026-02", tag: "Digitalisation", date: "Aug 2026", byline: "IAPA Digital Learning Taskforce", duration: "19 pages · 11 min read", img: "onlineLearning", text: "Assesses WhatsApp coaching groups, offline-first mobile modules and hybrid Training of Trainers in low-connectivity rural districts.", highlights: ["Offline-capable audio and visual prompts bridge connectivity gaps in remote zones.", "Peer WhatsApp groups sustain trainer supervision between in-person missions.", "Hybrid ToT reduces travel costs while preserving practical classroom assessment."] },
          { title: "Cooperative Governance and Enterprise Performance in Cash & Staple Crops", meta: "Working Paper · WP-2026-03", tag: "Cooperatives", date: "Jun 2026", byline: "IAPA Cooperative Business School Team", duration: "28 pages · 16 min read", img: "cooperativeCertificates", text: "Analyses the link between transparent member reporting, board accountability and collective bargaining power across cocoa, coffee and cereal cooperatives.", highlights: ["Clear separation of board oversight and daily management strengthens member trust.", "Regular financial assemblies improve side-selling discipline during peak harvest.", "Service diversification (inputs, aggregation, credit) anchors member loyalty."] },
        ],
      },
      fr: {
        lead: "Des analyses approfondies sur la formation, la pratique professionnelle et le développement des entreprises agricoles.",
        heading: "De l'expérience de terrain aux connaissances partagées",
        body: ["Les documents de travail et études de praticiens analysent la pédagogie de formation, les modèles de conseil numérique et la performance des coopératives dans les filières africaines."],
        sampleKind: "publication",
        samples: [
          { title: "Qu'est-ce qui rend la formation entrepreneuriale agricole durable ?", meta: "Document de travail · WP-2026-01", tag: "Pédagogie", date: "Sep 2026", byline: "Réseau Apprentissage & Qualité de l'IAPA", duration: "24 pages · 14 min de lecture", img: "researchMeeting", text: "Analyse comment les exercices participatifs de trésorerie, le coaching entre pairs et le suivi post-formation renforcent la tenue de comptes à six mois.", highlights: ["Les simulations de comptes d'exploitation surpassent les cours magistraux en rétention.", "Les visites de suivi à 90 jours doublent l'adoption durable de la comptabilité simplifiée.", "Les Maîtres Formateurs locaux garantissent l'ancrage linguistique et culturel."] },
          { title: "Modèles de conseil hybride et numérique dans les filières africaines", meta: "Document de travail · WP-2026-02", tag: "Numérique", date: "Août 2026", byline: "Groupe Apprentissage numérique de l'IAPA", duration: "19 pages · 11 min de lecture", img: "onlineLearning", text: "Évalue les groupes de coaching WhatsApp, les modules mobiles hors ligne et les formations de formateurs hybrides en zones rurales à faible connectivité.", highlights: ["Les contenus audio et visuels hors ligne surmontent les limites de réseau.", "Les groupes WhatsApp maintiennent la supervision des formateurs entre deux missions.", "Le format hybride réduit les coûts logistiques tout en préservant l'évaluation pratique."] },
          { title: "Gouvernance coopérative et performance économique des organisations", meta: "Document de travail · WP-2026-03", tag: "Coopératives", date: "Juin 2026", byline: "Équipe Cooperative Business School de l'IAPA", duration: "28 pages · 16 min de lecture", img: "cooperativeCertificates", text: "Étudie le lien entre transparence financière, redevabilité du conseil et capacité de négociation collective dans les filières café, cacao et céréales.", highlights: ["La séparation claire entre gouvernance et gestion quotidienne renforce la confiance.", "Les assemblées financières régulières réduisent les ventes parallèles à la récolte.", "La diversification des services fidélise durablement les membres."] },
        ],
      },
    },
    "case-studies": {
      img: "caseStudySession",
      en: {
        lead: "Practical accounts of how approaches are adapted, delivered and improved in different contexts.",
        heading: "Follow the learning from start to finish",
        body: ["Step-by-step field cases document how IAPA practitioners adapt Business School curricula, build national trainer pools and strengthen producer-buyer partnerships."],
        sampleKind: "publication",
        samples: [
          { title: "Building a Certified National Trainer Pool in Coffee Value Chains", meta: "Case Study · CS-01", tag: "Training of Trainers", date: "Sep 2026", byline: "Central Africa Practice · Cameroon", duration: "12 pages · 8 min read", img: "cameroon", text: "Follows the full cycle from curriculum adaptation and 10-day Training of Trainers to supervised field delivery and quality certification.", highlights: ["Joint selection with national partners ensures trainers remain embedded after the project.", "Live field supervision catches facilitation gaps before scale-up.", "Peer-review rubrics keep quality consistent across regional cohorts."] },
          { title: "Adapting Processor Business School for Women-Led Fish Processing", meta: "Case Study · CS-02", tag: "Curriculum Adaptation", date: "Aug 2026", byline: "North & West Africa Practice · Mauritania", duration: "10 pages · 7 min read", img: "aquacultureProcessing", text: "Documents how local market calendars, hygiene costing and visual bookkeeping exercises were co-created with women fish processors.", highlights: ["Pre-mission field immersion aligns every case study with real unit prices.", "Visual worksheets enable full participation regardless of formal schooling.", "Group-level savings exercises unlock working capital for better storage."] },
          { title: "Structuring Fair Agreements Through Inclusive Contract Farming", meta: "Case Study · CS-03", tag: "Contract Farming", date: "Jun 2026", byline: "IAPA Market Linkages Team", duration: "14 pages · 9 min read", img: "contractFarming", text: "Traces how transparent quality standards, pricing formulas and joint dispute-resolution mechanisms build trust between cooperatives and buyers.", highlights: ["Pre-season workshops align quality grades and delivery schedules on both sides.", "Plain-language contract summaries prevent misunderstandings at harvest.", "Joint review meetings turn first-season lessons into stronger multi-year agreements."] },
        ],
      },
      fr: {
        lead: "Des récits pratiques sur l'adaptation, la mise en œuvre et l'amélioration des approches dans différents contextes.",
        heading: "Suivre les apprentissages du début à la fin",
        body: ["Des études de terrain détaillées expliquent comment les praticiens de l'IAPA adaptent les curricula Business School, forment des viviers nationaux et structurent les liens commerciaux."],
        sampleKind: "publication",
        samples: [
          { title: "Constituer un vivier national de formateurs certifiés en filière café", meta: "Étude de cas · CS-01", tag: "Formation de formateurs", date: "Sep 2026", byline: "Pratique Afrique centrale · Cameroun", duration: "12 pages · 8 min de lecture", img: "cameroon", text: "Retrace le cycle complet : adaptation du curriculum, formation de formateurs de 10 jours, supervision sur le terrain et certification qualité.", highlights: ["La sélection conjointe avec les partenaires ancre durablement les formateurs.", "La supervision en conditions réelles corrige les écarts avant la mise à l'échelle.", "Les grilles d'évaluation garantissent une qualité homogène entre cohortes."] },
          { title: "Adapter la Processor Business School aux transformatrices de poisson", meta: "Étude de cas · CS-02", tag: "Adaptation de curriculum", date: "Août 2026", byline: "Pratique Afrique du Nord & Ouest · Mauritanie", duration: "10 pages · 7 min de lecture", img: "aquacultureProcessing", text: "Explique comment les coûts d'hygiène, les calendriers de marché et les fiches visuelles ont été co-construits avec les femmes transformatrices.", highlights: ["L'immersion terrain préalable aligne chaque exercice sur les prix réels.", "Les supports visuels permettent une participation pleine quel que soit le niveau scolaire.", "Les exercices d'épargne collective facilitent l'investissement dans le stockage."] },
          { title: "Structurer des accords équitables en agriculture contractuelle inclusive", meta: "Étude de cas · CS-03", tag: "Agriculture contractuelle", date: "Juin 2026", byline: "Équipe Accès aux marchés de l'IAPA", duration: "14 pages · 9 min de lecture", img: "contractFarming", text: "Montre comment des critères de qualité transparents, des formules de prix claires et le dialogue pré-campagne renforcent la confiance producteurs-acheteurs.", highlights: ["Les ateliers pré-campagne harmonisent les normes de qualité et les livraisons.", "Les résumés contractuels en langage simple préviennent les litiges à la récolte.", "Les bilans conjoints transforment les acquis en accords pluriannuels."] },
        ],
      },
    },
    webinars: {
      img: "webinarSession",
      en: {
        lead: "Live learning sessions and recordings for agribusiness practitioners wherever they work.",
        heading: "Join the conversation, then watch again",
        body: ["Watch recorded masterclasses, live demonstrations and peer Q&A sessions led by IAPA Master Trainers and partner specialists across Africa."],
        sampleKind: "webinar",
        samples: [
          { title: "Running an Engaging Virtual Business School Session", meta: "Webinar Recording", tag: "Online Facilitation", date: "Sep 2026", byline: "Led by IAPA e-Learning Facilitators", duration: "45:00", durationSec: 2700, img: "onlineLearning", text: "Practical techniques for interactive breakout exercises, shared crop-budget templates and active participation when training agribusiness cohorts online.", highlights: ["00:00 — Setting up low-bandwidth virtual rooms", "12:30 — Running live gross-margin breakout groups", "29:15 — Debriefing and checking learner comprehension", "38:00 — Participant Q&A"] },
          { title: "Adapting Business School Curricula for Women and Youth", meta: "Webinar Recording", tag: "Inclusion", date: "Aug 2026", byline: "Panel: West & East Africa Master Trainers", duration: "40:20", durationSec: 2420, img: "burkinaSession", text: "How trainers adapt scheduling, local value-chain examples and visual tools so women and young entrepreneurs fully benefit from Business School sessions.", highlights: ["00:00 — Identifying participation barriers early", "11:00 — Visual cash-flow exercises in practice", "25:40 — Youth agribusiness enterprise examples", "34:10 — Open discussion"] },
          { title: "Quality Assurance & Coaching in Trainer Supervision", meta: "Webinar Recording", tag: "Quality Assurance", date: "Jul 2026", byline: "IAPA Certification & Standards Team", duration: "50:15", durationSec: 3015, img: "chadSup", text: "A live walkthrough of classroom observation checklists, constructive debriefing and mentoring newly certified trainers during their first field cohorts.", highlights: ["00:00 — What supervisors look for in Module 1", "16:20 — Using the IAPA facilitation rubric", "33:00 — Delivering constructive post-session feedback", "43:00 — Certification pathways Q&A"] },
        ],
      },
      fr: {
        lead: "Des sessions en direct et des enregistrements pour les praticiens de l'agribusiness où qu'ils travaillent.",
        heading: "Participer à la conversation, puis la revoir",
        body: ["Visionnez les masterclasses enregistrées, démonstrations pratiques et sessions de questions-réponses animées par les Maîtres Formateurs de l'IAPA et leurs partenaires."],
        sampleKind: "webinar",
        samples: [
          { title: "Animer une session virtuelle dynamique de Business School", meta: "Enregistrement de webinaire", tag: "Animation en ligne", date: "Sep 2026", byline: "Animé par l'équipe e-Learning de l'IAPA", duration: "45:00", durationSec: 2700, img: "onlineLearning", text: "Méthodes concrètes pour animer des sous-groupes interactifs, partager des budgets de culture et maintenir l'engagement à distance.", highlights: ["00:00 — Préparer une session adaptée au bas débit", "12:30 — Exercices de marge brute en sous-groupes", "29:15 — Restitution et vérification des acquis", "38:00 — Questions-réponses"] },
          { title: "Adapter les curricula Business School pour les femmes et les jeunes", meta: "Enregistrement de webinaire", tag: "Inclusion", date: "Août 2026", byline: "Panel : Maîtres Formateurs Afrique de l'Ouest & Est", duration: "40:20", durationSec: 2420, img: "burkinaSession", text: "Comment adapter les horaires, les exemples de filières et les outils visuels pour renforcer la participation des femmes et des jeunes entrepreneurs.", highlights: ["00:00 — Identifier les freins à la participation", "11:00 — Exercices visuels de trésorerie", "25:40 — Cas d'entreprises portées par des jeunes", "34:10 — Échanges ouverts"] },
          { title: "Assurance qualité et coaching dans la supervision des formateurs", meta: "Enregistrement de webinaire", tag: "Assurance qualité", date: "Juil 2026", byline: "Équipe Certification & Standards de l'IAPA", duration: "50:15", durationSec: 3015, img: "chadSup", text: "Démonstration des grilles d'observation en salle, du débriefing constructif et du mentorat des formateurs lors de leurs premières cohortes.", highlights: ["00:00 — Points clés d'observation dès le Module 1", "16:20 — Utiliser la grille d'animation IAPA", "33:00 — Formuler un retour constructif après séance", "43:00 — Parcours de certification"] },
        ],
      },
    },
    multimedia: {
      img: "multimediaTraining",
      en: {
        lead: "Visual stories, demonstrations and interactive features from the IAPA learning network.",
        heading: "See how agribusiness learning works",
        body: ["Explore field photo stories, short training documentaries and visual walkthroughs showing IAPA's participatory agribusiness methods in action."],
        sampleKind: "multimedia",
        samples: [
          { title: "Inside a Farmer Business School Classroom", meta: "Photo Story · 8 Frames", tag: "Photo Story", date: "Sep 2026", byline: "Field Documentation · Mali & Burkina Faso", duration: "04:30", durationSec: 270, img: "mali", text: "A visual walkthrough of how producers map their seasonal calendar, calculate real production costs and compare investment options together.", highlights: ["00:00 — Opening icebreaker and farm-as-a-business framing", "01:15 — Group seasonal calendar mapping", "02:45 — Comparing gross margins on flipcharts", "03:45 — Action plans for the next harvest"] },
          { title: "The Journey of an IAPA Master Trainer", meta: "Short Documentary", tag: "Short Video", date: "Aug 2026", byline: "IAPA Communications · Pan-African Series", duration: "06:15", durationSec: 375, img: "kenya", text: "Follows an agribusiness practitioner from initial Training of Trainers through supervised field sessions and regional peer certification.", highlights: ["00:00 — Entering the Master Trainer Programme", "02:00 — First live facilitation with local cooperatives", "04:10 — Coaching feedback and quality certification", "05:30 — Mentoring the next cohort of trainers"] },
          { title: "Five Regions, One Pan-African Network", meta: "Interactive Showcase", tag: "Visual Brief", date: "Jul 2026", byline: "IAPA Regional Focal Points", duration: "05:00", durationSec: 300, img: "ghana", text: "Connects stories from West, Central, East, North and Southern Africa to show how bilingual practitioner exchange accelerates local impact.", highlights: ["00:00 — Accra headquarters and continental coordination", "01:30 — Bilingual curriculum exchange across 20+ countries", "03:10 — Regional focal-point collaboration", "04:20 — Looking ahead to IAPA's 2030 vision"] },
        ],
      },
      fr: {
        lead: "Des récits visuels, démonstrations et contenus interactifs issus du réseau d'apprentissage de l'IAPA.",
        heading: "Voir comment fonctionne l'apprentissage en agribusiness",
        body: ["Découvrez des récits photo de terrain, courts documentaires et parcours visuels illustrant les méthodes participatives de l'IAPA en action."],
        sampleKind: "multimedia",
        samples: [
          { title: "Au cœur d'un atelier Farmer Business School", meta: "Récit photo · 8 séquences", tag: "Récit photo", date: "Sep 2026", byline: "Documentation terrain · Mali & Burkina Faso", duration: "04:30", durationSec: 270, img: "mali", text: "Un parcours visuel montrant comment les producteurs établissent leur calendrier saisonnier, calculent leurs coûts réels et comparent leurs choix d'investissement.", highlights: ["00:00 — Lancement et vision de l'exploitation comme entreprise", "01:15 — Cartographie collective du calendrier cultural", "02:45 — Comparaison des marges brutes sur tableau", "03:45 — Plans d'action pour la prochaine campagne"] },
          { title: "Le parcours d'un Maître Formateur de l'IAPA", meta: "Court documentaire", tag: "Courte vidéo", date: "Août 2026", byline: "Communication IAPA · Série panafricaine", duration: "06:15", durationSec: 375, img: "kenya", text: "Suit un praticien de l'agribusiness depuis la formation de formateurs jusqu'à la supervision terrain et la certification régionale.", highlights: ["00:00 — Intégration au programme de Maître Formateur", "02:00 — Première animation réelle avec des coopératives", "04:10 — Retours de coaching et certification qualité", "05:30 — Mentorat de la cohorte suivante"] },
          { title: "Cinq régions, un réseau panafricain", meta: "Présentation interactive", tag: "Aperçu visuel", date: "Juil 2026", byline: "Points focaux régionaux de l'IAPA", duration: "05:00", durationSec: 300, img: "ghana", text: "Relie les expériences d'Afrique de l'Ouest, centrale, de l'Est, du Nord et australe pour montrer comment l'échange bilingue accélère l'impact.", highlights: ["00:00 — Siège d'Accra et coordination continentale", "01:30 — Échange bilingue de curricula dans plus de 20 pays", "03:10 — Collaboration des points focaux régionaux", "04:20 — Cap sur la vision 2030 de l'IAPA"] },
        ],
      },
    },
    podcasts: {
      img: "evaluation",
      en: {
        lead: "Conversations with trainers, partners and value chain experts on the practice of agribusiness.",
        heading: "Listen to practitioners share their experience",
        body: ["The IAPA Voices podcast brings together Master Trainers, cooperative leaders and development partners for candid conversations on building resilient agricultural enterprises."],
        sampleKind: "podcast",
        samples: [
          { title: "The Practitioner Behind the Training: Adult Learning in Rural Value Chains", meta: "Episode 01", date: "Sep 2026", byline: "Hosted by IAPA Secretariat · Guest: Senior Master Trainer", duration: "28:40", durationSec: 1720, img: "evaluation", text: "Why facilitation style matters more than slides, how trainers earn trust in farming communities and what participants teach us in every workshop.", highlights: ["Turning complex farm accounting into practical group games", "Adapting Business School facilitation for mixed-literacy cohorts", "Maintaining quality standards when scaling across regions"] },
          { title: "Making Cooperatives Work for Their Members", meta: "Episode 02", date: "Aug 2026", byline: "Hosted by IAPA Secretariat · Guest: Cooperative Governance Specialist", duration: "34:15", durationSec: 2055, img: "cooperativeCertificates", text: "A candid conversation on transparent governance, collective marketing, member trust and how Cooperative Business School strengthens board accountability.", highlights: ["Why transparent pricing stops side-selling before it starts", "Practical financial dashboards for cooperative committees", "Bringing women and youth into cooperative leadership"] },
          { title: "Talking Climate Resilience in Business Terms", meta: "Episode 03", date: "Jul 2026", byline: "Hosted by IAPA Secretariat · Guest: Climate-Smart Agribusiness Advisor", duration: "24:50", durationSec: 1490, img: "spirulina", text: "Connecting soil health, water-saving practices and crop diversification directly to household cash flow, risk reduction and long-term farm profitability.", highlights: ["Framing climate adaptation around return on investment", "Building contingency buffers into seasonal farm budgets", "Lessons from Sahel and East African dryland enterprises"] },
        ],
      },
      fr: {
        lead: "Des conversations avec des formateurs, partenaires et experts sur la pratique de l'agribusiness.",
        heading: "Écouter les praticiens partager leur expérience",
        body: ["Le podcast Voix de l'IAPA réunit Maîtres Formateurs, dirigeants de coopératives et partenaires autour de conversations concrètes sur le développement d'entreprises agricoles résilientes."],
        sampleKind: "podcast",
        samples: [
          { title: "Le praticien derrière la formation : l'andragogie en milieu rural", meta: "Épisode 01", date: "Sep 2026", byline: "Animé par le Secrétariat IAPA · Invité : Maître Formateur senior", duration: "28:40", durationSec: 1720, img: "evaluation", text: "Pourquoi la posture d'animation compte plus que les diapositives, comment gagner la confiance des producteurs et ce que le terrain apprend aux formateurs.", highlights: ["Transformer la comptabilité agricole en exercices collectifs vivants", "Adapter l'animation aux groupes à niveaux d'alphabétisation variés", "Préserver l'assurance qualité lors des déploiements à grande échelle"] },
          { title: "Des coopératives vraiment au service de leurs membres", meta: "Épisode 02", date: "Août 2026", byline: "Animé par le Secrétariat IAPA · Invité : Spécialiste en gouvernance", duration: "34:15", durationSec: 2055, img: "cooperativeCertificates", text: "Un échange franc sur la transparence financière, la commercialisation groupée et l'apport de la Cooperative Business School dans la gestion des coopératives.", highlights: ["Comment la transparence des prix limite les ventes parallèles", "Des tableaux de bord financiers simples pour les conseils d'administration", "Ouvrir la gouvernance coopérative aux femmes et aux jeunes"] },
          { title: "Parler résilience climatique en termes d'entreprise", meta: "Épisode 03", date: "Juil 2026", byline: "Animé par le Secrétariat IAPA · Invité : Conseiller climato-intelligent", duration: "24:50", durationSec: 1490, img: "spirulina", text: "Relier la fertilité des sols, la gestion de l'eau et la diversification culturale à la trésorerie familiale, à la gestion des risques et à la rentabilité.", highlights: ["Présenter l'adaptation climatique par le retour sur investissement", "Intégrer une réserve de sécurité dans les budgets de campagne", "Retours d'expérience du Sahel et d'Afrique de l'Est"] },
        ],
      },
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
  },
  media: {
    events: {
      img: "kenya",
      en: { lead: "Workshops, assemblies, evaluation missions and partnership meetings from IAPA's journey.", heading: "IAPA milestones & gatherings" },
      fr: { lead: "Ateliers, assemblées, missions d'évaluation et rencontres de partenariat qui marquent le parcours de l'IAPA.", heading: "Étapes et rencontres de l'IAPA" },
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
