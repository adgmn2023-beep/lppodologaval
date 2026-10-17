import type { GbpProvider } from "./provider";
import { mockGbpProvider } from "./providers/mock";
import { manualGbpProvider } from "./providers/manual";

const providers: Record<string, GbpProvider> = {
  manual: manualGbpProvider,
  mock: mockGbpProvider,
};

const providerName = process.env.GBP_PROVIDER || "manual";
const provider = providers[providerName];

if (!provider) {
  throw new Error(
    `GBP_PROVIDER "${providerName}" is not supported. Available providers: ${Object.keys(providers).join(", ")}.`,
  );
}

export const gbpProvider = provider;
export const isMockGbpProvider = providerName === "mock";

export type { GbpProvider } from "./provider";
export type { GbpPost, GbpReview, GbpSummary } from "./types";
