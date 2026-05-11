/**
 * POST /.netlify/functions/submit-summit
 *
 * Receives summit interest (sponsor and/or speaker) from the public
 * Summit page and writes it to the "Summit Interest" table.
 *
 * Required env var:
 *   AIRTABLE_API_KEY — Personal Access Token with `data.records:write`
 *                      scope for base appVy2A1m3I7fUAAO
 */

const BASE_ID = "appVy2A1m3I7fUAAO";
const TABLE_ID = "tblnMp6DeQmtEDXpc"; // Summit Interest

const SPONSOR_PACKAGES = new Set([
  "Under $10K",
  "$10K",
  "$25K",
  "$50K",
  "$100K",
  "$250K",
  "$500K (Presented By)",
]);

const SPEAKER_STAGES = new Set(["Main Stage", "Workshop Stage"]);

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

  const {
    name,
    title,
    company,
    email,
    phone,
    socials,
    website,
    submitterType,
    submittingOnBehalfOf,
    interestSponsor,
    interestSpeaker,
    sponsorshipPackage,
    speakerStage,
    workshopName,
    workshopTopic,
    workshopCoLeaders,
    openToMainStage,
    speakerTermsAccepted,
    notes,
  } = body;

  if (!name || !email) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Name and email are required." }),
    };
  }

  const VALID_SUBMITTER_TYPES = new Set(["Brand / Agency / Industry", "Creator / Celebrity / Talent"]);
  const safeSubmitterType = VALID_SUBMITTER_TYPES.has(submitterType) ? submitterType : undefined;
  const isBrandSide = safeSubmitterType === "Brand / Agency / Industry";

  if (isBrandSide && (!title || !company)) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Title and company are required for brand-side submitters." }),
    };
  }

  if (!interestSponsor && !interestSpeaker) {
    return {
      statusCode: 400,
      headers: corsHeaders,
      body: JSON.stringify({ error: "Pick at least one interest: sponsor or speaker." }),
    };
  }

  const interestTags: string[] = [];
  if (interestSponsor) interestTags.push("Sponsor");
  if (interestSpeaker) interestTags.push("Speaker");

  const fields: Record<string, any> = {
    Name: name,
    Title: title || undefined,
    Company: company || undefined,
    Email: email,
    Phone: phone || undefined,
    "LinkedIn / Socials": socials || undefined,
    "Company Website": website || undefined,
    "Submitter Type": safeSubmitterType,
    "Submitting On Behalf Of": submittingOnBehalfOf || undefined,
    "Interest Type": interestTags,
    Notes: notes || undefined,
    Status: "New",
  };

  if (interestSponsor && sponsorshipPackage && SPONSOR_PACKAGES.has(sponsorshipPackage)) {
    fields["Sponsorship Package"] = sponsorshipPackage;
  }

  if (interestSpeaker) {
    // Every speaker submission is a workshop pitch by default. Main stage is curated.
    fields["Speaker Stage"] = "Workshop Stage";
    fields["Workshop Name"] = workshopName || undefined;
    fields["Workshop Topic"] = workshopTopic || undefined;
    fields["Workshop Co-Leaders"] = workshopCoLeaders || undefined;
    fields["Open To Main Stage"] = !!openToMainStage;
    fields["Speaker Terms Acknowledged"] = !!speakerTermsAccepted;
  }

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
        body: JSON.stringify({ error: "Could not save your submission. Please try again or email summit@reachnationals.org." }),
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
