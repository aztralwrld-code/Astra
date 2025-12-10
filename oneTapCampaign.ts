import { useStore } from "../state/store";

export type OneTapAssetSummary = {
  theme: string;
  tiktoks: number;
  reels: number;
  images: number;
  thumbs: number;
};

export function runOneTapCampaign(): OneTapAssetSummary {
  const config = useStore.getState().config.oneTap;
  const { theme, outputs } = config;

  console.log(
    "[OneTap] Generated",
    outputs.tiktoks,
    "TikToks,",
    outputs.reels,
    "Reels,",
    outputs.images,
    "images,",
    outputs.thumbs,
    "thumbnails (mock). Theme:",
    theme
  );

  return {
    theme,
    tiktoks: outputs.tiktoks,
    reels: outputs.reels,
    images: outputs.images,
    thumbs: outputs.thumbs
  };
}