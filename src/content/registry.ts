import { client as templateClient } from "./clients/template";
import { client as vnLlydClient } from "./clients/vn-llyd";
import { client as republikWorksClient } from "./clients/republik-works";
import { client as creativeJeddyClient } from "./clients/creative-jeddy";
import type { ClientDefinition } from "./types";

export const CLIENT_IDS = [
  "template",
  "vn-llyd",
  "republik-works",
  "creative-jeddy",
] as const;
export type ClientId = (typeof CLIENT_IDS)[number];

const registry: Record<ClientId, ClientDefinition> = {
  template: templateClient,
  "vn-llyd": vnLlydClient,
  "republik-works": republikWorksClient,
  "creative-jeddy": creativeJeddyClient,
};

export function getClientId(): ClientId {
  const raw = process.env.NEXT_PUBLIC_CLIENT;
  if (raw && raw in registry) {
    return raw as ClientId;
  }
  return "template";
}

export function getClientDefinition(id: ClientId = getClientId()): ClientDefinition {
  return registry[id];
}

export function listClients(): ClientId[] {
  return [...CLIENT_IDS];
}

/** Register new clients here after running scripts/new-client.sh */
export function registerClient(id: ClientId, definition: ClientDefinition) {
  registry[id] = definition;
}
