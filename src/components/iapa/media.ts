import heroImg from "@/assets/hero-farmer.jpg.asset.json";
import cameroon from "@/assets/cameroon-coffee.jpg.asset.json";
import mauritania from "@/assets/mauritania-pbs.jpg.asset.json";
import morocco from "@/assets/morocco-milk.jpg.asset.json";
import burkina from "@/assets/burkina-pbs.jpg.asset.json";
import ghana from "@/assets/ghana-handover.jpg.asset.json";
import pulse3 from "@/assets/pulse-3.pdf.asset.json";
import pulse2 from "@/assets/pulse-2.pdf.asset.json";

export const IMG = { hero: heroImg.url, cameroon: cameroon.url, mauritania: mauritania.url, morocco: morocco.url, burkina: burkina.url, ghana: ghana.url };
export const storyImg = (k: string): string => (IMG as Record<string, string>)[k] ?? IMG.hero;
export const PULSE: Record<string, string> = { "3": pulse3.url, "2": pulse2.url };
