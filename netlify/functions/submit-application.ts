/**
 * POST /.netlify/functions/submit-application
 *
 * Receives a REACH application from the public Join page and writes
 * it to the right Airtable table based on the `path` field.
 *
 * Required env var:
 *   AIRTABLE_API_KEY — Personal Access Token with `data.records:write`
 *                      scope for base appVy2A1m3I7fUAAO
 */

const BASE_ID = "appVy2A1m3I7fUAAO";

const TABLE_IDS = {
  join:     "tblcEpZFZLQ709iwK", // Join Existing Chapter
  start:    "tbl1KXP58BteArMIX", // Start a Chapter
  regional: "tblJfJ1Iwsz9b38DJ", // Pioneer City Chapter
} as const;

type Path = keyof typeof TABLE_IDS;

const ROLE_MAP: Record<string, string> = {
  creator:    "Creator / on-camera",
  strategist: "Strategist / social manager",
  editor:     "Editor / videographer",
  designer:   "Designer",
  founder:    "Founder / entrepreneur",
  other:      "Other",
};

const CITY_MAP: Record<string, string> = {
  la:      "Los Angeles, CA",
  ny:      "New York, NY",
  miami:   "Miami, FL",
  bay:     "Bay Area, CA",
  chicago: "Chicago, IL",
  other:   "Other",
};

const HOURS_MAP: Record<string, string> = {
  "under-5":  "Under 5 hours / week",
  "5-10":     "5–10 hours / week",
  "10-15":    "10–15 hours / week",
  "15-plus":  "15+ hours / week",
};

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

  const { path, name, email, role, why } = body;

  if (!path || !(path in TABLE_IDS)) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Invalid path" }),
    };
  }

  if (!name || !email || !role || !why) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Missing required fields" }),
    };
  }

  // Map form values → Airtable choice names
  const fields: Record<string, string | undefined> = {
    Name: name,
    Email: email,
    Phone: body.phone || undefined,
    Role: ROLE_MAP[role] || "Other",
    "Social Handles": body.socials || undefined,
    "Portfolio URL": body.portfolio || undefined,
    Status: "New",
  };

  if (path === "join") {
    fields.University = body.university;
    fields["Grad Year"] = body.gradYear;
    fields["Why REACH"] = why;
  } else if (path === "start") {
    fields.University = body.university;
    fields["Grad Year"] = body.gradYear;
    fields["Weekly Time Commitment"] = body.weeklyHours ? HOURS_MAP[body.weeklyHours] : undefined;
    fields["Why Start REACH At Your School"] = why;
  } else if (path === "regional") {
    fields.City = body.city ? CITY_MAP[body.city] : undefined;
    fields["Weekly Time Commitment"] = body.weeklyHours ? HOURS_MAP[body.weeklyHours] : undefined;
    fields["Why Pioneer A City Chapter"] = why;
  }

  // Strip empty/undefined values so Airtable doesn't reject
  const cleanFields = Object.fromEntries(
    Object.entries(fields).filter(([, v]) => v !== undefined && v !== ""),
  );

  const tableId = TABLE_IDS[path as Path];
  const airtableUrl = `https://api.airtable.com/v0/${BASE_ID}/${tableId}`;

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
        body: JSON.stringify({ error: "Could not save your application. Please try again or email hello@reachnationals.org." }),
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
