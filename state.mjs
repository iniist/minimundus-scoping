import { getStore } from "@netlify/blobs";

// Speichert den kompletten Checklisten-Zustand als ein JSON-Objekt in Netlify Blobs.
export default async (req) => {
  const store = getStore("minimundus-scoping");

  if (req.method === "GET") {
    const data = await store.get("state", { type: "json" });
    return Response.json(data || {});
  }

  if (req.method === "PUT" || req.method === "POST") {
    const body = await req.json();
    await store.setJSON("state", body);
    return Response.json({ ok: true });
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config = { path: "/api/state" };
