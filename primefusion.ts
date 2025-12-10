import { astraMobileConfig, PrimefusionProfile } from "../config/astraMobileConfig";
import { useStore } from "../state/store";

export type PrimefusionResult = {
  bestScore: number;
  passesRun: number;
  bestSnapshot?: string;
};

export type CaptureSnapshotFn = () => Promise<string | undefined>;

/**
 * Primefusion logic:
 * - profile: "eco" | "standard" | "burst"
 * - captureSnapshot: callback that sends SNAPSHOT_REQUEST and resolves to a dataUri
 */
export async function runPrimefusion(
  profile: PrimefusionProfile,
  captureSnapshot: CaptureSnapshotFn
): Promise<PrimefusionResult> {
  const profileConfig = astraMobileConfig.primefusionProfiles[profile];
  const passes = profileConfig.passes;

  let bestScore = 0;
  let bestSnapshot: string | undefined;

  for (let i = 0; i < passes; i++) {
    const snapshot = await captureSnapshot();
    if (!snapshot) {
      continue;
    }
    const score = 0.7 + Math.random() * 0.3;
    if (score > bestScore) {
      bestScore = score;
      bestSnapshot = snapshot;
    }
  }

  if (bestSnapshot) {
    useStore.getState().setLastSnapshot(bestSnapshot);
  }

  return {
    bestScore,
    passesRun: passes,
    bestSnapshot
  };
}