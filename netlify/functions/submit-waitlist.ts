/**
 * POST /.netlify/functions/submit-waitlist
 *
 * Captures early-access ticket waitlist signups from the Summit page.
 * Writes to the "Summit Ticket Waitlist" table.
 *
 * Required env var:
 *   AIRTABLE_API_KEY — Personal Access Token with `data.records:write`
 *                      scope for base appVy2A1m3I7fUAAO
 */

const BASE_ID = "appVy2A1m3I7fUAAO";
const TABLE_ID = "tblbrSS1XqaWKKOFg"; // Summit Ticket Waitlist

const ALLOWED_AUDIENCE = new Set(["Student", "Creator", "Brand", "Industry"]);

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

  const { name, email, audience, notes } = body;

  if (!name || !email || !audience) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Name, email, and audience are required." }),
    };
  }

  if (!ALLOWED_AUDIENCE.has(audience)) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Invalid audience selection." }),
    };
  }

  const fields: Record<string, any> = {
    Name: name,
    Email: email,
    "Audience Type": audience,
    Notes: notes || undefined,
    Status: "New",
  };

  const cleanFields = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v !== undefined && v !== ""),
  );

  const airtableUrl = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID}`;

  try {
    const res = await fetch(airtableUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: cleanFields }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Airtable error", res.status, errText);
      return {
        statusCode: 502,
        headers: corsHeaders,
        body: JSON.stringify({ error: "Could not save your spot. Please try again or email summit@reachnationals.org." }),
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
