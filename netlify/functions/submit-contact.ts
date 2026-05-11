/**
 * POST /.netlify/functions/submit-contact
 *
 * Receives a contact-form submission from the public Contact page
 * and writes it to the "Contact Messages" table.
 *
 * Required env var:
 *   AIRTABLE_API_KEY — Personal Access Token with `data.records:write`
 *                      scope for base appVy2A1m3I7fUAAO
 */

const BASE_ID = "appVy2A1m3I7fUAAO";
const TABLE_ID = "tblCuEVsyzrS34DLt"; // Contact Messages

const ALLOWED_SUBJECTS = new Set([
  "General Inquiry",
  "Chapter Support",
  "Brand Partnership",
  "Press & Media",
  "Other",
]);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler = async (event: any) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.AIRTABLE_API_KEY;
  if (!apiKey) {
    console.error("Missing AIRTABLE_API_KEY env var");
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Server is not configured" }),
    };
  }

  let body: any;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Invalid JSON body" }),
    };
  }

  const { name, email, subject, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  const safeSubject = ALLOWED_SUBJECTS.has(subject) ? subject : "General Inquiry";

  const fields = {
    Name: name,
    Email: email,
    Subject: safeSubject,
    Message: message,
    Status: "New",
  };

  const airtableUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

  try {
    const res = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Airtable error", res.status, errText);
      return {
        statusCode: 502,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Could not send your message. Please try again or email hello@reachnationals.org." }),
      };
    }

    const data = await res.json();
    return {
      statusCode: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true, id: data.id }),
    };
  } catch (err) {
    console.error("Submission failed:", err);
    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Unexpected error. Please try again." }),
    };
  }
};
