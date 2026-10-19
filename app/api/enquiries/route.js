import { createSign } from "node:crypto";
import { courseDetails } from "@/lib/courses";

export const runtime = "nodejs";

const allowedCourses = new Set(["Not sure yet", ...courseDetails.map((course) => course.title)]);

function encodeBase64Url(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

async function getGoogleAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const unsignedToken = `${encodeBase64Url({ alg: "RS256", typ: "JWT" })}.${encodeBase64Url({
    iss: email,
    scope: "https://www.googleapis.com/auth/spreadsheets",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  const assertion = `${unsignedToken}.${signer.sign(privateKey).toString("base64url")}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });
  if (!response.ok) throw new Error(`Google authentication failed (${response.status})`);
  const data = await response.json();
  return data.access_token;
}

function clean(value, maxLength) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return Response.json({ error: "Invalid request." }, { status: 415 });
  }

  let submission;
  try {
    const body = await request.text();
    if (body.length > 10000) return Response.json({ error: "Request is too large." }, { status: 413 });
    submission = JSON.parse(body);
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!submission || typeof submission !== "object" || Array.isArray(submission)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // A hidden field catches basic automated submissions without disturbing visitors.
  if (submission.website) return Response.json({ ok: true });

  const name = clean(submission.name, 120);
  const phone = clean(submission.phone, 40);
  const location = clean(submission.location, 120);
  const course = clean(submission.course, 200);
  const message = clean(submission.message, 2000);

  if (!name || !location || !/^[+\d][\d\s()+.-]{6,39}$/.test(phone) || !allowedCourses.has(course)) {
    return Response.json({ error: "Please check your name, phone number, location and course." }, { status: 400 });
  }

  const { GOOGLE_SHEET_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY } = process.env;
  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY) {
    console.error("Enquiry sheet is not configured.");
    return Response.json({ error: "The enquiry form is temporarily unavailable. Please try again later." }, { status: 503 });
  }

  try {
    const token = await getGoogleAccessToken(
      GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
    );
    const range = encodeURIComponent("Enquiries!A:G");
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${encodeURIComponent(GOOGLE_SHEET_ID)}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({ values: [[new Date().toISOString(), name, phone, location, course, message, "Contact form"]] }),
        cache: "no-store",
      },
    );
    if (!response.ok) throw new Error(`Google Sheets append failed (${response.status})`);
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Enquiry submission failed:", error);
    return Response.json({ error: "We couldn't send your enquiry. Please try again." }, { status: 502 });
  }
}
