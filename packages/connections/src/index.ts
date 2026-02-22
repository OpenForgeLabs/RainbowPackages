import fs from "fs/promises";
import os from "os";
import path from "path";

export type ConnectionPayload = Record<string, unknown> & { name?: string };

export type StoredConnection = {
  name: string;
  payload: ConnectionPayload;
  createdAt: string;
  updatedAt: string;
};

export type ConnectionStore = {
  plugins: Record<string, Record<string, StoredConnection>>;
};

const getStorePath = () => {
  const override = process.env.RAINBOW_CONNECTIONS_PATH;
  if (override) {
    return override;
  }
  return path.join(os.homedir(), ".rainbow", "connections.json");
};

const ensureStoreDir = async (filePath: string) => {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
};

const readStore = async (): Promise<ConnectionStore> => {
  const filePath = getStorePath();
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as ConnectionStore;
    return { plugins: parsed.plugins ?? {} };
  } catch {
    return { plugins: {} };
  }
};

const writeStore = async (store: ConnectionStore) => {
  const filePath = getStorePath();
  await ensureStoreDir(filePath);
  const tempFile = `${filePath}.tmp`;
  await fs.writeFile(tempFile, JSON.stringify(store, null, 2), "utf8");
  await fs.rename(tempFile, filePath);
};

const sanitizePayload = (payload: ConnectionPayload): ConnectionPayload => {
  const sanitized: ConnectionPayload = { ...payload };
  delete sanitized.password;
  delete sanitized.connectionString;
  return sanitized;
};

export const listConnections = async (pluginId: string) => {
  const store = await readStore();
  const items = Object.values(store.plugins?.[pluginId] ?? {});
  return items.map((item) => sanitizePayload(item.payload));
};

export const upsertConnection = async (
  pluginId: string,
  payload: ConnectionPayload,
) => {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  if (!name) {
    throw new Error("Connection name is required.");
  }

  const store = await readStore();
  const pluginBucket = store.plugins[pluginId] ?? {};
  const now = new Date().toISOString();
  const existing = pluginBucket[name];
  pluginBucket[name] = {
    name,
    payload: { ...payload, name },
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  store.plugins[pluginId] = pluginBucket;
  await writeStore(store);
  return sanitizePayload(pluginBucket[name].payload);
};

export const resolveConnection = async (
  pluginId: string,
  connectionName: string,
) => {
  const store = await readStore();
  const record = store.plugins?.[pluginId]?.[connectionName];
  if (!record) {
    return null;
  }
  return record.payload;
};

export const exportConnections = async (): Promise<ConnectionStore> => {
  return readStore();
};

export const importConnections = async (
  incoming: ConnectionStore,
  mode: "merge" | "replace" = "merge",
) => {
  const nextStore =
    mode === "replace" ? { plugins: {} } : await readStore();
  const incomingPlugins = incoming?.plugins ?? {};
  for (const [pluginId, connections] of Object.entries(incomingPlugins)) {
    const bucket = nextStore.plugins[pluginId] ?? {};
    for (const [name, record] of Object.entries(connections ?? {})) {
      bucket[name] = record;
    }
    nextStore.plugins[pluginId] = bucket;
  }
  await writeStore(nextStore);
  return nextStore;
};
