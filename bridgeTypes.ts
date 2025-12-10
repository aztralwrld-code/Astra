export type BridgeMessage =
  | { type: "READY" }
  | { type: "SNAPSHOT_RESULT"; dataUri: string };

export type OutgoingMessage =
  | { type: "SET_PRESET"; name: string }
  | { type: "SNAPSHOT_REQUEST" };