import { assetUrl } from "@/lib/asset-url";
import heroImg from "@/assets/hero-farmer.jpg.asset.json";
import cameroon from "@/assets/cameroon-coffee.jpg.asset.json";
import mauritania from "@/assets/mauritania-pbs.jpg.asset.json";
import morocco from "@/assets/morocco-milk.jpg.asset.json";
import burkina from "@/assets/burkina-pbs.jpg.asset.json";
import ghana from "@/assets/ghana-handover.jpg.asset.json";
import kenya from "@/assets/kenya-workshop.jpg.asset.json";
import signing from "@/assets/registration-signing.jpg.asset.json";
import evaluation from "@/assets/evaluation-committee.jpg.asset.json";
import robusta from "@/assets/cameroon-robusta.jpg.asset.json";
import chadSup from "@/assets/chad-supervision.jpg.asset.json";
import mali from "@/assets/mali-fbs.jpg.asset.json";
import burkinaSession from "@/assets/burkina-session.jpg.asset.json";
import burkinaMaize from "@/assets/burkina-maize.jpg.asset.json";
import civ from "@/assets/cotedivoire-coffee.jpg.asset.json";
import spirulina from "@/assets/chad-spirulina.jpg.asset.json";
import seedling from "@/assets/seedling.jpg.asset.json";
import pulse2Cover from "@/assets/pulse2-cover.jpg.asset.json";
import pulse2 from "@/assets/pulse-2.pdf.asset.json";
import aboutHandover from "@/assets/child-banners/about-handover.webp.asset.json";
import aquacultureProcessing from "@/assets/child-banners/aquaculture-processing.webp.asset.json";
import blendedWorkshop from "@/assets/child-banners/blended-workshop.webp.asset.json";
import boardStrategy from "@/assets/child-banners/board-strategy.webp.asset.json";
import careerGrowth from "@/assets/child-banners/career-growth.webp.asset.json";
import caseStudySession from "@/assets/child-banners/case-study-session.webp.asset.json";
import contractFarming from "@/assets/child-banners/contract-farming.webp.asset.json";
import cooperativeCertificates from "@/assets/child-banners/cooperative-certificates.webp.asset.json";
import documentSigning from "@/assets/child-banners/document-signing.webp.asset.json";
import webinarSession from "@/assets/child-banners/webinar-session.webp.asset.json";
import farmerVoices from "@/assets/child-banners/farmer-voices.webp.asset.json";
import farmerBusinessSchool from "@/assets/child-banners/farmer-business-school.webp.asset.json";
import fieldPractices from "@/assets/child-banners/field-practices.webp.asset.json";
import knowledgeClassroom from "@/assets/child-banners/knowledge-classroom.webp.asset.json";
import leadershipPresentation from "@/assets/child-banners/leadership-presentation.webp.asset.json";
import multimediaTraining from "@/assets/child-banners/multimedia-training.webp.asset.json";
import onlineLearning from "@/assets/child-banners/online-learning.webp.asset.json";
import policyDialogue from "@/assets/child-banners/policy-dialogue.webp.asset.json";
import regionalNetwork from "@/assets/child-banners/regional-network.webp.asset.json";
import researchMeeting from "@/assets/child-banners/research-meeting.webp.asset.json";
import residentialClassroom from "@/assets/child-banners/residential-classroom.webp.asset.json";
import resultsCertificates from "@/assets/child-banners/results-certificates.webp.asset.json";
import scholarshipCertificate from "@/assets/child-banners/scholarship-certificate.webp.asset.json";
import tailoredTraining from "@/assets/child-banners/tailored-training.webp.asset.json";
import teamAssociates from "@/assets/child-banners/team-associates.webp.asset.json";

const IMG_SOURCES = {
  hero: heroImg.url, cameroon: cameroon.url, mauritania: mauritania.url, morocco: morocco.url, burkina: burkina.url, ghana: ghana.url,
  kenya: kenya.url, signing: signing.url, evaluation: evaluation.url, robusta: robusta.url, chadSup: chadSup.url, mali: mali.url,
  burkinaSession: burkinaSession.url, burkinaMaize: burkinaMaize.url, civ: civ.url, spirulina: spirulina.url, seedling: seedling.url,
  aboutHandover: aboutHandover.url,
  aquacultureProcessing: aquacultureProcessing.url,
  blendedWorkshop: blendedWorkshop.url,
  boardStrategy: boardStrategy.url,
  careerGrowth: careerGrowth.url,
  caseStudySession: caseStudySession.url,
  contractFarming: contractFarming.url,
  cooperativeCertificates: cooperativeCertificates.url,
  documentSigning: documentSigning.url,
  webinarSession: webinarSession.url,
  farmerVoices: farmerVoices.url,
  farmerBusinessSchool: farmerBusinessSchool.url,
  fieldPractices: fieldPractices.url,
  knowledgeClassroom: knowledgeClassroom.url,
  leadershipPresentation: leadershipPresentation.url,
  multimediaTraining: multimediaTraining.url,
  onlineLearning: onlineLearning.url,
  policyDialogue: policyDialogue.url,
  regionalNetwork: regionalNetwork.url,
  researchMeeting: researchMeeting.url,
  residentialClassroom: residentialClassroom.url,
  resultsCertificates: resultsCertificates.url,
  scholarshipCertificate: scholarshipCertificate.url,
  tailoredTraining: tailoredTraining.url,
  teamAssociates: teamAssociates.url,
};

export const IMG = Object.fromEntries(
  Object.entries(IMG_SOURCES).map(([key, url]) => [key, assetUrl(url)]),
) as { [K in keyof typeof IMG_SOURCES]: string };
export type ImgKey = keyof typeof IMG;

// Focal points keep faces just below the top edge, including in wide banners.
export const PHOTO_POSITION: Record<ImgKey, string> = {
  hero: "30% 15%",
  burkinaMaize: "50% 20%",
  burkina: "50% 20%",
  burkinaSession: "50% 15%",
  cameroon: "50% 20%",
  robusta: "50% 20%",
  spirulina: "50% 20%",
  chadSup: "50% 15%",
  civ: "50% 20%",
  evaluation: "50% 20%",
  ghana: "50% 20%",
  kenya: "50% 10%",
  mali: "50% 20%",
  mauritania: "50% 20%",
  morocco: "50% 20%",
  signing: "50% 20%",
  seedling: "50% 20%",
  aboutHandover: "50% 20%",
  aquacultureProcessing: "50% 20%",
  blendedWorkshop: "50% 20%",
  boardStrategy: "50% 20%",
  careerGrowth: "50% 20%",
  caseStudySession: "50% 20%",
  contractFarming: "50% 20%",
  cooperativeCertificates: "50% 20%",
  documentSigning: "50% 20%",
  webinarSession: "50% 15%",
  farmerVoices: "50% 20%",
  farmerBusinessSchool: "50% 20%",
  fieldPractices: "50% 20%",
  knowledgeClassroom: "50% 20%",
  leadershipPresentation: "50% 15%",
  multimediaTraining: "50% 20%",
  onlineLearning: "50% 20%",
  policyDialogue: "50% 20%",
  regionalNetwork: "50% 20%",
  researchMeeting: "50% 20%",
  residentialClassroom: "50% 20%",
  resultsCertificates: "50% 20%",
  scholarshipCertificate: "50% 15%",
  tailoredTraining: "50% 20%",
  teamAssociates: "50% 20%",
};
export const PULSE: Record<string, string> = { "2": assetUrl(pulse2.url) };
export const PULSE_COVER: Record<string, string> = { "2": assetUrl(pulse2Cover.url) };

import { NEW_BANNERS, type BannerSpec } from "@/components/iapa/banners";

/** Every banner photograph: focal point keeps faces just below the top edge. */
export const BANNER: Record<string, BannerSpec> = Object.fromEntries(
  Object.entries(NEW_BANNERS).map(([key, spec]) => [key, { ...spec, src: assetUrl(spec.src) }]),
);
export const bannerSpec = (key: string): BannerSpec =>
  BANNER[key] ?? { src: IMG[key as ImgKey] ?? IMG.hero, pos: PHOTO_POSITION[key as ImgKey] ?? "50% 20%" };
export type BannerKey = "home" | "cameroon" | "morocco" | "mauritania" | "ghana" | "burkina" | "join";
export type HeroKey = BannerKey | ImgKey;
