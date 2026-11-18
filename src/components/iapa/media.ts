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
import pulse3Cover from "@/assets/pulse3-cover.jpg.asset.json";
import pulse2Cover from "@/assets/pulse2-cover.jpg.asset.json";
import pulse3 from "@/assets/pulse-3.pdf.asset.json";
import pulse2 from "@/assets/pulse-2.pdf.asset.json";

export const IMG = {
  hero: heroImg.url, cameroon: cameroon.url, mauritania: mauritania.url, morocco: morocco.url, burkina: burkina.url, ghana: ghana.url,
  kenya: kenya.url, signing: signing.url, evaluation: evaluation.url, robusta: robusta.url, chadSup: chadSup.url, mali: mali.url,
  burkinaSession: burkinaSession.url, burkinaMaize: burkinaMaize.url, civ: civ.url, spirulina: spirulina.url, seedling: seedling.url,
};
export type ImgKey = keyof typeof IMG;
export const storyImg = (k: string): string => (IMG as Record<string, string>)[k] ?? IMG.hero;
export const PULSE: Record<string, string> = { "3": pulse3.url, "2": pulse2.url };
export const PULSE_COVER: Record<string, string> = { "3": pulse3Cover.url, "2": pulse2Cover.url };
