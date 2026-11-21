import { companyInfo } from "../../src/companyinfo.js";

export default async function chat(request) {
  if (request.method !== "POST") return new Response(null, { status: 405 });
  const key = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL;
  if (!key || !model) return new Response(null, { status: 503 });

  try {
    const { messages } = await request.json();
    if (!Array.isArray(messages) || !messages.length || messages.length > 12 ||
        !messages.every(m => ["model", "user"].includes(m?.role) && typeof m.text === "string" && m.text.length <= 4000)) {
      return new Response(null, { status: 400 });
    }
    const start = messages.findIndex(m => m.role === "user");
    if (start === -1) return new Response(null, { status: 400 });
    const upstream = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: "Answer questions about this portfolio using these facts:\n" + companyInfo }] },
          contents: messages.slice(start).map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        }),
        signal: AbortSignal.timeout(10000),
      }
    );
    if (!upstream.ok) return new Response(null, { status: 502 });
    const data = await upstream.json();
    const text = data.candidates?.[0]?.content?.parts?.map(part => part.text || "").join("").trim();
    return text ? Response.json({ text }) : new Response(null, { status: 502 });
  } catch {
    return new Response(null, { status: 502 });
  }
}
