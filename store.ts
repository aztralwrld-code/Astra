import { create } from "zustand";
import { astraMobileConfig } from "../config/astraMobileConfig";

type StoreState = {
  config: typeof astraMobileConfig;
  viewportReady: boolean;
  lastSnapshot?: string;
  setViewportReady: (ready: boolean) => void;
  setLastSnapshot: (dataUri: string | undefined) => void;
};

export const useStore = create<StoreState>(set => ({
  config: astraMobileConfig,
  viewportReady: false,
  lastSnapshot: undefined,
  setViewportReady: (viewportReady: boolean) => set({ viewportReady }),
  setLastSnapshot: (lastSnapshot: string | undefined) => set({ lastSnapshot })
}));