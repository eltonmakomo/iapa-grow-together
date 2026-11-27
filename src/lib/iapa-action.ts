import { assetUrl } from "@/lib/asset-url";
import photo1 from "@/assets/action/ACB00683.jpg.asset.json";
import photo2 from "@/assets/action/DSC09957.jpg.asset.json";
import photo3 from "@/assets/action/ACB00321.jpg.asset.json";
import photo4 from "@/assets/action/ACB00552.jpg.asset.json";
import photo5 from "@/assets/action/ACB00514.jpg.asset.json";
import photo6 from "@/assets/action/DSC09936.jpg.asset.json";

export const ACTION_PHOTOS = [photo1, photo2, photo3, photo4, photo5, photo6].map((photo) => assetUrl(photo.url));