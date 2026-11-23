import type { Lang } from "./iapa-content";
import type { PageSlug } from "./iapa-pages";
import type { HeroKey } from "@/components/iapa/media";

export type SampleItem = { title: string; meta: string; text: string };
export type ChildCopy = {
  lead: string;
  heading?: string;
  body?: string[];
  points?: string[];
  samples?: SampleItem[];
  note?: string;
};
export type ChildPageContent = { img: HeroKey; en: ChildCopy; fr: ChildCopy };

export const CHILD_UI = {
  en: {
    highlights: "What you'll find",
    sample: "Sample content",
    sampleNote: "Illustrative content for the page layout — not a live publication, testimonial or opportunity.",
  },
  fr: {
    highlights: "Ce que vous trouverez",
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
        body: ["IAPA's officers coordinate the Board's work, safeguard its mission and create space for members across five regions to contribute.", "These sample profiles show how leadership biographies and responsibilities will be presented when confirmed profiles are published."],
        points: ["Strategic direction and representation", "Accountability to the General Assembly", "Coordination across five regions"],
        samples: [
          { title: "President", meta: "Board leadership", text: "A sample profile describing strategic representation, Board coordination and support to the Executive Secretariat." },
          { title: "Vice President", meta: "Board leadership", text: "A sample profile covering regional liaison, delegated responsibilities and support to the President." },
          { title: "Treasurer", meta: "Financial stewardship", text: "A sample profile explaining financial oversight, transparent reporting and resource-mobilisation support." },
          { title: "Executive Secretary", meta: "Executive coordination", text: "A sample profile presenting day-to-day coordination, member relations and implementation of Board decisions." },
        ],
      },
      fr: {
        lead: "Les responsables qui portent la mission de l'IAPA et représentent ses membres sur le continent.",
        heading: "Un leadership au service du réseau",
        body: ["Les responsables de l'IAPA coordonnent les travaux du Conseil, protègent sa mission et permettent aux membres des cinq régions de contribuer.", "Ces profils fictifs montrent comment les biographies et responsabilités seront présentées lorsque les profils confirmés seront publiés."],
        points: ["Orientation stratégique et représentation", "Redevabilité envers l'Assemblée générale", "Coordination dans cinq régions"],
        samples: [
          { title: "Président", meta: "Direction du Conseil", text: "Un profil fictif décrivant la représentation stratégique, la coordination du Conseil et l'appui au Secrétariat exécutif." },
          { title: "Vice-président", meta: "Direction du Conseil", text: "Un profil fictif présentant la liaison régionale, les responsabilités déléguées et l'appui au Président." },
          { title: "Trésorier", meta: "Gestion financière", text: "Un profil fictif expliquant le contrôle financier, les rapports transparents et l'appui à la mobilisation des ressources." },
          { title: "Secrétaire exécutif", meta: "Coordination exécutive", text: "Un profil fictif présentant la coordination quotidienne, les relations avec les membres et la mise en œuvre des décisions." },
        ],
      },
    },
    "iapa-team": {
      img: "teamAssociates",
      en: {
        lead: "The Secretariat and external associates who turn IAPA's strategy into practical services.",
        heading: "A multidisciplinary team behind every mission",
        body: ["IAPA combines its Executive Secretariat with specialist associates who contribute technical, operational and communication expertise.", "The sample profiles below illustrate how future team and associate biographies will appear."],
        points: ["Programme and mission coordination", "Specialist technical expertise", "Quality, administration and communication"],
        samples: [
          { title: "Programme Coordinator", meta: "Executive Secretariat", text: "A sample role profile for planning missions, coordinating trainers and maintaining partner communication." },
          { title: "Institutional Strategy Associate", meta: "External associate", text: "A sample profile for expertise in governance, organisational development and strategy implementation." },
          { title: "Learning & Certification Associate", meta: "External associate", text: "A sample profile covering curriculum quality, certification pathways and trainer professional development." },
        ],
      },
      fr: {
        lead: "Le Secrétariat et les associés externes qui transforment la stratégie de l'IAPA en services concrets.",
        heading: "Une équipe pluridisciplinaire derrière chaque mission",
        body: ["L'IAPA associe son Secrétariat exécutif à des spécialistes externes qui apportent une expertise technique, opérationnelle et communicationnelle.", "Les profils fictifs ci-dessous illustrent la présentation des futures biographies de l'équipe et des associés."],
        points: ["Coordination des programmes et missions", "Expertise technique spécialisée", "Qualité, administration et communication"],
        samples: [
          { title: "Coordination des programmes", meta: "Secrétariat exécutif", text: "Un profil fictif consacré à la planification des missions, à la coordination des formateurs et aux échanges avec les partenaires." },
          { title: "Associé en stratégie institutionnelle", meta: "Associé externe", text: "Un profil fictif présentant une expertise en gouvernance, développement organisationnel et mise en œuvre de stratégies." },
          { title: "Associé apprentissage et certification", meta: "Associé externe", text: "Un profil fictif couvrant la qualité des curricula, les parcours de certification et le développement des formateurs." },
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
    stories: {
      img: "cameroon",
      en: { lead: "Field reports showing how IAPA members adapt business approaches within real agricultural value chains." },
      fr: { lead: "Des récits de terrain montrant comment les membres de l'IAPA adaptent les approches entrepreneuriales aux filières agricoles." },
    },
    testimonials: {
      img: "farmerVoices",
      en: {
        lead: "Perspectives from the people who learn, partner and work with IAPA.",
        heading: "Voices from training and partnership",
        body: ["Testimonials will show how practitioners and partners experience IAPA's approaches in their own words.", "The sample quotes below demonstrate the intended format and are not statements from real participants."],
        points: ["Participant learning experiences", "Partner perspectives on collaboration", "Trainer reflections on quality and inclusion"],
        samples: [
          { title: "“The exercises made business decisions easier to explain.”", meta: "Sample participant testimonial", text: "An illustrative reflection on practical exercises, peer learning and applying new skills after training." },
          { title: "“The adaptation process kept our value chain at the centre.”", meta: "Sample partner testimonial", text: "An illustrative partner perspective on collaborative curriculum adaptation and local relevance." },
          { title: "“Supervision helped me grow in confidence as a trainer.”", meta: "Sample trainer testimonial", text: "An illustrative account of coaching, constructive feedback and quality assurance after a Training of Trainers." },
        ],
      },
      fr: {
        lead: "Les points de vue des personnes qui apprennent, collaborent et travaillent avec l'IAPA.",
        heading: "Des voix issues de la formation et du partenariat",
        body: ["Les témoignages présenteront, avec leurs propres mots, l'expérience des praticiens et partenaires avec les approches de l'IAPA.", "Les citations fictives ci-dessous illustrent le format prévu et ne sont pas des déclarations de participants réels."],
        points: ["Expériences d'apprentissage des participants", "Points de vue des partenaires", "Réflexions des formateurs sur la qualité et l'inclusion"],
        samples: [
          { title: "« Les exercices ont facilité l'explication des décisions d'entreprise. »", meta: "Témoignage fictif de participant", text: "Une réflexion illustrative sur les exercices pratiques, l'apprentissage entre pairs et l'application des acquis après la formation." },
          { title: "« L'adaptation a gardé notre filière au centre du processus. »", meta: "Témoignage fictif de partenaire", text: "Un point de vue illustratif sur l'adaptation collaborative des curricula et la pertinence locale." },
          { title: "« La supervision m'a donné davantage confiance comme formateur. »", meta: "Témoignage fictif de formateur", text: "Un récit illustratif sur le coaching, la rétroaction constructive et l'assurance qualité après une formation de formateurs." },
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
      en: { lead: "Read IAPA Pulse online or download each issue for field stories, partnerships and network news." },
      fr: { lead: "Lisez IAPA Pulse en ligne ou téléchargez chaque numéro pour suivre les histoires de terrain et les nouvelles du réseau." },
    },
    "policy-briefs": {
      img: "policyDialogue",
      en: {
        lead: "Concise, evidence-informed reading on policies that shape inclusive agribusiness development.",
        heading: "Policy questions, explained clearly",
        body: ["This collection will turn field learning and practitioner expertise into short briefs for decision-makers and partners.", "The sample briefs below illustrate the planned editorial style and are not published IAPA positions."],
        samples: [
          { title: "Financing inclusive agricultural value chains", meta: "Finance · Sample brief", text: "A sample exploration of practical ways to improve access to finance for producers, cooperatives and processors." },
          { title: "Making farmer training work for women and youth", meta: "Inclusion · Sample brief", text: "A sample brief on removing participation barriers and designing training around diverse learners." },
          { title: "Climate-smart enterprise support at scale", meta: "Climate · Sample brief", text: "A sample discussion of how advisory services can connect business decisions with climate resilience." },
        ],
      },
      fr: {
        lead: "Des lectures concises sur les politiques qui influencent le développement inclusif de l'agribusiness.",
        heading: "Des questions de politique expliquées clairement",
        body: ["Cette collection transformera les acquis du terrain et l'expertise des praticiens en notes courtes pour les décideurs et partenaires.", "Les notes fictives ci-dessous illustrent le style éditorial prévu et ne constituent pas des positions officielles de l'IAPA."],
        samples: [
          { title: "Financer des chaînes de valeur agricoles inclusives", meta: "Finance · Note fictive", text: "Une exploration fictive des moyens d'améliorer l'accès au financement pour les producteurs, coopératives et transformateurs." },
          { title: "Rendre la formation agricole accessible aux femmes et aux jeunes", meta: "Inclusion · Note fictive", text: "Une note fictive sur la réduction des obstacles à la participation et une formation adaptée à divers publics." },
          { title: "Déployer un appui entrepreneurial climato-intelligent", meta: "Climat · Note fictive", text: "Une réflexion fictive sur l'intégration de la résilience climatique dans les services-conseils aux entreprises." },
        ],
      },
    },
    "research-papers": {
      img: "researchMeeting",
      en: {
        lead: "Longer-form learning on training, professional practice and agricultural enterprise development.",
        heading: "From field experience to shared evidence",
        body: ["Research papers will provide space for deeper analysis, methods and lessons emerging from IAPA's practitioner network.", "These sample papers are illustrative titles and summaries, not completed IAPA research."],
        samples: [
          { title: "What makes farmer business training effective?", meta: "Learning · Sample paper", text: "A sample research summary examining facilitation, practical exercises and post-training application." },
          { title: "Digital advisory services in African value chains", meta: "Digitalisation · Sample paper", text: "A sample paper exploring opportunities and limitations of remote advisory and blended learning." },
          { title: "Cooperative governance and enterprise performance", meta: "Cooperatives · Sample paper", text: "A sample analysis of relationships between member participation, accountability and business outcomes." },
        ],
      },
      fr: {
        lead: "Des analyses approfondies sur la formation, la pratique professionnelle et le développement des entreprises agricoles.",
        heading: "De l'expérience de terrain aux connaissances partagées",
        body: ["Les articles de recherche offriront un espace pour approfondir les méthodes et les enseignements issus du réseau de praticiens de l'IAPA.", "Ces articles fictifs présentent des titres et résumés illustratifs, et non des recherches achevées de l'IAPA."],
        samples: [
          { title: "Quels facteurs rendent la formation entrepreneuriale agricole efficace ?", meta: "Apprentissage · Article fictif", text: "Un résumé fictif examinant l'animation, les exercices pratiques et l'application des acquis après la formation." },
          { title: "Les services-conseils numériques dans les filières africaines", meta: "Numérique · Article fictif", text: "Un article fictif explorant les possibilités et limites du conseil à distance et de l'apprentissage hybride." },
          { title: "Gouvernance coopérative et performance de l'entreprise", meta: "Coopératives · Article fictif", text: "Une analyse fictive des liens entre participation des membres, redevabilité et résultats entrepreneuriaux." },
        ],
      },
    },
    "case-studies": {
      img: "caseStudySession",
      en: {
        lead: "Practical accounts of how approaches are adapted, delivered and improved in different contexts.",
        heading: "Follow the learning from start to finish",
        body: ["Case studies will document the challenge, the response, the delivery process and the lessons that practitioners can carry into another mission.", "The sample cases below show the planned structure without presenting unverified results."],
        samples: [
          { title: "From pilot training to a national trainer pool", meta: "Training of trainers · Sample case", text: "A sample case following curriculum adaptation, pilot delivery, trainer onboarding and supervision." },
          { title: "Adapting a Business School to a new value chain", meta: "Curriculum adaptation · Sample case", text: "A sample account of consulting local actors, revising exercises and testing materials in the field." },
          { title: "Building market links through inclusive contract farming", meta: "Market access · Sample case", text: "A sample case exploring producer-buyer dialogue, clear agreements and inclusive coordination." },
        ],
      },
      fr: {
        lead: "Des récits pratiques sur l'adaptation, la mise en œuvre et l'amélioration des approches dans différents contextes.",
        heading: "Suivre les apprentissages du début à la fin",
        body: ["Les études de cas documenteront le défi, la réponse, le processus de mise en œuvre et les enseignements transférables à d'autres missions.", "Les cas fictifs ci-dessous montrent la structure prévue sans présenter de résultats non vérifiés."],
        samples: [
          { title: "De la formation pilote à un vivier national de formateurs", meta: "Formation de formateurs · Cas fictif", text: "Un cas fictif suivant l'adaptation du curriculum, la formation pilote, l'intégration des formateurs et la supervision." },
          { title: "Adapter une Business School à une nouvelle filière", meta: "Adaptation de curriculum · Cas fictif", text: "Un récit fictif de consultation des acteurs locaux, de révision des exercices et de test des supports sur le terrain." },
          { title: "Créer des liens commerciaux par l'agriculture contractuelle inclusive", meta: "Accès aux marchés · Cas fictif", text: "Un cas fictif explorant le dialogue producteurs-acheteurs, les accords clairs et la coordination inclusive." },
        ],
      },
    },
    webinars: {
      img: "elearningAcademy",
      en: {
        lead: "Live learning sessions and recordings for agribusiness practitioners wherever they work.",
        heading: "Join the conversation, then watch again",
        body: ["Webinars will create space for demonstrations, expert discussion and questions from practitioners across the network.", "The sample recordings below illustrate future content and are not currently available videos."],
        samples: [
          { title: "Running an engaging virtual Business School session", meta: "45 min · Sample recording", text: "A sample session on participation, breakout exercises and keeping practical learning active online." },
          { title: "Adapting curricula for women and youth", meta: "40 min · Sample recording", text: "A sample expert discussion on barriers, relevant examples and inclusive training delivery." },
          { title: "Quality assurance in trainer supervision", meta: "50 min · Sample recording", text: "A sample demonstration of observation, constructive feedback and trainer development." },
        ],
      },
      fr: {
        lead: "Des sessions en direct et des enregistrements pour les praticiens de l'agribusiness où qu'ils travaillent.",
        heading: "Participer à la conversation, puis la revoir",
        body: ["Les webinaires offriront un espace pour des démonstrations, des discussions d'experts et les questions des praticiens du réseau.", "Les enregistrements fictifs ci-dessous illustrent les futurs contenus et ne sont pas des vidéos actuellement disponibles."],
        samples: [
          { title: "Animer une session virtuelle dynamique de Business School", meta: "45 min · Enregistrement fictif", text: "Une session fictive sur la participation, les exercices en sous-groupes et la pratique à distance." },
          { title: "Adapter les curricula pour les femmes et les jeunes", meta: "40 min · Enregistrement fictif", text: "Une discussion fictive sur les obstacles, les exemples pertinents et l'animation inclusive." },
          { title: "L'assurance qualité dans la supervision des formateurs", meta: "50 min · Enregistrement fictif", text: "Une démonstration fictive de l'observation, de la rétroaction constructive et du développement des formateurs." },
        ],
      },
    },
    multimedia: {
      img: "multimediaTraining",
      en: {
        lead: "Visual stories, demonstrations and interactive features from the IAPA learning network.",
        heading: "See how agribusiness learning works",
        body: ["Multimedia resources will make methods and field experiences easier to explore through images, short videos and interactive presentations.", "These sample features illustrate the planned formats and are not published media items."],
        samples: [
          { title: "Inside a Farmer Business School exercise", meta: "Photo story · Sample feature", text: "A sample visual walkthrough of a participatory exercise from introduction to group feedback." },
          { title: "The journey of a Master Trainer", meta: "Short video · Sample feature", text: "A sample video concept following professional development, practice and quality assurance." },
          { title: "Five regions, one professional network", meta: "Interactive feature · Sample", text: "A sample interactive presentation of regional collaboration and practitioner exchange." },
        ],
      },
      fr: {
        lead: "Des récits visuels, démonstrations et contenus interactifs issus du réseau d'apprentissage de l'IAPA.",
        heading: "Voir comment fonctionne l'apprentissage en agribusiness",
        body: ["Les ressources multimédias permettront d'explorer les méthodes et expériences de terrain à travers des images, courtes vidéos et présentations interactives.", "Ces contenus fictifs illustrent les formats prévus et ne sont pas des médias déjà publiés."],
        samples: [
          { title: "Au cœur d'un exercice de Farmer Business School", meta: "Récit photo · Contenu fictif", text: "Un parcours visuel fictif d'un exercice participatif, de la présentation à la restitution collective." },
          { title: "Le parcours d'un Maître Formateur", meta: "Courte vidéo · Contenu fictif", text: "Un concept vidéo fictif sur le développement professionnel, la pratique et l'assurance qualité." },
          { title: "Cinq régions, un réseau professionnel", meta: "Contenu interactif · Exemple", text: "Une présentation interactive fictive de la collaboration régionale et des échanges entre praticiens." },
        ],
      },
    },
    podcasts: {
      img: "evaluation",
      en: {
        lead: "Conversations with trainers, partners and value chain experts on the practice of agribusiness.",
        heading: "Listen to practitioners share their experience",
        body: ["Podcast episodes will explore practical decisions, professional journeys and lessons that can travel between countries and value chains.", "The sample episodes below are content concepts, not published audio recordings."],
        samples: [
          { title: "The practitioner behind the training", meta: "Episode 01 · Sample podcast", text: "A sample conversation about professional motivation, facilitation and learning from participants." },
          { title: "Making cooperatives work for their members", meta: "Episode 02 · Sample podcast", text: "A sample discussion on governance, trust, member services and collective business decisions." },
          { title: "Climate resilience as a business conversation", meta: "Episode 03 · Sample podcast", text: "A sample episode connecting climate-smart choices with costs, risks and enterprise planning." },
        ],
      },
      fr: {
        lead: "Des conversations avec des formateurs, partenaires et experts sur la pratique de l'agribusiness.",
        heading: "Écouter les praticiens partager leur expérience",
        body: ["Les épisodes exploreront les décisions pratiques, les parcours professionnels et les enseignements transférables entre pays et filières.", "Les épisodes fictifs ci-dessous sont des concepts de contenu, et non des enregistrements audio publiés."],
        samples: [
          { title: "Le praticien derrière la formation", meta: "Épisode 01 · Podcast fictif", text: "Une conversation fictive sur la motivation professionnelle, l'animation et l'apprentissage auprès des participants." },
          { title: "Des coopératives au service de leurs membres", meta: "Épisode 02 · Podcast fictif", text: "Une discussion fictive sur la gouvernance, la confiance, les services aux membres et les décisions collectives." },
          { title: "Parler résilience climatique en termes d'entreprise", meta: "Épisode 03 · Podcast fictif", text: "Un épisode fictif reliant les choix climato-intelligents aux coûts, aux risques et à la planification." },
        ],
      },
    },
  },
  media: {
    events: {
      img: "kenya",
      en: { lead: "Workshops, assemblies, evaluation missions and partnership meetings from IAPA's journey." },
      fr: { lead: "Ateliers, assemblées, missions d'évaluation et rencontres de partenariat qui marquent le parcours de l'IAPA." },
    },
    "key-documents": {
      img: "documentSigning",
      en: { lead: "The strategic and operational documents that guide IAPA's priorities and implementation." },
      fr: { lead: "Les documents stratégiques et opérationnels qui guident les priorités et la mise en œuvre de l'IAPA." },
    },
    "press-releases": {
      img: "signing",
      en: { lead: "Official announcements on IAPA's registration, legal milestones and institutional development." },
      fr: { lead: "Les annonces officielles sur l'enregistrement, les étapes juridiques et le développement institutionnel de l'IAPA." },
    },
  },
  "join-us": {
    vacancies: {
      img: "careerGrowth",
      en: {
        lead: "Future staff and consultancy opportunities within Africa's agribusiness practitioner network.",
        heading: "Example roles at IAPA",
        body: ["This page will advertise staff and consultancy opportunities with clear responsibilities, locations and application instructions.", "There are no open vacancies right now. The sample listings below are provided only to preview the page."],
        samples: [
          { title: "Agribusiness Training Coordinator", meta: "Sample vacancy · Accra / hybrid", text: "A sample role coordinating training calendars, trainer assignments, partner communication and mission reporting." },
          { title: "Bilingual Master Trainer — Consultancy", meta: "Sample consultancy · Multi-country", text: "A sample assignment delivering and supervising adapted Business School programmes in English and French." },
          { title: "Communications & Membership Officer", meta: "Sample vacancy · Full-time", text: "A sample role supporting member engagement, publications, digital communication and event visibility." },
        ],
        note: "No application should be sent for these sample listings.",
      },
      fr: {
        lead: "Les futures opportunités d'emploi et de consultation au sein du réseau africain de praticiens de l'agribusiness.",
        heading: "Exemples de fonctions à l'IAPA",
        body: ["Cette page présentera les offres d'emploi et de consultation avec des responsabilités, lieux et modalités de candidature clairs.", "Aucune offre n'est ouverte actuellement. Les annonces fictives ci-dessous servent uniquement à prévisualiser la page."],
        samples: [
          { title: "Coordination des formations en agribusiness", meta: "Offre fictive · Accra / hybride", text: "Un rôle fictif coordonnant les calendriers de formation, les missions des formateurs, les partenaires et les rapports." },
          { title: "Maître Formateur bilingue — Consultation", meta: "Consultation fictive · Plusieurs pays", text: "Une mission fictive d'animation et de supervision de programmes Business School adaptés en anglais et en français." },
          { title: "Chargé de communication et des membres", meta: "Offre fictive · Temps plein", text: "Un rôle fictif soutenant l'engagement des membres, les publications, la communication numérique et les événements." },
        ],
        note: "Aucune candidature ne doit être envoyée pour ces annonces fictives.",
      },
    },
    scholarships: {
      img: "scholarshipCertificate",
      en: {
        lead: "Future learning support for practitioners seeking to strengthen their agribusiness skills.",
        heading: "Example scholarship opportunities",
        body: ["This page will present learning grants, eligibility criteria, application timelines and selection information when programmes become available.", "There are no open scholarships right now. The sample opportunities below are for layout preview only."],
        samples: [
          { title: "Master Trainer Programme learning grant", meta: "Sample scholarship · Professional development", text: "A sample grant supporting participation in an accredited professional learning pathway for experienced trainers." },
          { title: "Women in Agribusiness leadership award", meta: "Sample scholarship · Leadership", text: "A sample award concept supporting women practitioners who want to strengthen leadership and facilitation skills." },
          { title: "Digital learning access grant", meta: "Sample scholarship · Online learning", text: "A sample support concept covering connectivity or learning-material costs for eligible online participants." },
        ],
        note: "These are not active scholarships and no applications are being accepted.",
      },
      fr: {
        lead: "Les futurs appuis à l'apprentissage pour les praticiens souhaitant renforcer leurs compétences en agribusiness.",
        heading: "Exemples de bourses",
        body: ["Cette page présentera les bourses, critères d'éligibilité, calendriers et modalités de sélection lorsque les programmes seront disponibles.", "Aucune bourse n'est ouverte actuellement. Les opportunités fictives ci-dessous servent uniquement à prévisualiser la page."],
        samples: [
          { title: "Bourse du programme de Maître Formateur", meta: "Bourse fictive · Développement professionnel", text: "Une bourse fictive soutenant la participation de formateurs expérimentés à un parcours professionnel accrédité." },
          { title: "Prix de leadership des femmes en agribusiness", meta: "Bourse fictive · Leadership", text: "Un concept fictif soutenant les praticiennes qui souhaitent renforcer leurs compétences en leadership et animation." },
          { title: "Appui à l'accès à l'apprentissage numérique", meta: "Bourse fictive · Formation en ligne", text: "Un concept fictif couvrant les frais de connectivité ou de supports pour des participants éligibles en ligne." },
        ],
        note: "Ces bourses ne sont pas actives et aucune candidature n'est acceptée.",
      },
    },
  },
};

export function childContent(slug: PageSlug, child: string, lang: Lang): ChildCopy {
  const entry = CHILD_CONTENT[slug][child];
  if (!entry) throw new Error(`Missing child content for ${slug}/${child}`);
  return entry[lang];
}

export function childHero(slug: PageSlug, child: string): HeroKey {
  const entry = CHILD_CONTENT[slug][child];
  if (!entry) throw new Error(`Missing child hero for ${slug}/${child}`);
  return entry.img;
}
