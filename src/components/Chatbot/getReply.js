import { companyInfo } from "../../companyinfo.js";

function portfolioReply(question) {
  const sections = [
    [/\b(skill\w*|technolog\w*|stack|languages?|react)\b/i, "Skills"],
    [/\b(project\w*|built|portfolio)\b/i, "Projects"],
    [/\b(educat\w*|degree|study|studied|college)\b/i, "Education"],
    [/\b(about|who|introduce)\b/i, "Introduction"],
  ];
  if (/\b(contact|email|hire|reach|linkedin|github|phone)\b/i.test(question)) {
    return companyInfo.split("- Email:")[1].split("Note:")[0].replace(/^/, "Email:").trim();
  }
  for (const [pattern, heading] of sections) {
    if (pattern.test(question)) {
      return companyInfo.split(heading + ":")[1].split(/\n(?:[A-Z][a-z]+:|- Email:)/)[0].trim();
    }
  }
  if (/^\s*(hi|hello|hey)\b/i.test(question)) {
    return "Hi! I can tell you about Althaf’s skills, projects, education, or how to contact him.";
  }
  return "I can answer questions about Althaf’s portfolio here. Try “What projects has Althaf built?” or “How can I contact him?”";
}

export async function getReply(history) {
  const question = history.at(-1).text;
  try {
    const response = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-12) }),
      signal: AbortSignal.timeout(12000),
    });
    if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
      const data = await response.json();
      if (typeof data.text === "string" && data.text.trim()) return data.text.trim();
    }
  } catch {
    // The portfolio can also answer common questions offline.
  }
  return portfolioReply(question);
}
