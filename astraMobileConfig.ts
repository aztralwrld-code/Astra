export const astraMobileConfig = {
  presets: ["temple_mini", "neon_lab_compact", "void_pocket_scene"] as const,
  primefusionProfiles: {
    eco: { passes: 2 },
    standard: { passes: 4 },
    burst: { passes: 6 }
  },
  oneTap: {
    theme: "Astra Awakening",
    outputs: {
      tiktoks: 8,
      reels: 6,
      images: 12,
      thumbs: 4
    }
  }
};

export type PresetName = (typeof astraMobileConfig.presets)[number];
export type PrimefusionProfile = keyof typeof astraMobileConfig.primefusionProfiles;